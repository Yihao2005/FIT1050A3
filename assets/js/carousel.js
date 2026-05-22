
let currentIndex = 1;
let isMoving = false;

const track = document.querySelector(".hero-image")
const sliderImage = document.querySelectorAll(".hero-image img");
const leftbtn = document.querySelector(".left-button");
const rightbtn = document.querySelector(".right-button");
const dots = document.querySelectorAll(".dot");

function showImage(index) {

    track.style.transition = "transform 0.6s ease";
    track.style.transform = "translateX(-" + index * 100 + "%)";
    updateDot(index);
}

function updateDot(index) {
    dots.forEach(function (dot) {
        dot.classList.remove("active-dot");
    });

    let dotIndex = index - 1;

    if (dotIndex < 0) {
        dotIndex = real_slide_count - 1;
    }

    if (dotIndex >= real_slide_count) {
        dotIndex = 0;
    }

    dots[dotIndex].classList.add("active-dot");
}

const real_slide_count = sliderImage.length - 2;
track.style.transform = "translateX(-100%)";

rightbtn.addEventListener("click", function () {
    if (isMoving) {
        return;
    }

    isMoving = true;
    currentIndex++;
    showImage(currentIndex);
});

leftbtn.addEventListener("click", function () {
    if (isMoving) {
        return;
    }

    isMoving = true;
    currentIndex--;
    showImage(currentIndex);
});

track.addEventListener("transitionend", function () {
    if (currentIndex === real_slide_count + 1) {
        track.style.transition = "none";
        currentIndex = 1;
        track.style.transform = "translateX(-100%)";
    }

    if (currentIndex === 0) {
        track.style.transition = "none";
        currentIndex = real_slide_count;
        track.style.transform = "translateX(-" + currentIndex * 100 + "%)";
    }

    isMoving = false;
})

setInterval(function () {
    if (isMoving) {
        return;
    }

    isMoving = true;
    currentIndex++;
    showImage(currentIndex)
}, 6000);