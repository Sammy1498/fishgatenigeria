/* ===================================================
   ADVOCACY PAGE — GSAP Animations
   THE FISHGATE NIGERIA
   =================================================== */

gsap.registerPlugin(ScrollTrigger);

(function initAdvocacyPageAnimations() {

    const ease = 'power3.out';

    // --- HERO ---
    const heroTl = gsap.timeline({ delay: 0.15 });

    heroTl.from('.header', {
        y: -100, opacity: 0,
        duration: 0.8,
        ease: 'power4.out'
    }, 0);

    heroTl.from('.advocacy-hero-tag', {
        y: 20, opacity: 0,
        duration: 0.6,
        ease: ease
    }, 0.3);

    const titleEl = document.querySelector('.advocacy-hero-title');
    if (titleEl) {
        titleEl.innerHTML = titleEl.textContent
            .split(' ')
            .map(word => `<span class='word' style='display:inline-block'>${word}</span>`)
            .join(' ');

        heroTl.from('.advocacy-hero-title .word', {
            y: 50, opacity: 0,
            duration: 0.6,
            ease: 'power2.out',
            stagger: 0.05
        }, 0.5);
    }

    heroTl.from('.advocacy-hero-desc', {
        y: 30, opacity: 0,
        duration: 0.8,
        ease: ease
    }, 1.1);

    // Floating polaroids
    gsap.utils.toArray('.advocacy-float').forEach((img, i) => {
        heroTl.to(img, {
            opacity: 1,
            duration: 1,
            ease: 'power2.out'
        }, 1.3 + (i * 0.2));

        // Float effect loop
        gsap.to(img, {
            y: 'random(-15, 15)',
            rotation: 'random(-5, 5)',
            duration: 'random(3, 5)',
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut'
        });
    });


    // --- STATS ---
    gsap.utils.toArray('.stat-card').forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: '.advocacy-stats',
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            },
            y: 40, opacity: 0,
            duration: 0.8,
            delay: i * 0.15,
            ease: ease
        });
    });


    // --- INITIATIVES ---
    gsap.from(['.initiatives-title', '.initiatives-desc'], {
        scrollTrigger: {
            trigger: '.initiatives-header',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        y: 40, opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power4.out'
    });

    gsap.utils.toArray('.initiative-card').forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: '.initiatives-grid',
                start: 'top 75%',
                toggleActions: 'play none none reverse'
            },
            y: 60, opacity: 0,
            duration: 0.9,
            delay: i * 0.2,
            ease: ease
        });
    });


    // --- PARTNERS ---
    gsap.from(['.partners-title', '.partners-desc', '.col-text .hero-btn'], {
        scrollTrigger: {
            trigger: '.advocacy-partners',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        y: 40, opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power4.out'
    });

    gsap.utils.toArray('.partner-logo').forEach((logo, i) => {
        gsap.from(logo, {
            scrollTrigger: {
                trigger: '.partners-grid',
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            },
            scale: 0.9, opacity: 0,
            duration: 0.6,
            delay: i * 0.1,
            ease: "back.out(1.5)"
        });
    });


    // --- CTA & FOOTER ---
    gsap.from('.cta-title', {
        scrollTrigger: { trigger: '.cta-section', start: 'top 75%', toggleActions: 'play none none reverse' },
        y: 40, opacity: 0, duration: 1, ease: 'power4.out'
    });

    gsap.from('.cta-actions', {
        scrollTrigger: { trigger: '.cta-section', start: 'top 70%', toggleActions: 'play none none reverse' },
        y: 30, opacity: 0, duration: 0.8, delay: 0.2, ease: ease
    });

    gsap.from('.footer-massive-logo', {
        scrollTrigger: { trigger: '.footer', start: 'top bottom', end: 'bottom bottom', scrub: true },
        y: -50, opacity: 0.5, ease: 'none'
    });

    window.addEventListener('load', () => ScrollTrigger.refresh());

})();
