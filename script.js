let timer = null;
let isRunning = false;

let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;

function updateDisplay() {
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = milliseconds < 10 ? "0" + milliseconds : milliseconds;

    document.getElementById("time").innerText = `${h}:${m}:${s}`;
    document.getElementById("ms").innerText = `.${ms}`;
}

function start() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(() => {
            milliseconds++;

            if (milliseconds === 100) {
                milliseconds = 0;
                seconds++;
            }
            if (seconds === 60) {
                seconds = 0;
                minutes++;
            }
            if (minutes === 60) {
                minutes = 0;
                hours++;
            }

            updateDisplay();
        }, 10); // 10ms = smooth milliseconds
    }
}

function pause() {
    clearInterval(timer);
    isRunning = false;
}

function reset() {
    clearInterval(timer);
    isRunning = false;
    milliseconds = seconds = minutes = hours = 0;
    updateDisplay();
    document.getElementById("laps").innerHTML = "";
}

function lap() {
    if (isRunning) {
        const li = document.createElement("li");
        li.innerText =
            document.getElementById("time").innerText +
            document.getElementById("ms").innerText;
        document.getElementById("laps").appendChild(li);
    }
}
