/* ================================
   BEAN BOUTIQUE
   HOMEPAGE JAVASCRIPT
================================ */


/* ================================
   MOBILE NAVIGATION
================================ */

const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");

if (menuButton && navLinks) {

    menuButton.addEventListener("click", function () {

        navLinks.classList.toggle("open");

        const isOpen = navLinks.classList.contains("open");

        menuButton.setAttribute("aria-expanded", isOpen);

    });

}


/* ================================
   HERO SLIDESHOW
================================ */

const slides = document.querySelectorAll(".hero-slide");
const dots = document.querySelectorAll(".slider-dot");

const previousButton = document.getElementById("prevSlide");
const nextButton = document.getElementById("nextSlide");

let currentSlide = 0;
let slideTimer;


function showSlide(index) {

    if (slides.length === 0) {
        return;
    }

    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }


    slides.forEach(function (slide) {
        slide.classList.remove("active-slide");
    });


    dots.forEach(function (dot) {
        dot.classList.remove("active-dot");
    });


    slides[currentSlide].classList.add("active-slide");


    if (dots[currentSlide]) {
        dots[currentSlide].classList.add("active-dot");
    }
}


function nextSlide() {
    showSlide(currentSlide + 1);
}


function previousSlide() {
    showSlide(currentSlide - 1);
}


function startSlideshow() {

    clearInterval(slideTimer);

    slideTimer = setInterval(function () {
        nextSlide();
    }, 5000);

}


if (nextButton) {

    nextButton.addEventListener("click", function () {
        nextSlide();
        startSlideshow();
    });

}


if (previousButton) {

    previousButton.addEventListener("click", function () {
        previousSlide();
        startSlideshow();
    });

}


dots.forEach(function (dot, index) {

    dot.addEventListener("click", function () {
        showSlide(index);
        startSlideshow();
    });

});


showSlide(0);
startSlideshow();


/* ================================
   FIRST VISIT DISCOUNT POPUP
================================ */

const welcomePopup = document.getElementById("welcomePopup");
const closePopup = document.getElementById("closePopup");
const discountForm = document.getElementById("discountForm");
const popupMessage = document.getElementById("popupMessage");


function openWelcomePopup() {

    if (!welcomePopup) {
        return;
    }

    welcomePopup.classList.add("show-popup");

}


function closeWelcomePopup() {

    if (!welcomePopup) {
        return;
    }

    welcomePopup.classList.remove("show-popup");

    localStorage.setItem("beanBoutiquePopupSeen", "true");

}


if (welcomePopup) {

    const popupAlreadySeen =
        localStorage.getItem("beanBoutiquePopupSeen");


    if (!popupAlreadySeen) {

        setTimeout(function () {
            openWelcomePopup();
        }, 1800);

    }

}


if (closePopup) {

    closePopup.addEventListener("click", function () {
        closeWelcomePopup();
    });

}


if (welcomePopup) {

    welcomePopup.addEventListener("click", function (event) {

        if (event.target === welcomePopup) {
            closeWelcomePopup();
        }

    });

}


/* ================================
   DISCOUNT SIGNUP
================================ */

if (discountForm) {

    discountForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const emailInput =
            document.getElementById("discountEmail");

        if (emailInput && emailInput.value.trim() !== "") {

            popupMessage.textContent =
                "Thank you! Your first-order discount is ready.";

            discountForm.reset();

        }

    });

}