const imageBox2 = document.getElementById("clothImageBox2");
const img2 = document.getElementById("clothImage2");

imageBox2.addEventListener("mousemove", (e) => {
    const rect2 = imageBox2.getBoundingClientRect();
    const x2 = (e.clientX - rect2.left) / rect2.width * 100;
    const y2 = (e.clientY - rect2.top) / rect2.height * 100;

    img2.style.transformOrigin = `${x2}% ${y2}%`;
    img2.style.transform = "scale(2)";
});

imageBox2.addEventListener("mouseleave", () => {
    img2.style.transform = "scale(1)";
});

const arrowLeft2 = document.getElementById("arrowLeft2");
let toggle2 = false;

arrowLeft2.addEventListener("click", () => {
    toggle2 = !toggle2;

    img2.src = toggle2
        ? "coloradotshirtback.png"  
        : "coloradotshirtfront.png"; 
});