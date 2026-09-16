// ==============================
// MOBILE MENU
// ==============================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
});


// Close menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {
        navLinks.classList.remove("open");
    });

});


// ==============================
// CURSOR GLOW
// ==============================

const cursorGlow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (event) => {

    cursorGlow.style.left = event.clientX + "px";
    cursorGlow.style.top = event.clientY + "px";

});


// Disable cursor glow on touch devices

if ("ontouchstart" in window) {
    cursorGlow.style.display = "none";
}


// ==============================
// REVEAL ON SCROLL
// ==============================

const elements = document.querySelectorAll(
    ".intro, .menu-section, .visual, .gallery-section, .cta, .contact-section"
);

const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

                revealObserver.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.08
    }
);


elements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(25px)";
    element.style.transition = "opacity .7s ease, transform .7s ease";

    revealObserver.observe(element);

});


// ==============================
// NAVBAR SCROLL
// ==============================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        navbar.style.height = "70px";

    } else {

        navbar.style.height = "82px";

    }

});
