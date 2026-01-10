// Smart Counter
// const countEl = document.getElementById("count");
// const messageEl = document.getElementById('message');
// const increaseBtn = document.getElementById("increase");
// const resetBtn = document.getElementById("reset");
// const decreaseBtn = document.getElementById("decrease");

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
//         messageEl.textContent = 'Maximum Limit Reached';
//     } else if (count === 0) {
//         messageEl.textContent = 'Minimum Limit Reached';
//     } else messageEl.textContent = '';
// };

// increaseBtn.addEventListener("click", () => {
//     if (count < 10) {
//         count++;
//         updateUI();
//     }
// });

// decreaseBtn.addEventListener("click", () => {
//     if (count > 0){
//         count--;
//         updateUI();
//     }
// });

// resetBtn.addEventListener("click", () => {
//     count = 0;
//     updateUI();
// })

// updateUI();


// Password Strength Check
const passwordInput = document.getElementById("password");
const strengthText = document.getElementById("strength");

passwordInput.addEventListener('input', () => {
    const password = passwordInput.value;

    if (password.length === 0) {
        strengthText.textContent = "Strength: ";
        strengthText.style.color = "black";
        return;
    }
    if (password.length < 6) {
        strengthText.textContent = "Strength: Weak";
        strengthText.style.color = "red";
    } else if (isOnlyLetters(password)) {
        strengthText.textContent = "Strength: Medium";
        strengthText.style.color = "orange";
    } else {
        strengthText.textContent = "Strength: Strong";
        strengthText.style.color = "green"
    }
});

const isOnlyLetters = (Text) => {
    for (let char of Text) {
        if (!isNaN(char)) {
            return false;
        }
    }
    return true;
}