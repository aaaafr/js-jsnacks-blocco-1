// Snack Blocco 4
// Da mettere in una 
// sottocartella nella repo della 
// volta scorsa js-jsnacks-blocco-1 1a:
// Creare un oggetto palla che abbia le seguenti proprietà.
// Nome = palla
// Peso = 10

var Palla = {
    nome : "Palla",
    peso : 10,
}

// Blocco 4 - Snack 1B
// Attraverso un prompt dare la possibilità
// all’utente di modificare il peso della palla.

var domanda = prompt("quanto pesa la palla?");
Palla.peso = domanda;
console.log(Palla);