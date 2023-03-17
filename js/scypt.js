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

const num = "23"

let pssw = nome + cognome  + colore + num

console.log('psww',pssw)

// voglio eliminare possibili spazi tra le parole

let psswTrimmata = pssw.replace(/\s+/g, '')

console.log('psww senza spazi', psswTrimmata)

document.getElementById('password').innerHTML = psswTrimmata;

