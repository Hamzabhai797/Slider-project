const left = document.querySelector('.left');
const right = document.querySelector('.right');
const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.image');
let slideNumer = 1;
const image = images.length;
// const nextSlide = () => {
//     slider.style.transform = `translateX(-${slideNumer*260}px)`;
// slideNumer++;
// }

// const getFirstSlide = () => {
    // slider.style.transform = `translateX(0px)`;
    // slideNumer = 1;
// }

left.addEventListener('click', () => {
    if(slideNumer < image){
        slider.style.transform = `translateX(-${slideNumer*260}px)`;
    slideNumer++;
    } else {
        slider.style.transform = `translateX(0px)`;
    slideNumer = 1;
    }
    
})

right.addEventListener('click', () => {
    if(slideNumer < images.length){
        slider.style.transform = `translateX(${slideNumer*260}px)`;
    slideNumer++;
    } else {
        slider.style.transform = `translateX(0px)`;
    slideNumer = -1;
    }
    
})

// 29:0