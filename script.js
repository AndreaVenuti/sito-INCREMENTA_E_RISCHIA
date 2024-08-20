let valore = 0;

function increment() {
    valore++;
    document.getElementById('numero').innerText = valore + "%";

    // Genera un numero casuale tra 0 e 100
    let random = Math.random() * 100;

    // Controlla se il numero casuale è inferiore alla probabilità
    if (random <= valore){
        valore = 0;
        document.getElementById('numero').innerHTML = valore + "%";
    }

    if (valore == 100){
        alert('HAI VINTO!!!');
    }
}

function istruzioni(){
    alert('ISTRUZIONI: ogni volta che si clicca il bottone il numero aumenta. Quel numero corrisponde alla probabilità che se stesso si resetti. Vinci se arrivi a 100. Buona fortuna!')
}

alert('ISTRUZIONI: ogni volta che si clicca il bottone il numero aumenta. Quel numero corrisponde alla probabilità che se stesso si resetti. Vinci se arrivi a 100. Buona fortuna!')