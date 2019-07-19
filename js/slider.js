

const first = document.querySelector(".slider1");
const second = document.querySelector(".slider2");
const third = document.querySelector(".slider3");

const button1 = document.querySelector(".button1");
const button2 = document.querySelector(".button2");
const button3 = document.querySelector(".button3");

button1.addEventListener('click', function(){
    first.classList.add("active");
    second.classList.remove("active");
    third.classList.remove("active");
    button1.style.backgroundColor="#BEBEBE";
    button2.style.backgroundColor="#DADADA";
    button3.style.backgroundColor="#DADADA";
    } )

button2.addEventListener('click', function(){
second.classList.add("active");
first.classList.remove("active");
third.classList.remove("active");
button1.style.backgroundColor="#DADADA";
button2.style.backgroundColor="#BEBEBE";
button3.style.backgroundColor="#DADADA";
} )

button3.addEventListener('click', function(){
    first.classList.remove("active");
    second.classList.remove("active");
    third.classList.add("active");
    button1.style.backgroundColor="#DADADA";
button2.style.backgroundColor="#DADADA";
button3.style.backgroundColor="#BEBEBE";
    } )

