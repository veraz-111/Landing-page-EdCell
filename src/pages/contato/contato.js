
const menuHamburger = document.querySelector(".menuHamburger");
const menuNavegacao = document.querySelector(".botoesNavegacao");

menuHamburger.addEventListener("click", () => {
    menuNavegacao.classList.toggle("ativo");
}); 



const formulario = document.querySelector(".formContato");

if (formulario) {
    formulario.addEventListener("submit", (e) => {
        e.preventDefault();
        const nome = document.querySelector("#nome").value;
        const email = document.querySelector("#email").value;
        const mensagem = document.querySelector("#mensagem").value;
        if (nome === "" || email === "" || mensagem === "") {
            alert("Preencha todos os campos!");
            return;
        }
        alert("Mensagem enviada com sucesso!");
        formulario.reset();
    });
}



const botaoWhats = document.querySelector(".whats");

botaoWhats.addEventListener("click", () => {
    window.open(
        "https://api.whatsapp.com/send/?phone=5588992183978&text=Ol%C3%A1%21&type=phone_number&app_absent=0&utm_source=ig",
        "_blank"
    );
});

