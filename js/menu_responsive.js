const iconHamburgue = document.querySelector("#icon-hamburguer");
const control = document.querySelector("#menu-control");
const widthScreen = window.innerWidth;

iconHamburgue.addEventListener("click", () => {
    document.body.style.overflow = !control.checked ? "hidden" : "initial";
});