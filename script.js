// ================= MOBILE MENU =================

const menuBtn = document.getElementById("menu-btn");

const navbar = document.getElementById("navbar");


menuBtn.addEventListener("click", () => {

    navbar.classList.toggle("active");

});


// Close mobile menu

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");

    });

});


// ================= TYPING EFFECT =================

const words = [

    "CSE Student",
    "Web Developer",
    "Python Programmer",
    "Problem Solver",
    "Tech Enthusiast"

];


let wordIndex = 0;

let charIndex = 0;

let deleting = false;


const typingElement = document.getElementById("typing");


function typeEffect() {

    const currentWord = words[wordIndex];


    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;


        if (charIndex === currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;

        }

    } else {

        typingElement.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;


        if (charIndex === 0) {

            deleting = false;

            wordIndex++;


            if (wordIndex === words.length) {

                wordIndex = 0;

            }

        }

    }


    setTimeout(
        typeEffect,
        deleting ? 60 : 110
    );

}


typeEffect();


// ================= ACTIVE NAVIGATION =================

const sections =
    document.querySelectorAll("section");


const navLinks =
    document.querySelectorAll("nav a");


window.addEventListener("scroll", () => {

    let current = "";


    sections.forEach(section => {

        const sectionTop = section.offsetTop;


        if (window.scrollY >= sectionTop - 150) {

            current =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");


        if (
            link.getAttribute("href") ===
            "#" + current
        ) {

            link.classList.add("active");

        }

    });

});


// ================= CONTACT FORM =================

const contactForm =
    document.getElementById("contact-form");


contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    alert(
        "Thank you! Your message has been received."
    );

    contactForm.reset();

});