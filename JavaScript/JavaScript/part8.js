// For each
// let arr = [1,2,3,4];

// arr.forEach((el) => {
//     console.log(el);
// })

// arr.forEach(function(el){
//     console.log(el);
// })

// let arr = [{
//     name: 'Prabhu',
//     Marks: 89,
// }, {
//     name: 'Prabhu',
//     Marks: 89,
// }, {
//     name: 'Prabhu',
//     Marks: 89,
// }];

// arr.forEach((student) => {
//     console.log(student.Marks);
// })

// Map function
// let num = [1,2,3,4];
// let double = num.map((el) => {
//     return el * 2;
// });

// let arr = [{
//     name: 'Prabhu',
//     Marks: 82,
// }, {
//     name: 'Prabhu',
//     Marks: 83,
// }, {
//     name: 'Prabhu',
//     Marks: 89,
// }];

// let gpa = arr.map((el) =>{
//     return el.Marks/10;
// })

// Filter 
// let arr = [1,2,3,4,5,6,7,8];

// let filter = arr.filter((el) => {
//     return el > 5;
// })

// Reduce
// let arr = [2,3,4,1];

// let reducee = arr.reduce((res, el) => res + el)

// let arr = [1,2,3,4,5];
// let max = arr.reduce((max, el) => {
//     if (max < el) {
//         return el;
//     } else {
//         return max;
//     }
// })

// console.log(max);

// Qs
let nums = [10,20,30,40,50];
let ans = nums.every((el) => el % 10 == 0);
console.log(ans);

// Qs
let num = [1,2,3];

let min = num.reduce((min, el) => {
    if (min < el) {
        return min;
    } else {return el}
})
console.log(min);