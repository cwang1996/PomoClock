const pomo_btn = document.querySelector('.pomo');
const short_btn = document.querySelector('.short')  
const long_btn = document.querySelector('.long') 
const start_btn = document.querySelector('.start')
const stop_btn = document.querySelector('.stop');

const timer_span = document.querySelector('.timer');

let timer;
const pomoMinutes = 25;
const shortMinutes = 5
const longMinutes = 10
let timer1 = pomoMinutes * 60;
let timer2 = shortMinutes * 60;
let timer3 = longMinutes * 60;

function pomoDoro(){
    pomo_btn.addEventListener('click', function(){
        timer_span.innerHTML = "25" + ":" + "00";
    })
}

function shortDoro(){
    short_btn.addEventListener('click', function(){
        timer_span.innerHTML = "05" + ":" + "00";
    })
}

function longDoro(){
    long_btn.addEventListener('click', function(){
        timer_span.innerHTML = "10" + ":" + "00";
    })
}

function startTimer(){
    start_btn.addEventListener('click', function(){
        if(timer_span.innerHTML === "25" + ":" + "00") {
            stop_btn.classList.add('stop_active');
            clearInterval(timer);
            timer = setInterval(pomo, 1000);
            pomo();
            stopTimer();
        } 
        else if(timer_span.innerHTML === "05" + ":" + "00") {
            stop_btn.classList.add('stop_active');
            clearInterval(timer);
            timer = setInterval(shortbreak, 1000);
            shortbreak();
            stopTimer();
        }
        else if(timer_span.innerHTML === "10" + ":" + "00") {
            stop_btn.classList.add('stop_active');
            clearInterval(timer);
            timer = setInterval(longbreak, 1000);
            longbreak();
            stopTimer();
        }
    }) 
}

function stopTimer(){
    stop_btn.addEventListener('click', function(){
        stop_btn.classList.remove('stop_active');
        clearInterval(timer);
    })
}

function pomo(){
    let minutes = Math.floor(timer1 / 60);
    let seconds = timer1 % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;

    timer_span.innerHTML = `${minutes}:${seconds}`;
    timer1--;
}

function shortbreak(){
    let minutes = Math.floor(timer2 / 60);
    let seconds = timer2 % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;
    minutes = minutes < 10 ? '0' + minutes : minutes;

    timer_span.innerHTML = `${minutes}:${seconds}`;
    timer2--;
}

function longbreak(){
    let minutes = Math.floor(timer3 / 60);
    let seconds = timer3 % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;
    minutes = minutes < 10 ? '0' + minutes : minutes;

    timer_span.innerHTML = `${minutes}:${seconds}`;
    timer3--;
}

startTimer();
stopTimer();
pomoDoro();
shortDoro();
longDoro();
