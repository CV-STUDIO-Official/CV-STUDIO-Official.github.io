
  // Λίστα εικόνων
  const images = [
    "flatramp.png",
    "grindledge.png",
    "grindrail.png",
    "vertramps.png",
    "vertflatramp.png",
    "curvedramp.png"
  ];

  let currentIndex = 0;

  function showImage() {
    document.getElementById("slider-image").src = images[currentIndex];
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage();
  }

  function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage();
  }

