const hamburger = document.querySelector(".hamburger");
const navlinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", () => {
  navlinks.classList.toggle("open");
  links.forEach((link) => {
    link.classList.toggle("fade");
  });
});
hamburger.onclick = function () {
  hamburger.classList.toggle("active");
};
