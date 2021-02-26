var parola1=prompt("inserisci quanti km devi percorrere");
var parola2=prompt("inserisci la tua eta");
var prezzo2 =  0.21 * parola1 ;
var prezzo= alert( "prezzo totale : " + prezzo2 + "$" ) ;

if ( isNaN(parola1) ) {
  parola1 = parseInt(prompt("inserisci km in numero "));
   }


if ( isNaN(parola2) ) {
  parola2 = parseInt(prompt("inserisci la tua eta in numero "));
   }


 if ( parola2 < 18 ){
  alert( "prezzo scontato : " + (prezzo2 * 0.8) + "$" );
 }
 else if ( parola2 > 65 ){
  alert( "prezzo scontato : " + (prezzo2 * 0.6) + "$" );
 }
