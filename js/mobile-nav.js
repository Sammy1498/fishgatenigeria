/* ===================================================
   MOBILE NAVIGATION — THE FISHGATE NIGERIA
   Hamburger/drawer toggle for screens ≤ 768px
   Shared across all pages
   =================================================== */

(function initMobileNav() {
    const menuTrigger = document.querySelector('.menu-trigger');
    const nav = document.querySelector('.nav');
    const headerInner = document.querySelector('.header-inner');

    if (!menuTrigger || !nav) return;

    // Move to body on mobile to escape GSAP header animations (transform/opacity stacking contexts)
    function handleDomPlacement() {
        if (window.innerWidth <= 768) {
            if (nav.parentNode !== document.body) {
                document.body.appendChild(nav);
                document.body.appendChild(menuTrigger);
            }
        } else {
            if (headerInner && nav.parentNode !== headerInner) {
                headerInner.appendChild(nav);
                headerInner.appendChild(menuTrigger);
            }
        }
    }

    // Run on init and resize
    handleDomPlacement();
    window.addEventListener('resize', handleDomPlacement);

    function openNav() {
        nav.classList.add('is-open');
        document.body.style.overflow = 'hidden';
        menuTrigger.textContent = 'Close';
    }

    function closeNav() {
        nav.classList.remove('is-open');
        document.body.style.overflow = '';
        menuTrigger.textContent = 'Menu';
    }

    menuTrigger.addEventListener('click', () => {
        if (nav.classList.contains('is-open')) {
            closeNav();
        } else {
            openNav();
        }
    });

    // Close nav when clicking a link (for same-page anchors)
    nav.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                closeNav();
            }
        });
    });

    // Close when clicking outside of the popup and trigger
    document.addEventListener('click', (e) => {
        if (nav.classList.contains('is-open') && !nav.contains(e.target) && !menuTrigger.contains(e.target)) {
            closeNav();
        }
    });

    // Close on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && nav.classList.contains('is-open')) {
            closeNav();
        }
    });

    // Reset state on resize past breakpoint
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && nav.classList.contains('is-open')) {
            closeNav();
        }
    });
})();
