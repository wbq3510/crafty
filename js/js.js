const burger = document.querySelector(".hamburger");
const iconburger = document.querySelector(".fa-bars");
const iconX = document.querySelector(".fa-times");
const column = document.querySelector("aside");
// const rgba = document.querySelector(".rgba");

burger.addEventListener('click', function(){
    iconburger.classList.toggle('show');
    iconX.classList.toggle('show');
    column.classList.toggle('show');
    // rgba.classList.toggle('active');
})