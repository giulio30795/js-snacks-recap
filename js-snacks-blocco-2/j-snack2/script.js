// Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una
// lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.

const nomi = ['Aldo', 'Giovanni', 'Giacomo']
const cognomi = ['Baglio', 'Storti', 'Poretti']


for (let i = 0; i < 3; i++){
    console.log(`${nomi[Math.floor(Math.random() * 2)]} ${cognomi[Math.floor(Math.random() * 2)]}`)
    
}
