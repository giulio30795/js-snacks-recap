// Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi casuali all’array che ha meno elementi,
// fino a quando ne avrà tanti quanti l’altro.


const minore = ['1','2','3','4']
const maggiore = ['1','2','3','4','5','6']

while (minore.length != maggiore.length){
    minore.push(Math.floor(Math.random() * 5)
    )
    console.log(minore, maggiore);
}