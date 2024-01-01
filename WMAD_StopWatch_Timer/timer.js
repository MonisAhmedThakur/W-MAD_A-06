var startBtn = document.getElementById('start');
var stopBtn = document.getElementById('stop');
var resetBtn = document.getElementById('reset');

var hour = document.getElementById("hr").value; 


var userMinute = +prompt ("Please Enter the Minutes")

if (userMinute === ""){
    var minute = 59;
}
else {
    minute = userMinute - 1;
}

var second = 59;
var milliSec = 99;

var btnStart = document.getElementById("start");
var btnStop = document.getElementById("stop");

startBtn.addEventListener('click', function () {
    
    timer = true;
    timerWatch();
    btnStart.disabled = true;
    btnStop.disabled = false;
});

stopBtn.addEventListener('click', function () {
    timer = false;
    btnStop.disabled = true;
    btnStart.disabled = false;
});

resetBtn.addEventListener('click', function () {
    hour = 0;
    minute = 0;
    second = 0;
    milliSec = 0;

    document.getElementById('hr').innerHTML = "00";
    document.getElementById('min').innerHTML = "00";
    document.getElementById('sec').innerHTML = "00";
    document.getElementById('milliSec').innerHTML = "00";
    timer = false;
    
    var userHour = parseInt(prompt ("Please Enter the Hour") || 0); 
    if (userHour === ""){
        var hour = 24;
    }
    else {
        hour = userHour;
    }
    
    var userMinute = +prompt ("Please Enter the Minutes")
    
    if (userMinute === ""){
        var minute = 59;
    }
    else {
        minute = userMinute - 1;
    }
    
    var second = 59;
    var milliSec = 99;    
});

function timerWatch() {
    if (timer) {
        if (milliSec == -01) {

        }
        else {
            milliSec--;
        }
        if (milliSec == -01) {
            if (second == 00) {
            }
            else {
                second--;
                milliSec = 99;
            }
        }

        if (second == 00) {
            if (minute == 00) {
            }
            else {
                minute--;
                second = 59;
            }
        }

        if (minute == 00) {
            if (hour == 00) {
            }
            else {
                hour--;
                minute = 59;
                second = 59;
            }
        }

        if (hour == 00 && minute == 00 && second == 00 && milliSec == -01) {
            return;
        }

        var hrString = hour;
        var minString = minute;
        var secString = second;
        var milliSecString = milliSec;

        if (hour < 10) {
            hrString = "0" + hrString;
        }

        if (minute < 10) {
            minString = "0" + minString;
        }

        if (second < 10) {
            secString = "0" + secString;
        }

        if (milliSec < 10) {
            milliSecString = "0" + milliSecString;
        }

        document.getElementById('hr').innerHTML = hrString;
        document.getElementById('min').innerHTML = minString;
        document.getElementById('sec').innerHTML = secString;
        document.getElementById('milliSec').innerHTML = milliSecString;
        console.log(setTimeout(timerWatch, 10));
    }
}
