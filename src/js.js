const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");
const menuBlock = document.getElementById("menuBlock");

openMenu.addEventListener("click", () => {
  menuBlock.classList.remove("translate-x-full"); // باز شدن منو
});

closeMenu.addEventListener("click", () => {
  menuBlock.classList.add("translate-x-full"); // بستن منو
});
