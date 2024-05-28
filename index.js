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

    banners.forEach((banner) => {
        banner.addEventListener('mouseenter', (e) => {
            currentBanner = e.currentTarget;
        });

        banner.addEventListener('mouseleave', () => {
            const img = currentBanner.querySelector('img');
            currentBanner = null;
            mouseX = 0;
            mouseY = 0;

            // Smoothly move back to resting position
            if (img) {
                const resetInterval = setInterval(() => {
                    imgX += (0 - imgX) * speed;
                    imgY += (0 - imgY) * speed;
                    img.style.transform = `translate(-50%, -50%) translate(${imgX}px, ${imgY}px)`;
                    
                    if (Math.abs(imgX) < 0.1 && Math.abs(imgY) < 0.1) {
                        clearInterval(resetInterval);
                        img.style.transform = `translate(-50%, -50%)`;
                    }
                }, 16); // approximately 60fps
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

feather.replace()