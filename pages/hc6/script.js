document.addEventListener("DOMContentLoaded", function () {
    // Get the video-grid element
    const videoGrid = document.querySelector(".video-grid");

    // Example: Generate and add video elements to the grid dynamically
    const videoSources = ["realrx.mp4", "tonyshhnow.mp4", "video3.mp4", "4fo4.mp4"];

    videoSources.forEach((src) => {
        const videoItem = document.createElement("div");
        videoItem.classList.add("video-item");

        const video = document.createElement("video");
        video.autoplay = true;
        video.loop = true;
        video.innerHTML = "Your browser does not support the video tag.";

        const source = document.createElement("source");
        source.src = src;
        source.type = "video/mp4";

        video.appendChild(source);
        videoItem.appendChild(video);
        videoGrid.appendChild(videoItem);
    });

 // Add event listeners to handle video playback on hover
    const randomVideos = document.querySelectorAll(".random-videos video");

    randomVideos.forEach((video) => {
        video.addEventListener("mouseenter", () => {
            video.play();
        });

        video.addEventListener("mouseleave", () => {
            video.pause();
            video.currentTime = 0;
        });
    });
});
