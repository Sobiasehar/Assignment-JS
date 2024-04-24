var miniSecond = document.getElementById("msec");
var second = document.getElementById("sec");
var minute = document.getElementById("min");
var hours = document.getElementById("hour");
var msec = 0;
var sec = 0;
var min = 0;
var hour = 0;

var interval;

function timer(){
    msec++;
    miniSecond.innerHTML = msec;
    if(msec === 100){
        sec++;
        second.innerHTML = sec;
        msec = 0;
    }
    else if(sec === 60){
        min++;
        minute.innerHTML = min;
        sec = 0;
    }
    else if(min === 60){
        hour++;
        hours.innerHTML = hour;
        min = 0;
    }
}


function start(){
    var btn = document.getElementById("button");
    interval = setInterval(timer, 100);
    btn.disabled = true;
}

function pause(){
    var btn = document.getElementById("button");
    clearInterval(interval);
    btn.disabled = false;
}


function reset(){
    msec = 0;
    sec = 0;
    min = 0;
    hour = 0;
    miniSecond.innerHTML = msec;
    second.innerHTML = sec;
    minute.innerHTML = min;
    hours.innerHTML = hour;
    pause();


}

