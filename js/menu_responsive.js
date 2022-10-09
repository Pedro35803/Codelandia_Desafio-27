const iconHamburgue = document.querySelector("#icon-hamburguer");
const control = document.querySelector("#menu-control");
const widthScreen = window.innerWidth;

if (widthScreen <= 700) {
    changeLocationButton();
}

iconHamburgue.addEventListener("click", () => {
    document.body.style.overflow = !control.checked ? "hidden" : "initial";
});

function changeLocationButton() {
    const button = document.querySelector("button-login");
    button.remove();

    const li = document.createElement("li");
    li.appendChild(button);

    const menu = document.querySelector(".menu-link");
    menu.appendChild(li)
}