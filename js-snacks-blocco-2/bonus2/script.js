// Ogni volta che si clicca un bottone, il nostro programma chiederà un numero di 4 cifre all’utente.
// Se l’utente ha inserito un numero corretto, allora il programma calcolerà la somma e le media di tutte le cifre che lo compongono stampandola nel DOM, altrimenti ripeterà la richiesta di inserimento finché non avrà inserito un numero corretto.

const button = document.getElementById('button')

button.addEventListener('click' , function(){
    let number = prompt('inserisci un numero di 4 cifre')

    while (number.length != 4 || isNaN(number)) {
        alert('inserisci un numero valido')
        number = prompt('inserisci un numero di 4 cifre')
    }

    let somma = 0
    let media = 0

    for (let i = 0; i < number.length; i ++){
        somma += parseInt(number[i])
    }
    media += somma / number.length
    console.log(somma);
    console.log(media);
}
)