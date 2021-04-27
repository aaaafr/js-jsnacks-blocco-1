// Crea un array vuoto.
var numeri = [];
// Chiedi per 6 volte all’utente di inserire un numero,
for (var i = 0; i < 6; i++) {
    var insert_number = prompt("Inserisci un numero");

    if (insert_number % 2 != 0){
    console.log(numeri.push(insert_number));
    }else{
    console.log("array vuoto");
   }
}

console.log(numeri);
// se è dispari inseriscilo nell’array