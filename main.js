function DisplayTime() {
    var now = new Date();
    var hour = String(now.getHours()).padStart(2, '0'); // Add leading zero if necessary
    var minutes = String(now.getMinutes()).padStart(2, '0'); // Add leading zero if necessary
    var seconds = String(now.getSeconds()).padStart(2, '0'); // Add leading zero if necessary
    var daytime = "Uhr";
    var time = hour + ":" + minutes + ":" + seconds + ' ' + daytime;
    document.getElementById("clockdisplay").innerHTML = time;
    document.getElementById("clockdisplay").textContent = time;
    setTimeout(DisplayTime, 1000);
}

DisplayTime();
