// Typewriter Effect

const texts = ["DIGITAL ARTIST", "DEVELOPER", "DESIGNER"];
let speed = 100;
const textElement = document.querySelector(".typewriter-text");
let textIndex = 0;
let charIndex = 0;

function typeWriter() {
    if (charIndex < texts[textIndex].length) {
        textElement.textContent += texts[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, speed);
    } else {
        setTimeout(eraseText, 1000);
    }
}

function eraseText() {
    if (textElement.textContent.length > 0) {
        textElement.textContent = textElement.textContent.slice(0, -1);
        setTimeout(eraseText, 50);
    } else {
        textIndex = (textIndex + 1) % texts.length;
        charIndex = 0;
        setTimeout(typeWriter, 500);
    }
}

// Περιμένουμε πρώτα να φορτωθεί το DOM
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(typeWriter, 500);
});