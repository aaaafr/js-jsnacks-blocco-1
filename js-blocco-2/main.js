// Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti


var somma = 0;

for (var i=0; i<10; i++) {
    var num_utente = Number(prompt("Inserisci un numero"));
    somma += num_utente;
    
}

console.log(somma);
