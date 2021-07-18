const pomo_btn = document.querySelector('.pomo');
const short_btn = document.querySelector('.short')  
const long_btn = document.querySelector('.long') 
const start_btn = document.querySelector('.start')

const timer_span = document.querySelector('.timer');

let timer = 1800;

function pomoDoro(){
    pomo_btn.addEventListener('click', function(){
        timer_span.innerHTML = "25" + ":" + "00";
    })
}

function startTimer(){
    start_btn.addEventListener('click', function(){
        clearInterval(timer)
        timer = setInterval(pomo, 1000);
        pomo();
    })
}

function pomo(){
    timer = timer - 1;
    let seconds = parseInt(timer%60);
    let minutes = parseInt(timer/60);
    timer_span.innerHTML = minutes + ":" + seconds;
}

startTimer();
pomoDoro();