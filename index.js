var jingleButton = document.getElementById("jingle-button")

var jingle = new Audio("./audio/portfolio_website_jingle_2.mp3");


jingleButton.addEventListener("click", function() { 
    jingle.play();
})

document.addEventListener('DOMContentLoaded', function() {
    const banners = document.querySelectorAll('.banner');
    const speed = 0.25;
    let mouseX = 0, mouseY = 0;
    let imgX = 0, imgY = 0;
    let currentBanner = null;
    let resetInterval = null;

    function updateParallax() {
        if (currentBanner) {
            imgX += (mouseX - imgX) * speed;
            imgY += (mouseY - imgY) * speed;

            const img = currentBanner.querySelector('img');
            if (img) {
                img.style.transform = `translate(-50%, -50%) translate(${imgX}px, ${imgY}px)`;
            }
        }
        
        requestAnimationFrame(updateParallax);
    }

    function resetPosition(img) {
        if (resetInterval) {
            clearInterval(resetInterval);
        }

        resetInterval = setInterval(() => {
            imgX += (0 - imgX) * speed;
            imgY += (0 - imgY) * speed;
            img.style.transform = `translate(-50%, -50%) translate(${imgX}px, ${imgY}px)`;

            if (Math.abs(imgX) < 0.1 && Math.abs(imgY) < 0.1) {
                clearInterval(resetInterval);
                resetInterval = null;
                img.style.transform = `translate(-50%, -50%)`;
            }
        }, 16); // approximately 60fps
    }

    banners.forEach((banner) => {
        banner.addEventListener('mouseenter', (e) => {
            if (resetInterval) {
                clearInterval(resetInterval);
                resetInterval = null;
            }
            currentBanner = e.currentTarget;
        });

        banner.addEventListener('mouseleave', () => {
            const img = currentBanner.querySelector('img');
            currentBanner = null;
            mouseX = 0;
            mouseY = 0;
            if (img) {
                resetPosition(img);
            }
        });

        banner.addEventListener('mousemove', (e) => {
            if (currentBanner === e.currentTarget) {
                const rect = currentBanner.getBoundingClientRect();
                mouseX = ((e.clientX - rect.left) / rect.width - 0.5) * 100;
                mouseY = ((e.clientY - rect.top) / rect.height - 0.5) * 100;
            }
        });
    });

    updateParallax();
});

document.addEventListener('DOMContentLoaded', () => {
    const portfolioButton = document.getElementById('portfolio-button');
    const aboutButton = document.getElementById('about-button');
    const portfolioPage = document.getElementById('portfolio-page');
    const aboutPage = document.getElementById('about-page');
    const portfolioBackButton = document.getElementById('portfolio-back-button');
    const aboutBackButton = document.getElementById('about-back-button');
    const bannerContainer = document.getElementById('banner-container');

    portfolioButton.addEventListener('click', () => {
        fadeInPage(portfolioPage);
    });

    aboutButton.addEventListener('click', () => {
        fadeInPage(aboutPage);
    });

    portfolioBackButton.addEventListener('click', () => {
        fadeOutPage(portfolioPage);
    });

    aboutBackButton.addEventListener('click', () => {
        fadeOutPage(aboutPage);
    });

    function fadeInPage(page) {
        page.classList.remove('hidden');
        page.classList.remove('fade-out');
        page.classList.add('page');
        bannerContainer.classList.add('hidden');
    }

    function fadeOutPage(page) {
        page.classList.add('fade-out');
        bannerContainer.classList.remove('hidden');
        bannerContainer.classList.add('fade-in');

        setTimeout(() => {
            page.classList.remove('page');
            page.classList.add('hidden');
            bannerContainer.classList.remove('fade-in');
        }, 500); // Match this duration with the fade-out animation duration
    }
});

feather.replace()