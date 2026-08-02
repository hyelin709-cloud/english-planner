document.addEventListener("DOMContentLoaded", () => {
  const STORAGE_KEY_COMPLETED = "hibig_planner_completed_v1";
  const STORAGE_KEY_MEMO = "hibig_planner_memo_v1";
  const STORAGE_KEY_THEME = "hibig_planner_theme_v1";

  let completedIds = new Set(JSON.parse(localStorage.getItem(STORAGE_KEY_COMPLETED) || "[]"));
  let currentTheme = localStorage.getItem(STORAGE_KEY_THEME) || "light";
  let deferredPrompt = null;

  const themeToggleBtn = document.getElementById("theme-toggle-btn");
  const themeIcon = document.getElementById("theme-icon");
  const pwaInstallBtn = document.getElementById("pwa-install-btn");
  const progressBarFill = document.getElementById("progress-bar-fill");
  const progressPercent = document.getElementById("progress-percent");
  const completedCountEl = document.getElementById("completed-count");
  const totalCountEl = document.getElementById("total-count");
  const remainingCountText = document.getElementById("remaining-count-text");
  const todayContainer = document.getElementById("today-lesson-container");
  const searchInput = document.getElementById("search-input");
  const searchClearBtn = document.getElementById("search-clear-btn");
  const expandAllBtn = document.getElementById("expand-all-btn");
  const collapseAllBtn = document.getElementById("collapse-all-btn");
  const curriculumContainer = document.getElementById("curriculum-container");
  const memoInput = document.getElementById("memo-input");
  const saveMemoBtn = document.getElementById("save-memo-btn");
  const memoStatus = document.getElementById("memo-status");

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    themeIcon.textContent = theme === "dark" ? "☀️" : "🌙";
    localStorage.setItem(STORAGE_KEY_THEME, theme);
  }
  applyTheme(currentTheme);

  themeToggleBtn.addEventListener("click", () => {
    currentTheme = currentTheme === "light" ? "dark" : "light";
    applyTheme(currentTheme);
  });

  const allLessons = [];
  CURRICULUM_DATA.forEach(level => {
    level.lessons.forEach(lesson => {
      allLessons.push({ ...lesson, levelName: level.levelName });
    });
  });

  function renderCurriculum(filterQuery = "") {
    curriculumContainer.innerHTML = "";
    const query = filterQuery.trim().toLowerCase();

    CURRICULUM_DATA.forEach(level => {
      const filteredLessons = level.lessons.filter(l => 
        l.title.toLowerCase().includes(query) || l.id.toLowerCase().includes(query)
      );

      if (query !== "" && filteredLessons.length === 0) return;

      const levelGroup = document.createElement("div");
      levelGroup.className = "level-group";
      levelGroup.dataset.levelId = level.levelId;

      const levelCompletedCount = level.lessons.filter(l => completedIds.has(l.id)).length;

      levelGroup.innerHTML = `
        <div class="level-header">
          <div class="level-title-area">
            <h3>${level.levelName}</h3>
            <p>${level.description}</p>
          </div>
          <div class="level-meta">
            <span class="badge">${levelCompletedCount}/${level.lessons.length}</span>
            <span class="arrow-icon">▼</span>
          </div>
        </div>
        <div class="lessons-list"></div>
      `;

      const lessonsList = levelGroup.querySelector(".lessons-list");
      const targetLessons = query !== "" ? filteredLessons : level.lessons;

      targetLessons.forEach(lesson => {
        const isChecked = completedIds.has(lesson.id);
        const lessonEl = document.createElement("div");
        lessonEl.className = `lesson-item ${isChecked ? "completed" : ""}`;
        lessonEl.innerHTML = `
          <label class="checkbox-container">
            <input type="checkbox" data-id="${lesson.id}" ${isChecked ? "checked" : ""}>
            <span class="checkmark"></span>
          </label>
          <div class="lesson-info">
            <div class="lesson-title">${lesson.title}</div>
            <div class="lesson-duration">⏱️ ${lesson.duration}</div>
          </div>
        `;
        lessonsList.appendChild(lessonEl);
      });

      const header = levelGroup.querySelector(".level-header");
      header.addEventListener("click", () => {
        levelGroup.classList.toggle("collapsed");
      });

      curriculumContainer.appendChild(levelGroup);
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
  }

  function renderTodayLesson() {
    const nextLesson = allLessons.find(l => !completedIds.has(l.id));

    if (!nextLesson) {
      todayContainer.innerHTML = `
        <div class="today-item-title" style="color:var(--primary-color);">🎉 축하합니다! 모든 커리큘럼을 완강하셨습니다!</div>
        <div class="today-item-meta">꾸준한 정진으로 완강의 목표를 달성하셨습니다.</div>
      `;
      return;
    }

    todayContainer.innerHTML = `
      <div class="today-item-title">${nextLesson.title}</div>
      <div class="today-item-meta">
        <span>📚 ${nextLesson.levelName.split(":")[0]}</span>
        <span>⏱️ ${nextLesson.duration}</span>
      </div>
    `;
  }

  curriculumContainer.addEventListener("change", (e) => {
    if (e.target.matches("input[type='checkbox']")) {
      const lessonId = e.target.dataset.id;
      const lessonItem = e.target.closest(".lesson-item");

      if (e.target.checked) {
        completedIds.add(lessonId);
        lessonItem.classList.add("completed");
      } else {
        completedIds.delete(lessonId);
        lessonItem.classList.remove("completed");
      }

      localStorage.setItem(STORAGE_KEY_COMPLETED, JSON.stringify(Array.from(completedIds)));
      updateProgress();

      const levelGroup = e.target.closest(".level-group");
      if (levelGroup) {
        const levelId = levelGroup.dataset.levelId;
        const levelObj = CURRICULUM_DATA.find(l => l.levelId === levelId);
        if (levelObj) {
          const count = levelObj.lessons.filter(l => completedIds.has(l.id)).length;
          const badge = levelGroup.querySelector(".badge");
          if (badge) badge.textContent = `${count}/${levelObj.lessons.length}`;
        }
      }
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

  memoInput.value = localStorage.getItem(STORAGE_KEY_MEMO) || "";

  function saveMemo() {
    localStorage.setItem(STORAGE_KEY_MEMO, memoInput.value);
    memoStatus.textContent = "저장 완료!";
    setTimeout(() => { memoStatus.textContent = "자동 저장됨"; }, 2000);
  }

  saveMemoBtn.addEventListener("click", saveMemo);
  memoInput.addEventListener("input", () => {
    memoStatus.textContent = "입력 중...";
  });

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js")
      .then(() => console.log("[SW] Registered successfully"))
      .catch(err => console.error("[SW] Registration failed:", err));
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