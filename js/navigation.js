/*==================================================
navigation.js
==================================================*/

// Sticky Header

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


/*==================================================
Mobile Menu
==================================================*/

const menuToggle = document.querySelector(".menu-toggle");

const mobileMenu = document.querySelector(".mobile-menu");

const mobileOverlay = document.querySelector(".mobile-overlay");

const menuClose = document.querySelector(".menu-close");

if (menuToggle && mobileMenu && mobileOverlay) {

    menuToggle.addEventListener("click", () => {

        mobileMenu.classList.add("active");

        mobileOverlay.classList.add("active");

        document.body.style.overflow = "hidden";

    });

    mobileOverlay.addEventListener("click", closeMenu);

if (menuClose) {

    menuClose.addEventListener("click", closeMenu);

}

    function closeMenu() {

        mobileMenu.classList.remove("active");

        mobileOverlay.classList.remove("active");

        document.body.style.overflow = "";

    }

    mobileMenu.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", closeMenu);

    });

}


/*==================================================
Dropdown Navigation
==================================================*/

document.querySelectorAll(".dropdown").forEach(dropdown => {

    dropdown.addEventListener("mouseenter", () => {

        dropdown.classList.add("open");

    });

    dropdown.addEventListener("mouseleave", () => {

        dropdown.classList.remove("open");

    });

});


/*==================================================
Highlight Active Page
==================================================*/

const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll(".navbar a, .mobile-menu a").forEach(link => {

    const href = link.getAttribute("href");

    if (href === currentPage || (href === "index.html" && currentPage === "")) {

        link.classList.add("active");

    }

});


/*==================================================
Smooth Scroll
==================================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (!target) return;

        e.preventDefault();

        target.scrollIntoView({

            behavior: "smooth"

        });

    });

});


/*==================================================
Close Mobile Menu on Resize
==================================================*/

window.addEventListener("resize", () => {

    if (window.innerWidth > 992 && mobileMenu && mobileOverlay) {

        mobileMenu.classList.remove("active");

        mobileOverlay.classList.remove("active");

        document.body.style.overflow = "";

    }

});