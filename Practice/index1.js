const countEl = document.getElementById("count");
const messageEl = document.getElementById('message');
const increaseBtn = document.getElementById("increase");
const resetBtn = document.getElementById("reset");
const decreaseBtn = document.getElementById("decrease");

let count = 0;

const updateUI = () => {
    countEl.textContent = count;

    if (count === 0) {
        countEl.classList.add("red");
        countEl.classList.remove("green");
    } else {
        countEl.classList.add("green");
        countEl.classList.remove("red");
    }

    decreaseBtn.disabled = count === 0;
    increaseBtn.disabled = count === 10;

    if (count === 10) {
        messageEl.textContent = 'Maximum Limit Reached';
    } else if (count === 0) {
        messageEl.textContent = 'Minimum Limit Reached';
    } else messageEl.textContent = '';
};

increaseBtn.addEventListener("click", () => {
    if (count < 10) {
        count++;
        updateUI();
    }
});

decreaseBtn.addEventListener("click", () => {
    if (count > 0){
        count--;
        updateUI();
    }
});

resetBtn.addEventListener("click", () => {
    count = 0;
    updateUI();
})

updateUI();
