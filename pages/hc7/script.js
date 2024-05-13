// JavaScript code for creating and adding 16 image elements to the image grid
const imageGrid = document.querySelector('.image-grid');

// Define an array of image file paths
const imagePaths = [
    'image1.jpg',
    'image2.jpg',
    // Add 14 more image paths here
];

// Create and add image elements to the image grid
imagePaths.forEach((imagePath) => {
    const image = document.createElement('img');
    image.src = imagePath;
    image.alt = 'Image';
    imageGrid.appendChild(image);
});

// JavaScript code for adding hover effects to each image and expanding/contracting the grid
const imageGrid = document.querySelector('.image-grid');
const images = imageGrid.querySelectorAll('img');

imageGrid.addEventListener('mouseenter', () => {
    imageGrid.classList.add('expanded');
});

imageGrid.addEventListener('mouseleave', () => {
    imageGrid.classList.remove('expanded');
});

images.forEach((image) => {
    image.addEventListener('mouseenter', () => {
        image.style.transform = 'scale(1.2)';
    });

    image.addEventListener('mouseleave', () => {
        image.style.transform = 'scale(1)';
    });
});

// JavaScript code for adding hover effects to each image
const imageGrid = document.querySelector('.image-grid');
const images = imageGrid.querySelectorAll('img');

images.forEach((image) => {
    image.addEventListener('mouseenter', () => {
        image.style.transform = 'scale(1.2)';
    });

    image.addEventListener('mouseleave', () => {
        image.style.transform = 'scale(1)';
    });
});

// JavaScript code for adding hover effects to each image
const imageGrid = document.querySelector('.image-grid');
const images = imageGrid.querySelectorAll('img');
const slideshowImages = document.querySelectorAll('.slideshow-image');

let currentImageIndex = 0;
let slideshowInterval;

