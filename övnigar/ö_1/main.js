const start1 = document.getElementById("start-timer")
const stop1 = document.getElementById("stop-timer")
const rest = document.getElementById("reset-timer")
const sek = document.getElementById("seconds")
const orign = sek.innerHTML;
// Tom till att börja med, kommer sedan innehålla vårt ID.
let intervalID;
// Kontrollvariabel för antal upprepningar
let times = 0;
// Fördröjningen mellan upprepningarna (1sek = 1000ms)
let delay = 1000;
function start() {
    function print() {
        times = times + 1;
        sek.innerHTML=times
    }

    intervalID = setInterval(print, delay);
}

function stoppaTimer() {
            clearInterval(intervalID);
}

function restTimer(){
    stoppaTimer()
    sek.innerHTML= orign
    times=0
}

start1.onclick=start
stop1.onclick = stoppaTimer
rest.onclick = restTimer
