document.addEventListener("DOMContentLoaded", () => {
  const KEY_COMPLETED = "hibig_completed_lessons";
  const KEY_MISSIONS = "hibig_completed_missions";
  const KEY_COMPLETED_DATES = "hibig_completed_dates";
  const KEY_MEMOS = "hibig_day_memos";
  const KEY_PHRASAL = "hibig_phrasal_notes";
  const KEY_PRON = "hibig_pron_notes";
  const KEY_THEME = "hibig_theme";
  const KEY_STREAK_DATES = "hibig_streak_dates";

  let completedIds = new Set(JSON.parse(localStorage.getItem(KEY_COMPLETED) || "[]"));
  let completedMissions = new Set(JSON.parse(localStorage.getItem(KEY_MISSIONS) || "[]"));
  let completedDates = JSON.parse(localStorage.getItem(KEY_COMPLETED_DATES) || "{}");
  let dayMemos = JSON.parse(localStorage.getItem(KEY_MEMOS) || "{}");
  let streakDates = new Set(JSON.parse(localStorage.getItem(KEY_STREAK_DATES) || "[]"));
  let currentTheme = localStorage.getItem(KEY_THEME) || "light";
  let deferredPrompt = null;

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
    themeIcon.textContent = theme === "dark" ? "☀️" : "🌙";
    localStorage.setItem(KEY_THEME, theme);
  }
  applyTheme(currentTheme);

  themeToggleBtn.addEventListener("click", () => {
    currentTheme = currentTheme === "light" ? "dark" : "light";
    applyTheme(currentTheme);
  });

  const allLessons = [];
  CURRICULUM_DATA.forEach(item => {
    item.lessons.forEach(lesson => {
      allLessons.push({ ...lesson, day: item.day, goal: item.goal });
    });
  });

  // 연속 학습 일수 계산
  function updateStreak() {
    const sorted = Array.from(streakDates).sort();
    let streak = 0;
    const today = new Date().toISOString().split("T")[0];

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

  function renderCurriculum(filterQuery = "") {
    curriculumContainer.innerHTML = "";
    const query = filterQuery.trim().toLowerCase();

    CURRICULUM_DATA.forEach(dayData => {
      const filteredLessons = dayData.lessons.filter(l => 
        l.title.toLowerCase().includes(query) || l.id.toLowerCase().includes(query)
      );

      const isMatchingDay = dayData.day.toLowerCase().includes(query) || dayData.goal.toLowerCase().includes(query);
      if (query !== "" && !isMatchingDay && filteredLessons.length === 0) return;

      const dayCard = document.createElement("div");
      dayCard.className = "level-group";
      dayCard.dataset.day = dayData.day;

      const dayCompletedCount = dayData.lessons.filter(l => completedIds.has(l.id)).length;
      const isDayFullyDone = dayCompletedCount === dayData.lessons.length && dayData.lessons.length > 0;
      
      if (isDayFullyDone && !completedDates[dayData.day]) {
        const todayStr = new Date().toLocaleDateString("ko-KR", { month: "short", day: "numeric" });
        completedDates[dayData.day] = todayStr;
        localStorage.setItem(KEY_COMPLETED_DATES, JSON.stringify(completedDates));
      }

      const dateBadgeHtml = completedDates[dayData.day] 
        ? `<span class="date-badge">✓ ${completedDates[dayData.day]} 완료</span>` 
        : '';

      // 미션 HTML
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

      // 복습 일정 HTML
      let reviewHtml = '';
      if (dayData.review && dayData.review.length > 0) {
        reviewHtml = `
          <div class="day-section-title" style="margin-top:6px;">🔄 권장 복습 일정</div>
          <div class="review-list">
            ${dayData.review.map(r => `<span class="review-tag">📌 ${r}</span>`).join('')}
          </div>
        `;
      }

      dayCard.innerHTML = `
        <div class="level-header">
          <div class="level-title-area">
            <h3>${dayData.day}: ${dayData.goal}</h3>
            <p>⏱️ 시간: ${dayData.studyTime}</p>
          </div>
          <div class="level-meta">
            ${dateBadgeHtml}
            <span class="badge">${dayCompletedCount}/${dayData.lessons.length}강</span>
            <span class="arrow-icon">▼</span>
          </div>
        </div>

        <div class="day-body">
          ${missionsHtml}

          <div class="day-section-title" style="margin-top:4px;">📚 강의 목록</div>
          <div class="lessons-list"></div>

          ${reviewHtml}

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
        localStorage.setItem(KEY_MEMOS, JSON.stringify(dayMemos));
      });

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

  function updateProgress() {
    const total = allLessons.length;
    const completed = completedIds.size;
    const percent = total === 0 ? 0 : Math.round((completed / total) * 100);

    progressBarFill.style.width = `${percent}%`;
    progressPercent.textContent = `${percent}%`;
    completedCountEl.textContent = completed;
    totalCountEl.textContent = total;
    remainingCountText.textContent = `남은 강의: ${total - completed}강`;

    renderTodayLesson();
    updateStreak();
  }

  function renderTodayLesson() {
    const nextLesson = allLessons.find(l => !completedIds.has(l.id));

    if (!nextLesson) {
      todayDayTitle.textContent = "🏆 30일 완강 달성!";
      todayContainer.innerHTML = `
        <div class="today-item-title" style="color:var(--primary-color);">🎉 축하합니다! 30일 완강을 성황리에 마쳤습니다!</div>
        <div class="today-item-meta">나만의 소중한 영어 스피킹 습관이 완성되었습니다. 계속해서 활용해 보세요!</div>
      `;
      return;
    }

    todayDayTitle.textContent = `🔥 오늘의 추천 학습 (${nextLesson.day})`;
    todayContainer.innerHTML = `
      <div class="today-item-title">${nextLesson.title}</div>
      <div class="today-item-meta">
        <span>🎯 목표: ${nextLesson.goal}</span>
        <span>⏱️ ${nextLesson.duration}</span>
      </div>
    `;
  }

  curriculumContainer.addEventListener("change", (e) => {
    // 강의 체크박스
    if (e.target.classList.contains("lesson-check")) {
      const lessonId = e.target.dataset.id;
      const lessonItem = e.target.closest(".lesson-item");

      if (e.target.checked) {
        completedIds.add(lessonId);
        lessonItem.classList.add("completed");

        // 오늘 날짜 streak에 기록
        const todayStr = new Date().toISOString().split("T")[0];
        streakDates.add(todayStr);
        localStorage.setItem(KEY_STREAK_DATES, JSON.stringify(Array.from(streakDates)));
      } else {
        completedIds.delete(lessonId);
        lessonItem.classList.remove("completed");
      }

      localStorage.setItem(KEY_COMPLETED, JSON.stringify(Array.from(completedIds)));
      updateProgress();

      const dayCard = e.target.closest(".level-group");
      if (dayCard) {
        const dayStr = dayCard.dataset.day;
        const dayData = CURRICULUM_DATA.find(d => d.day === dayStr);
        if (dayData) {
          const count = dayData.lessons.filter(l => completedIds.has(l.id)).length;
          const badge = dayCard.querySelector(".badge");
          if (badge) badge.textContent = `${count}/${dayData.lessons.length}강`;
        }
      }
    }

    // 미션 체크박스
    if (e.target.classList.contains("mission-check")) {
      const mId = e.target.dataset.mid;
      const mItem = e.target.closest(".mission-item");

      if (e.target.checked) {
        completedMissions.add(mId);
        mItem.classList.add("completed");
      } else {
        completedMissions.delete(mId);
        mItem.classList.remove("completed");
      }
      localStorage.setItem(KEY_MISSIONS, JSON.stringify(Array.from(completedMissions)));
    }
  });

  searchInput.addEventListener("input", (e) => {
    const val = e.target.value;
    searchClearBtn.classList.toggle("hidden", val === "");
    renderCurriculum(val);
  });

  searchClearBtn.addEventListener("click", () => {
    searchInput.value = "";
    searchClearBtn.classList.add("hidden");
    renderCurriculum("");
  });

  expandAllBtn.addEventListener("click", () => {
    document.querySelectorAll(".level-group").forEach(el => el.classList.remove("collapsed"));
  });

  collapseAllBtn.addEventListener("click", () => {
    document.querySelectorAll(".level-group").forEach(el => el.classList.add("collapsed"));
  });

  tabPhrasalBtn.addEventListener("click", () => {
    tabPhrasalBtn.classList.add("active");
    tabPronBtn.classList.remove("active");
    phrasalBox.classList.remove("hidden");
    pronBox.classList.add("hidden");
  });

  tabPronBtn.addEventListener("click", () => {
    tabPronBtn.classList.add("active");
    tabPhrasalBtn.classList.remove("active");
    pronBox.classList.remove("hidden");
    phrasalBox.classList.add("hidden");
  });

  phrasalInput.value = localStorage.getItem(KEY_PHRASAL) || "";
  pronInput.value = localStorage.getItem(KEY_PRON) || "";

  phrasalInput.addEventListener("input", () => {
    localStorage.setItem(KEY_PHRASAL, phrasalInput.value);
    noteStatus.textContent = "구동사 노트 저장됨";
    setTimeout(() => { noteStatus.textContent = "자동 저장됨"; }, 1500);
  });

  pronInput.addEventListener("input", () => {
    localStorage.setItem(KEY_PRON, pronInput.value);
    noteStatus.textContent = "발음 노트 저장됨";
    setTimeout(() => { noteStatus.textContent = "자동 저장됨"; }, 1500);
  });

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js")
      .then(() => console.log("[SW] Registered"))
      .catch(err => console.error("[SW] Failed:", err));
  }

  window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    deferredPrompt = e;
    pwaInstallBtn.classList.remove("hidden");
  });

  pwaInstallBtn.addEventListener("click", () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choice) => {
        if (choice.outcome === "accepted") {
          pwaInstallBtn.classList.add("hidden");
        }
        deferredPrompt = null;
      });
    }
  });

  renderCurriculum();
  updateProgress();
});
