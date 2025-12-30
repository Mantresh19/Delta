// Object literal
// let ol = {
//     name: 'shraddha',
//     age: 23,
//     clg: 'Apna clg'
// };

// Twitter post
// let post = {
//     Username: 'Mantresh',
//     Content: 'Coding',
//     Likes: 200,
//     Repost: 53,
//     Tags: 3
// };

// let classinfo = {
//     Mantresh: {
//         Grade: 'A+',
//         City: 'Nashik'
//     },
//     Vky: {
//         Grade: '-D',
//         City: 'Nashik'
//     }
// };

// Array of objects
// let arr = [
//     {
//         Name: 'Mantresh',
//         Age: 20,
//         City: 'London'
//     },
//     {
//         Name: 'Bise',
//         Age: 21,
//         City: 'Nashik'
//     },
//     {
//         Name: 'Pakya',
//         Age: 100,
//         City: 'Mumbai'
//     }
// ]

// Math function
// let num = Math.random();
// num = num * 10;
// num = Math.floor(num);
// num = num + 1;

// Guessing game
// const range = prompt('Please enter range of your number');
// const random = Math.floor(Math.random() * range) + 1;
// let guess = prompt('Enter your guess');

// while(true) {
//     if (guess == 'quit') {
//         break;
//     }
//     if (guess == random) {
//         console.log('Congoo!!!');
//         break;
//     }
//     else {
//         guess = prompt('Wrong guess');
//     }
// }

// Assignment qs

// Q1
// let arr = [1,2,3,4,5,6,7];
// let num = 5;

// function getelements(arr, num) {
//     for (let i=0; i<arr.length; i++) {
//         if (arr[i]>num) {
//             console.log(arr[i]);
//         }
//     }
// }
// getelements(arr, num);

// Q2
let str = 'abcdabcdefgggh';

function unique(str){
    let ans = '';
    for (let i=0; i<str.length; i++){
        let currchar = str[i];
        if (ans.indexOf(currchar)== -1){
            ans+=currchar;
        }
    }
    return ans;
}
unique(str);