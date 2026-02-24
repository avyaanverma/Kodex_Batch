const track = document.querySelector("#slider-track");
const slides = document.querySelectorAll(".slide");
const slider = document.querySelector("#hero-slider");

let currentIndex = 0;
let slideWidth = slider.clientWidth;

window.addEventListener("resize", () => {
    slideWidth = slider.clientWidth;
    setPosition();
});

function setPosition() {
    track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

let isDragging = false;
let startX = 0;
let startTranslate = 0;
let currentTranslate = 0;

// =======================
// MOUSE DOWN
// =======================
track.addEventListener("mousedown", (e) => {
    isDragging = true;
    startX = e.clientX;

    // get current translate position
    const style = window.getComputedStyle(track);
    const matrix = new DOMMatrixReadOnly(style.transform);
    startTranslate = matrix.m41;

    track.style.transition = "none";
});

// =======================
// MOUSE MOVE
// =======================
window.addEventListener("mousemove", (e) => {
    if (!isDragging) return;

    const dx = e.clientX - startX;
    currentTranslate = startTranslate + dx;

    track.style.transform = `translateX(${currentTranslate}px)`;
});

// =======================
// MOUSE UP
// =======================
window.addEventListener("mouseup", () => {
    if (!isDragging) return;

    isDragging = false;
    track.style.transition = "transform 0.4s ease";

    // Calculate nearest slide
    currentIndex = Math.round(Math.abs(currentTranslate) / slideWidth);

    // Clamp between bounds
    currentIndex = Math.max(0, Math.min(currentIndex, slides.length - 1));

    setPosition();
});


// register section
const registerTrack = document.querySelector(".register-track");
const regSlides = document.querySelectorAll(".register-track .slide");

const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let regIndex = 0;

console.log(regSlides);


function updateSlider() {
    const slideWidth = regSlides[0].offsetWidth;
    registerTrack.style.transform = `translateX(-${regIndex * slideWidth}px)`;
    regSlides.forEach((s)=> s.classList.remove("active"));
    regSlides[regIndex].classList.add("active");
}

nextBtn.addEventListener("click", ()=>{
    regIndex++;
    if (regIndex == regSlides.length) regIndex = 0;
    updateSlider();
})

prevBtn.addEventListener("click", ()=>{
    regIndex--;
    if (regIndex < 0) regIndex = regSlides.length -1;
    updateSlider();
})

updateSlider();

