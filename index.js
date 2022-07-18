// By: Gabriel Malafaia, linkedin: https://www.linkedin.com/in/gabrielmalafaia/ 

let hours   = document.querySelector("#hours-update")
let minutes = document.querySelector("#minutes-update")
let seconds = document.querySelector("#seconds-update")

function timeUpdate() {
    let dateHour     = new Date()
    let getHours     = dateHour.getHours  ()
    let getMinutes   = dateHour.getMinutes()
    let getSeconds   = dateHour.getSeconds()

    getHours     < 10 ? getHours     = '0'  + getHours     : 0
    getMinutes   < 10 ? getMinutes   = '0'  + getMinutes   : 0
    getSeconds   < 10 ? getSeconds   = '0'  + getSeconds   : 0
    
    hours.innerHTML   = getHours
    minutes.innerHTML = getMinutes
    seconds.innerHTML = getSeconds
}

setInterval(timeUpdate)