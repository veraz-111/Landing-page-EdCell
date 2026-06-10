const botaoWhats = document.querySelector(".whats");

botaoWhats.addEventListener("click", () => {
    window.open(
        "https://api.whatsapp.com/send/?phone=5588992183978&text=Ol%C3%A1%21&type=phone_number&app_absent=0&utm_source=ig",
        "_blank"
    );
});

const hamburger = document.querySelector(".menuHamburger");
const menu = document.querySelector(".botoesNavegacao");

hamburger.addEventListener("click", () => {
    menu.classList.toggle("ativo");
});