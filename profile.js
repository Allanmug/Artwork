document.addEventListener('DOMContentLoaded', function() {
    // Smooth Scrolling for Anchor Links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Fade-in Animations on Scroll
    const faders = document.querySelectorAll('.fade-in');
    const appearOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('appear');
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

    // Timeline Item Pop-up Interaction
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => {
        item.addEventListener('click', function() {
            const content = this.querySelector('.timeline-content');
            content.classList.toggle('active');
            this.classList.toggle('highlight');
        });
    });

    // Hover Effects for Images
    const images = document.querySelectorAll('.gallery-item img, .bio-images img');
    images.forEach(image => {
        image.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.1)';
            this.style.transition = 'transform 0.5s ease-in-out';
            this.style.filter = 'brightness(1.2)';
        });

        image.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
            this.style.filter = 'brightness(1)';
        });
    });

    // Dynamic Background Animation
    const heroSection = document.querySelector('.hero');
    window.addEventListener('scroll', function() {
        let offset = window.scrollY;
        heroSection.style.backgroundPositionY = offset * 0.7 + 'px';
    });

    // Scroll to Top Button
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.textContent = '↑';
    scrollToTopBtn.classList.add('scroll-to-top');
    document.body.appendChild(scrollToTopBtn);

    window.addEventListener('scroll', function() {
        if (window.scrollY > 200) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    });

    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Welcome Message for First-Time Visitors
    const isReturningVisitor = localStorage.getItem('returningVisitor');
    if (!isReturningVisitor) {
        const welcomeMessage = document.createElement('div');
        welcomeMessage.classList.add('welcome-message');
        welcomeMessage.textContent = 'Welcome to our website! Enjoy your first visit!';
        document.body.appendChild(welcomeMessage);

        setTimeout(() => {
            welcomeMessage.classList.add('fade-out');
            setTimeout(() => {
                welcomeMessage.remove();
            }, 1000);
        }, 3000);

        localStorage.setItem('returningVisitor', 'true');
    } else {
        const returningMessage = document.createElement('div');
        returningMessage.classList.add('returning-message');
        returningMessage.textContent = 'Welcome back!';
        document.body.appendChild(returningMessage);

        setTimeout(() => {
            returningMessage.classList.add('fade-out');
            setTimeout(() => {
                returningMessage.remove();
            }, 1000);
        }, 2000);
    }
});
