// 1
setTimeout(() => {
    const div1 = document.querySelector(`#first`);
    const p1 = document.createElement(`p`);
    p1.innerText = `Hi`;
    div1.append(p1); 
}, 1000);

// 2
setTimeout(() => {
    const div2 = document.querySelector(`#timeout-nesting`);
    const p2 = document.createElement(`p`);
    p2.innerText = `One`;
    div2.append(p2);

    setTimeout(() => {
        const p3 = document.createElement(`p`);
        p3.innerText = `Two`;
        div2.append(p3);
    }, 1000);
}, 2000);

// 3a
let num = 1
const counter = setInterval(() => {
    console.log(num);
    num++;
}, 1000);

// 3b
const stop = document.querySelector(`button`);
stop.addEventListener(`click`, () => {
    clearInterval(counter);
});

// BONUS
// 4
const startingMinutes = 1;
let time = startingMinutes * 60;

let countdownEl = document.querySelector(`#countdown`);


let timer = setInterval(updateCountdown, 1000);

function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? `0` + seconds : seconds;

    countdownEl.innerHTML = `${minutes}:${seconds}`;
    time--;

    if (time === 0){
        countdownEl.innerHTML = `TIME IS UP`
        clearInterval(timer)
    };
}

