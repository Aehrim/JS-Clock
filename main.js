function DisplayTime() {
    // Define a New Date Object
    var now = new Date()
    // Same for Hours Minutes and so on
    var hour = now.getHours() // 0-23
    var minutes = now.getMinutes() // 0-59
    var seconds = now.getSeconds() // 0-59
    var daytime = "Morgens"
    // Define Variable for what need
    var time = hour + ":" + minutes + ":" + seconds + ' ' + daytime
    document.getElementById("clockdisplay").innerHTML = time
    document.getElementById("clockdisplay").textContent = time
    setTimeout (DisplayTime, 1000)
}

DisplayTime();