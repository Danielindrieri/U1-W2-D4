/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const area = function (l1, l2) {
  console.log("l'area di questo rettangolo è:" + l1 * l2)
}
area(10, 12)

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const crazySum = function (a, b) {
  let sum = a + b
  if (a + b === 30) {
    console.log(sum * 3)
  }
}
crazySum(10, 20)

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const crazyDiff = function (n1,n2) {
   return Math.abs(n1- n2)
}
console.log(crazyDiff(15,19))

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const boundary = function (n) {
  if (n >= 20 || n <= 100) {
    return true
  } else {
    n >= 400
    return false
  }
}
console.log(boundary(20))
console.log(boundary(100))

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const epify = function (string) {
    if (string === "EPICODE"){ 
        return string
    }else {
        return "EPICODE" + string
    }
}
console.log(epify())


  

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const check3and7 = function (num) {
  if (num <= 0){
    return "numero non positivo "
  }
  if(num % 3 === 0 || num % 7 === 0){
    return "il numero è un multiplo di 3"
  } else {
    return "il numero non è un multiplo di 3/7"

  }
  
  }
  console.log(check3and7(18))
  


/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const reverseString = function(EPICODE){
return EPICODE.split('EPICODE').reverse().join('EDOCIPE');
}
console.log(reverseString("EPICODE"))

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const upperFirst = function(s) {
    let capitalized = ""
for (let i = 0; i < s.length; i++) {
if (isUpperCase){
capitalized += s[i].toUpperCasse()
isUpperCase = false
}else{
 capitalized += s[i]
 if (s[i]=== "") isUpperCase = true
}
}
return capitalized;
}
console.log(upperFirst("ciao mi chiamo daniel"))

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const cutString = function (banana) {
    if (banana.length <= 2) {
      return ("")
    }else{    
    return banana.slice(1, banana.length - 1);
}
}
console.log(cutString("banana"))
/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const giveMeRandom = function(n) {

}
