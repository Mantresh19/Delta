let gameSeq = [];
let userSeq = [];
let btns = ['pink', 'yellow', 'maroon', 'green'];

let started = false;
let level = 0;

let h2 = document.querySelector('h2');

document.addEventListener('keypress', function () {
    if (started == false) {
        console.log('Game started');
        started = true;
        levelup();
    }
});

function gameFlash(btn) {
    btn.classList.add('flash');
    setTimeout(function () {
      btn.classList.remove('flash');
    }, 250);
}

function userflash(btn) {
    btn.classList.add('userflash');
    setTimeout(function () {
      btn.classList.remove('userflash');
    }, 250);
}

function levelup() {
    userSeq = [];
    level++;
    h2.innerText = `level ${level}`;

    let randIdx = Math.floor(Math.random() * btns.length);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
}

function checkAns(idx) {
    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length === gameSeq.length) {
            setTimeout(levelup, 1000);
        }
    } else {
        h2.innerText = `Game over! Press any key to start`;
        reset();
    }
}

function btnPress() {
    let btn = this;
    userflash(btn);

    let userColor = btn.getAttribute('id');
    userSeq.push(userColor);

    checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll('.btn');
for (let btn of allBtns) {
    btn.addEventListener('click', btnPress);
}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}
