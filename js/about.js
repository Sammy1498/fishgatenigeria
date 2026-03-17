 function initAboutVideo() {
    const aboutSection = document.querySelector('.about-video-section');
    if (!aboutSection) return;

    const title = aboutSection.querySelector('.sub-title');
    const desc = aboutSection.querySelector('.sub-desc');
    const video = aboutSection.querySelector('.video-player');

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: aboutSection,
            start: 'top 70%'
        }
    });

    if (title) tl.from(title, { y: 60, opacity: 0, duration: 1.4, ease: 'power4.out' });
    if (desc) tl.from(desc, { y: 40, opacity: 0, duration: 1.2, ease: 'power3.out' }, '-=1');
    if (video) tl.from(video, { scale: 1.05, opacity: 0, duration: 2, ease: 'power2.out' }, '-=1.5');
}
