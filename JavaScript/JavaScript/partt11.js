// function one(){
//     return 1;
// }
// function two() {
//     return one() + one();
// }
// function three(){
//     return two() + one();
// }
// three();

// Callback hell

// h1 = document.querySelector('h1');

// function changecolor(color,delay,nextColorChange) {
//     setTimeout(() => {
//         h1.style.color = color;
//         if (nextColorChange) nextColorChange();
//     },delay)
// }

// changecolor('red', 1000, () => {
//     changecolor('darkgreen', 1000, () => {
//         changecolor('darkgreen', 1000)
//     });
// }); 

// Promises
// Worst case
// function savetoDb (data, success, failure) {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if (internetSpeed > 4){
//         success();
//     } else {
//         failure();
//     }
// }

// savetoDb("Apna college", () => {
//     console.log("Success : Your data saved");
//     savetoDb('Hello world', () => {
//         console.log('Success2: Your data saved');
//         savetoDb('HOOOOOOO', () => {
//             console.log("Success3: Your data has been saved");
//         }, () => {
//             console.log("Failure3: Your data didn't saved");
//         })
//     }, () => {
//         console.log("Failure2: Your data didn't saved");
//     })
// }, () => {
//     console.log("Failed: to upload data")
// })

function savetoDb (data) {
    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        if (internetSpeed > 4) {
            resolve("Resolved");
        } else (reject("Rejected"))
    });
}
// Then & catch
savetoDb("Apna collge")
.then(() => {
    console.log("Promise was resolved");
    return savetoDb("Apna college is a data");
})
.then(() => {
    console.log("data2 saved");
    return savetoDb("Apna college is also a data");
})
.then(() => {
    console.log("Data 3 saved")
})
.catch(() => {
    console.log("Promise was rejected")
})