function toggleNav() {
    const nav = document.querySelector(".nav");
    const menu = document.querySelector(".menu");
    nav.classList.toggle("active");
    menu.classList.toggle("active");
}

function toggleVideo() {
    const video = document.querySelector(".bg-video");
    const play = document.querySelector(".play");
    const slider = document.querySelector(".swiper");
    const content = document.querySelector(".content");

    video.classList.toggle("active");
    play.classList.toggle("active");
    slider.classList.toggle("active");
    content.classList.toggle("active");
}
