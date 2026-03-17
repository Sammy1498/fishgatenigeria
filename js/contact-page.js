/* ===================================================
   CONTACT PAGE — GSAP Animations
   THE FISHGATE NIGERIA
   =================================================== */

gsap.registerPlugin(ScrollTrigger);

(function initContactPageAnimations() {

    const ease = 'power3.out';

    // --- CONTACT HERO: Load Animation ---
    const heroTl = gsap.timeline({ delay: 0.15 });

    heroTl.from('.header', {
        y: -100, opacity: 0,
        duration: 0.8,
        ease: 'power4.out'
    }, 0);

    heroTl.from('.contact-hero-tag', {
        y: 20, opacity: 0,
        duration: 0.6,
        ease: ease
    }, 0.3);

    // Split title into words
    const titleEl = document.querySelector('.contact-hero-title');
    if (titleEl) {
        titleEl.innerHTML = titleEl.textContent
            .split(' ')
            .map(word => `<span class='word' style='display:inline-block'>${word}</span>`)
            .join(' ');

        heroTl.from('.contact-hero-title .word', {
            y: 40, opacity: 0,
            duration: 0.5,
            ease: 'power2.out',
            stagger: 0.04
        }, 0.5);
    }

    heroTl.from('.contact-hero-desc', {
        y: 30, opacity: 0,
        duration: 0.7,
        ease: ease
    }, 1.0);


    // --- CONTACT FORM Section ---
    gsap.from('.contact-form-heading', {
        scrollTrigger: {
            trigger: '.contact-main',
            start: 'top 75%',
            toggleActions: 'play none none reverse'
        },
        y: 40, opacity: 0,
        duration: 0.9,
        ease: 'power4.out'
    });

    // Form fields stagger in
    gsap.utils.toArray('.form-group').forEach((group, i) => {
        gsap.from(group, {
            scrollTrigger: {
                trigger: '.contact-form',
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            },
            y: 30, opacity: 0,
            duration: 0.6,
            delay: i * 0.08,
            ease: ease
        });
    });

    // Submit button
    gsap.from('.form-submit', {
        scrollTrigger: {
            trigger: '.contact-form',
            start: 'top 70%',
            toggleActions: 'play none none reverse'
        },
        y: 20, opacity: 0,
        duration: 0.6,
        delay: 0.5,
        ease: ease
    });

    // Info cards stagger
    gsap.utils.toArray('.contact-info-card').forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: '.contact-info-wrap',
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            },
            y: 50, opacity: 0,
            duration: 0.7,
            delay: i * 0.1,
            ease: ease
        });
    });


    // --- MAP SECTION ---
    gsap.from('.map-title', {
        scrollTrigger: {
            trigger: '.contact-map-section',
            start: 'top 75%',
            toggleActions: 'play none none reverse'
        },
        y: 40, opacity: 0,
        duration: 1,
        ease: 'power4.out'
    });

    gsap.from('.map-desc', {
        scrollTrigger: {
            trigger: '.contact-map-section',
            start: 'top 75%',
            toggleActions: 'play none none reverse'
        },
        y: 25, opacity: 0,
        duration: 0.8,
        delay: 0.15,
        ease: ease
    });

    gsap.from('.map-embed', {
        scrollTrigger: {
            trigger: '.map-embed',
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        },
        y: 40, opacity: 0,
        scale: 0.98,
        duration: 1,
        ease: ease
    });


    // --- FAQ SECTION ---
    gsap.from('.faq-title', {
        scrollTrigger: {
            trigger: '.contact-faq',
            start: 'top 75%',
            toggleActions: 'play none none reverse'
        },
        y: 40, opacity: 0,
        duration: 1,
        ease: 'power4.out'
    });

    gsap.utils.toArray('.faq-item').forEach((item, i) => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: '.faq-grid',
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            },
            y: 40, opacity: 0,
            duration: 0.7,
            delay: i * 0.1,
            ease: ease
        });
    });


    // --- CTA ---
    gsap.from('.cta-title', {
        scrollTrigger: {
            trigger: '.cta-section',
            start: 'top 75%',
            toggleActions: 'play none none reverse'
        },
        y: 40, opacity: 0,
        duration: 1,
        ease: 'power4.out'
    });

    gsap.from('.cta-actions', {
        scrollTrigger: {
            trigger: '.cta-section',
            start: 'top 70%',
            toggleActions: 'play none none reverse'
        },
        y: 30, opacity: 0,
        duration: 0.8,
        delay: 0.2,
        ease: ease
    });


    // --- FOOTER ---
    gsap.from('.footer-massive-logo', {
        scrollTrigger: {
            trigger: '.footer',
            start: 'top bottom',
            end: 'bottom bottom',
            scrub: true
        },
        y: -50,
        opacity: 0.5,
        ease: 'none'
    });

    window.addEventListener('load', () => ScrollTrigger.refresh());

})();
