/* =================================
   PORTFOLIO INTERACTIONS
================================= */


/* Mouse movement effect */

document.addEventListener("mousemove", function (event) {

    const dots = document.querySelectorAll(".data-dot");

    const x = (event.clientX / window.innerWidth - 0.5) * 20;
    const y = (event.clientY / window.innerHeight - 0.5) * 20;

    dots.forEach(function (dot, index) {

        const multiplier = index + 1;

        dot.style.transform =
            `translate(${x * multiplier}px, ${y * multiplier}px)`;

    });

});


/* Reveal sections while scrolling */

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },
    {
        threshold: 0.15
    }
);


sections.forEach(function (section) {

    section.style.opacity = "0";
    section.style.transform = "translateY(30px)";
    section.style.transition =
        "opacity 0.8s ease, transform 0.8s ease";

    observer.observe(section);

});


/* Active navigation link */

const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", function () {

    let currentSection = "";

    sections.forEach(function (section) {

        const sectionTop = section.offsetTop - 200;

        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }

    });

    navLinks.forEach(function (link) {

        link.style.color = "";

        if (link.getAttribute("href") === "#" + currentSection) {
            link.style.color = "#ffffff";
        }

    });

});


/* Console message */

console.log(
    "Disha Sharma | Data Analytics Portfolio"
);
