/*
 Challenge 2: Print a table containing multiplication tables
    
   Let's start with the tables that many of us had to memorize in school. Can
	you print a table that contains all the answers to the multiplication
	tables from 1 through 10?

   Like Challenge #1, can you create an efficient solution that you could
	easily expand should you need the 12 times table?
 */

// you can log out to the console or to the output container like this:
// output.innerText = "My output";
const output = document.getElementById("output-container");
if (!output) throw "Output container not found.";

//@ts-check
// your code starts after this line
var stopwatch = document.getElementById("stopwatch");
var startBtn = document.getElementById("start-btn");
var timeoutId = null;
var ms = 0;
var sec = 0;
var min = 0;

/* function to start stopwatch */
function start(flag) {
	if (flag) {
		startBtn.disabled = true;
	}

	timeoutId = setTimeout(function () {
		ms = parseInt(ms);
		sec = parseInt(sec);
		min = parseInt(min);

		ms++;

		if (ms == 100) {
			sec = sec + 1;
			ms = 0;
		}
		if (sec == 60) {
			min = min + 1;
			sec = 0;
		}
		if (ms < 10) {
			ms = "0" + ms;
		}
		if (sec < 10) {
			sec = "0" + sec;
		}
		if (min < 10) {
			min = "0" + min;
		}

		stopwatch.innerHTML = min + ":" + sec + ":" + ms;

		// calling start() function recursivly to continue stopwatch
		start();
	}, 10); // setTimeout delay time 10 milliseconds
}

/* function to pause stopwatch */
function pause() {
	clearTimeout(timeoutId);
	startBtn.disabled = false;
}

/* function to reset stopwatch */
function reset() {
	ms = 0;
	sec = 0;
	min = 0;
	clearTimeout(timeoutId);
	stopwatch.innerHTML = "00:00:00";
	startBtn.disabled = false;
}
