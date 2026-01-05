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
// let btn = document.querySelector('button');
// btn.addEventListener('click', function (event) {
//     console.log(event);
// })

// Another event

// let input = document.querySelector('input');
// input.addEventListener('keydown', function(event){
//     console.log('key = ', event.code);
//     if (event.code == 'ArrowUp') {
//         console.log('forward')
//     } else if (event.code == "ArrowRight") {
//         console.log("Character moves right")
//     } else if (event.code == "ArrowDown") {
//         console.log('Character moves backward')
//     } else if (event.code == "ArrowLeft") {
//         console.log("Character moves left")
//     }
// })

// let form = document.querySelector('form')
// form.addEventListener('submit', function(event){
//     event.preventDefault();
//     let inp = form.querySelector('input')
//     console.dir(inp)
//     console.log(inp.value)
// })

// let form = document.querySelector('form')
// form.addEventListener('submit', function(event){
//     event.preventDefault();
    
//     let user = this.elements[0];
//     let password = this.elements[1];

//     console.log(user.value)
//     console.log(password.value)

//     console.log(`HI ${user.value}, this is your pass ${password.value}`)
// })

// let inp = document.querySelector('#text');
// let p = document.querySelector('p')

// inp.addEventListener('input', function(){
//     console.log(inp.value);
//     p.innerText = inp.value;
// })

// Event bubbling

// let div = document.querySelector('div');
// let ul = document.querySelector('ul');
// let lis = document.querySelectorAll('li');

// div.addEventListener('click', function(){
//     console.log('div was clicked');
// });

// ul.addEventListener('click', function(event){
//     event.stopPropagation();
//     console.log('ul was clicked');
// });

// for (li of lis) {
//     li.addEventListener('click', function (event) {
//       event.stopPropagation();
//       console.log('li was clicked');
//     });
// }


// To-do list
let inp = document.querySelector('input');
let btn = document.querySelector('button');
let unordered = document.querySelector('ul');

btn.addEventListener('click', function() {
    let item = document.createElement('li');
    item.classList.add('todo-item');
    item.innerText = inp.value;

    let del = document.createElement('input');
    del.type = 'radio';
    del.classList.add('delete');
    
    item.appendChild(del);
    unordered.appendChild(item);
    console.log(inp.value);
    inp.value = '';
});

unordered.addEventListener('change', function(event) {
    if (!event.target.classList.contains('delete')) return;
    let item = event.target.closest('li');
    if (!item) return;

    item.classList.add('fade-out');
    item.addEventListener('transitionend', function () {
        item.remove();
    }, { once: true });
});

// let dels = document.querySelectorAll('.delete');
// for (del of dels) {
//     del.addEventListener('click', function() {
//         let par = this.parentElement;
//         console.log(par);
//         par.remove();
//     })
// }
