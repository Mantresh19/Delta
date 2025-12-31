// This function
// const student = {
//     name: 'Mantresh',
//     age: 20,
//     city: 'Nsk',
//     eng: 20,
//     math: 89,
//     phy: 44,
//     getavg(){
//         let avg = (this.eng + this.math + this.phy) / 3;
//         console.log(`${this.name} got avg marks = ${avg}`);
//     }
// }

// Try and Catch Function
// console.log('Hellow');
// console.log('Hellow');
// try {
//     console.log(a);
// } catch(err) {
//     console.log(err);
// }
// console.log('Hellow2');
// console.log('Hellow2');

// Arrow function
// const add = (a, b) => {
//     return(a + b);
// };

// const cube = n => {
//     return(n*n*n);
// };

// const mul = (a, b) => a * b;

// Function timeout
// console.log('Hi there');
// setTimeout(() => {
//     console.log('Apna college');
// }, 4000);
// console.log('Welcome to');

// SetInterval
// console.log('hii');
// setInterval((id) => {
//     console.log('hello');
// }, 4000);
// console.log('welcome');

// This function with arrow and function
// const student = {
//     name: 'Man',
//     age: 20,
//     prop: this,

//     getInfo1: function() {
//         setTimeout(() => {
//             console.log(this.name);
//         }, 2000);
//     },
//     getInfo2: function(){
//         setTimeout(function(){
//             console.log(this);
//         }, 2000);
//     }
// }

// Qs
// const square = (n) => n*n;

// Qs
// setInterval(() => {
//     console.log("hellow world")
// }, 2000);

// Qs
// const arrayAvg = (arr) => {
//     let total = 0;
//     for(let number of arr) {
//         total += number;
//     }
//     return total / arr.length;
// };
// let arr = [1,2,3,4,5,6];
// console.log(arrayAvg(arr));

// Qs
let n = 4;
const isEven = (n) => {
    return (n%2==0);
}