 function initFooterParallax() {
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
}
