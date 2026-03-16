document.addEventListener('DOMContentLoaded', () => {
    // Custom Cursor
    const cursor = document.getElementById('custom-cursor');
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        cursor.style.opacity = '1';
    });

    document.addEventListener('mousedown', () => {
        cursor.style.transform = 'scale(0.7)';
    });

    document.addEventListener('mouseup', () => {
        cursor.style.transform = 'scale(1)';
    });

    // Reveal on Scroll
    const observerOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            } else {
                // Optional: Remove active class if you want animations to re-trigger
                // entry.target.classList.remove('active');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => {
        revealObserver.observe(el);
    });

    // Smooth scroll for nav links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetHeader = document.querySelector(targetId);
            if (targetHeader) {
                window.scrollTo({
                    top: targetHeader.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Parallax effect for the hero visual
    document.addEventListener('mousemove', (e) => {
        const orb = document.querySelector('.glass-orb');
        if (orb) {
            const x = (window.innerWidth / 2 - e.clientX) / 25;
            const y = (window.innerHeight / 2 - e.clientY) / 25;
            orb.style.transform = `translate(${x}px, ${y}px)`;
        }
    });

    // Text Blur Shift on Scroll
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroText = document.querySelector('.hero-content h1');
        if (heroText) {
            const blurValue = Math.min(scrolled / 50, 10);
            heroText.style.filter = `blur(${blurValue}px)`;
            heroText.style.opacity = 1 - (scrolled / 500);
        }
    });
});
