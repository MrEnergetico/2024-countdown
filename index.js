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

document.addEventListener('DOMContentLoaded', function () {
    const numberOfDrops = 50; // Imposta il numero di gocce desiderato
    const body = document.body;

    for (let i = 0; i < numberOfDrops; i++) {
        createRaindrop();
    }

    function createRaindrop() {
        const raindrop = document.createElement('div');
        raindrop.className = 'raindrop';
        setRandomPosition(raindrop);
        body.appendChild(raindrop);
    }

    function setRandomPosition(element) {
        const randomX = Math.random() * window.innerWidth;
        const randomDelay = Math.random() * 5; // Imposta un ritardo casuale
        const randomDuration = Math.random() * 5 + 5; // Imposta una durata casuale

        element.style.left = `${randomX}px`;
        element.style.animationDelay = `-${randomDelay}s`;
        element.style.animationDuration = `${randomDuration}s`;
    }
})

setInterval(updateCountdown, 1000);
