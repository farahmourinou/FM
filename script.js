document.addEventListener("DOMContentLoaded", function () {

    // =============================
    // Typing Effect
    // =============================

    const words = [
        "Intelligent Systems.",
        "AI Models.",
        "Computer Vision Solutions.",
        "Deep Learning Architectures."
    ];

    let i = 0;
    let j = 0;
    let isDeleting = false;

    const typing = document.querySelector(".typing");

    if (typing) {
        function typeEffect() {
            let current = words[i];

            if (!isDeleting) {
                typing.textContent = current.substring(0, j++);
                if (j > current.length) {
                    isDeleting = true;
                    setTimeout(typeEffect, 1000);
                    return;
                }
            } else {
                typing.textContent = current.substring(0, j--);
                if (j === 0) {
                    isDeleting = false;
                    i = (i + 1) % words.length;
                }
            }

            setTimeout(typeEffect, isDeleting ? 50 : 100);
        }

        typeEffect();
    }

    // =============================
    // Custom Cursor
    // =============================

    const cursor = document.querySelector(".cursor");

    if (cursor) {
        document.addEventListener("mousemove", e => {
            cursor.style.left = e.clientX + "px";
            cursor.style.top = e.clientY + "px";
        });

        document.querySelectorAll("a, .btn, .card").forEach(el => {
            el.addEventListener("mouseenter", () => {
                cursor.classList.add("active");
            });
            el.addEventListener("mouseleave", () => {
                cursor.classList.remove("active");
            });
        });
    }

    // =============================
    // Scroll Reveal
    // =============================

    const reveals = document.querySelectorAll(".reveal");

    if (reveals.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("active");
                }
            });
        }, { threshold: 0.15 });

        reveals.forEach(reveal => observer.observe(reveal));
    }

    // =============================
    // Stats Animation
    // =============================

    const statCards = document.querySelectorAll(".reveal-stat");

    if (statCards.length > 0) {
        const statObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("active");
                }
            });
        }, { threshold: 0.2 });

        statCards.forEach(card => statObserver.observe(card));
    }

    // =============================
    // Language Toggle
    // =============================

    const translations = {
        fr: {
            nav_home: "Accueil",
            nav_about: "À propos",
            nav_skills: "Compétences",
            nav_education: "Formation",
            nav_experience: "Expérience",
            nav_projects: "Projets",
            nav_contact: "Contact"
        },
        en: {
            nav_home: "Home",
            nav_about: "About",
            nav_skills: "Skills",
            nav_education: "Education",
            nav_experience: "Experience",
            nav_projects: "Projects",
            nav_contact: "Contact"
        }
    };

    const frBtn = document.getElementById("frBtn");
    const enBtn = document.getElementById("enBtn");

    function setLanguage(lang) {
    document.querySelectorAll("[data-key]").forEach(el => {
        const key = el.getAttribute("data-key");
        // Vérifie si la traduction existe pour éviter de vider le texte
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
        if (frBtn && enBtn) {
            frBtn.classList.toggle("active", lang === "fr");
            enBtn.classList.toggle("active", lang === "en");
        }

        localStorage.setItem("language", lang);
    }

    if (frBtn && enBtn) {
        frBtn.addEventListener("click", () => setLanguage("fr"));
        enBtn.addEventListener("click", () => setLanguage("en"));
    }

    const savedLang = localStorage.getItem("language") || "fr";
    setLanguage(savedLang);

    // =============================
    // Dark Mode Toggle
    // =============================

    const toggle = document.getElementById("themeToggle");

    // Remplacez la partie toggle par ceci :
if (toggle) {
    toggle.addEventListener("click", () => {
        document.body.classList.toggle("dark");
        const icon = toggle.querySelector(".icon") || toggle;
        icon.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
    });
}

});
