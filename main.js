/* =======================================
   ARI GLOBAL INDUSTRIES - MAIN JS
======================================= */

/* =======================================
   PRELOADER
======================================= */

window.addEventListener("load", () => {
    const preloader = document.querySelector(".preloader");

    setTimeout(() => {
        preloader.classList.add("hide");
    }, 800);
});


/* =======================================
   HEADER SCROLL EFFECT
======================================= */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});


/* =======================================
   MOBILE MENU TOGGLE
======================================= */

const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");

menuToggle.addEventListener("click", () => {

    mobileMenu.classList.toggle("active");
    document.body.classList.toggle("menu-open");

});


/* =======================================
   MOBILE DROPDOWN
======================================= */

const dropdownBtn = document.querySelector(".mobile-dropdown-btn");
const dropdownContent = document.querySelector(".mobile-dropdown-content");

if (dropdownBtn) {
    dropdownBtn.addEventListener("click", () => {
        dropdownContent.classList.toggle("active");

        if (dropdownContent.classList.contains("active")) {
            dropdownContent.style.display = "block";
        } else {
            dropdownContent.style.display = "none";
        }
    });
}


/* =======================================
   COUNTER ANIMATION
======================================= */

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries, observer) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const counter = entry.target;
            const target = +counter.getAttribute("data-target");

            let count = 0;

            const speed = Math.max(20, target / 80);

            const updateCount = () => {

                count += Math.ceil(target / 100);

                if (count < target) {
                    counter.textContent = count;
                    requestAnimationFrame(updateCount);
                } else {
                    counter.textContent = target;
                }

            };

            updateCount();

            observer.unobserve(counter);
        }

    });

}, {
    threshold: 0.6
});

counters.forEach(counter => {
    counterObserver.observe(counter);
});


/* =======================================
   UNIFIED SCROLL REVEAL SYSTEM (UPGRADED)
======================================= */

const revealElements = document.querySelectorAll(
    ".section-padding, .expertise-card, .product-card, .project-card, .vmv-card, .stat-card, .solution-item, .foundation-card, .capability-card, .why-card, .leadership, .about-cta"
);

const revealObserver = new IntersectionObserver((entries, observer) => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        entry.target.classList.add("active");

        observer.unobserve(entry.target);

    });

}, {
    threshold: 0.12
});

revealElements.forEach(el => {

    el.classList.add("reveal");

    revealObserver.observe(el);

});

/* =======================================
   SMOOTH ANCHOR SCROLL
======================================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }

    });

});


/* =======================================
   CLOSE MOBILE MENU ON LINK CLICK
======================================= */

document.querySelectorAll(".mobile-menu a").forEach(link => {

    link.addEventListener("click", () => {

        mobileMenu.classList.remove("active");
        document.body.classList.remove("menu-open");

    });

});


/* =======================================
   PREVENT LAGGY HOVER ON TOUCH DEVICES
======================================= */

if ("ontouchstart" in window) {

    document.body.classList.add("touch-device");

}
/* =======================================
   HERO IMAGE SLIDER
======================================= */

const heroSlides =
document.querySelectorAll(".hero-slide");

let heroIndex = 0;

if(heroSlides.length){

    setInterval(() => {

        heroSlides[heroIndex]
        .classList.remove("active");

        heroIndex =
        (heroIndex + 1) % heroSlides.length;

        heroSlides[heroIndex]
        .classList.add("active");

    }, 3500);

}