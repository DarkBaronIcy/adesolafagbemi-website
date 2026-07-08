/*==================================================
contact.js
==================================================*/

/*==================================================
FAQ ACCORDION
==================================================*/

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {

    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");

    question.addEventListener("click", () => {

        faqItems.forEach((faq) => {

            if (faq !== item) {

                faq.classList.remove("active");

                faq.querySelector(".faq-answer").style.maxHeight = null;

            }

        });

        item.classList.toggle("active");

        if (item.classList.contains("active")) {

            answer.style.maxHeight = answer.scrollHeight + "px";

        } else {

            answer.style.maxHeight = null;

        }

    });

});


/*==================================================
CONTACT FORM VALIDATION
==================================================*/

const contactForm = document.querySelector(".contact-form form");

if (contactForm) {

    contactForm.addEventListener("submit", (event) => {

        const fullName = contactForm.querySelector('input[name="name"]');
        const email = contactForm.querySelector('input[name="email"]');
        const message = contactForm.querySelector('textarea[name="message"]');

        if (
            fullName.value.trim() === "" ||
            email.value.trim() === "" ||
            message.value.trim() === ""
        ) {
            event.preventDefault();
            alert("Please complete all required fields.");
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email.value.trim())) {
            event.preventDefault();
            alert("Please enter a valid email address.");
            email.focus();
        }

    });

}


/*==================================================
INPUT FOCUS EFFECT
==================================================*/

document.querySelectorAll(

    ".contact-form input, .contact-form textarea"

).forEach((field) => {

    field.addEventListener("focus", () => {

        field.parentElement.classList.add("focused");

    });

    field.addEventListener("blur", () => {

        if (field.value.trim() === "") {

            field.parentElement.classList.remove("focused");

        }

    });

});


/*==================================================
AUTO-EXPAND TEXTAREA
==================================================*/

const textarea = document.querySelector(
    ".contact-form textarea"
);

if (textarea) {

    textarea.addEventListener("input", function () {

        this.style.height = "auto";

        this.style.height = this.scrollHeight + "px";

    });

}


/*==================================================
PHONE NUMBER SANITIZATION
==================================================*/

const phoneField = document.querySelector(
    '.contact-form input[type="tel"]'
);

if (phoneField) {

    phoneField.addEventListener("input", function () {

        this.value = this.value.replace(
            /[^0-9+\-\s()]/g,
            ""
        );

    });

}


/*==================================================
CHARACTER LIMIT
==================================================*/

if (textarea) {

    const maxCharacters = 1000;

    textarea.setAttribute(
        "maxlength",
        maxCharacters
    );

}