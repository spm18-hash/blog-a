function initMenu() {
  const menu = document.querySelector(".menu");

  menu?.addEventListener("click", () => {
    const isExpanded = menu.getAttribute("aria-expanded") === "true";
    menu.setAttribute("aria-expanded", String(!isExpanded));
    document.body.classList.toggle("overflow-hidden");
  });
}

document.addEventListener("DOMContentLoaded", initMenu);
