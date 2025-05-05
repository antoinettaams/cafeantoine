document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector("[data-carousel]");
    let index = 0;
    const slides = carousel.children;
    const totalSlides = slides.length;

    function showNextSlide() {
        slides[index].classList.remove("block");
        slides[index].classList.add("hidden");
        index = (index + 1) % totalSlides;
        slides[index].classList.remove("hidden");
        slides[index].classList.add("block");
    }

    slides[0].classList.add("block");
    for (let i = 1; i < totalSlides; i++) {
        slides[i].classList.add("hidden");
    }
    setInterval(showNextSlide, 3000);
});

    
