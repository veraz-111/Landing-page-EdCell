document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".containerProdutos");
    const items = document.querySelectorAll(".produtoOferta");
    const nextButton = document.querySelector(".next");
    const prevButton = document.querySelector(".prev");
    let index = 0;
    function visibleCards() {
        return window.innerWidth <= 768 ? 1 : 3;
    }
    function updateCarousel() {
        const width = items[0].offsetWidth;
        const gap = 16;
        container.style.transform =
            `translateX(-${index * (width + gap)}px)`;
    }
    nextButton.addEventListener("click", () => {
        const maxIndex =
            items.length - visibleCards();
        if(index < maxIndex){
            index++;
            updateCarousel();
        }
    });
    prevButton.addEventListener("click", () => {
        if(index > 0){
            index--;
            updateCarousel();
        }
    });
    window.addEventListener("resize", updateCarousel);
    updateCarousel();
});

const produtos = document.querySelectorAll(".produtoOferta");

const modal = document.querySelector(".modal");
const modalNome = document.getElementById("modalNome");
const modalDescricao = document.getElementById("modalDescricao");
const modalPreco = document.getElementById("modalPreco");
const modalImagem = document.getElementById("modalImagem");
const modalCaracteristicas = document.getElementById("modalCaracteristicas");

const fecharModal = document.querySelector(".fecharModal");

produtos.forEach(produto => {

    produto.addEventListener("click", () => {
        modalNome.textContent =
            produto.dataset.nome;
        modalDescricao.textContent =
            produto.dataset.desc;
        modalPreco.textContent =
            produto.dataset.preco;
        modalImagem.src =
            produto.dataset.img;
        modalImagem.alt =
            produto.dataset.nome;
        modalCaracteristicas.innerHTML =
            produto.dataset.caracteristicas;
        modal.style.display = "flex";
    });

});

fecharModal.addEventListener("click", () => {
    modal.style.display = "none";
});