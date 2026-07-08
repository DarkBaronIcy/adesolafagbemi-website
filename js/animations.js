/*==================================================
animations.js
==================================================*/

/*==================================================
Reveal On Scroll
==================================================*/

const revealElements = document.querySelectorAll(
    ".fade-up, .fade-left, .fade-right"
);

const revealObserver = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                revealObserver.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.15
    }

);

revealElements.forEach((element) => {

    revealObserver.observe(element);

});


/*==================================================
Card Hover Animation
==================================================*/

document.querySelectorAll(

    ".card, .practice-card, .expertise-card, .commitment-card, .why-card"

).forEach((card) => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-8px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "";

    });

});


/*==================================================
Animated Counter
==================================================*/

const counters = document.querySelectorAll("[data-counter]");

const counterObserver = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (!entry.isIntersecting) return;

            const counter = entry.target;

            const target = Number(counter.dataset.counter);

            let current = 0;

            const increment = Math.max(1, Math.ceil(target / 100));

            const updateCounter = () => {

                current += increment;

                if (current >= target) {

                    counter.textContent = target;

                } else {

                    counter.textContent = current;

                    requestAnimationFrame(updateCounter);

                }

            };

            updateCounter();

            counterObserver.unobserve(counter);

        });

    },

    {
        threshold: 0.4
    }

);

counters.forEach((counter) => {

    counterObserver.observe(counter);

});


/*==================================================
Image Fade In
==================================================*/

document.querySelectorAll("img").forEach((image) => {

    if (image.complete) {

        image.classList.add("loaded");

    } else {

        image.addEventListener("load", () => {

            image.classList.add("loaded");

        });

    }

});


/*==================================================
Parallax Banner
==================================================*/

const banners = document.querySelectorAll(".hero, .page-banner");

window.addEventListener("scroll", () => {

    const scrollY = window.pageYOffset;

    banners.forEach((banner) => {

        banner.style.backgroundPositionY = `${scrollY * 0.4}px`;

    });

});


/*==================================================
Button Ripple Effect
==================================================*/

document.querySelectorAll(

    ".btn, .btn-outline, .consult-btn"

).forEach((button) => {

    button.addEventListener("click", function (event) {

        const ripple = document.createElement("span");

        const rect = this.getBoundingClientRect();

        const size = Math.max(rect.width, rect.height);

        ripple.style.width = `${size}px`;

        ripple.style.height = `${size}px`;

        ripple.style.left = `${event.clientX - rect.left - size / 2}px`;

        ripple.style.top = `${event.clientY - rect.top - size / 2}px`;

        ripple.classList.add("ripple");

        this.appendChild(ripple);

        setTimeout(() => {

            ripple.remove();

        }, 600);

    });

});


/*==================================================
Page Loaded Class
==================================================*/

window.addEventListener("load", () => {

    document.body.classList.add("page-loaded");

});