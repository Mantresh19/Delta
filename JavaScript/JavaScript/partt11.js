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

// function changecolor(color,delay) {
//     return new Promise((resolve, reject) => {
//         let num = Math.floor(Math.random() * 5 ) + 1;
//         if (num > 3) {
//             reject ("Promise rejected");
//         }
//         setTimeout(() => {
//         h1.style.color = color;
//         resolve("Color changed");
//     },delay);
//     });
// }

// async function demo() {
//     try {
//         await changecolor('red', 1000);
//         await changecolor('darkgreen', 1000);
//         await changecolor('blue', 1000);
//         await changecolor('orange', 1000);
//     } catch (err){
//         console.log("error")
//         console.log(err);
//     }

//     let a = 5;
//     let b = 10;
//     console.log(a+b);

// }

// changecolor('red', 1000)
// .then (() => {
//     console.log("red color was completed");
//     return changecolor("orange", 1000);
// })
// .then (() => {
//     console.log("Orange color completed");
//     return changecolor("green", 1000);
// })
// .then (() => {
//     console.log("green color was completed");
//     return changecolor("blue", 1000);
// })
// .then (() => {
//     console.log("Blue was completed");
// })

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

// Async function
// async function greet() {
//     // throw '404 Not found!' // throw is used for the error!!
//     return 'hello!'
// }

// greet()
//     .then((result) => {
//         console.log("Promise was ressolved")
//         console.log("Result was: ", result);
//     })
//     .catch((err) => {
//         console.log("error: ", err);
//     })

// let demo = async () => {
//     return 5;
// }

// Await]
// function getNum() {
//     return new Promise ((resolve, reject) => {
//         setTimeout(() => {
//             let num = Math.floor(Math.random() * 10 ) + 1;
//             console.log(num)
//             resolve();
//         }, 1000);
//     });
// }

// async function demo() {
//     await getNum();
//     await getNum();
//     await getNum();
//     await getNum();
// }

// API
// let jsonRes = '{"fact":"Baking chocolate is the most dangerous chocolate to your cat.","length":61}'

// let validRes = JSON.parse(jsonRes);
// console.log(validRes.fact);

// let student = {
//     name: 'Mantresh',
//     Marks: 95
// }
// console.log(JSON.stringify(student))

// let url = 'https://catfact.ninja/fact';
// async function getFacts() {
//     try {
//         let res = await fetch(url);
//         let data = await res.json();
//         console.log(data.fact);

//         let res2 = await fetch(url);
//         let data2 = await res2.json();
//         console.log(data2.fact);

//     } catch (err) {
//         console.log('catch err', err);
//     }
//     console.log('bye');
// }

let btn = document.querySelector('button');
btn.addEventListener('click', async() => {
    let fact = await getFacts();
    console.log(fact);
    let p = document.querySelector('#factss');
    p.innerText = fact;
});

// Axios
let url = 'https://catfact.ninja/fact';

async function getFacts() {
    try {
        let res = await axios.get(url);
        return (res.data.fact);
    } catch (err) {
        console.log('catch err', err);
        return res.data.fact;
    }
}

// fetch(url)
// .then ((res) => {
//     console.log(res);
//     return res.json();
// })
// .then((data) => {
//     console.log('Data1 = ', data.fact)
//     return fetch(url)
// })
// .then((res) => {
//     return res.json();
// })
// .then((data2) => {
//     console.log("Data2 = ", data2.fact)
// })
// .catch((err) => {
//     console.log(err)
// })
