// // Snack Blocco 4
// // Da mettere in una 
// // sottocartella nella repo della 
// // volta scorsa js-jsnacks-blocco-1 1a:
// // Creare un oggetto palla che abbia le seguenti proprietà.
// // Nome = palla
// // Peso = 10

// var Palla = {
//     nome : "Palla",
//     peso : 10,
// }

// // Blocco 4 - Snack 1B
// // Attraverso un prompt dare la possibilità
// // all’utente di modificare il peso della palla.

// var domanda = Number(prompt("quanto pesa la palla?"));
// Palla.peso = domanda;
// console.log(Palla);

// Blocco 4 - Sanck 2
// Creare un oggetto che rappresenti un triangolo rettangolo, 
// con le seguenti proprietà: base e altezza.
var Triangolo = {
    base : 10,
    altezza : 20,
}

console.log(Triangolo.base);
console.log(Triangolo.altezza);

var ipo = Math.sqrt((Triangolo.base ** 2) + (Triangolo.altezza ** 2));
console.log(ipo);

var area = ((Triangolo.base) * (Triangolo.altezza)) / 2;
console.log(area);

var perimetro = (ipo + Triangolo.base + Triangolo.altezza) / 2;
console.log(perimetro);





// Calcolare perimetro e area.
