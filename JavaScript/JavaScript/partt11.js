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

h1 = document.querySelector('h1');

function changecolor(color,delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        h1.style.color = color;
        resolve("Color changed");
    },delay);
    });
}

changecolor('red', 1000)
.then (() => {
    console.log("red color was completed");
    return changecolor("orange", 1000);
})
.then (() => {
    console.log("Orange color completed");
    return changecolor("green", 1000);
})
.then (() => {
    console.log("green color was completed");
    return changecolor("blue", 1000);
})
.then (() => {
    console.log("Blue was completed");
})

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

// function savetoDb (data) {
//     return new Promise((resolve, reject) => {
//         let internetSpeed = Math.floor(Math.random() * 10) + 1;
//         if (internetSpeed > 4) {
//             resolve("Resolved");
//         } else (reject("Rejected"))
//     });
// }
// Then & catch
// savetoDb("Apna collge")
// .then((result) => {
//     console.log("Promise was resolved");
//     console.log(result);
//     return savetoDb("Apna college is a data");
// })
// .then((result) => {
//     console.log("data2 saved");
//     console.log(result);
//     return savetoDb("Apna college is also a data");
// })
// .then((result) => {
//     console.log("Data 3 saved")
//     console.log(result);
// })
// .catch((error) => {
//     console.log("Promise was rejected")
//     console.log(error);
// })