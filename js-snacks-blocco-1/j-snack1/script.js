// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.

const parola1 = prompt('inserisci una parola')
const parola2 = prompt('inserisci una parola')
const risultato = document.querySelector('.risultato')

if (parola1.length < parola2.length) {
    risultato.innerHTML += `${parola2} ha più caratteri di ${parola1}`
} else if (parola1.length > parola2.length) {
    risultato.innerHTML += `${parola1} ha più caratteri di ${parola2}`
} else 
risultato.innerHTML += `${parola1} ha gli stessi caratteri di ${parola2}`
