/*
Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito23

1. variabile chiedere nome utente
2. variabile chiedere cognome
3. variabile chiedere colore preferito
4. scrivi su html nome cognome colorPreferito

*/

const nome = prompt('qual è il tuo nome?')

const cognome = prompt('qual è il tuo cognome?')

const colore = prompt('qual è il tuo colore preferito?')

let pssw = nome + cognome  + colore 

console.log('psww',pssw)

// voglio eliminari possibili spazi vuoti

let psswTrimmata = pssw.replace(/\s+/, '')

console.log('psww senza spazi vuoti', psswTrimmata)

