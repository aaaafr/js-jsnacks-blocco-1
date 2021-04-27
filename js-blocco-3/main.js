// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, 
var invitati = ["Sara", "Giulia", "Carmen", "Stefania"];

// chiedi all’utente il suo nome e
var utente = prompt("inserisci il tuo nome");
// comunicagli se può partecipare o no alla festa.

if (utente == invitati[0]) {
    console.log("puoi partecipare");
}else if (utente == invitati[1]) {
    console.log("puoi partecipare");
}else if (utente == invitati[2]) {
    console.log("puoi partecipare");
}else if(utente == invitati[3]) {
    console.log("puoi partecipare");
}else{
    console.log("non puoi partecipare");
}