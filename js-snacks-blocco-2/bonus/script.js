// Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi casuali all’array che ha meno elementi,
// fino a quando ne avrà tanti quanti l’altro.

const minore = ['1','2','3','4']
const maggiore = ['1','2','3','4','5','6']
console.log(maggiore,minore);
while (minore.length != maggiore.length){
    minore.push(1)
    console.log(minore, maggiore);
}




















































// // Ogni volta che si clicca un bottone, il nostro programma chiederà un numero di 4 cifre all’utente.
// // Se l’utente ha inserito un numero corretto, allora il programma calcolerà la somma e le media di tutte le cifre che lo compongono stampandola nel DOM, altrimenti ripeterà la richiesta di inserimento finché non avrà inserito un numero corretto.


// const button = document.querySelector('.button')
// let numero
// let somma = 0;
// let media = 0;


// button.addEventListener('click', function() {
//     let numero = prompt('inserisci un numero di 4 cifre');

//     while (numero.length != 4){
//         alert('inserisci un numero valido');
//         numero = prompt('inserisci un numero di 4 cifre');
//     }
//     for(let i = 0; i < numero.length; i++){
//         somma += parseInt((numero[i]))
//         }
//         media = somma / numero.length
//         console.log(somma, media);
// })
