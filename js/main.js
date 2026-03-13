/**
 * main.js
 * Vanilla JS — no jQuery, no frameworks, no dependencies.
 *
 * Responsibilities (SRP):
 *   1. Scroll-reveal   — fade/translate elements into view on scroll
 *   2. Sidebar state   — highlight the active nav link as sections enter
 */

// ─── 1. Scroll Reveal ─────────────────────────────────────────────────────────
//
// Any element with class="reveal" starts hidden (opacity:0, translateY) and
// gains class="in" once it crosses the viewport threshold.
// Optional modifier classes add staggered delays: reveal-d1, reveal-d2, reveal-d3

const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("in");
                revealObserver.unobserve(entry.target); // animate once, then stop watching
            }
        });
    },
    { threshold: 0.1 },
);

document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

// ─── 2. Active Sidebar Link ───────────────────────────────────────────────────
//
// As a section scrolls into the centre of the viewport, the corresponding
// sidebar link is marked active. rootMargin narrows the trigger zone so the
// transition feels natural rather than jumping at the very top of each section.

const sidebarLinks = document.querySelectorAll(".sidebar-link");
const sectionObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                sidebarLinks.forEach((link) => link.classList.remove("active"));
                const match = document.querySelector(`.sidebar-link[href="#${entry.target.id}"]`);
                if (match) match.classList.add("active");
            }
        });
    },
    { rootMargin: "-40% 0px -55% 0px" },
);

document.querySelectorAll("section[id]").forEach((s) => sectionObserver.observe(s));

// ─── 3. Carousels ─────────────────────────────────────────────────────────────────────
//
// Adds prev/next buttons and dot indicators to every .interest-carousel.
// Scroll-snap handles the actual snapping and touch gestures natively.

document.querySelectorAll(".interest-carousel").forEach((carousel) => {
    const wrapper = carousel.closest(".interest-carousel-wrapper");
    if (!wrapper) return;

    const slides = Array.from(carousel.children);

    // ── Nav buttons ──
    const prevBtn = document.createElement("button");
    prevBtn.className = "carousel-btn carousel-btn-prev";
    prevBtn.setAttribute("aria-label", "Previous");
    prevBtn.textContent = "←";

    const nextBtn = document.createElement("button");
    nextBtn.className = "carousel-btn carousel-btn-next";
    nextBtn.setAttribute("aria-label", "Next");
    nextBtn.textContent = "→";

    wrapper.appendChild(prevBtn);
    wrapper.appendChild(nextBtn);

    // ── Dot indicators ──
    const dotsEl = document.createElement("div");
    dotsEl.className = "carousel-dots";
    slides.forEach((_, i) => {
        const dot = document.createElement("button");
        dot.className = "carousel-dot";
        dot.setAttribute("aria-label", `Slide ${i + 1}`);
        dot.addEventListener("click", () => scrollToIndex(i));
        dotsEl.appendChild(dot);
    });
    wrapper.appendChild(dotsEl);

    const dots = Array.from(dotsEl.children);

    function getActiveIndex() {
        let closest = 0;
        let minDist = Infinity;
        slides.forEach((slide, i) => {
            const dist = Math.abs(slide.offsetLeft - carousel.scrollLeft);
            if (dist < minDist) {
                minDist = dist;
                closest = i;
            }
        });
        return closest;
    }

    function scrollToIndex(i) {
        const target = slides[Math.max(0, Math.min(i, slides.length - 1))];
        carousel.scrollTo({ left: target.offsetLeft, behavior: "smooth" });
    }

    function updateUI() {
        const active = getActiveIndex();
        dots.forEach((dot, i) => dot.classList.toggle("active", i === active));
        prevBtn.disabled = carousel.scrollLeft <= 1;
        nextBtn.disabled = carousel.scrollLeft >= carousel.scrollWidth - carousel.clientWidth - 1;
    }

    prevBtn.addEventListener("click", () => scrollToIndex(getActiveIndex() - 1));
    nextBtn.addEventListener("click", () => scrollToIndex(getActiveIndex() + 1));
    carousel.addEventListener("scroll", updateUI, { passive: true });

    // Sync on resize (widths change)
    new ResizeObserver(updateUI).observe(carousel);
    updateUI();
});
