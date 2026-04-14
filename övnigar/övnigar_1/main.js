const start1 = document.getElementById("start-timer")
const stop = document.getElementById("stop-timer")
const rest = document.getElementById("reset-timer")
const sek = document.getElementById("seconds")

function start() {
    // Tom till att börja med, kommer sedan innehålla vårt ID.
    let intervalID;
    // Kontrollvariabel för antal upprepningar
    let times = 0;
    // Fördröjningen mellan upprepningarna (1sek = 1000ms)
    let delay = 1000;

    function print() {
        times = times + 1;

        if (times > 10) {
            clearInterval(intervalID);
        }

        sek.innerHTML=times
    }

    intervalID = setInterval(print, delay);
}
start1.onclick=start