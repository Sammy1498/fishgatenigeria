/* ===================================================
   ABOUT PAGE — GSAP Animations
   THE FISHGATE NIGERIA
   =================================================== */

gsap.registerPlugin(ScrollTrigger);

(function initAboutPageAnimations() {

    const ease = 'power3.out';
    const duration = 0.8;

    // --- ABOUT HERO: Load Animation ---
    const heroTl = gsap.timeline({ delay: 0.15 });

    // Header slide
    heroTl.from('.header', {
        y: -100, opacity: 0,
        duration: 0.8,
        ease: 'power4.out'
    }, 0);

    // Tag fade in
    heroTl.from('.about-hero-tag', {
        y: 20, opacity: 0,
        duration: 0.6,
        ease: ease
    }, 0.3);

    // Split title into words and animate
    const titleEl = document.querySelector('.about-hero-title');
    if (titleEl) {
        titleEl.innerHTML = titleEl.textContent
            .split(' ')
            .map(word => `<span class='word' style='display:inline-block'>${word}</span>`)
            .join(' ');

        heroTl.from('.about-hero-title .word', {
            y: 40, opacity: 0,
            duration: 0.5,
            ease: 'power2.out',
            stagger: 0.04
        }, 0.5);
    }

    // Description
    heroTl.from('.about-hero-desc', {
        y: 30, opacity: 0,
        duration: 0.7,
        ease: ease
    }, 1.0);

    // Floating polaroids pop in
    const floatRotations = [-12, 8, 6, -9];
    document.querySelectorAll('.about-float').forEach((el, i) => {
        gsap.set(el, { opacity: 0, scale: 0.4, rotation: 0 });
    });

    heroTl.to('.af-1', { opacity: 0.6, scale: 1, rotation: -12, duration: 0.5, ease: 'back.out(1.7)' }, 1.2);
    heroTl.to('.af-2', { opacity: 0.6, scale: 1, rotation: 8, duration: 0.5, ease: 'back.out(1.7)' }, 1.35);
    heroTl.to('.af-3', { opacity: 0.6, scale: 1, rotation: 6, duration: 0.5, ease: 'back.out(1.7)' }, 1.5);
    heroTl.to('.af-4', { opacity: 0.6, scale: 1, rotation: -9, duration: 0.5, ease: 'back.out(1.7)' }, 1.65);

    // Floating bob animation for polaroids
    const floatAmounts = [
        { y: -10, dur: 3.4 },
        { y: -14, dur: 2.9 },
        { y: -8, dur: 3.8 },
        { y: -12, dur: 3.1 }
    ];

    document.querySelectorAll('.about-float').forEach((el, i) => {
        gsap.to(el, {
            y: floatAmounts[i].y,
            duration: floatAmounts[i].dur,
            ease: 'sine.inOut',
            repeat: -1,
            yoyo: true,
            delay: i * 0.5 + 2
        });
    });

    // --- Scroll: Hero content fades out ---
    heroTl.then(() => {
        gsap.to('.about-hero-content', {
            scrollTrigger: {
                trigger: '.about-hero',
                start: 'top top',
                end: '40% top',
                scrub: 1,
                invalidateOnRefresh: true
            },
            y: -50,
            opacity: 0,
            ease: 'none'
        });

        // Polaroids disperse on scroll
        document.querySelectorAll('.about-float').forEach((el, i) => {
            const isLeft = i % 2 === 0;
            gsap.to(el, {
                scrollTrigger: {
                    trigger: '.about-hero',
                    start: 'top top',
                    end: 'bottom top',
                    scrub: 1.5,
                    invalidateOnRefresh: true
                },
                x: isLeft ? -80 : 80,
                y: -60,
                opacity: 0,
                ease: 'none'
            });
        });
    });


    // --- STORY SECTION ---
    gsap.from('.story-title', {
        scrollTrigger: {
            trigger: '.about-story',
            start: 'top 75%',
            toggleActions: 'play none none reverse'
        },
        y: 50, opacity: 0,
        duration: 1,
        ease: 'power4.out'
    });

    gsap.from('.story-desc', {
        scrollTrigger: {
            trigger: '.about-story',
            start: 'top 75%',
            toggleActions: 'play none none reverse'
        },
        y: 30, opacity: 0,
        duration: 0.9,
        delay: 0.15,
        ease: ease,
        stagger: 0.12
    });

    // Timeline items stagger in
    gsap.utils.toArray('.timeline-item').forEach((item, i) => {
        gsap.to(item, {
            scrollTrigger: {
                trigger: item,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            },
            y: 0,
            opacity: 1,
            duration: 0.7,
            delay: i * 0.1,
            ease: ease
        });
    });

    // Timeline line draws in
    const timelineLine = document.querySelector('.story-timeline::before');
    gsap.from('.story-timeline', {
        scrollTrigger: {
            trigger: '.story-timeline',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        '--line-height': '0%',
        duration: 1.5,
        ease: 'power2.out'
    });


    // --- MISSION & VISION CARDS ---
    gsap.utils.toArray('.mission-card').forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            },
            y: 80,
            opacity: 0,
            duration: 0.8,
            delay: i * 0.15,
            ease: ease
        });

        // Inner content stagger
        gsap.from(card.querySelector('.mission-card-inner').children, {
            scrollTrigger: {
                trigger: card,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            },
            y: 25,
            opacity: 0,
            stagger: 0.1,
            duration: 0.6,
            delay: i * 0.15 + 0.3,
            ease: 'power2.out'
        });
    });


    // --- TEAM SECTION ---
    gsap.from('.team-title', {
        scrollTrigger: {
            trigger: '.about-team',
            start: 'top 75%',
            toggleActions: 'play none none reverse'
        },
        y: 40, opacity: 0,
        duration: 1,
        ease: 'power4.out'
    });

    gsap.from('.team-desc', {
        scrollTrigger: {
            trigger: '.about-team',
            start: 'top 75%',
            toggleActions: 'play none none reverse'
        },
        y: 25, opacity: 0,
        duration: 0.8,
        delay: 0.15,
        ease: ease
    });

    gsap.utils.toArray('.team-card').forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: '.team-grid',
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            },
            y: 60,
            opacity: 0,
            scale: 0.95,
            duration: 0.7,
            delay: i * 0.12,
            ease: ease
        });
    });


    // --- VALUES SECTION ---
    gsap.from('.values-title', {
        scrollTrigger: {
            trigger: '.about-values',
            start: 'top 75%',
            toggleActions: 'play none none reverse'
        },
        y: 40, opacity: 0,
        duration: 1,
        ease: 'power4.out'
    });

    gsap.utils.toArray('.value-item').forEach((item, i) => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            delay: i * 0.1,
            ease: ease
        });
    });


    // --- CTA SECTION ---
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

    // Refresh on load
    window.addEventListener('load', () => ScrollTrigger.refresh());

})();
