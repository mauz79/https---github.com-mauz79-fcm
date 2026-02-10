// ============================================================================
// LUKESKY SCUDO. Versione Scudo per Confronti Storici.
//                Stampa a fianco delle squadre le immagini delle competizioni
//                vinte la stagione precedente, oppure le immagini delle
//                competizioni vinte di sempre.
// ============================================================================
// ISTRUZIONI.
// ============================================================================
// La vincente delle varie competizioni viene trovata automaticamente grazie
// alla configurazione fatta per ConfrontiStorici. Le uniche cose che vanno
// fatte sono:
//.
// 1) Creare le immagini da visualizzare con il nome identico a quello espresso
//    nel file di configurazione del Palmares (LCS_conf_palmares.txt )
//    preceduto dall'acronimo "small-" e salvarle nella cartella img.
//.
// 2) Nelle pagine dove volete visualizzare le immagini, devono essere presenti
//    le seguenti righe all'inizio, tra i tag <head> e </head>:
//      <script src="js/fcmLegaDati.js" type="text/javascript"></script>
//      <script src="js/fcmAlboDOroFunzioni.js" type="text/javascript"></script>
//      <script src="js/fcmAlboDOroDati.js" type="text/javascript"></script>
//      <script src="persjs/fcmConfrontiFunzioni.js" type="text/javascript"></script>
//      <script src="persjs/fcmConfrontiDati.js" type="text/javascript"></script>
//      <scrip  src="js/fcmSerieAFunzioni.js" type="text/javascript"></script>
//      <script src="js/fcmSerieADati.js" type="text/javascript"></script>
//      <script src="js/fcmFantasquadreFunzioni.js" type="text/javascript"></script>
//      <script src="js/fcmFantasquadreDati.js" type="text/javascript"></script>
//      <script src="persjs/LukeskyScudo.js" type="text/javascript"></script>
//.
// 3) Per visualizzare le immagini delle competizioni vinte la stagione precedente
//    dovete sostituire alla variabile del nome della squadra la chiamata alla
//    funzione Scudo;
//    es tratto da menujs/classifica.js.
//    al posto di
//         document.write(" document.write (arrClassifica[conta].Nome) ")
//    va messo
//         document.write(" document.write (Scudo(arrClassifica[conta].Nome)) ")
//.
// 4) Per visualizzare le immagini delle competizioni vinte di sempre dovete
//    sostituire alla variabile del nome della squadra la chiamata alla funzione
//    ScudoStorici;
//    es tratto da persjs/fcmRankingFunzioni.js.
//    al posto di
//         tabR.SetValore(cnt,2,"<nobr>"+ranking[i].Squadra+"</nobr>")
//    va messo
//         tabR.SetValore(cnt,2,"<nobr>"+ScudoStorici(ranking[i].Squadra)+"</nobr>")
// ============================================================================

function Scudo(nomeDaTestare) {
	var i;
	var immagine = " ";
        var sqRitorno = " ";

        if ( stagione <= 1) {
           sqRitorno=nomeDaTestare;
	} else {	
           
           sqRitorno=nomeDaTestare;
           for (i=1;i<arrPalmares.length;i++) {
               if ( arrPalmares[i].Competizione != 0 ) {
                  immagine = "&nbsp;<img border=\"0\" src=\"img/small-" + arrPalmares[i].Icona + "\" />";
                  if ( nomeDaTestare == cercaVincitore (arrPalmares[i].Competizione) ) {
                    sqRitorno=sqRitorno+immagine;
                  }
	          
	       }
           }
       }
       return sqRitorno;
}

function cercaVincitore(competizione) {

	var p;
	var stag = stagione - 1;
	var vincitore = " ";

	//for (p=arrAdOPosizioni.length; p>0; p--) {
	for (p = 1; p < arrAdOPosizioni.length; p++) {
            if (    arrAdOPosizioni[p].stagione == stag
                 && arrAdOPosizioni[p].idCompetizione == competizione )  {
                if (arrAdOPosizioni[p].posizione == 1) {
                   vincitore = cercaSquadraAlboAttuale ( arrAdOPosizioni[p].idSquadra );
                   p=arrAdOPosizioni.length;
                }
            }
        }
	return vincitore;
}

function cercaSquadraAlboAttuale(codice) {
        var s;
        var nomeSquadra;
        nomeSquadra = " ";
	for (s = 1; s < arrAdOFantasquadre.length; s++) {
           if (arrAdOFantasquadre[s].IDf == codice) {
             if ( arrAdOFantasquadre[s].idAttuale != 0 ) {
                nomeSquadra = cercaSquadra ( arrAdOFantasquadre[s].idAttuale );
                s = arrAdOFantasquadre.length;
             }
           }
        }
	return nomeSquadra;
}

function cercaSquadra(codiceAt) {
        var r;
        var nomeSquadraAt;
        nomeSquadraAt = " ";
	for (r = 1; r < arrFantasquadre.length; r++) {
           if (arrFantasquadre[r].ID == codiceAt) {
              nomeSquadraAt = arrFantasquadre[r].Nome;
	      r = arrFantasquadre.length;
           }
        }
	return nomeSquadraAt;
}

function ScudoStorici(nomeDaTestare) {
	var i, j;
	var immagine = " ";
        var sqRitorno = " ";

        if ( stagione <= 1) {
           sqRitorno=nomeDaTestare;
	} else {	
           
           sqRitorno=nomeDaTestare;
           for (i=1;i<arrPalmares.length;i++) {
               if ( arrPalmares[i].Competizione != 0 ) {
                  immagine = "&nbsp;<img border=\"0\" src=\"img/small-" + arrPalmares[i].Icona + "\" />";
                  for ( j=1;j<=numeroVittorie (arrPalmares[i].Competizione, nomeDaTestare);j++) {
                    sqRitorno=sqRitorno+immagine;
                  }
	          
	       }
           }
       }
       return sqRitorno;
}

function numeroVittorie(competizione, squadra) {

	var p;
	var vittorie = 0;

	//for (p=arrAdOPosizioni.length; p>0; p--) {
	for (p = 1; p < arrAdOPosizioni.length; p++) {
            if (  arrAdOPosizioni[p].idCompetizione == competizione )  {
                if (arrAdOPosizioni[p].posizione == 1) {
                   if ( squadra == cercaSquadraAlbo ( arrAdOPosizioni[p].idSquadra ) ) {
                   	vittorie++;
                   }
                }
            }
        }
	return vittorie;
}

function cercaSquadraAlbo(codice) {
        var s;
        var nomeSquadra;
        nomeSquadra = " ";
	for (s = 1; s < arrAdOFantasquadre.length; s++) {
           if (arrAdOFantasquadre[s].IDf == codice) {
              nomeSquadra =  arrAdOFantasquadre[s].nome;
              s = arrAdOFantasquadre.length;
           }
        }
	return nomeSquadra;
}

