// Dovrà darti il suo Nome
const userName = prompt('Dimmi il tuo nome')


// Dovrà darti il suo Cognome
const userSurName = prompt('Dimmi il tuo cognome')


// Dovrà dirti il suo colore Preferito
const userColor = prompt('Dimmi il tuo colore preferito')


// Una volta raccolto i dati, concatena per generare la password 
let userData = userName + userSurName + userColor + 21


// Questo sarà il risultato ottenuto utilizzando l'ID 
document.getElementById('result').innerHTML = userData