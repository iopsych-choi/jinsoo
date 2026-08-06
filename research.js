/* =========================================================
   Research 페이지: 연도별 / 토픽별 검색 & 필터링
   research-data.js 의 PUBLICATIONS 배열을 기반으로 동작합니다.
   ========================================================= */

(function () {
  const listEl = document.getElementById("pub-list");
  const searchEl = document.getElementById("pub-search");
  const yearEl = document.getElementById("pub-year");
  const topicBarEl = document.getElementById("pub-topics");
  const countEl = document.getElementById("pub-count");

  let activeTopics = new Set();

  // 1) 연도 셀렉트 옵션 자동 생성 (최신 연도부터)
  function buildYearOptions() {
    const years = [...new Set(PUBLICATIONS.map(p => p.year))].sort((a, b) => b - a);
    years.forEach(y => {
      const opt = document.createElement("option");
      opt.value = y;
      opt.textContent = y;
      yearEl.appendChild(opt);
    });
  }

  // 2) 토픽 버튼 자동 생성
  function buildTopicButtons() {
    const topics = [...new Set(PUBLICATIONS.flatMap(p => p.topics))].sort();
    topics.forEach(topic => {
      const btn = document.createElement("button");
      btn.className = "topic-btn";
      btn.type = "button";
      btn.textContent = topic;
      btn.dataset.topic = topic;
      btn.addEventListener("click", () => {
        if (activeTopics.has(topic)) {
          activeTopics.delete(topic);
          btn.classList.remove("active");
        } else {
          activeTopics.add(topic);
          btn.classList.add("active");
        }
        render();
      });
      topicBarEl.appendChild(btn);
    });
  }

  // 3) 필터링 로직 (검색어 + 연도 + 토픽, 모두 AND 조건 / 토픽끼리는 OR)
  function getFiltered() {
    const q = searchEl.value.trim().toLowerCase();
    const year = yearEl.value;

    return PUBLICATIONS.filter(p => {
      const matchesSearch =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.authors.toLowerCase().includes(q) ||
        p.venue.toLowerCase().includes(q);

      const matchesYear = !year || String(p.year) === year;

      const matchesTopic =
        activeTopics.size === 0 || p.topics.some(t => activeTopics.has(t));

      return matchesSearch && matchesYear && matchesTopic;
    }).sort((a, b) => b.year - a.year);
  }

  // 4) 렌더링
  function render() {
    const filtered = getFiltered();
    listEl.innerHTML = "";

    if (filtered.length === 0) {
      listEl.innerHTML = '<div class="empty-state">No publications match your search.</div>';
      countEl.textContent = "0 results";
      return;
    }

    filtered.forEach(p => {
      const item = document.createElement("div");
      item.className = "pub-item";

      const titleHtml = p.url
        ? `<a href="${p.url}" target="_blank" rel="noopener">${p.title}</a>`
        : p.title;

      item.innerHTML = `
        <div class="pub-title"><span class="pub-year-badge">${p.year}</span>${titleHtml}</div>
        <div class="pub-meta">${p.authors} — ${p.venue}</div>
        <div>${p.topics.map(t => `<span class="tag">${t}</span>`).join("")}</div>
      `;
      listEl.appendChild(item);
    });

    countEl.textContent = `${filtered.length} result${filtered.length === 1 ? "" : "s"}`;
  }

  searchEl.addEventListener("input", render);
  yearEl.addEventListener("change", render);

  buildYearOptions();
  buildTopicButtons();
  render();
})();
