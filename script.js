/*========================================
        STICKY NAVBAR ON SCROLL
========================================*/

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.classList.add("sticky");

    } else {

        header.classList.remove("sticky");

    }

});


/*========================================
        SMOOTH SCROLL
========================================*/

const navLinks = document.querySelectorAll('a[href^="#"]');

navLinks.forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});


/*========================================
        ACTIVE NAVIGATION LINK
========================================*/

const sections = document.querySelectorAll("section");

const menuLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    menuLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

/*========================================
        SCROLL REVEAL ANIMATION
========================================*/

const revealElements = document.querySelectorAll(

    ".hero-content, .hero-visual, .stat-box, .about-content, .service-card, .project-card, .contact-content"

);

function revealOnScroll() {

    const windowHeight = window.innerHeight;

    revealElements.forEach((element) => {

        const revealTop = element.getBoundingClientRect().top;

        if (revealTop < windowHeight - 120) {

            element.classList.add("show");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();



/*========================================
        ANIMATED COUNTERS
========================================*/

const counters = document.querySelectorAll(".stat-box h2");

const speed = 200;

function startCounter() {

    counters.forEach(counter => {

        const target = parseInt(counter.innerText);

        const suffix = counter.innerText.replace(/[0-9]/g, "");

        let count = 0;

        const increment = target / speed;

        const updateCounter = () => {

            if (count < target) {

                count += increment;

                counter.innerText = Math.ceil(count) + suffix;

                requestAnimationFrame(updateCounter);

            }

            else {

                counter.innerText = target + suffix;

            }

        };

        updateCounter();

    });

}

let counterStarted = false;

window.addEventListener("scroll", () => {

    const stats = document.querySelector(".stats");

    if (!stats) return;

    const position = stats.getBoundingClientRect().top;

    if (position < window.innerHeight && !counterStarted) {

        startCounter();

        counterStarted = true;

    }

});



/*========================================
      PROGRESS BAR ANIMATION
========================================*/

const progressBars = document.querySelectorAll(".progress-bar");

function animateBars() {

    progressBars.forEach(bar => {

        const width = bar.classList.contains("html")
            ? "95%"
            : bar.classList.contains("css")
            ? "92%"
            : "85%";

        bar.style.width = width;

    });

}

window.addEventListener("load", () => {

    progressBars.forEach(bar => {

        bar.style.width = "0";

    });

    setTimeout(animateBars, 600);

});

/*========================================
        MOBILE MENU TOGGLE
========================================*/

const menuBtn = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-links");

if (menuBtn) {

    menuBtn.addEventListener("click", () => {

        navMenu.classList.toggle("open");

        menuBtn.classList.toggle("active");

    });

}


/*========================================
        BACK TO TOP BUTTON
========================================*/

const topButton = document.createElement("button");

topButton.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';

topButton.className = "back-to-top";

document.body.appendChild(topButton);

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topButton.classList.add("show-top");

    }

    else {

        topButton.classList.remove("show-top");

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/*========================================
        NAVBAR SHADOW
========================================*/

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 30) {

        navbar.style.boxShadow = "0 10px 35px rgba(0,0,0,.15)";

    }

    else {

        navbar.style.boxShadow = "none";

    }

});