var startBtn = document.getElementById('start');
var stopBtn = document.getElementById('stop');
var resetBtn = document.getElementById('reset');

var hour = 0;
var minute = 0;
var second = 0;
var milliSec = 0;

startBtn.addEventListener('click', function () {

	timer = true;
	stopWatch();
	startBtn.disabled = true;
	stopBtn.disabled = false;
});

stopBtn.addEventListener('click', function () {
	timer = false;
	stopBtn.disabled = true;
	startBtn.disabled = false;
});
	
resetBtn.addEventListener('click', function () {
	timer = false;
	hour = 0;
	minute = 0;
	second = 0;
	milliSec = 0;
	document.getElementById('hr').innerHTML = "00";
	document.getElementById('min').innerHTML = "00";
	document.getElementById('sec').innerHTML = "00";
	document.getElementById('milliSec').innerHTML = "00";
});

function stopWatch() {
	if (timer) {
		milliSec++;

		if (milliSec == 99) {
			second++;
			milliSec = 0;
		}

		if (second == 60) {
			minute++;
			second = 0;
		}

		if (minute == 60) {
			hour++;
			minute = 0;
			second = 0;
		}

		var hr = hour;
		var min = minute;
		var sec = second;
		var milli = milliSec;

		if (hour < 10) {
			hr = "0" + hr;
		}

		if (minute < 10) {
			min = "0" + min;
		}

		if (second < 10) {
			sec = "0" + sec;
		}

		if (milliSec < 10) {
			milli = "0" + milli;
		}

		document.getElementById('hr').innerHTML = hr;
		document.getElementById('min').innerHTML = min;
		document.getElementById('sec').innerHTML = sec;
		document.getElementById('milliSec').innerHTML = milli;
		setTimeout(stopWatch, 10);
	}
}
