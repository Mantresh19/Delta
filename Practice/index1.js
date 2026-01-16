let btn = document.getElementById("btn");
let count = document.getElementById("count");
count = 0;
    btn.addEventListener('click', () => {
        count++;
        document.getElementById("count").innerText = count;
    });
