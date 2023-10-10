const videoListButton_Open = document.querySelector('.video-container__list-button_open');
const videoListButton_Close = document.querySelector('.video-container__list-button_close');

const videoContainerWrapper = document.querySelector('.video-container__wrapper');
const videoList = document.querySelector('.video-list')

if(videoListButton_Open) {
    videoListButton_Open.addEventListener("click", function() {
        videoContainerWrapper.style.opacity = "0";
        videoList.style.display = "flex";
    });
}

if(videoListButton_Close) {
    videoListButton_Close.addEventListener("click", function() {
        videoContainerWrapper.style.opacity = "1";
        videoList.style.display = "none";
    });
}