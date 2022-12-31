const menu = document.querySelector(".ri-menu-line");
const nav = document.querySelector(".mobile-nav");
const close = document.querySelector(".ri-close-fill");

menu.addEventListener("click", function () {
    nav.style.transform = "translateX(0)";
});
close.addEventListener("click", function () {
    nav.style.transform = "translateX(100%)";
});
