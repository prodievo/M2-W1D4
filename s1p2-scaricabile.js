/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* Javascript è un linguaggio debolmente tipizzato, significa che a differenza di altri linguaggi, è più morbido sulle esigenze di tipizzazione delle variabili.
 Una variabile in Javascript può essere di sei tipi: numero (un numero), stringa (sequenza di caratteri tra ""), booleano (true o false), bigInt, Symbol, undefined (non ancora definita)
null (vuota).*/

/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/

/* Un oggetto è una variabile "su steroidi". E' una raccolta di informazioni (variabili). Mettiamo caso di voler classificare uno studente, possiamo creare un oggetto
contenente tutte le sue caratteristiche sotto forma di variabili. */

/* ESERCIZIO 3
 Scriti il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* (12 + 20) */

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* let x = 12 */

/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* let name = "Luca" */

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* (4 - x) */

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

/* 
let name1 = "john";
let name2 = "John";
name1 == name2
name2Lower = name2.toLowerCase()
console.log(name1 == name2Lower)
*/

let name1 = "john";
let name2 = "John";
name1 == name2
name2Lower = name2.toLowerCase()
console.log(name1 == name2Lower)