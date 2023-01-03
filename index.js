function updateCountdown() {
    // Calcola il tempo rimanente fino all'inizio del 2024
    var currentTime = new Date();
    var targetTime = new Date(2024, 0, 1); // 1 gennaio 2024
    var remainingTime = targetTime - currentTime;
  
    // Calcola i giorni, le ore, i minuti e i secondi rimanenti
    var days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    var hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
  
    // Visualizza il countdown nell'elemento HTML
    document.getElementById("countdown").innerHTML = days + 
    " giorni " + hours + " ore " + minutes + " minuti " + seconds + " secondi ";
}

setInterval(updateCountdown, 1000);
