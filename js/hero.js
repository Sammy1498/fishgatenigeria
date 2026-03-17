function initHeroAnimations() {

    const titleEl = document.querySelector('.hero-title');
    if (titleEl) {
        titleEl.innerHTML = titleEl.textContent
            .split(' ')
            .map(word => `<span class='word'>${word}</span>`)
            .join(' ');
    }

    // Hide text and buttons before animating
    gsap.set('.hero-title .word, .hero-desc, .hero-actions .hero-btn', {
        opacity: 0,
        y: 30
    });

    // Hide polaroids — we track their final rotation per element
    // so scrub can return to the correct state
    const floatRotations = [-8, 4, -3, 6, 5, -6, 4, -5];
    gsap.utils.toArray('.hero-float').forEach((float, i) => {
        gsap.set(float, { opacity: 0, scale: 0.5, rotation: 0 });
    });

    // --- LOAD ANIMATION ---
    const heroTl = gsap.timeline({ delay: 0.1 });

    heroTl.from('.header', {
        y: -100,
        opacity: 0,
        duration: 0.8,
        ease: 'power4.out'
    }, 0)

    .to('.hero-title .word', {
        y: 0, opacity: 1,
        duration: 0.5,
        ease: 'power2.out',
        stagger: 0.05
    }, 0.3)

    .to('.hero-desc', {
        y: 0, opacity: 1,
        duration: 0.6,
        ease: 'power2.out'
    }, 0.9)

    .to('.hero-actions .hero-btn', {
        y: 0, opacity: 1,
        duration: 0.4,
        ease: 'power2.out',
        stagger: 0.1
    }, 1.3)

    .to('.img-1', { opacity: 1, scale: 0.85, rotation: -8, duration: 0.5, ease: 'back.out(1.7)' }, 1.6)
    .to('.img-2', { opacity: 1, scale: 0.9,  rotation:  4, duration: 0.5, ease: 'back.out(1.7)' }, 1.75)
    .to('.img-3', { opacity: 1, scale: 0.9,  rotation: -3, duration: 0.5, ease: 'back.out(1.7)' }, 1.9)
    .to('.img-4', { opacity: 1, scale: 0.85, rotation:  6, duration: 0.5, ease: 'back.out(1.7)' }, 2.05)
    .to('.img-5', { opacity: 1, scale: 1.1,  rotation:  5, duration: 0.5, ease: 'back.out(1.7)' }, 2.2)
    .to('.img-6', { opacity: 1, scale: 1.15, rotation: -6, duration: 0.5, ease: 'back.out(1.7)' }, 2.35)
    .to('.img-7', { opacity: 1, scale: 1.15, rotation:  4, duration: 0.5, ease: 'back.out(1.7)' }, 2.5)
    .to('.img-8', { opacity: 1, scale: 1.1,  rotation: -5, duration: 0.5, ease: 'back.out(1.7)' }, 2.65);

    // --- SCROLL ANIMATIONS ---
    // Wait for load animation to fully finish before handing control to ScrollTrigger
    // This stops scrub from fighting the load timeline
    heroTl.then(() => {

        gsap.utils.toArray('.hero-float').forEach((float, i) => {
            const isLeft = i % 2 === 0;
            const isTop = i < 4;

            // Read the current rotation GSAP left the element at
            // so scrub returns to the animated state, not the original gsap.set state
            const currentRotation = gsap.getProperty(float, 'rotation');
            const currentScale = gsap.getProperty(float, 'scaleX'); // scaleX = scale when uniform

            gsap.to(float, {
                scrollTrigger: {
                    trigger: '.hero',
                    start: 'top top',
                    end: 'bottom top',
                    scrub: 1.5,
                    invalidateOnRefresh: true
                },
                x: isLeft ? -60 : 60,
                y: isTop ? -80 : 80,
                opacity: 0,
                rotation: currentRotation,
                scale: currentScale,
                ease: 'none'
            });
        });

        // Hero text fades and rises as user scrolls off
        gsap.to('.hero-content', {
            scrollTrigger: {
                trigger: '.hero',
                start: 'top top',
                end: '40% top',
                scrub: 1,
                invalidateOnRefresh: true
            },
            y: -40,
            opacity: 0,
            ease: 'none'
        });

    });
}