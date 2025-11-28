document.querySelectorAll('.color-dot').forEach(dot => {
    dot.addEventListener('mouseenter', () => {
        const color = dot.style.backgroundColor;
        dot.style.setProperty('--tooltip-bg', color);
    });
});