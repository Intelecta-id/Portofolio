document.addEventListener('DOMContentLoaded', () => {
    
    // Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle
    const mobileToggle = document.getElementById('mobile-toggle');
    const navLinks = document.getElementById('nav-links');
    const navItems = document.querySelectorAll('.nav-link');
    
    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            
            const icon = mobileToggle.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('ph-list');
                icon.classList.add('ph-x');
                navbar.classList.add('scrolled');
            } else {
                icon.classList.remove('ph-x');
                icon.classList.add('ph-list');
                if (window.scrollY <= 50) {
                    navbar.classList.remove('scrolled');
                }
            }
        });
    }

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                const icon = mobileToggle.querySelector('i');
                icon.classList.remove('ph-x');
                icon.classList.add('ph-list');
            }
        });
    });

    // Intersection Observer — Scroll Animations
    const revealElements = document.querySelectorAll('.reveal');
    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('active');
        });
    }, revealOptions);
    revealElements.forEach(el => revealObserver.observe(el));

    setTimeout(() => {
        revealElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 50) el.classList.add('active');
        });
    }, 100);


    // =============================================
    // Special Menu Carousel
    // =============================================
    const track      = document.getElementById('specialTrack');
    const dots       = document.querySelectorAll('#specialDots .carousel-dot');
    const prevBtn    = document.getElementById('specialPrev');
    const nextBtn    = document.getElementById('specialNext');

    if (!track) return;

    const totalSlides = track.children.length;
    let currentIndex  = 0;
    let autoPlayTimer = null;

    function goToSlide(index) {
        // Wrap around
        if (index < 0) index = totalSlides - 1;
        if (index >= totalSlides) index = 0;

        currentIndex = index;
        
        // Calculate exact width of one slide to avoid percentage translation bugs
        const slideWidth = track.children[0].getBoundingClientRect().width;
        track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;

        // Update dots
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === currentIndex);
        });
    }

    function startAutoPlay() {
        autoPlayTimer = setInterval(() => goToSlide(currentIndex + 1), 5000);
    }

    function stopAutoPlay() {
        clearInterval(autoPlayTimer);
    }

    // Arrow buttons
    prevBtn.addEventListener('click', () => {
        stopAutoPlay();
        goToSlide(currentIndex - 1);
        startAutoPlay();
    });

    nextBtn.addEventListener('click', () => {
        stopAutoPlay();
        goToSlide(currentIndex + 1);
        startAutoPlay();
    });

    // Dot buttons
    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            stopAutoPlay();
            goToSlide(parseInt(dot.dataset.index));
            startAutoPlay();
        });
    });

    // Touch / Swipe support
    let touchStartX = 0;
    let touchEndX   = 0;

    track.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].clientX;
    }, { passive: true });

    track.addEventListener('touchend', e => {
        touchEndX = e.changedTouches[0].clientX;
        const diff = touchStartX - touchEndX;
        if (Math.abs(diff) > 40) {
            stopAutoPlay();
            goToSlide(diff > 0 ? currentIndex + 1 : currentIndex - 1);
            startAutoPlay();
        }
    }, { passive: true });

    // Keyboard support
    document.addEventListener('keydown', e => {
        if (e.key === 'ArrowLeft')  { stopAutoPlay(); goToSlide(currentIndex - 1); startAutoPlay(); }
        if (e.key === 'ArrowRight') { stopAutoPlay(); goToSlide(currentIndex + 1); startAutoPlay(); }
    });

    // Fix translation on window resize
    window.addEventListener('resize', () => {
        goToSlide(currentIndex);
    });

    // Init
    goToSlide(0);
    startAutoPlay();

});
