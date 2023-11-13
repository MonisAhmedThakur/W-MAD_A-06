var startBtn = document.getElementById('start');
var stopBtn = document.getElementById('stop');
var resetBtn = document.getElementById('reset');

var userHour = prompt ("Please Enter the Hour")
if (userHour == ""){
    var hour = 24;
    console.log (hour);
}
else {
    hour = userHour;
}

var userMinute = prompt ("Please Enter the Minutes")

if (userMinute == ""){
    var minute = 59;
}
else {
    minute = userMinute;
}

var second = 59;
var milliSec = 99;

startBtn.addEventListener('click', function () {
    timer = true;
    timerWatch();
});

stopBtn.addEventListener('click', function () {
    timer = false;
});

resetBtn.addEventListener('click', function () {
    timer = false;
    var userHour = prompt ("Please Enter the Hour")
    var userMinute = prompt ("Please Enter the Minutes")
    
    if (userHour == ""){
        hour = 24;
    }
    else {
        hour = userHour;
    }
    if (userMinute == ""){
        minute = 59;
    }
    else {
        minute = userMinute;
    }
    second = 59;
    milliSec = 99;
    document.getElementById('hr').innerHTML = "24";
    document.getElementById('min').innerHTML = "00";
    document.getElementById('sec').innerHTML = "00";
    document.getElementById('milliSec').innerHTML = "00";
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
