// let btn = document.querySelector('button')
// console.dir(btn);

// btn.onclick = function () {
//     console.log('Button was clicked');
// }

// let btns = document.querySelectorAll('button');
// for (btn of btns) {
//     btn.onclick = sayhello;
//     // btn.onmouseenter = sayhello;
// }
// function sayhello() {
//     console.log('Hellow')
// }

// Event Listners
// Used to write multiple functions like eg onclick you 
// can only write this funciton one time but with event listners
// you can write onclick lke functions as many times as you want

// let btns = document.querySelectorAll('button');
// for (btn of btns) {
//     btn.addEventListener('click', sayhello);
//     btn.addEventListener('click', sayhi);
// }
// function sayhello(){
//     console.log('Hello');
// }
// function sayhi(){
//     console.log('Hel');
// }

// Generate random color

// let btn = document.querySelector('button');
// btn.addEventListener('click', function () {
//     let h1 = document.querySelector('h1');
//     let randomcolor = getRandomColor();
//     h1.innerText = randomcolor;

//     let div = document.querySelector('div')
//     div.style.backgroundColor = randomcolor;
//     console.log('color updated')
// })

// function getRandomColor() {
//     let red = Math.floor(Math.random() * 255);
//     let green = Math.floor(Math.random() * 255);
//     let blue = Math.floor(Math.random() * 255);

//     let color = `rgb(${red}, ${green}, ${blue})`;
//     return color;
// }

// let para = document.querySelector('p');
// para.addEventListener('click', function(){
//     console.log("Para was clicked")
// })

// let box = document.querySelector('.ll');
// box.addEventListener('mouseenter', function(){
//     console.log('Mouseeenter')
// })

// let btnn = document.querySelector('button')
// btnn.addEventListener("click", function(){
//     this.style.backgroundColor = 'blue'
// })

// let h1 = document.querySelector('h1')
// let button = document.querySelector('button')
// let div = document.querySelector('div')
// let p = document.querySelector('p')

// function changecolor() {
//     console.dir(this.innerText);
//     this.style.backgroundColor = 'blue'
// }

// h1.addEventListener('click', changecolor);
// button.addEventListener('click', changecolor);
// div.addEventListener('click', changecolor);
// p.addEventListener('click', changecolor);

// Keyboard events