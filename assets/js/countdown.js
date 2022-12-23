// countdown timer
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");
//
const daysEl2 = document.getElementById("days2");
const hoursEl2 = document.getElementById("hours2");
const minsEl2 = document.getElementById("mins2");
const secondsEl2 = document.getElementById("seconds2");
//
const daysEl3 = document.getElementById("days3");
const hoursEl3 = document.getElementById("hours3");
const minsEl3 = document.getElementById("mins3");
const secondsEl3 = document.getElementById("seconds3");

const newYears = "31 Dec 2023";

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);
    //
    daysEl2.innerHTML = days;
    hoursEl2.innerHTML = formatTime(hours);
    minsEl2.innerHTML = formatTime(mins);
    secondsEl2.innerHTML = formatTime(seconds);
    //
    daysEl3.innerHTML = days;
    hoursEl3.innerHTML = formatTime(hours);
    minsEl3.innerHTML = formatTime(mins);
    secondsEl3.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

// initial call
countdown();

setInterval(countdown, 1000);