document.addEventListener("DOMContentLoaded", () => {
  const KEY_COMPLETED_LESSONS = "hibig_completed_lessons";
  const KEY_COMPLETED_MISSIONS = "hibig_completed_missions";
  const KEY_COMPLETED_DATES = "hibig_completed_dates";
  const KEY_DAY_MEMOS = "hibig_day_memos";
  const KEY_PHRASAL_NOTES = "hibig_phrasal_notes";
  const KEY_PRON_NOTES = "hibig_pron_notes";
  const KEY_THEME = "hibig_theme";
  const KEY_STREAK_DATES = "hibig_streak_dates";
  const KEY_RECORDINGS = "hibig_day_recordings";

  let completedIds = new Set(JSON.parse(localStorage.getItem(KEY_COMPLETED_LESSONS) || "[]"));
  let completedMissions = new Set(JSON.parse(localStorage.getItem(KEY_COMPLETED_MISSIONS) || "[]"));
  let completedDates = JSON.parse(localStorage.getItem(KEY_COMPLETED_DATES) || "{}");
  let dayMemos = JSON.parse(localStorage.getItem(KEY_DAY_MEMOS) || "{}");
  let recordings = JSON.parse(localStorage.getItem(KEY_RECORDINGS) || "{}");
  let streakDates = new Set(JSON.parse(localStorage.getItem(KEY_STREAK_DATES) || "[]"));
  let currentTheme = localStorage.getItem(KEY_THEME) || "light";

  let mediaRecorder = null;
  let audioChunks = [];

  const themeToggleBtn = document.getElementById("theme-toggle-btn");
  const themeIcon = document.getElementById("theme-icon");
  const pwaInstallBtn = document.getElementById("pwa-install-btn");
  const progressBarFill = document.getElementById("progress-bar-fill");
  const progressPercent = document.getElementById("progress-percent");
  const completedCountEl = document.getElementById("completed-count");
  const totalCountEl = document.getElementById("total-count");
  const remainingCountText = document.getElementById("remaining-count-text");
  const todayDayTitle = document.getElementById("today-day-title");
  const todayContainer = document.getElementById("today-lesson-container");
  const streakBadge = document.getElementById("streak-badge");

  const searchInput = document.getElementById("search-input");
  const searchClearBtn = document.getElementById("search-clear-btn");
  const expandAllBtn = document.getElementById("expand-all-btn");
  const collapseAllBtn = document.getElementById("collapse-all-btn");
  const curriculumContainer = document.getElementById("curriculum-container");

  const tabPhrasalBtn = document.getElementById("tab-phrasal-btn");
  const tabPronBtn = document.getElementById("tab-pron-btn");
  const phrasalBox = document.getElementById("phrasal-note-box");
  const pronBox = document.getElementById("pron-note-box");
  const phrasalInput = document.getElementById("phrasal-input");
  const pronInput = document.getElementById("pron-input");
  const noteStatus = document.getElementById("note-status");

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    if (themeIcon) themeIcon.textContent = theme === "dark" ? "☀️" : "🌙";
    localStorage.setItem(KEY_THEME, theme);
  }
  applyTheme(currentTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      currentTheme = currentTheme === "light" ? "dark" : "light";
      applyTheme(currentTheme);
    });
  }

  const allLessons = [];
  if (typeof CURRICULUM_DATA !== "undefined" && Array.isArray(CURRICULUM_DATA)) {
    CURRICULUM_DATA.forEach(dayItem => {
      if (dayItem.lessons && Array.isArray(dayItem.lessons)) {
        dayItem.lessons.forEach(lesson => {
          allLessons.push({ ...lesson, day: dayItem.day, goal: dayItem.goal });
        });
      }
    });
  }

  function updateStreak() {
    if (!streakBadge) return;
    const today = new Date().toISOString().split("T")[0];
    let streak = 0;

    if (streakDates.has(today)) {
      streak = 1;
      let checkDate = new Date();
      while (true) {
        checkDate.setDate(checkDate.getDate() - 1);
        const dateStr = checkDate.toISOString().split("T")[0];
        if (streakDates.has(dateStr)) {
          streak++;
        } else {
          break;
        }
      }
    }
    streakBadge.textContent = `🔥 ${streak}일 연속`;
  }

  function formatDateDisplay(isoDateStr) {
    if (!isoDateStr) return "";
    const [year, month, day] = isoDateStr.split("-");
    return `${year}년 ${parseInt(month, 10)}월 ${parseInt(day, 10)}일`;
  }

  function addDays(dateStr, days) {
    const d = new Date(dateStr);
    d.setDate(d.getDate() + days);
    const m = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${m}.${day}`;
  }

  function isSameDay(dateStr, addN) {
    const target = new Date(dateStr);
    target.setDate(target.getDate() + addN);
    const today = new Date();
    return target.getFullYear() === today.getFullYear() &&
           target.getMonth() === today.getMonth() &&
           target.getDate() === today.getDate();
  }

  function renderCurriculum(filterQuery = "") {
    if (!curriculumContainer) return;
    curriculumContainer.innerHTML = "";
    const query = filterQuery.trim().toLowerCase();

    if (typeof CURRICULUM_DATA === "undefined" || !Array.isArray(CURRICULUM_DATA)) {
      curriculumContainer.innerHTML = `<div class="card" style="text-align:center; color:var(--text-secondary);">data.js 데이터를 불러올 수 없습니다.</div>`;
      return;
    }

    CURRICULUM_DATA.forEach(dayData => {
      const filteredLessons = dayData.lessons.filter(l => 
        l.title.toLowerCase().includes(query) || (l.id && l.id.toLowerCase().includes(query))
      );

      const isMatchingDay = dayData.day.toLowerCase().includes(query) || dayData.goal.toLowerCase().includes(query);
      if (query !== "" && !isMatchingDay && filteredLessons.length === 0) return;

      const dayCard = document.createElement("div");
      dayCard.className = "level-group";
      dayCard.dataset.day = dayData.day;

      const dayCompletedCount = dayData.lessons.filter(l => completedIds.has(l.id)).length;
      const isDayFullyDone = dayCompletedCount === dayData.lessons.length && dayData.lessons.length > 0;

      // 1. 해당 Day 강의가 모두 완료되면 자동으로 YYYY-MM-DD 저장
      if (isDayFullyDone && !completedDates[dayData.day]) {
        const isoToday = new Date().toISOString().split("T")[0];
        completedDates[dayData.day] = isoToday;
        localStorage.setItem(KEY_COMPLETED_DATES, JSON.stringify(completedDates));
      }

      const completedDateVal = completedDates[dayData.day] || "";

      // 2. 날짜 표시 및 수정을 위한 HTML 구조
      const dateDisplayHtml = completedDateVal
        ? `<span class="study-date-text">📅 ${formatDateDisplay(completedDateVal)} 공부 완료</span>`
        : `<span class="study-date-text uncompleted">📅 공부 미완료</span>`;

      let missionsHtml = '';
      if (dayData.mission && dayData.mission.length > 0) {
        missionsHtml = `
          <div class="day-section-title">🎯 오늘의 미션</div>
          <div class="mission-list">
            ${dayData.mission.map((m, idx) => {
              const mId = `${dayData.day}_m${idx}`;
              const isChecked = completedMissions.has(mId);
              return `
                <label class="mission-item ${isChecked ? 'completed' : ''}">
                  <input type="checkbox" class="mission-check" data-mid="${mId}" ${isChecked ? 'checked' : ''}>
                  <span>${m}</span>
                </label>
              `;
            }).join('')}
          </div>
        `;
      }

      let reviewHtml = '';
      if (completedDateVal) {
        const d1 = addDays(completedDateVal, 1);
        const d3 = addDays(completedDateVal, 3);
        const d7 = addDays(completedDateVal, 7);
        reviewHtml = `
          <div class="day-section-title" style="margin-top:6px;">🔄 자동 계산 복습 일정</div>
          <div class="review-list">
            <span class="review-tag ${isSameDay(completedDateVal, 1) ? 'highlight-review' : ''}">+1일 복습: ${d1}</span>
            <span class="review-tag ${isSameDay(completedDateVal, 3) ? 'highlight-review' : ''}">+3일 복습: ${d3}</span>
            <span class="review-tag ${isSameDay(completedDateVal, 7) ? 'highlight-review' : ''}">+7일 복습: ${d7}</span>
          </div>
        `;
      } else if (dayData.review && dayData.review.length > 0) {
        reviewHtml = `
          <div class="day-section-title" style="margin-top:6px;">🔄 권장 복습 지침</div>
          <div class="review-list">
            ${dayData.review.map(r => `<span class="review-tag">📌 ${r}</span>`).join('')}
          </div>
        `;
      }

      const savedAudioData = recordings[dayData.day] || "";
      const recordingUiHtml = `
        <div class="day-section-title" style="margin-top:6px;">🎙️ 내 발음 녹음 훈련</div>
        <div class="recorder-box" data-day="${dayData.day}">
          <button class="rec-btn record-toggle-btn" data-day="${dayData.day}">🔴 녹음 시작</button>
          <span class="rec-status-text" data-day="${dayData.day}">${savedAudioData ? "녹음본 보유 중" : "녹음 없음"}</span>
          <audio class="audio-player ${savedAudioData ? '' : 'hidden'}" controls src="${savedAudioData}" data-day="${dayData.day}"></audio>
        </div>
      `;

      dayCard.innerHTML = `
        <div class="level-header">
          <div class="level-title-area">
            <h3>${dayData.day}: ${dayData.goal}</h3>
            <p>⏱️ 시간: ${dayData.studyTime}</p>
            <div class="study-date-container">
              ${dateDisplayHtml}
              <input type="date" class="date-picker-input" data-day="${dayData.day}" value="${completedDateVal}" title="공부 완료 날짜 직접 수정">
            </div>
          </div>
          <div class="level-meta">
            <span class="badge">${dayCompletedCount}/${dayData.lessons.length}강</span>
            <span class="arrow-icon">▼</span>
          </div>
        </div>

        <div class="day-body">
          ${missionsHtml}

          <div class="day-section-title" style="margin-top:4px;">📚 강의 목록</div>
          <div class="lessons-list"></div>

          ${reviewHtml}
          ${recordingUiHtml}

          <div class="day-memo-section" style="margin-top:6px;">
            <div class="day-section-title">📝 오늘 학습 메모</div>
            <textarea class="day-memo-input" data-day="${dayData.day}" placeholder="${dayData.memoPlaceholder || '오늘 배운 내용을 간단히 기록해보세요.'}"></textarea>
          </div>
        </div>
      `;

      const lessonsList = dayCard.querySelector(".lessons-list");
      const targetLessons = query !== "" && !isMatchingDay ? filteredLessons : dayData.lessons;

      targetLessons.forEach(lesson => {
        const isChecked = completedIds.has(lesson.id);
        const lessonEl = document.createElement("div");
        lessonEl.className = `lesson-item ${isChecked ? "completed" : ""}`;
        lessonEl.innerHTML = `
          <label class="checkbox-container">
            <input type="checkbox" class="lesson-check" data-id="${lesson.id}">
            <span class="checkmark"></span>
          </label>
          <div class="lesson-info">
            <div class="lesson-title">${lesson.title}</div>
            <div class="lesson-duration">⏱️ ${lesson.duration}</div>
          </div>
        `;
        const chk = lessonEl.querySelector("input");
        chk.checked = isChecked;
        lessonsList.appendChild(lessonEl);
      });

      const memoInput = dayCard.querySelector(".day-memo-input");
      if (dayMemos[dayData.day]) {
        memoInput.value = dayMemos[dayData.day];
      }
      memoInput.addEventListener("input", (e) => {
        dayMemos[dayData.day] = e.target.value;
        localStorage.setItem(KEY_DAY_MEMOS, JSON.stringify(dayMemos));
      });

      // 날짜 선택(Date Picker) 변경 시 즉시 반영 및 저장
      const datePicker = dayCard.querySelector(".date-picker-input");
      datePicker.addEventListener("change", (e) => {
        const newDate = e.target.value;
        if (newDate) {
          completedDates[dayData.day] = newDate;
        } else {
          delete completedDates[dayData.day];
        }
        localStorage.setItem(KEY_COMPLETED_DATES, JSON.stringify(completedDates));
        renderCurriculum(searchInput ? searchInput.value : "");
        updateProgress();
      });

      // 날짜 선택기 클릭 시 아코디언 토글 방지
      datePicker.addEventListener("click", (e) => e.stopPropagation());

      const recBtn = dayCard.querySelector(".record-toggle-btn");
      recBtn.addEventListener("click", () => toggleRecording(dayData.day, recBtn, dayCard));

      dayCard.querySelector(".day-body").addEventListener("click", (e) => {
        e.stopPropagation();
      });

      const header = dayCard.querySelector(".level-header");
      header.addEventListener("click", () => {
        dayCard.classList.toggle("collapsed");
      });

      curriculumContainer.appendChild(dayCard);
    });

    if (curriculumContainer.children.length === 0) {
      curriculumContainer.innerHTML = `<div class="card" style="text-align:center; color:var(--text-secondary);">검색 결과가 없습니다.</div>`;
    }
  }

  async function toggleRecording(day, btnEl, dayCard) {
    const statusText = dayCard.querySelector(`.rec-status-text[data-day="${day}"]`);
    const audioPlayer = dayCard.querySelector(`.audio-player[data-day="${day}"]`);

    if (mediaRecorder && mediaRecorder.state === "recording") {
      mediaRecorder.stop();
      btnEl.textContent = "🔴 녹음 시작";
      btnEl.classList.remove("recording");
      statusText.textContent = "녹음 저장 중...";
      return;
    }

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorder = new MediaRecorder(stream);
      audioChunks = [];

      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) audioChunks.push(e.data);
      };

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunks, { type: "audio/webm" });
        const reader = new FileReader();
        reader.readAsDataURL(audioBlob);
        reader.onloadend = () => {
          const base64Audio = reader.result;
          recordings[day] = base64Audio;
          localStorage.setItem(KEY_RECORDINGS, JSON.stringify(recordings));

          audioPlayer.src = base64Audio;
          audioPlayer.classList.remove("hidden");
          statusText.textContent = "녹음 완료 (자동 저장됨)";
        };

        stream.getTracks().forEach(track => track.stop());
      };

      mediaRecorder.start();
      btnEl.textContent = "⏹️ 녹음 중지";
      btnEl.classList.add("recording");
      statusText.textContent = "음성 녹음 진행 중...";

    } catch (err) {
      alert("마이크 사용 권한이 필요하거나 지원되지 않는 브라우저입니다.");
      console.error(err);
    }
  }

  function updateProgress() {
    const total = allLessons.length;
    const completed = completedIds.size;
    const percent = total === 0 ? 0 : Math.round((completed / total) * 100);

    if (progressBarFill) progressBarFill.style.width = `${percent}%`;
    if (progressPercent) progressPercent.textContent = `${percent}%`;
    if (completedCountEl) completedCountEl.textContent = completed;
    if (totalCountEl) totalCountEl.textContent = total;
    if (remainingCountText) remainingCountText.textContent = `남은 강의: ${total - completed}강`;

    renderTodayLessonAndReview();
    updateStreak();
  }

  function renderTodayLessonAndReview() {
    if (!todayContainer) return;

    const reviewDaysDue = [];
    Object.keys(completedDates).forEach(dayName => {
      const cDate = completedDates[dayName];
      if (isSameDay(cDate, 1) || isSameDay(cDate, 3) || isSameDay(cDate, 7)) {
        reviewDaysDue.push(dayName);
      }
    });

    const nextLesson = allLessons.find(l => !completedIds.has(l.id));

    let reviewAlertHtml = '';
    if (reviewDaysDue.length > 0) {
      reviewAlertHtml = `
        <div class="today-review-alert">
          🔔 <strong>오늘 복습 추천 Day:</strong> ${reviewDaysDue.join(", ")}
        </div>
      `;
    }

    if (!nextLesson) {
      if (todayDayTitle) todayDayTitle.textContent = "🏆 30일 완강 달성!";
      todayContainer.innerHTML = `
        ${reviewAlertHtml}
        <div class="today-item-title" style="color:var(--primary-color); margin-top:6px;">🎉 축하합니다! 30일 완강을 성공적으로 마쳤습니다!</div>
      `;
      return;
    }

    if (todayDayTitle) todayDayTitle.textContent = `🔥 오늘의 추천 학습 (${nextLesson.day})`;
    todayContainer.innerHTML = `
      ${reviewAlertHtml}
      <div class="today-item-title">${nextLesson.title}</div>
      <div class="today-item-meta">
        <span>🎯 목표: ${nextLesson.goal}</span>
        <span>⏱️ ${nextLesson.duration}</span>
      </div>
    `;
  }

  if (curriculumContainer) {
    curriculumContainer.addEventListener("change", (e) => {
      if (e.target.classList.contains("lesson-check")) {
        const lessonId = e.target.dataset.id;
        const lessonItem = e.target.closest(".lesson-item");

        if (e.target.checked) {
          completedIds.add(lessonId);
          if (lessonItem) lessonItem.classList.add("completed");

          const todayStr = new Date().toISOString().split("T")[0];
          streakDates.add(todayStr);
          localStorage.setItem(KEY_STREAK_DATES, JSON.stringify(Array.from(streakDates)));
        } else {
          completedIds.delete(lessonId);
          if (lessonItem) lessonItem.classList.remove("completed");
        }

        localStorage.setItem(KEY_COMPLETED_LESSONS, JSON.stringify(Array.from(completedIds)));
        renderCurriculum(searchInput ? searchInput.value : "");
        updateProgress();
      }

      if (e.target.classList.contains("mission-check")) {
        const mId = e.target.dataset.mid;
        const mItem = e.target.closest(".mission-item");

        if (e.target.checked) {
          completedMissions.add(mId);
          if (mItem) mItem.classList.add("completed");
        } else {
          completedMissions.delete(mId);
          if (mItem) mItem.classList.remove("completed");
        }
        localStorage.setItem(KEY_COMPLETED_MISSIONS, JSON.stringify(Array.from(completedMissions)));
      }
    });
  }

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const val = e.target.value;
      if (searchClearBtn) searchClearBtn.classList.toggle("hidden", val === "");
      renderCurriculum(val);
    });
  }

  if (searchClearBtn) {
    searchClearBtn.addEventListener("click", () => {
      if (searchInput) searchInput.value = "";
      searchClearBtn.classList.add("hidden");
      renderCurriculum("");
    });
  }

  if (expandAllBtn) {
    expandAllBtn.addEventListener("click", () => {
      document.querySelectorAll(".level-group").forEach(el => el.classList.remove("collapsed"));
    });
  }

  if (collapseAllBtn) {
    collapseAllBtn.addEventListener("click", () => {
      document.querySelectorAll(".level-group").forEach(el => el.classList.add("collapsed"));
    });
  }

  if (tabPhrasalBtn && tabPronBtn) {
    tabPhrasalBtn.addEventListener("click", () => {
      tabPhrasalBtn.classList.add("active");
      tabPronBtn.classList.remove("active");
      if (phrasalBox) phrasalBox.classList.remove("hidden");
      if (pronBox) pronBox.classList.add("hidden");
    });

    tabPronBtn.addEventListener("click", () => {
      tabPronBtn.classList.add("active");
      tabPhrasalBtn.classList.remove("active");
      if (pronBox) pronBox.classList.remove("hidden");
      if (phrasalBox) phrasalBox.classList.add("hidden");
    });
  }

  if (phrasalInput) phrasalInput.value = localStorage.getItem(KEY_PHRASAL_NOTES) || "";
  if (pronInput) pronInput.value = localStorage.getItem(KEY_PRON_NOTES) || "";

  if (phrasalInput) {
    phrasalInput.addEventListener("input", () => {
      localStorage.setItem(KEY_PHRASAL_NOTES, phrasalInput.value);
      if (noteStatus) {
        noteStatus.textContent = "구동사 노트 저장됨";
        setTimeout(() => { noteStatus.textContent = "자동 저장됨"; }, 1500);
      }
    });
  }

  if (pronInput) {
    pronInput.addEventListener("input", () => {
      localStorage.setItem(KEY_PRON_NOTES, pronInput.value);
      if (noteStatus) {
        noteStatus.textContent = "발음 노트 저장됨";
        setTimeout(() => { noteStatus.textContent = "자동 저장됨"; }, 1500);
      }
    });
  }

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  }

  renderCurriculum();
  updateProgress();
});
