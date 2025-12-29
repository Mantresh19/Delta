// console.log("Hello world!")
// let pencilprice = 10;
// let erasorprice = 5;
// let output = "The total price is: " + (pencilprice + erasorprice) + "£".
// console.log(`The total price is : ${pencilprice + erasorprice} Rupees.`);

//Arithematic operators
// let a = 10;
// let b = 5;
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);
// console.log(a**b);
// console.log(a++);
// console.log(++a);

//Operators 
// let age = 18;
// console.log(age > 18);

//Conditional Statements
// let age = 15;
// if (age >= 18) {
//     console.log("You can drive");
// }
// else if (age < 18) {
// console.log("You can't drive")
// }

// let signal = "Green";
// if (signal == "Red") {
//     console.log("Stop");
// }
// if (signal == "Yellow") {
//     console.log("Slow Down");
// }
// if (signal == "Green") {
//     console.log("Gooooooo!!!!");
// }

// Nested If-else
// let marks = 79;

// if (marks>=33) {
//     console.log("Pass");
//     if(marks>=80){
//         console.log("Woww!!");
//     }
//     else{
//         console.log("Grade A");
//     }
// }
// else {
//     console.log("Bhakk saley")
// }

//Alert
// alert("This is a alet")
// console.alert("This is an error")

// Input
// let firstname = prompt("Enter your name: ");
// console.log(firstname);

//Replace
// let str = "I love coding"
// str.slice("love", "do");
// console.log(str)

// let students = ["Mant", "Vikw", "Prane", "Prnav"];

// Loops
// for (let i=2; i<=20; i=i+2){
//     console.log(i);
// }

// let n = prompt("Enter your number")
// for (i=1; i<=n; i++) {
//     console.log(i);
// }

// for(i=1; i<=5; i++) {
//     for (j=1; j<=5; j++){
//         console.log(j);
//     }
// }

// While Loop
// let i = 0;
// while (i<=5){
//     console.log(i);
//     i++;
// }

// favourite movie
// let favourite = "KGF";
// let guess = prompt("Enter Movie Name: ");
// while ((guess != favourite) && (guess != "quit")) {
//     console.log("Wrong guess");
//     guess = prompt("Please try again");
// }
// if (guess = favourite) {
//         console.log("Correct guess")
//     }

// Break
// let i = 1;
// while (i<=5){
//     if (i==3){
//         break;
//     }
//     console.log(i);
//     i++;
// }
// console.log("3 Par Baat Khatam")

// loops with nested arrays
// arr = [["ramesh", "pakya", "charan"], ["superman", "batman", "ironman"]]
// for (i=0; i<arr.length; i++) {
//     console.log(i, arr[i], arr[i].length);
//     for (let j=0; j<arr[i].length; j++) {
//         console.log(`j${j}, ${arr[i][j]}`);
//     }
// }

// arr = [['ramesh',80,'pass'], ['phool kumari',89,'fail']]
// for (i=0; i<arr.length; i++) {
//     for (let j=0; j<arr[i].length; j++) {
//         console.log(arr[i][j]);
//     }
// }

// for of loop
// let fruits = ['mango','apple','banana','orange','mosambi']
// for (fruit of fruits){
//     console.log(fruit);
// }

// Nested for of loops
// let arr = ['gotilal', 'sandeepmuthmare']
// for (name of arr) {
//     for (lpw of name) {
//         console.log(lpw);
//     }
// }

// To-Do-List
let todo = [];
let req = prompt('Enter your req');
while(true){
    if(req == 'List'){
        for (i=0; i<todo.length; i++) {
            console.log(i, todo[i]);
        }
    }
    if(req == 'Quit') {
        break;
    }
    else if (req == 'Add') {
        let task = prompt('Enter your task');
        todo.push(task);
        console.log('task added');
    } else if (req == "Delete"){
        let idx = prompt('Enter what you want to delete');
        todo.splice(idx, 1);
        console.log('Task deleted');
    }
    req = prompt('Enter your req');
}
