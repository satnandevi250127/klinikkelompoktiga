document.addEventListener("DOMContentLoaded", function () {
    let currentSlide = 0;
    const slider = document.getElementById("slider");
    const slides = slider.querySelectorAll("img");
    const totalSlides = slides.length;

    function autoSlide() {
        currentSlide++;
        if (currentSlide >= totalSlides) {
            currentSlide = 0;
        }
        slider.style.transform = `translateX(-${currentSlide * 100}%)`;
    }

    setInterval(autoSlide, 1000); // slide setiap 1 detik
});