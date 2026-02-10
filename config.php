<?php



######### File corrente: config.php ##########

// parametri di connessione al database MySQL
$db_host = '62.149.150.49';//indirizzo server MySQL o suo IP
$db_user = 'Sql92032';//utente del database x altervista il vostro nick
$db_password = 'ee649ee9';//password per il database x altervista la vostra pasword
$db_name = 'Sql92032_2';//nome del database x altervista my_ seguito dal vostro nick

//amministazione Totofantacalcio
$montepremi=5;//valore del montepremi
$costoGiocata=0.50;//prezzo giocata della schedina
$lenghtPwd=8;//lunghezza password scommettitori
$passwordAdmin= "browndog"; //password amministratore Totofantacalcio
$a="mauz79@gmail.com";// mail amministatore (la mail di notifica della giocata verrà inviata qui)
$da="From: alterlega@gmail.com";//mail mittente (NON MODIFICARE "FROM:")

//VESTE GRAFICA
// se volete modificare la grafica sistemate questa parte al termine dell'installazione di Totofantacalcio, altrimenti non modificate nulla

//classi CSS utilizzate
$valMontepremi="cale-ris-pari";//titolo montepremi
$barraStato="RvDGrigio";//barra di stato nelle operazioni e prezzo giocata schedina
$titoloSezione="titletext";//titoli "Borsino scommettitori", "Scommesse giocate questa settimana", "Amministratore Totofantacalcio"
$tabella1="rigad2";//tabelle: schedine giocate, borsino
$titoliColonne="newshead";//titoli delle colonne delle tabelle
$tabella2="tototabella";//tabelle operazioni
$titoloOperazione="newsheader1";//titolo delle operazioni: sottoscrizione schedina, area amministratore
 
//sfondi
$riga1="#ffffff";//colore righe dispari tabelle
$riga2="#66ccff";//colore righe pari tabella

//sfondi schedina
/*Per modificare anche lo sfondo delle righe della schedina aprire il file "prossimoturno.js" e modificare l'attributo
"bgcolor" alle righe 2 (per l'intestazione dove compare il nome della competizione e la data), 16 (righe dispari delle partite), 31 (righe pari delle partite). 
Inoltre vi consiglio di cambiare i colori delle immagini che si trovano nella cartella "Toto" in funzione dei colori della vostra skin. Se nn siete proprio in grado mandatemi una mail cn il nome della vostra skin e l'indirizzo del vostro sito cn il collegamento al Totofantacalcio e cercherò di mandarvi le immagini modificate.*/
?>