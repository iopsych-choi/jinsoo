/* =========================================================
   "Show more / Show less" 토글
   ---------------------------------------------------------
   <div class="collapsible" data-visible="3"> 안에 있는 .card 요소들 중
   앞의 N개(data-visible)만 보여주고, 나머지는 버튼을 눌러야 보이게 합니다.
   항목이 N개 이하면 버튼 없이 전부 표시됩니다.
   ========================================================= */

(function () {
  document.querySelectorAll(".collapsible").forEach(container => {
    const visibleCount = parseInt(container.dataset.visible || "3", 10);
    const items = Array.from(container.children).filter(el => el.classList.contains("card"));

    if (items.length <= visibleCount) return;

    const hiddenItems = items.slice(visibleCount);
    hiddenItems.forEach(el => { el.style.display = "none"; });

    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "show-more-btn";

    let expanded = false;
    const updateLabel = () => {
      btn.textContent = expanded ? "Show less" : `Show ${hiddenItems.length} more`;
    };
    updateLabel();

    btn.addEventListener("click", () => {
      expanded = !expanded;
      hiddenItems.forEach(el => { el.style.display = expanded ? "" : "none"; });
      updateLabel();
    });

    container.appendChild(btn);
  });
})();
