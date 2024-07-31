document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger-menu');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
});


document.querySelectorAll('.show-more-btn').forEach(button => {
    button.addEventListener('click', () => {
        const articleContent = button.previousElementSibling;
        const moreContent = articleContent.querySelector('.more-content');
        if (moreContent.style.display === 'none' || !moreContent.style.display) {
            moreContent.style.display = 'inline';
            button.textContent = 'Show Less';
        } else {
            moreContent.style.display = 'none';
            button.textContent = 'Show More';
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const shareButtons = document.querySelectorAll('.btn-share');

    shareButtons.forEach(button => {
        button.addEventListener('click', function() {
            const link = this.getAttribute('data-link');
            navigator.clipboard.writeText(window.location.origin + '/' + link)
                .then(() => {
                    const originalText = this.textContent;
                    this.textContent = "Copied link";
                    setTimeout(() => {
                        this.textContent = originalText;
                    }, 4000);
                })
                .catch(err => {
                    console.error('Could not copy text: ', err);
                });
        });
    });
});

// JavaScript for the scroll-to-top button
window.addEventListener('scroll', function() {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    if (window.pageYOffset > 300) { // Show button after scrolling 300px
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

document.getElementById('scrollToTopBtn').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


