const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");
const daysTimer = document.getElementById("days");
const hoursTimer = document.getElementById("hours");
const minutesTimer = document.getElementById("minutes");
const secondsTimer = document.getElementById("seconds");

let seconds = 0;
let minutes = 0;
let hours = 0;
let days = 0;

//event listeners

startButton.addEventListener("click", function() {
    timer = true;
    stopWatch();
    console.log("clicked");
})

stopButton.addEventListener("click", function() {
    timer = false;
});

resetButton.addEventListener("click", function() {
    timer = false;
    seconds = 0;
    minutes = 0;
    hours = 0;
    days = 0;
    document.getElementById("days").innerHTML = "00";
    document.getElementById("hours").innerHTML = "00";
    document.getElementById("minutes").innerHTML = "00";
    document.getElementById("seconds").innerHTML = "00";
})

function stopWatch() {
    if (timer) {
        seconds++;

        if (seconds == 60) {
            minutes++;
            seconds = 0;
        }

        if (minutes == 60) {
            hours++;
            minutes = 0;
        }

        if (hours == 60) {
            days++;
            hours = 0;
        }

        let daysString = days;
        let hoursString = hours;
        let minutesString = minutes;
        let secondsString = seconds;

        if (days < 10) {
            daysString = "0" + daysString;
        }

        if (hours < 10) {
            hoursString = "0" + hoursString;
        }

        if (minutes < 10) {
            minutesString = "0" + minutesString;
        }
        if (seconds < 10) {
            secondsString = "0" + secondsString;
        }
        document.getElementById('days').innerHTML = daysString;
        document.getElementById('hours').innerHTML = hoursString;
        document.getElementById('minutes').innerHTML = minutesString;
        document.getElementById('seconds').innerHTML = secondsString;
        setTimeout(stopWatch, 1000);
    }
}