const mobileMenu = document.querySelector(".mobile-menu");
const links = Array.from(document.querySelectorAll(".link"));

document.querySelector(".menu_button").addEventListener("click", (event) => {
  mobileMenu.classList.remove("hidden");
  mobileMenu.classList.add("visible");
});

mobileMenu
  .querySelector(".mobile-menu__close")
  .addEventListener("click", (event) => {
    mobileMenu.classList.remove("visible");
    mobileMenu.classList.add("hidden");
  });

links.map((link) => {
  link.addEventListener("click", (e) => {
    mobileMenu.classList.remove("visible");
    mobileMenu.classList.add("hidden");
  });
});
