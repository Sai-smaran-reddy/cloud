// Smooth scroll for internal anchor links
document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("a[href^='#']");
    for (const link of links) {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    }

    // Highlight active section while scrolling
    const sections = document.querySelectorAll("section");
    const options = {
        threshold: 0.3
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.borderLeft = "5px solid #007bff";
            } else {
                entry.target.style.borderLeft = "none";
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Add a dynamic greeting based on time of day
    const header = document.querySelector("header");
    const now = new Date();
    const hour = now.getHours();
    let greeting;

    if (hour < 12) {
        greeting = "Good Morning, Smaran!";
    } else if (hour < 18) {
        greeting = "Good Afternoon, Smaran!";
    } else {
        greeting = "Good Evening, Smaran!";
    }

    header.innerHTML = `${greeting} <br><span style="font-size:1.5rem;">Welcome to My Portfolio</span>`;
});
