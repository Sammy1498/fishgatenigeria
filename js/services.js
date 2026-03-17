function initServicesScroll() {
    const servicesModule = document.querySelector('.services-module');
    const horizontalTrack = document.querySelector('.services-horizontal-track');
    const isMobile = window.innerWidth <= 768;

    if (servicesModule && horizontalTrack) {

        // Only enable horizontal scroll on desktop
        if (!isMobile) {
            gsap.to(horizontalTrack, {
                xPercent: -75,
                ease: "none",
                scrollTrigger: {
                    trigger: servicesModule,
                    start: "top top",
                    end: () => `+=${horizontalTrack.offsetWidth - window.innerWidth}`,
                    pin: true,
                    scrub: 1,
                    anticipatePin: 1
                }
            });
        }

        // Per-panel animations
        const panels = gsap.utils.toArray('.layout-467');
        panels.forEach((panel, i) => {
            const title = panel.querySelector('.sub-title');
            const desc = panel.querySelector('.sub-desc');
            const listItems = panel.querySelectorAll('.list-item');

            gsap.from([title, desc, ...listItems], {
                scrollTrigger: {
                    trigger: panel,
                    start: isMobile ? "top 80%" : "left center"
                },
                y: 40,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
                stagger: 0.1
            });
        });
    }
}
