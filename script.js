gsap.registerPlugin(ScrollTrigger);

initHeroAnimations();
initFeatureAnimations();
initServicesScroll();
initAboutVideo();
initFooterParallax();

window.addEventListener('load', () => ScrollTrigger.refresh());