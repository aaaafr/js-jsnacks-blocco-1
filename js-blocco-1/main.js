// L’utente inserisce due parole in successione, con due prompt.
var word_1 = prompt("Inserisci la prima parola");
var word_2 = prompt("Inserisci la seconda parola");
console.log(word_1);
console.log(word_2);
// Il software stampa prima la parola più corta, poi la parola più lunga.
if (word_1.length > word_2.length) {
    console.log(word_2);
} else if (word_1.length < word_2.length) {
    console.log(word_1);
} else {
    console.log("le parole hanno la stessa lunghezza");
}

