const helaBoxen = document.getElementById("message-box")

const success = document.getElementById("success")
success.onclick=function() {
    helaBoxen.setAttribute("class", "success")
}

const error = document.getElementById("error")
function BytaFärg() {
    helaBoxen.setAttribute("class", "error")
}
error.onclick=BytaFärg

const info = document.getElementById("info")
info.onclick=function () {
    helaBoxen.setAttribute("class", "info")
}