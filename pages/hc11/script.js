function hoverImage(element) {
  element.style.opacity = '1';
}

function unhoverImage(element) {
  element.style.opacity = '0.75';
}


// Function to set a random position for an element
function setRandomPosition(element) {
  const maxX = window.innerWidth - element.clientWidth;
  const maxY = window.innerHeight - element.clientHeight;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  element.style.left = `${randomX}px`;
  element.style.top = `${randomY}px`;
}

// Call setRandomPosition for each image on page load
window.onload = function () {
  const images = document.querySelectorAll('.floating-image');
  
  images.forEach(function (image) {
    setRandomPosition(image);
  });
};

// Optionally, update positions periodically
setInterval(function () {
  const images = document.querySelectorAll('.floating-image');
  
  images.forEach(function (image) {
    setRandomPosition(image);
  });
}, 5000); // Update every 5 seconds (adjust as needed)
