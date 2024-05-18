// document.addEventListener("mousemove", parallax);

// function parallax(e) {
//     const bgImage = document.querySelector("#bg-image");
//     if (bgImage) {
//         let _w = window.innerWidth / 2;
//         let _h = window.innerHeight / 2;
//         let _mouseX = e.clientX;
//         let _mouseY = e.clientY;
//         // Apply easing equation (example: easeOutQuad)
//         let easedX = easeOutQuad(_mouseX - _w, 0, 1, window.innerWidth / 2);
//         let easedY = easeOutQuad(_mouseY - _h, 0, 1, window.innerHeight / 2);
//         bgImage.style.backgroundPosition = `
//             calc(50% - ${easedX * 20}px) calc(50% - ${easedY * 20}px)
//         `;
//     }
// }

// // Easing function: Quadratic easing out (https://easings.net/en)
// function easeOutQuad(t, b, c, d) {
//     t /= d;
//     return -c * t * (t - 2) + b;
// }
