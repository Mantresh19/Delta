let gameSeq = [];
let userSeq = [];
let btn = ['pink', 'yellow', 'maroon', 'green'];

let started = false;
let level = 0;

let h2 = document.querySelector('h2');

document.addEventListener('keypress', function(){
    if (started == false) {
        console.log('Game started');
        started = true;
    levelup();
    }
})

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

function levelup(){
    level++;
    h2.innerText = `level ${level}`;

    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btn[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);

    function checkAns() {
        console.log('curr level : ', level);
    }

    function btnPress () {
        console.log(this);
        let btn = this;
        userflash(btn);

        userColor = btn.getAttribute('id');
        userSeq.push(userColor);

        checkAns();
    }

    let allBtns = document.querySelectorAll('.btn');
    for (btn of allBtns) {
        btn.addEventListener('click', btnPress);
    }
    
}