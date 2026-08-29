// ================= MENU =================

const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", function () {

    navbar.classList.toggle("active");

    if (navbar.classList.contains("active")) {
        menuBtn.textContent = "✕";
    } else {
        menuBtn.textContent = "☰";
    }

});


// Close mobile menu after clicking a link

const navLinks = document.querySelectorAll("#navbar a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navbar.classList.remove("active");

        menuBtn.textContent = "☰";

    });

});


// ================= DARK MODE =================

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        themeBtn.textContent = "☀️";

    } else {

        themeBtn.textContent = "🌙";

    }

});


// ================= HERO MESSAGE =================

const messageBtn = document.getElementById("messageBtn");
const heroMessage = document.getElementById("heroMessage");

messageBtn.addEventListener("click", function () {

    heroMessage.textContent =
        "Welcome! JavaScript is making this webpage interactive 🚀";

});


// ================= EXPLORE BUTTON =================

const exploreBtn = document.getElementById("exploreBtn");

exploreBtn.addEventListener("click", function () {

    document.getElementById("features").scrollIntoView({
        behavior: "smooth"
    });

});


// ================= LEARN MORE =================

const learnBtn = document.getElementById("learnBtn");
const learnText = document.getElementById("learnText");

learnBtn.addEventListener("click", function () {

    if (learnText.style.display === "block") {

        learnText.style.display = "none";

        learnBtn.textContent = "Learn More";

    } else {

        learnText.style.display = "block";

        learnBtn.textContent = "Show Less";

    }

});


// ================= COUNTER ANIMATION =================

const counters = document.querySelectorAll(".counter");

let counterStarted = false;

function startCounters() {

    if (counterStarted) {
        return;
    }

    counterStarted = true;

    counters.forEach(function (counter) {

        const target = Number(counter.dataset.target);

        let current = 0;

        const increment = Math.ceil(target / 50);

        const updateCounter = setInterval(function () {

            current += increment;

            if (current >= target) {

                current = target;

                clearInterval(updateCounter);

            }

            counter.textContent = current;

        }, 30);

    });

}


// Start counter when user scrolls near stats section

window.addEventListener("scroll", function () {

    const stats = document.querySelector(".stats");

    const statsPosition =
        stats.getBoundingClientRect().top;

    const screenHeight = window.innerHeight;

    if (statsPosition < screenHeight) {

        startCounters();

    }

});


// ================= FORM VALIDATION =================

const contactForm =
    document.getElementById("contactForm");

const nameInput =
    document.getElementById("name");

const emailInput =
    document.getElementById("email");

const messageInput =
    document.getElementById("message");


const nameError =
    document.getElementById("nameError");

const emailError =
    document.getElementById("emailError");

const messageError =
    document.getElementById("messageError");

const successMessage =
    document.getElementById("successMessage");


contactForm.addEventListener("submit", function (event) {

    event.preventDefault();


    // Clear previous errors

    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    successMessage.textContent = "";


    let valid = true;


    // Name validation

    if (nameInput.value.trim() === "") {

        nameError.textContent =
            "Please enter your name.";

        valid = false;

    }


    // Email validation

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailInput.value.trim() === "") {

        emailError.textContent =
            "Please enter your email.";

        valid = false;

    } else if (!emailPattern.test(emailInput.value)) {

        emailError.textContent =
            "Please enter a valid email.";

        valid = false;

    }


    // Message validation

    if (messageInput.value.trim() === "") {

        messageError.textContent =
            "Please enter your message.";

        valid = false;

    } else if (messageInput.value.trim().length < 10) {

        messageError.textContent =
            "Message must contain at least 10 characters.";

        valid = false;

    }


    // Successful submission

    if (valid) {

        successMessage.textContent =
            "Message submitted successfully! ✅";

        contactForm.reset();

    }

});