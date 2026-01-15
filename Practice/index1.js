// Smart Counter
// const increaseBtn = document.getElementById("increaseBtn");
// const decreaseBtn = document.getElementById("decreaseBtn");
// const resetBtn = document.getElementById("resetBtn");
// const countEl = document.getElementById("count");
// const messageEl = document.getElementById("message");

// let count = 0;

// const updateUI = () => {
//     countEl.textContent = count;

//     if (count === 0) {
//         countEl.classList.add("red");
//         countEl.classList.remove("green");
//     } else {
//         countEl.classList.add("green");
//         countEl.classList.remove("red");
//     }

//     decreaseBtn.disabled = count === 0;
//     increaseBtn.disabled = count === 10;

//     if (count === 10) {
//         messageEl.textContent = "Maximum limit reached";
//     } else if (count === 0) {
//         messageEl.textContent = "Minimum limit reached"
//     } else {
//         messageEl.textContent = "";
//     }
// }
//     increaseBtn.addEventListener('click', () => {
//         if (count < 10){
//             count++;
//             updateUI();
//         }
//     })
//     decreaseBtn.addEventListener('click', () => {
//         if (count > 0) {
//             count--;
//             updateUI();
//         }
//     })
//     resetBtn.addEventListener('click', () => {
//         count = 0;
//         updateUI();
//     })
//     updateUI();

// Password Strength Check
// const passwordInput = document.getElementById("password");
// const strengthText = document.getElementById("strength");

// passwordInput.addEventListener('input', () => {
//     const password = passwordInput.value;

//     if (password.length === 0) {
//         strengthText.textContent = "Strength: ";
//         strengthText.style.color = "black";
//         return;
//     }
//     if (password.length < 6) {
//         strengthText.textContent = "Strength: Weak";
//         strengthText.style.color = "red";
//     } else if (isOnlyLetters(password)) {
//         strengthText.textContent = "Strength: Medium";
//         strengthText.style.color = "orange";
//     } else {
//         strengthText.textContent = "Strength: Strong";
//         strengthText.style.color = "green"
//     }
// });

// const isOnlyLetters = (Text) => {
//     for (let char of Text) {
//         if (!isNaN(char)) {
//             return false;
//         }
//     }
//     return true;
// }


// Pswrd

// const passwordInput = document.getElementById('password');
// const strengthText = document.getElementById('strength');

// passwordInput.addEventListener('input', () => {
//     const password = passwordInput.value;

//     if (password.length === 0) {
//         strengthText.textContent = "Strength: ";
//         strengthText.style.color = "black";
//         return;
//     } 
//     if (password.length < 6) {
//         strengthText.textContent = "Strength: Weak";
//         strengthText.style.color = "red";
//     } else if (isOnlyLetters(password)) {
//         strengthText.textContent = "Strength: Medium";
//         strengthText.style.color = "orange";
//     } else {
//         strengthText.textContent = "Strength: Strong";
//         strengthText.style.color = "darkgreen";
//     }
// });

// const isOnlyLetters = (text) => {
//     for (let char of text) {
//         if (char >= "0" && char <= "9") {
//             return false;
//         }
//     }
//     return true;
// };

// const themeBtn = document.getElementById('themeBtn');

// const isDark = () => document.body.classList.contains("dark");

// const updateButtonText = () => {
//     themeBtn.textContent = isDark() ? "☀️ Light Mode" : "🌙 Dark Mode";
// };

// const applyTheme = (theme) => {
//     if (theme === 'dark') {
//         document.body.classList.add('dark');
//     } else {
//         document.body.classList.remove('dark');
//     }

//     updateButtonText();
//     localStorage.setItem("theme", theme);
// };

// const loadTheme = () => {
//     const savedTheme = localStorage.getItem('theme');

//     if (savedTheme === 'dark'){
//         applyTheme("dark");
//     } else {
//         applyTheme("light");
//     }
// };

// loadTheme();

// const toggleTheme = () => {
//     applyTheme(isDark() ? "light" : "dark");
// };

// themeBtn.addEventListener('click', toggleTheme);

// Number guessing game
// const input = document.getElementById("input");
// const result = document.getElementById("result");
// const randomnumber = Math.floor(Math.random() * 100) + 1;

// guess = 0;

// input.addEventListener("input", function() {
//     const userguess = Number(input.value);

//     // Clear message if input is empty
//     if(!input.value){
//         result.textContent = "";
//         return;
//     }
//     if (userguess>randomnumber) {
//         result.textContent = "Too high!";
//     } else if (userguess < randomnumber) {
//         result.textContent = "Too low";
//     } else {result.textContent = "Correct";}
// });

// Simple calculator

const add = document.getElementById("add")
const sub = document.getElementById("sub")
const mul = document.getElementById("mul")
const mod = document.getElementById("mod")
let inp = document.querySelector("input")

result = 0;



