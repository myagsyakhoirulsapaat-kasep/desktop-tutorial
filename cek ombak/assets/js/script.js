
/* =========================
   1. MENU NAVBAR
========================= */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function() {
    navLinks.classList.toggle("show");
});


/* =========================
   2. TUTUP MENU SETELAH DIKLIK
========================= */

const menuItems = document.querySelectorAll(".nav-links a");

menuItems.forEach(function(item) {
    item.addEventListener("click", function() {
        navLinks.classList.remove("show");
    });
});


/* =========================
   3. TAHUN OTOMATIS
========================= */

const year = document.getElementById("year");
year.textContent = new Date().getFullYear();


/* =========================
   4. MENU AKTIF SAAT SCROLL
========================= */

const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", function() {

    let current = "";

    sections.forEach(function(section) {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute("id");
        }
    });

    menuItems.forEach(function(item) {
        item.classList.remove("active");
        if (item.getAttribute("href") === "#" + current) {
            item.classList.add("active");
        }
    });

    /* Navbar glow saat scroll */
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});


/* =========================
   5. KURSOR KUSTOM
========================= */

const cursor = document.getElementById("cursor");
const cursorRing = document.getElementById("cursorRing");

let mouseX = 0, mouseY = 0;
let ringX = 0, ringY = 0;

document.addEventListener("mousemove", function(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;

    cursor.style.left = mouseX + "px";
    cursor.style.top = mouseY + "px";
});

/* Ring mengikuti dengan sedikit delay */
function animateRing() {
    ringX += (mouseX - ringX) * 0.15;
    ringY += (mouseY - ringY) * 0.15;

    cursorRing.style.left = ringX + "px";
    cursorRing.style.top = ringY + "px";

    requestAnimationFrame(animateRing);
}
animateRing();

/* Efek saat hover link / tombol */
const hoverables = document.querySelectorAll("a, button, .project-card, .stat-item, .spider-circle");

hoverables.forEach(function(el) {
    el.addEventListener("mouseenter", function() {
        cursor.style.transform = "translate(-50%, -50%) scale(2)";
        cursor.style.background = "rgba(64, 186, 255, 0.5)";
        cursorRing.style.transform = "translate(-50%, -50%) scale(1.5)";
        cursorRing.style.borderColor = "#40baff";
    });

    el.addEventListener("mouseleave", function() {
        cursor.style.transform = "translate(-50%, -50%) scale(1)";
        cursor.style.background = "#40baff";
        cursorRing.style.transform = "translate(-50%, -50%) scale(1)";
        cursorRing.style.borderColor = "rgba(64, 186, 255, 0.5)";
    });
});


/* =========================
   6. SCROLL REVEAL ANIMASI
========================= */

const revealElements = document.querySelectorAll(".reveal, .reveal-left, .reveal-right");

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            /* Tambahkan sedikit delay berdasarkan urutan elemen */
            const delay = entry.target.dataset.delay || 0;
            setTimeout(function() {
                entry.target.classList.add("visible");
            }, delay);
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.12
});

/* Beri delay bertahap untuk elemen dalam satu grup */
revealElements.forEach(function(el, i) {
    /* Hitung delay berdasarkan posisi dalam parent */
    const siblings = el.parentElement.querySelectorAll(".reveal, .reveal-left, .reveal-right");
    let siblingIndex = 0;
    siblings.forEach(function(sib, j) {
        if (sib === el) siblingIndex = j;
    });
    el.dataset.delay = siblingIndex * 100;

    observer.observe(el);
});
