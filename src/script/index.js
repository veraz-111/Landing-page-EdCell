document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".containerProdutos");
    const items = document.querySelectorAll(".produtoOferta");
    const nextButton = document.querySelector(".next");
    const prevButton = document.querySelector(".prev");

    if (!container || items.length === 0 || !nextButton || !prevButton) {
        return;
    }

    let index = 0;

    const updateCarousel = () => {
        const width = items[0].getBoundingClientRect().width;
        const gap = parseFloat(getComputedStyle(container).gap) || 16;
        container.style.transform = translateX(-${index * (width + gap)}px);
        prevButton.disabled = index === 0;
        nextButton.disabled = index >= items.length - 1;
    };

    nextButton.addEventListener("click", () => {
        if (index < items.length - 1) {
            index += 1;
            updateCarousel();
        }
    });

    prevButton.addEventListener("click", () => {
        if (index > 0) {
            index -= 1;
            updateCarousel();
        }
    });

    updateCarousel();

    window.addEventListener("resize", updateCarousel);
});