document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scroll behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add card hover effects
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });

        card.addEventListener('click', function() {
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 100);
        });
    });

    // Add search bar functionality
    const searchBar = document.querySelector('.search-bar input');
    if (searchBar) {
        searchBar.addEventListener('focus', function() {
            this.parentElement.style.boxShadow = '0 0 0 2px var(--primary-color)';
        });

        searchBar.addEventListener('blur', function() {
            this.parentElement.style.boxShadow = 'none';
        });
    }

    // Add background animation
    const background = document.querySelector('.background-animation');
    if (background) {
        let position = 0;
        setInterval(() => {
            position++;
            background.style.backgroundPosition = `${position}px ${position}px`;
        }, 50);
    }

    // Add notification badge animation
    const notifications = document.querySelectorAll('.notification');
    notifications.forEach(notification => {
        notification.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.1)';
        });

        notification.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
        });
    });
});