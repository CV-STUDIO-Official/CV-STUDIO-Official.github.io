sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    if (window.scrollY >= sectionTop - 50 && window.scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
    }
    
});