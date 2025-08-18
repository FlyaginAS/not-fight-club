const links = document.querySelectorAll(".page-nav__link");
const currentFile = window.location.pathname.split("/").pop();

links.forEach((link) => {
  const linkFile = link.getAttribute("href").split("/").pop();

  if (linkFile === currentFile) {
    link.classList.add("page-nav__link--active");
  }
});
