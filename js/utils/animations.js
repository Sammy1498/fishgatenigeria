 function revealElement(selector, trigger, delayOffset = 0) {
    const elements = gsap.utils.toArray(selector);

    elements.forEach((el, i) => {
        // Adjust duration for headings
        let duration = 1.2;
        if (el.tagName === 'H1' || el.tagName === 'H2') duration = 1.6;

        gsap.from(el, {
            scrollTrigger: {
                trigger: trigger || el,
                start: 'top 85%',
                toggleActions: 'play none none none'
            },
            y: 100,
            opacity: 0,
            duration: duration,
            delay: (i * 0.1) + delayOffset,
            ease: 'power4.out',
            clearProps: 'all'
        });
    });
}
