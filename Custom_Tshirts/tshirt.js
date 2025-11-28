const imageBox = document.getElementById("clothImageBox");
const img = document.getElementById("clothImage");

imageBox.addEventListener("mousemove", (e) => {
    const rect = imageBox.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width * 100;
    const y = (e.clientY - rect.top) / rect.height * 100;

    img.style.transformOrigin = `${x}% ${y}%`;
    img.style.transform = "scale(2)";
});

imageBox.addEventListener("mouseleave", () => {
    img.style.transform = "scale(1)";
});


const arrowLeft = document.getElementById("arrowLeft");
let toggle = false;

arrowLeft.addEventListener("click", () => {
    toggle = !toggle;

    img.src = toggle
        ? "cowboytshirtback.png"
        : "cowboytshirtfront.png";
});

