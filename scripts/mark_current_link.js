const links = document.querySelectorAll(".page-nav__link");
const currentPath = window.window.location.pathname;

links.forEach((link) => {
  if (link.getAttribute("href") === currentPath) {
    link.classList.add("page-nav__link--active");
  }
});
