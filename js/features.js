function initFeatureAnimations() {

    const ease = 'power2.out';
    const duration = 0.7;
    const precisionRotations = [-10, 7, 6, -8];

    // --- PRECISION INTRO ---
    gsap.from('.precision-title', {
        scrollTrigger: {
            trigger: '.precision-intro',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 30,
        duration: duration,
        ease: ease
    });

    gsap.from('.precision-desc', {
        scrollTrigger: {
            trigger: '.precision-intro',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 30,
        duration: duration,
        delay: 0.12,
        ease: ease
    });

    // Polaroids pop in like hero polaroids
    gsap.utils.toArray('.precision-float').forEach((el, i) => {
        gsap.set(el, { opacity: 0, scale: 0.5, rotation: 0 });

        gsap.to(el, {
            scrollTrigger: {
                trigger: '.precision-intro',
                start: 'top 70%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0.5,
            scale: 1,
            rotation: precisionRotations[i],
            duration: 0.5,
            delay: i * 0.15,
            ease: 'back.out(1.7)'
        });
    });

    // Floating bob
    const floatAmounts = [
        { y: -12, duration: 3.2 },
        { y: -16, duration: 2.8 },
        { y: -10, duration: 3.6 },
        { y: -14, duration: 3.0 },
    ];

    gsap.utils.toArray('.precision-float').forEach((el, i) => {

        gsap.to(el, {
            y: floatAmounts[i].y,
            duration: floatAmounts[i].duration,
            ease: 'sine.inOut',
            repeat: -1,
            yoyo: true,
            delay: i * 0.4
        });

        // Tilt on hover
        const polaroid = el.querySelector('.polaroid');

        polaroid.addEventListener('mouseenter', () => {
            gsap.to(el, {
                scale: 1.08,
                rotation: gsap.getProperty(el, 'rotation') > 0 ?
                          gsap.getProperty(el, 'rotation') + 4 :
                          gsap.getProperty(el, 'rotation') - 4,
                duration: 0.4,
                ease: 'power2.out'
            });
        });

        polaroid.addEventListener('mouseleave', () => {
            gsap.to(el, {
                scale: 1,
                rotation: precisionRotations[i],
                duration: 0.5,
                ease: 'power2.out'
            });
        });
    });

    // --- PRECISION → CARDS TRANSITION ---
    gsap.to('.precision-intro', {
        scrollTrigger: {
            trigger: '.features-grid',
            start: 'top 60%',
            end: 'top 10%',
            scrub: 1.5        // scrub already reverses on scroll up automatically
        },
        scale: 0.95,
        opacity: 0,
        ease: 'none'
    });

    // --- FEATURE CARDS ---
    // Individual tweens so toggleActions reverse works correctly
    const featureCards = gsap.utils.toArray('.feature-card');
    featureCards.forEach((card, i) => {

        // Card slides in
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            y: 80,
            duration: 0.7,
            delay: i * 0.2,
            ease: 'power3.out'
        });

        // Content reveals inside after card lands
        gsap.from(card.children, {
            scrollTrigger: {
                trigger: card,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            y: 25,
            stagger: 0.1,
            duration: 0.5,
            delay: (i * 0.2) + 0.3,
            ease: ease
        });
    });
}