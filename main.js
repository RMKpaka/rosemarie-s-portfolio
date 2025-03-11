/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link');
const linkAction = () => {
    navMenu.classList.remove('show-menu');
};
navLink.forEach(n => n.addEventListener('click', linkAction));

/*=============== SHADOW HEADER ===============*/
const shadowHeader = () => {
    const header = document.getElementById('header');
    window.scrollY >= 50 ? header.classList.add('shadow-header') : header.classList.remove('shadow-header');
};
window.addEventListener('scroll', shadowHeader);

/*=============== EMAIL FORM SUBMISSION ===============*/
const contactForm = document.getElementById('contact-form'),
    contactMessage = document.getElementById('contact-message');

const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_7rcq80n', 'template_1f5pyau', '#contact-form', 'DHVZw7sH5PnN7QVRv')
        .then(() => {
            contactMessage.textContent = "Message sent successfully ✅";
            contactMessage.style.color = "green";
            setTimeout(() => {
                contactMessage.textContent = '';
            }, 5000);
            contactForm.reset();
        })
        .catch((error) => {
            contactMessage.textContent = "Message not sent ❌";
            contactMessage.style.color = "red";
        });
};

if (contactForm) contactForm.addEventListener('submit', sendEmail);

/*=============== SCROLL REVEAL ANIMATION ===============*/
document.addEventListener("DOMContentLoaded", function () {
    if (typeof ScrollReveal !== "undefined") {
        const sr = ScrollReveal({
            origin: 'top',
            distance: '60px',
            duration: 2500,
            delay: 400
        });

        // Home Section
        sr.reveal(`.home__name, .home__description`, { origin: 'left' });
        sr.reveal(`.home__social, .home__profile-pic`, { origin: 'right' });

        // About Section
        sr.reveal(`.about .section__title`, { origin: 'top' });
        sr.reveal(`.about p`, { origin: 'bottom' });

        // Skills Section
        sr.reveal(`.skills .section__title`, { origin: 'top' });
        sr.reveal(`.skills ul li`, { origin: 'left', interval: 200 });

        // Projects Section
        sr.reveal(`.projects .section__title`, { origin: 'top' });
        sr.reveal(`.projects ul li`, { origin: 'bottom', interval: 200 });

        // Resume Section
        sr.reveal(`.resume .section__title`, { origin: 'top' });
        sr.reveal(`.resume p, .resume iframe`, { origin: 'left' });

        // Education Section
        sr.reveal(`.education .section__title`, { origin: 'top' });
        sr.reveal(`.education p`, { origin: 'bottom' });
        sr.reveal(`.carousel-container`, { origin: 'bottom', distance: '80px', duration: 2000, delay: 500 });

        // Experience Section
        sr.reveal(`.experience .section__title`, { origin: 'top' });
        sr.reveal(`.experience ul li`, { origin: 'right', interval: 200 });

        // Certifications Section
        sr.reveal(`.certifications .section__title`, { origin: 'top' });
        sr.reveal(`.certifications ul li`, { origin: 'left', interval: 200 });

        // Contact Section
        sr.reveal(`.contact .section__title`, { origin: 'top' });
        sr.reveal(`.contact form`, { origin: 'bottom' });

        // QR Code Section
        sr.reveal(`.qr-code .section__title`, { origin: 'top' });
        sr.reveal(`.qr-code img`, { origin: 'right' });
        sr.reveal(`.qr-code p`, { origin: 'bottom' });

        // Chatbot
        sr.reveal(`#chatbot-container`, { origin: 'bottom' });
    } else {
        console.error("ScrollReveal is not defined. Ensure it is included in your HTML file.");
    }
});

/*=============== CAROUSEL FEATURE ===============*/
    let index = 0;
    function moveSlide(step) {
    const slides = document.querySelectorAll(".carousel-image");
    index = (index + step + slides.length) % slides.length;
    slides.forEach((slide, i) => {
    slide.style.display = i === index ? "block" : "none";
});
}

    function autoSlide() {
    moveSlide(1);
    setTimeout(autoSlide, 3000); // Change image every 3 seconds
}

    document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".carousel-image");
    if (slides.length > 0) slides[0].style.display = "block";
    setTimeout(autoSlide, 3000);
});

  /*=============== CHATBOT TOGGLE FUNCTION ===============*/
document.addEventListener("DOMContentLoaded", function () {
    const chatbotHeader = document.querySelector("#chatbot-header");
    const chatbotBox = document.querySelector("#chatbot-box");

    if (!chatbotHeader || !chatbotBox) {
        console.error("Chatbot elements not found!");
        return;
    }

    chatbotHeader.addEventListener("click", function () {
        // Toggle class to show or hide chatbot
        chatbotBox.classList.toggle("show-chatbot");

        // Animate chatbot box smoothly
        if (chatbotBox.classList.contains("show-chatbot")) {
            chatbotBox.style.maxHeight = chatbotBox.scrollHeight + "px";
        } else {
            chatbotBox.style.maxHeight = "0px";
        }
    });
});

/*=============== FLOATING CIRCLE ===============*/
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");

    sections.forEach(section => {
        // Exclude floating shapes in resume and contact sections
        if (section.id === "resume" || section.id === "contact") return;

        for (let i = 0; i < 5; i++) { // Add 5 floating shapes per section
            const floatingShape = document.createElement("div");
            floatingShape.classList.add("floating-shape");

            // Random positioning inside the section
            floatingShape.style.top = `${Math.random() * 80 + 10}%`;
            floatingShape.style.left = `${Math.random() * 80 + 10}%`;

            section.appendChild(floatingShape);
        }
    });
});

/*=============== CHATBOT FUNCTIONALITY ===============*/
document.addEventListener("DOMContentLoaded", function () {
    const chatbotHeader = document.getElementById("chatbot-header");
    const chatbotBox = document.getElementById("chatbot-box");
    const chatbotMessages = document.getElementById("chatbot-messages");
    const inputField = document.getElementById("chatbot-input");
    const sendButton = document.getElementById("chatbot-send");

    if (!chatbotHeader || !chatbotBox || !chatbotMessages || !inputField || !sendButton) {
        console.error("Chatbot elements not found in the DOM.");
        return;
    }

    chatbotHeader.addEventListener("click", function () {
        chatbotBox.style.display = chatbotBox.style.display === "block" ? "none" : "block";
    });

    function getChatbotResponse(userMessage) {
        const lowerCaseMessage = userMessage.toLowerCase();
        if (lowerCaseMessage.includes("hello") || lowerCaseMessage.includes("hi")) {
            return "Hi there! I'm Rosemarie's chatbot. How can I assist you today?";
        } else if (lowerCaseMessage.includes("your name")) {
            return "I'm Rosemarie's chatbot, here to help with portfolio inquiries!";
        } else if (lowerCaseMessage.includes("skills")) {
            return "Rosemarie specializes in cybersecurity, IT support, and network security.";
        } else if (lowerCaseMessage.includes("projects")) {
            return "Rosemarie has worked on Cybersecurity Risk Assessment and IT Automation. Check the Projects section!";
        } else if (lowerCaseMessage.includes("resume")) {
            return "You can download Rosemarie's resume from the Resume section.";
        } else if (lowerCaseMessage.includes("contact")) {
            return "Use the Contact section to send Rosemarie a message.";
        } else if (lowerCaseMessage.includes("experience")) {
            return "Rosemarie has experience as an IT Support Technician, a Patient Care Technician, and an Administrative Assistant.";
        } else if (lowerCaseMessage.includes("education")) {
            return "Rosemarie is pursuing a Bachelor's in Computer Technology, Health Technology, and Cybersecurity at Bowie State University.";
        } else if (lowerCaseMessage.includes("certifications")) {
            return "Rosemarie holds certifications including CompTIA Security+, Phlebotomy Technologist, and Clinical Nursing Assistant.";
        } else if (lowerCaseMessage.includes("thank you")) {
            return "You're welcome! Thank you for visiting my portfolio. Good bye!";
        } else {
            return "I'm not sure I understand. Can you try rephrasing your question?";
        }
    }

    function sendChatMessage() {
        const userMessage = inputField.value.trim();
        if (userMessage === "") return;

        const userMessageElement = document.createElement("p");
        userMessageElement.innerHTML = `<strong>You:</strong> ${userMessage}`;
        chatbotMessages.appendChild(userMessageElement);

        inputField.value = "";
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;

        setTimeout(() => {
            const botReply = getChatbotResponse(userMessage);
            const botMessageElement = document.createElement("p");
            botMessageElement.innerHTML = `<strong>Bot:</strong> ${botReply}`;
            chatbotMessages.appendChild(botMessageElement);
            chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
        }, 500);
    }

    sendButton.addEventListener("click", sendChatMessage);
    inputField.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            sendChatMessage();
        }
    });
});
