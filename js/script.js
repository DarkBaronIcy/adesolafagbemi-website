/*==================================================
script.js
Global Website Functions
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*==========================================
    Loader
    ==========================================*/

    const loader = document.querySelector(".loader");

    window.addEventListener("load", () => {

        if (loader) {

            loader.classList.add("hidden");

            setTimeout(() => {

                loader.remove();

            }, 600);

        }

    });


    /*==========================================
    Scroll Progress Bar
    ==========================================*/

    const progressBar = document.querySelector(".progress-bar");

    function updateProgressBar() {

        if (!progressBar) return;

        const scrollTop = window.scrollY;

        const pageHeight =
            document.documentElement.scrollHeight - window.innerHeight;

        const progress = (scrollTop / pageHeight) * 100;

        progressBar.style.width = `${progress}%`;

    }

    window.addEventListener("scroll", updateProgressBar);

    updateProgressBar();


    /*==========================================
    Scroll To Top Button
    ==========================================*/

    const scrollTopButton = document.getElementById("scrollTop");

    function toggleScrollButton() {

        if (!scrollTopButton) return;

        if (window.scrollY > 500) {

            scrollTopButton.classList.add("show");

        } else {

            scrollTopButton.classList.remove("show");

        }

    }

    window.addEventListener("scroll", toggleScrollButton);

    toggleScrollButton();

    if (scrollTopButton) {

        scrollTopButton.addEventListener("click", () => {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        });

    }


    /*==========================================
    Current Year
    ==========================================*/

    const year = new Date().getFullYear();

    document.querySelectorAll(".current-year").forEach(element => {

        element.textContent = year;

    });


    /*==========================================
    External Links
    ==========================================*/

    document.querySelectorAll('a[target="_blank"]').forEach(link => {

        link.setAttribute("rel", "noopener noreferrer");

    });


    /*==========================================
    Lazy Loading Images
    ==========================================*/

    const lazyImages = document.querySelectorAll("img[data-src]");

    if ("IntersectionObserver" in window && lazyImages.length) {

        const imageObserver = new IntersectionObserver((entries, observer) => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) return;

                const image = entry.target;

                image.src = image.dataset.src;

                image.removeAttribute("data-src");

                observer.unobserve(image);

            });

        });

        lazyImages.forEach(image => {

            imageObserver.observe(image);

        });

    }


    /*==========================================
    Disable Empty Links
    ==========================================*/

    document.querySelectorAll('a[href="#"]').forEach(link => {

        link.addEventListener("click", e => {

            e.preventDefault();

        });

    });


    /*==========================================
    Keyboard Accessibility
    ==========================================*/

    document.addEventListener("keyup", event => {

        if (event.key === "Escape") {

            const mobileMenu = document.querySelector(".mobile-menu");
            const overlay = document.querySelector(".mobile-overlay");

            if (mobileMenu) {

                mobileMenu.classList.remove("active");

            }

            if (overlay) {

                overlay.classList.remove("active");

            }

            document.body.style.overflow = "";

        }

    });


    /*==========================================
    Console Branding
    ==========================================*/

    console.log(

        "%cAdesola Fagbemi & Co",

        "color:#8c6b2d;font-size:18px;font-weight:bold;"

    );

    console.log(

        "Website developed professionally."

    );

});