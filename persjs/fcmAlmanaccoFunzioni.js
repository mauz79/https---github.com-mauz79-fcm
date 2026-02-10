// Oggetti JavaScript per Almanacco
// Oggetto Almanacco
function AlPresenze(IDSquadraStorica,NomeSquadra,NomeGiocatore,Ruolo,Presenze) {
        this.IDSquadraStorica = IDSquadraStorica
	this.NomeSquadra = NomeSquadra
	this.NomeGiocatore = NomeGiocatore
	this.Ruolo = Ruolo
	this.Presenze = Presenze
}

function AlCannonieri(IDSquadraStorica,NomeSquadra,NomeGiocatore,Ruolo,Gol,Presenze,MediaVoto,FantaMediaVoto) {
        this.IDSquadraStorica = IDSquadraStorica
	this.NomeSquadra = NomeSquadra
	this.NomeGiocatore = NomeGiocatore
	this.Ruolo = Ruolo
	this.Gol = Gol
	this.Presenze = Presenze
	this.MediaVoto = MediaVoto
	this.FantaMediaVoto = FantaMediaVoto
}

function AlCattivi(IDSquadraStorica,NomeSquadra,NomeGiocatore,Ruolo,Espulsioni,Ammonizioni,Presenze,MediaVoto,FantaMediaVoto) {
        this.IDSquadraStorica = IDSquadraStorica
	this.NomeSquadra = NomeSquadra
	this.NomeGiocatore = NomeGiocatore
	this.Ruolo = Ruolo
	this.Espulsioni = Espulsioni
	this.Ammonizioni = Ammonizioni
	this.Presenze = Presenze
	this.MediaVoto = MediaVoto
	this.FantaMediaVoto = FantaMediaVoto
}

function AlBestieNere(IDSquadraStorica,NomeSquadra,NomeGiocatore,Ruolo,Gol,Presenze,MediaVoto,FantaMediaVoto) {
        this.IDSquadraStorica = IDSquadraStorica
	this.NomeSquadra = NomeSquadra
	this.NomeGiocatore = NomeGiocatore
	this.Ruolo = Ruolo
	this.Gol = Gol
	this.Presenze = Presenze
	this.MediaVoto = MediaVoto
	this.FantaMediaVoto = FantaMediaVoto
}

function AlTop11(IDSquadraStorica,NomeSquadra,NomeGiocatore,Ruolo,FantaMediaVoto,MediaVoto,Presenze,Gol) {
        this.IDSquadraStorica = IDSquadraStorica
	this.NomeSquadra = NomeSquadra
	this.NomeGiocatore = NomeGiocatore
	this.Ruolo = Ruolo
	this.FantaMediaVoto = FantaMediaVoto
	this.MediaVoto = MediaVoto
	this.Presenze = Presenze
	this.Gol = Gol
}

function AlFlop11(IDSquadraStorica,NomeSquadra,NomeGiocatore,Ruolo,FantaMediaVoto,MediaVoto,Presenze,Gol) {
        this.IDSquadraStorica = IDSquadraStorica
	this.NomeSquadra = NomeSquadra
	this.NomeGiocatore = NomeGiocatore
	this.Ruolo = Ruolo
	this.FantaMediaVoto = FantaMediaVoto
	this.MediaVoto = MediaVoto
	this.Presenze = Presenze
	this.Gol = Gol
}

function AlTopRating(IDSquadraStorica,NomeSquadra,NomeGiocatore,Ruolo,Rating,FantaMediaVoto,Costo,Presenze) {
        this.IDSquadraStorica = IDSquadraStorica
	this.NomeSquadra = NomeSquadra
	this.NomeGiocatore = NomeGiocatore
	this.Ruolo = Ruolo
	this.Rating = Rating
	this.FantaMediaVoto = FantaMediaVoto
	this.Costo = Costo
	this.Presenze = Presenze
}

function AlFlopRating(IDSquadraStorica,NomeSquadra,NomeGiocatore,Ruolo,Rating,FantaMediaVoto,Costo,Presenze) {
        this.IDSquadraStorica = IDSquadraStorica
	this.NomeSquadra = NomeSquadra
	this.NomeGiocatore = NomeGiocatore
	this.Ruolo = Ruolo
	this.Rating = Rating
	this.FantaMediaVoto = FantaMediaVoto
	this.Costo = Costo
	this.Presenze = Presenze
}

function AMOD(IDModulo,Descrizione)
{
        this.IDModulo = IDModulo
        this.Descrizione = Descrizione
}


function GeneraIntestazioneFantasquadreAlm(cFsq) {
var arrF = new Object()
arrF = arrAdOFantasquadre
document.write("<form name='frmFsq' id='frmFsq' action='almanacco.htm' method='get'>")
document.write("<table width='100%' border='00' cellspacing='0' cellpadding='0'>")
document.write("<tr><td width='5%' class='t-xxsB'><nobr>Fantasquadra:&nbsp;<select name='Fsq' class='t-xxs' id='Fsq'>")
for (i=1;i<arrF.length;i++) {
	document.write("<option value='" + arrF[i].IDf + "'")
        if (arrF[i].IDf == cFsq) document.write(" selected")
	document.write(">" + arrF[i].nome + "</option>")
}
document.write("</select></nobr></td>")
document.write("<td width='95%' class='t-xxsB'>&nbsp;&nbsp;<input name='Invia' type='submit' class='t-xxs' id='Invia' value='  Vai  '></td></tr>")
document.write("</tr></table></form>")
}

function GeneraFedelissimi(IDSq) {
    var i;
    var trovata = 0;
    var conta = 0;
    var Giocatore = "";
    var presenze = new Array()
    presenze = arrAlPresenze;

    document.write("  <div align='center' id='CostanteFCarriera'>Fedelissimi</div>");
    document.write("  <table width='300' class='TBLCARRIERA' border='0' cellpadding='2' cellspacing='0' style='width: 100%;'>");
    document.write("    <tr align='left'>");
    document.write("        <th>Giocatore</th>");
    document.write("        <th align='center'>Ruolo</th>");
    document.write("        <th align='center'>Presenze</th>");
    document.write("   </tr>");

    for(y=1;y<presenze.length;y++) {
      trovato=0
      if ((presenze[y].IDSquadraStorica!=IDSq)) {
        if ( trovato == 1 ) {
          y=presenze.lenght
        }
      } else {
        trovato=1
	      conta++;	 
              if( conta % 2 == 0 ) {
		document.write ("  <tr class='onOutPari' onMouseOver=\"this.className='onOver'\" onMouseOut=\"this.className='onOutPari'\">")
	      } else {
		document.write ("  <tr class='onOut' onMouseOver=\"this.className='onOver'\" onMouseOut=\"this.className='onOut'\">")
              }
              document.write ("    <td nowrap>" + presenze[y].NomeGiocatore + "</td>");
              document.write ("    <td align='center'>" + presenze[y].Ruolo.substring(0,1) + "</td>");
              document.write ("    <td align='center'>" + presenze[y].Presenze + "</td>");
              document.write ("  </tr>");

       }
     }
     document.write("  </table>");
}

function GeneraCannonieri(IDSq) {
    var i;
    var trovata = 0; 
    var conta = 0;
    var Giocatore = "";
    var cannonieri = new Array()
    cannonieri = arrAlCannonieri;

    document.write("  <div align='center' id='CostanteFCarriera'>Cannonieri</div>");
    document.write("  <table width='300' class='TBLCARRIERA' border='0' cellpadding='2' cellspacing='0' style='width: 100%;'>");
    document.write("    <tr align='left'>");
    document.write("        <th>Giocatore</th>");
    document.write("        <th align='center'>Ruolo</th>");
    document.write("        <th align='center'>Gol</th>");
    document.write("        <th align='center'>Presenze</th>");
    document.write("        <th align='center'>MV</th>");
    document.write("        <th align='center'>FV</th>");
    document.write("   </tr>");

    for(y=1;y<cannonieri.length;y++) {
      trovato=0
      if ((cannonieri[y].IDSquadraStorica!=IDSq)) {
        if ( trovato == 1 ) {
          y=cannonieri.lenght
        }
      } else {
        trovato=1

	      conta++;	 
              if( conta % 2 == 0 ) {
		document.write ("  <tr class='onOutPari' onMouseOver=\"this.className='onOver'\" onMouseOut=\"this.className='onOutPari'\">")
	      } else {
		document.write ("  <tr class='onOut' onMouseOver=\"this.className='onOver'\" onMouseOut=\"this.className='onOut'\">")
              }
              document.write ("    <td nowrap>" + cannonieri[y].NomeGiocatore + "</td>");
              document.write ("    <td align='center'>" + cannonieri[y].Ruolo.substring(0,1) + "</td>");
              document.write ("    <td align='center'>" + cannonieri[y].Gol + "</td>");
              document.write ("    <td align='center'>" + cannonieri[y].Presenze + "</td>");
              document.write ("    <td align='center'>" + cannonieri[y].MediaVoto + "</td>");
              document.write ("    <td align='center'>" + cannonieri[y].FantaMediaVoto + "</td>");
              document.write ("  </tr>");

       }
     }
     document.write("  </table>");
}

function GeneraCattivi(IDSq) {
    var i;
    var trovata = 0;
    var conta = 0;
    var Giocatore = "";
    var cattivi = new Array()
    cattivi = arrAlCattivi;

    document.write("  <div align='center' id='CostanteFCarriera'>Cattivi</div>");
    document.write("  <table width='300' class='TBLCARRIERA' border='0' cellpadding='2' cellspacing='0' style='width: 100%;'>");
    document.write("    <tr align='left'>");
    document.write("        <th>Giocatore</th>");
    document.write("        <th align='center'>Ruolo</th>");
    document.write("        <th align='center'><img src='img/album_esp.gif' alt='Espulsioni' border='0' align='absmiddle'/></th>");
    document.write("        <th align='center'><img src='img/album_amm.gif' alt='Ammonizioni' border='0' align='absmiddle'/></th>");
    document.write("        <th align='center'>Presenze</th>");
    document.write("        <th align='center'>MV</th>");
    document.write("        <th align='center'>FV</th>");
    document.write("   </tr>");

    for(y=1;y<cattivi.length;y++) {
      trovato=0
      if ((cattivi[y].IDSquadraStorica!=IDSq)) {
        if ( trovato == 1 ) {
          y=cattivi.lenght
        }
      } else {
        trovato=1
 
              conta++;	 
              if( conta % 2 == 0 ) {
		document.write ("  <tr class='onOutPari' onMouseOver=\"this.className='onOver'\" onMouseOut=\"this.className='onOutPari'\">")
	      } else {
		document.write ("  <tr class='onOut' onMouseOver=\"this.className='onOver'\" onMouseOut=\"this.className='onOut'\">")
              }
              document.write ("    <td nowrap>" + cattivi[y].NomeGiocatore + "</td>");
              document.write ("    <td align='center'>" + cattivi[y].Ruolo.substring(0,1) + "</td>");
              document.write ("    <td align='center'>" + cattivi[y].Espulsioni + "</td>");
              document.write ("    <td align='center'>" + cattivi[y].Ammonizioni + "</td>");
              document.write ("    <td align='center'>" + cattivi[y].Presenze + "</td>");
              document.write ("    <td align='center'>" + cattivi[y].MediaVoto + "</td>");
              document.write ("    <td align='center'>" + cattivi[y].FantaMediaVoto + "</td>");
              document.write ("  </tr>");

       }
     }
     document.write("  </table>");
}

function GeneraBestieNere(IDSq) {
    var i;
    var trovata = 0;
    var conta = 0;
    var Giocatore = "";
    var bestieNere = new Array()
    bestieNere = arrAlBestieNere;

    document.write("  <div align='center' id='CostanteFCarriera'>Bestie Nere</div>");
    document.write("  <table width='300' class='TBLCARRIERA' border='0' cellpadding='2' cellspacing='0' style='width: 100%;'>");
    document.write("    <tr align='left'>");
    document.write("        <th>Giocatore</th>");
    document.write("        <th align='center'>Ruolo</th>");
    document.write("        <th align='center'>Gol</th>");
    document.write("        <th align='center'>Presenze</th>");
    document.write("        <th align='center'>MV</th>");
    document.write("        <th align='center'>FV</th>");
    document.write("   </tr>");

    for(y=1;y<bestieNere.length;y++) {
      trovato=0
      if ((bestieNere[y].IDSquadraStorica!=IDSq)) {
        if ( trovato == 1 ) {
          y=bestieNere.lenght
        }
      } else {
        trovato=1
 
              conta++;	 
              if( conta % 2 == 0 ) {
		document.write ("  <tr class='onOutPari' onMouseOver=\"this.className='onOver'\" onMouseOut=\"this.className='onOutPari'\">")
	      } else {
		document.write ("  <tr class='onOut' onMouseOver=\"this.className='onOver'\" onMouseOut=\"this.className='onOut'\">")
              }
              document.write ("    <td nowrap>" + bestieNere[y].NomeGiocatore + "</td>");
              document.write ("    <td align='center'>" + bestieNere[y].Ruolo.substring(0,1) + "</td>");
              document.write ("    <td align='center'>" + bestieNere[y].Gol + "</td>");
              document.write ("    <td align='center'>" + bestieNere[y].Presenze + "</td>");
              document.write ("    <td align='center'>" + bestieNere[y].MediaVoto + "</td>");
              document.write ("    <td align='center'>" + bestieNere[y].FantaMediaVoto + "</td>");
              document.write ("  </tr>");

       }
     }
     document.write("  </table>");
}

function GeneraIntestazioneTopFlop(cFsq, modTop11, modFlop11) {
   var arrF = new Object()
   arrF = arrAdOFantasquadre
   var arrM = new Object()
   arrM = aModuli
   document.write("<form name='frmFsq' id='frmFsq' action='topFlopStorico.htm' method='get'>")
   document.write("<table width='100%' border='00' cellspacing='0' cellpadding='0'>")
   document.write("<tr><td width='5%' class='t-xxsB'><nobr>Fantasquadra:&nbsp;<select name='Fsq' class='t-xxs' id='Fsq'>")
   for (i=1;i<arrF.length;i++) {
	document.write("<option value='" + arrF[i].IDf + "'")
        if (arrF[i].IDf == cFsq) document.write(" selected")
	document.write(">" + arrF[i].nome + "</option>")
   }
   document.write("</select></nobr></td>")
   document.write("</tr><tr></tr><tr><td><nobr>Modulo Top11:&nbsp;<select name='modTop11' class='t-xxs' id='modTop11'>")
   for (i=1;i<arrM.length;i++) {
	document.write("<option value='" + arrM[i].IDModulo + "'")
        if (arrM[i].IDModulo == modTop11) document.write(" selected")
	document.write(">" + arrM[i].Descrizione + "</option>")
   }
   document.write("</select></nobr></td>")
   document.write("<td></td><td><nobr>Modulo Flop11:&nbsp;<select name='modFlop11' class='t-xxs' id='modFlop11'>")
   for (i=1;i<arrM.length;i++) {
	document.write("<option value='" + arrM[i].IDModulo + "'")
        if (arrM[i].IDModulo == modFlop11) document.write(" selected")
	document.write(">" + arrM[i].Descrizione + "</option>")
   }
   document.write("</select></nobr></td>")
   document.write("<td width='95%' class='t-xxsB'>&nbsp;&nbsp;<input name='Invia' type='submit' class='t-xxs' id='Invia' value='  Vai  '></td></tr>")
   document.write("</form>")
   document.write("</tr></table></form>")
}

function GeneraTop11(IDSq, modTop11) {
    var i;
    var trovata = 0;
    var conta = 0;
    var Giocatore = "";
    var top11 = new Array()
    top11 = arrAlTop11;
    var contPortieri = 0;
    var contDifensori = 0;
    var contCentrocampisti = 0;
    var contAttaccanti = 0;
    var maxPortieri = 1;
    var maxDifensori = 0;
    var maxCentrocampisti = 0;
    var maxAttaccanti = 0;
    if ( modTop11 == "1" || modTop11 == "2" )
    	maxDifensori = 3;
    else if ( modTop11 == "5" || modTop11 == "6" )
	maxDifensori = 5;
    else if ( modTop11 == "7" )
	maxDifensori = 6;
    else
	maxDifensori = 4;

    if ( modTop11 == "3" || modTop11 == "6" || modTop11 == "7" )
    	maxCentrocampisti = 3;
    else if ( modTop11 == "2" || modTop11 == "4" )
	maxCentrocampisti = 5;
    else
	maxCentrocampisti = 4;

    if ( modTop11 == "4" || modTop11 == "5" || modTop11 == "7" )
    	maxAttaccanti = 1;
    else if ( modTop11 == "1" || modTop11 == "3" )
	maxAttaccanti = 3;
    else
	maxAttaccanti = 2;


    document.write("  <div align='center' id='CostanteFCarriera'>TOP 11</div>");
    document.write("  <table width='300' class='TBLCARRIERA' border='0' cellpadding='2' cellspacing='0' style='width: 100%;'>");
    document.write("    <tr align='left'>");
    document.write("        <th>Ruolo</th>");
    document.write("        <th>Giocatore</th>");
    document.write("        <th align='center'>FV</th>");
    document.write("        <th align='center'>MV</th>");
    document.write("        <th align='center'>Presenze</th>");
    document.write("        <th align='center'>Gol</th>");
    document.write("   </tr>");

    for(y=1;y<top11.length;y++) {
      trovato=0
      if ((top11[y].IDSquadraStorica!=IDSq)) {
        if ( trovato == 1 ) {
          y=top11.lenght
        }
      } else {
        trovato=1
        
              
 	if ( top11[y].Ruolo.substring(0,1) == "P" && contPortieri < maxPortieri ) {
              contPortieri++;
              conta++;
	      if( conta % 2 == 0 ) {
		document.write ("  <tr class='onOutPari' onMouseOver=\"this.className='onOver'\" onMouseOut=\"this.className='onOutPari'\">")
	      } else {
		document.write ("  <tr class='onOut' onMouseOver=\"this.className='onOver'\" onMouseOut=\"this.className='onOut'\">")
              }
              document.write ("    <td>" + top11[y].Ruolo.substring(0,1) + "</td>");
              document.write ("    <td nowrap>" + top11[y].NomeGiocatore + "</td>");
              document.write ("    <td align='center'>" + top11[y].FantaMediaVoto + "</td>");
              document.write ("    <td align='center'>" + top11[y].MediaVoto + "</td>");
              document.write ("    <td align='center'>" + top11[y].Presenze + "</td>");
              document.write ("    <td align='center'>" + top11[y].Gol + "</td>");
              document.write ("  </tr>");
        }
 	if ( top11[y].Ruolo.substring(0,1) == "D" && contDifensori < maxDifensori ) {
              contDifensori++;
              conta++;
	      if( conta % 2 == 0 ) {
		document.write ("  <tr class='onOutPari' onMouseOver=\"this.className='onOver'\" onMouseOut=\"this.className='onOutPari'\">")
	      } else {
		document.write ("  <tr class='onOut' onMouseOver=\"this.className='onOver'\" onMouseOut=\"this.className='onOut'\">")
              }
              document.write ("    <td>" + top11[y].Ruolo.substring(0,1) + "</td>");
              document.write ("    <td nowrap>" + top11[y].NomeGiocatore + "</td>");
              document.write ("    <td align='center'>" + top11[y].FantaMediaVoto + "</td>");
              document.write ("    <td align='center'>" + top11[y].MediaVoto + "</td>");
              document.write ("    <td align='center'>" + top11[y].Presenze + "</td>");
              document.write ("    <td align='center'>" + top11[y].Gol + "</td>");
              document.write ("  </tr>");
        }
 	if ( top11[y].Ruolo.substring(0,1) == "C" && contCentrocampisti < maxCentrocampisti ) {
              contCentrocampisti++;
              conta++;
	      if( conta % 2 == 0 ) {
		document.write ("  <tr class='onOutPari' onMouseOver=\"this.className='onOver'\" onMouseOut=\"this.className='onOutPari'\">")
	      } else {
		document.write ("  <tr class='onOut' onMouseOver=\"this.className='onOver'\" onMouseOut=\"this.className='onOut'\">")
              }
              document.write ("    <td>" + top11[y].Ruolo.substring(0,1) + "</td>");
              document.write ("    <td nowrap>" + top11[y].NomeGiocatore + "</td>");
              document.write ("    <td align='center'>" + top11[y].FantaMediaVoto + "</td>");
              document.write ("    <td align='center'>" + top11[y].MediaVoto + "</td>");
              document.write ("    <td align='center'>" + top11[y].Presenze + "</td>");
              document.write ("    <td align='center'>" + top11[y].Gol + "</td>");
              document.write ("  </tr>");
        }
 	if ( top11[y].Ruolo.substring(0,1) == "A" && contAttaccanti < maxAttaccanti ) {
              contAttaccanti++;
              conta++;
	      if( conta % 2 == 0 ) {
		document.write ("  <tr class='onOutPari' onMouseOver=\"this.className='onOver'\" onMouseOut=\"this.className='onOutPari'\">")
	      } else {
		document.write ("  <tr class='onOut' onMouseOver=\"this.className='onOver'\" onMouseOut=\"this.className='onOut'\">")
              }
              document.write ("    <td>" + top11[y].Ruolo.substring(0,1) + "</td>");
              document.write ("    <td nowrap>" + top11[y].NomeGiocatore + "</td>");
              document.write ("    <td align='center'>" + top11[y].FantaMediaVoto + "</td>");
              document.write ("    <td align='center'>" + top11[y].MediaVoto + "</td>");
              document.write ("    <td align='center'>" + top11[y].Presenze + "</td>");
              document.write ("    <td align='center'>" + top11[y].Gol + "</td>");
              document.write ("  </tr>");
        }
      }
    }
    document.write ("  <tr align='center'>");
    document.write ("     <th colspan=7>Panchina</th>");
    document.write ("  </tr>");

    contPortieri = 0;
    contDifensori = 0;
    contCentrocampisti = 0;
    contAttaccanti = 0;
    conta = 0;
    
    for(y=1;y<top11.length;y++) {
      trovato=0
      if ((top11[y].IDSquadraStorica!=IDSq)) {
        if ( trovato == 1 ) {
          y=top11.lenght
        }
      } else {
        trovato=1
	
 	if ( top11[y].Ruolo.substring(0,1) == "P" ) {
              contPortieri++;
	      if ( contPortieri > maxPortieri  && contPortieri <= ( maxPortieri + 1 ) ) {
                conta++;
	        if( conta % 2 == 0 ) {
	          document.write ("  <tr class='onOutPari' onMouseOver=\"this.className='onOver'\" onMouseOut=\"this.className='onOutPari'\">")
	        } else {
	          document.write ("  <tr class='onOut' onMouseOver=\"this.className='onOver'\" onMouseOut=\"this.className='onOut'\">")
                }
                document.write ("    <td>" + top11[y].Ruolo.substring(0,1) + "</td>");
                document.write ("    <td nowrap>" + top11[y].NomeGiocatore + "</td>");
                document.write ("    <td align='center'>" + top11[y].FantaMediaVoto + "</td>");
                document.write ("    <td align='center'>" + top11[y].MediaVoto + "</td>");
                document.write ("    <td align='center'>" + top11[y].Presenze + "</td>");
                document.write ("    <td align='center'>" + top11[y].Gol + "</td>");
                document.write ("  </tr>");
              }
        }
 	if ( top11[y].Ruolo.substring(0,1) == "D" ) {
              contDifensori++;
              if ( contDifensori > maxDifensori && contDifensori <= ( maxDifensori + 2 ) ) {
                conta++;
                if( conta % 2 == 0 ) {
	          document.write ("  <tr class='onOutPari' onMouseOver=\"this.className='onOver'\" onMouseOut=\"this.className='onOutPari'\">")
	        } else {
	          document.write ("  <tr class='onOut' onMouseOver=\"this.className='onOver'\" onMouseOut=\"this.className='onOut'\">")
                }
                document.write ("    <td>" + top11[y].Ruolo.substring(0,1) + "</td>");
                document.write ("    <td nowrap>" + top11[y].NomeGiocatore + "</td>");
                document.write ("    <td align='center'>" + top11[y].FantaMediaVoto + "</td>");
                document.write ("    <td align='center'>" + top11[y].MediaVoto + "</td>");
                document.write ("    <td align='center'>" + top11[y].Presenze + "</td>");
                document.write ("    <td align='center'>" + top11[y].Gol + "</td>");
                document.write ("  </tr>");
              }
        }
 	if ( top11[y].Ruolo.substring(0,1) == "C" ) {
              contCentrocampisti++;
              if ( contCentrocampisti > maxCentrocampisti && contCentrocampisti <= ( maxCentrocampisti + 2 ) ) {
                conta++;
                if( conta % 2 == 0 ) {
	          document.write ("  <tr class='onOutPari' onMouseOver=\"this.className='onOver'\" onMouseOut=\"this.className='onOutPari'\">")
	        } else {
	          document.write ("  <tr class='onOut' onMouseOver=\"this.className='onOver'\" onMouseOut=\"this.className='onOut'\">")
                }
                document.write ("    <td>" + top11[y].Ruolo.substring(0,1) + "</td>");
                document.write ("    <td nowrap>" + top11[y].NomeGiocatore + "</td>");
                document.write ("    <td align='center'>" + top11[y].FantaMediaVoto + "</td>");
                document.write ("    <td align='center'>" + top11[y].MediaVoto + "</td>");
                document.write ("    <td align='center'>" + top11[y].Presenze + "</td>");
                document.write ("    <td align='center'>" + top11[y].Gol + "</td>");
                document.write ("  </tr>");
              }
        }
 	if ( top11[y].Ruolo.substring(0,1) == "A" ) {
              contAttaccanti++;
              if ( contAttaccanti > maxAttaccanti && contAttaccanti <= ( maxAttaccanti + 2 ) ) {
                conta++;
                if( conta % 2 == 0 ) {
	          document.write ("  <tr class='onOutPari' onMouseOver=\"this.className='onOver'\" onMouseOut=\"this.className='onOutPari'\">")
	        } else {
	          document.write ("  <tr class='onOut' onMouseOver=\"this.className='onOver'\" onMouseOut=\"this.className='onOut'\">")
                }
                document.write ("    <td>" + top11[y].Ruolo.substring(0,1) + "</td>");
                document.write ("    <td nowrap>" + top11[y].NomeGiocatore + "</td>");
                document.write ("    <td align='center'>" + top11[y].FantaMediaVoto + "</td>");
                document.write ("    <td align='center'>" + top11[y].MediaVoto + "</td>");
                document.write ("    <td align='center'>" + top11[y].Presenze + "</td>");
                document.write ("    <td align='center'>" + top11[y].Gol + "</td>");
                document.write ("  </tr>");
              }
        }
      }
    }
    document.write("  </table>");
}

function GeneraFlop11(IDSq, modFlop11) {
    var i;
    var trovata = 0;
    var conta = 0;
    var Giocatore = "";
    var flop11 = new Array()
    flop11 = arrAlFlop11;
    var contPortieri = 0;
    var contDifensori = 0;
    var contCentrocampisti = 0;
    var contAttaccanti = 0;
    var maxPortieri = 1;
    var maxDifensori = 0;
    var maxCentrocampisti = 0;
    var maxAttaccanti = 0;
    if ( modFlop11 == "1" || modFlop11 == "2" )
    	maxDifensori = 3;
    else if ( modFlop11 == "5" || modFlop11 == "6" )
	maxDifensori = 5;
    else if ( modFlop11 == "7" )
	maxDifensori = 6;
    else
	maxDifensori = 4;

    if ( modFlop11 == "3" || modFlop11 == "6" || modFlop11 == "7" )
    	maxCentrocampisti = 3;
    else if ( modFlop11 == "2" || modFlop11 == "4" )
	maxCentrocampisti = 5;
    else
	maxCentrocampisti = 4;

    if ( modFlop11 == "4" || modFlop11 == "5" || modFlop11 == "7" )
    	maxAttaccanti = 1;
    else if ( modFlop11 == "1" || modFlop11 == "3" )
	maxAttaccanti = 3;
    else
	maxAttaccanti = 2;


    document.write("  <div align='center' id='CostanteFCarriera'>FLOP 11</div>");
    document.write("  <table width='300' class='TBLCARRIERA' border='0' cellpadding='2' cellspacing='0' style='width: 100%;'>");
    document.write("    <tr align='left'>");
    document.write("        <th>Ruolo</th>");
    document.write("        <th>Giocatore</th>");
    document.write("        <th align='center'>FV</th>");
    document.write("        <th align='center'>MV</th>");
    document.write("        <th align='center'>Presenze</th>");
    document.write("        <th align='center'>Gol</th>");
    document.write("   </tr>");

    for(y=1;y<flop11.length;y++) {
      trovato=0
      if ((flop11[y].IDSquadraStorica!=IDSq)) {
        if ( trovato == 1 ) {
          y=flop11.lenght
        }
      } else {
        trovato=1
       if ( flop11[y].Ruolo.substring(0,1) == "P" && contPortieri < maxPortieri ) {
              contPortieri++;
              conta++;
	      if( conta % 2 == 0 ) {
	        document.write ("  <tr class='onOutPari' onMouseOver=\"this.className='onOver'\" onMouseOut=\"this.className='onOutPari'\">")
	      } else {
	        document.write ("  <tr class='onOut' onMouseOver=\"this.className='onOver'\" onMouseOut=\"this.className='onOut'\">")
              }
              document.write ("    <td>" + flop11[y].Ruolo.substring(0,1) + "</td>");
              document.write ("    <td nowrap>" + flop11[y].NomeGiocatore + "</td>");
              document.write ("    <td align='center'>" + flop11[y].FantaMediaVoto + "</td>");
              document.write ("    <td align='center'>" + flop11[y].MediaVoto + "</td>");
              document.write ("    <td align='center'>" + flop11[y].Presenze + "</td>");
              document.write ("    <td align='center'>" + flop11[y].Gol + "</td>");
              document.write ("  </tr>");
        }
 	if ( flop11[y].Ruolo.substring(0,1) == "D" && contDifensori < maxDifensori ) {
              contDifensori++;
              conta++;
	      if( conta % 2 == 0 ) {
	        document.write ("  <tr class='onOutPari' onMouseOver=\"this.className='onOver'\" onMouseOut=\"this.className='onOutPari'\">")
	      } else {
	        document.write ("  <tr class='onOut' onMouseOver=\"this.className='onOver'\" onMouseOut=\"this.className='onOut'\">")
              }
              document.write ("    <td>" + flop11[y].Ruolo.substring(0,1) + "</td>");
              document.write ("    <td nowrap>" + flop11[y].NomeGiocatore + "</td>");
              document.write ("    <td align='center'>" + flop11[y].FantaMediaVoto + "</td>");
              document.write ("    <td align='center'>" + flop11[y].MediaVoto + "</td>");
              document.write ("    <td align='center'>" + flop11[y].Presenze + "</td>");
              document.write ("    <td align='center'>" + flop11[y].Gol + "</td>");
              document.write ("  </tr>");
        }
 	if ( flop11[y].Ruolo.substring(0,1) == "C" && contCentrocampisti < maxCentrocampisti ) {
              contCentrocampisti++;
              conta++;
              if( conta % 2 == 0 ) {
	        document.write ("  <tr class='onOutPari' onMouseOver=\"this.className='onOver'\" onMouseOut=\"this.className='onOutPari'\">")
	      } else {
	        document.write ("  <tr class='onOut' onMouseOver=\"this.className='onOver'\" onMouseOut=\"this.className='onOut'\">")
              }
              document.write ("    <td>" + flop11[y].Ruolo.substring(0,1) + "</td>");
              document.write ("    <td nowrap>" + flop11[y].NomeGiocatore + "</td>");
              document.write ("    <td align='center'>" + flop11[y].FantaMediaVoto + "</td>");
              document.write ("    <td align='center'>" + flop11[y].MediaVoto + "</td>");
              document.write ("    <td align='center'>" + flop11[y].Presenze + "</td>");
              document.write ("    <td align='center'>" + flop11[y].Gol + "</td>");
              document.write ("  </tr>");
        }
 	if ( flop11[y].Ruolo.substring(0,1) == "A" && contAttaccanti < maxAttaccanti ) {
              contAttaccanti++;
              conta++;
	      if( conta % 2 == 0 ) {
	        document.write ("  <tr class='onOutPari' onMouseOver=\"this.className='onOver'\" onMouseOut=\"this.className='onOutPari'\">")
	      } else {
	        document.write ("  <tr class='onOut' onMouseOver=\"this.className='onOver'\" onMouseOut=\"this.className='onOut'\">")
              }
              document.write ("    <td>" + flop11[y].Ruolo.substring(0,1) + "</td>");
              document.write ("    <td nowrap>" + flop11[y].NomeGiocatore + "</td>");
              document.write ("    <td align='center'>" + flop11[y].FantaMediaVoto + "</td>");
              document.write ("    <td align='center'>" + flop11[y].MediaVoto + "</td>");
              document.write ("    <td align='center'>" + flop11[y].Presenze + "</td>");
              document.write ("    <td align='center'>" + flop11[y].Gol + "</td>");
              document.write ("  </tr>");
        }
      }
    }
    document.write ("  <tr align='center'>");
    document.write ("     <th colspan=7>Panchina</th>");
    document.write ("  </tr>");

    contPortieri = 0;
    contDifensori = 0;
    contCentrocampisti = 0;
    contAttaccanti = 0;
    conta = 0;
    
    for(y=1;y<flop11.length;y++) {
      trovato=0
      if ((flop11[y].IDSquadraStorica!=IDSq)) {
        if ( trovato == 1 ) {
          y=flop11.lenght
        }
      } else {
        trovato=1
        if ( flop11[y].Ruolo.substring(0,1) == "P" ) {
              contPortieri++;
              if ( contPortieri > maxPortieri  && contPortieri <= ( maxPortieri + 1 ) ) {
                conta++;
	        if( conta % 2 == 0 ) {
	          document.write ("  <tr class='onOutPari' onMouseOver=\"this.className='onOver'\" onMouseOut=\"this.className='onOutPari'\">")
	        } else {
	          document.write ("  <tr class='onOut' onMouseOver=\"this.className='onOver'\" onMouseOut=\"this.className='onOut'\">")
                }
                document.write ("    <td>" + flop11[y].Ruolo.substring(0,1) + "</td>");
                document.write ("    <td nowrap>" + flop11[y].NomeGiocatore + "</td>");
                document.write ("    <td align='center'>" + flop11[y].FantaMediaVoto + "</td>");
                document.write ("    <td align='center'>" + flop11[y].MediaVoto + "</td>");
                document.write ("    <td align='center'>" + flop11[y].Presenze + "</td>");
                document.write ("    <td align='center'>" + flop11[y].Gol + "</td>");
                document.write ("  </tr>");
              }
        }
 	if ( flop11[y].Ruolo.substring(0,1) == "D" ) {
              contDifensori++;
              if ( contDifensori > maxDifensori && contDifensori <= ( maxDifensori + 2 ) ) {
                conta++;
                if( conta % 2 == 0 ) {
	          document.write ("  <tr class='onOutPari' onMouseOver=\"this.className='onOver'\" onMouseOut=\"this.className='onOutPari'\">")
	        } else {
	          document.write ("  <tr class='onOut' onMouseOver=\"this.className='onOver'\" onMouseOut=\"this.className='onOut'\">")
                }
                document.write ("    <td>" + flop11[y].Ruolo.substring(0,1) + "</td>");
                document.write ("    <td nowrap>" + flop11[y].NomeGiocatore + "</td>");
                document.write ("    <td align='center'>" + flop11[y].FantaMediaVoto + "</td>");
                document.write ("    <td align='center'>" + flop11[y].MediaVoto + "</td>");
                document.write ("    <td align='center'>" + flop11[y].Presenze + "</td>");
                document.write ("    <td align='center'>" + flop11[y].Gol + "</td>");
                document.write ("  </tr>");
              }
        }
 	if ( flop11[y].Ruolo.substring(0,1) == "C" ) {
              contCentrocampisti++;
              if ( contCentrocampisti > maxCentrocampisti && contCentrocampisti <= ( maxCentrocampisti + 2 ) ) {
                conta++;
                if( conta % 2 == 0 ) {
	          document.write ("  <tr class='onOutPari' onMouseOver=\"this.className='onOver'\" onMouseOut=\"this.className='onOutPari'\">")
	        } else {
	          document.write ("  <tr class='onOut' onMouseOver=\"this.className='onOver'\" onMouseOut=\"this.className='onOut'\">")
                }
                document.write ("    <td>" + flop11[y].Ruolo.substring(0,1) + "</td>");
                document.write ("    <td nowrap>" + flop11[y].NomeGiocatore + "</td>");
                document.write ("    <td align='center'>" + flop11[y].FantaMediaVoto + "</td>");
                document.write ("    <td align='center'>" + flop11[y].MediaVoto + "</td>");
                document.write ("    <td align='center'>" + flop11[y].Presenze + "</td>");
                document.write ("    <td align='center'>" + flop11[y].Gol + "</td>");
                document.write ("  </tr>");
              }
        }
 	if ( flop11[y].Ruolo.substring(0,1) == "A" ) {
              contAttaccanti++;
              if ( contAttaccanti > maxAttaccanti && contAttaccanti <= ( maxAttaccanti + 2 ) ) {
                conta++;
                if( conta % 2 == 0 ) {
	          document.write ("  <tr class='onOutPari' onMouseOver=\"this.className='onOver'\" onMouseOut=\"this.className='onOutPari'\">")
	        } else {
	          document.write ("  <tr class='onOut' onMouseOver=\"this.className='onOver'\" onMouseOut=\"this.className='onOut'\">")
                }
                document.write ("    <td>" + flop11[y].Ruolo.substring(0,1) + "</td>");
                document.write ("    <td nowrap>" + flop11[y].NomeGiocatore + "</td>");
                document.write ("    <td align='center'>" + flop11[y].FantaMediaVoto + "</td>");
                document.write ("    <td align='center'>" + flop11[y].MediaVoto + "</td>");
                document.write ("    <td align='center'>" + flop11[y].Presenze + "</td>");
                document.write ("    <td align='center'>" + flop11[y].Gol + "</td>");
                document.write ("  </tr>");
              }
        }
      }
    }
    document.write("  </table>");
}

function GeneraIntestazioneRating(cFsq) {
var arrF = new Object()
arrF = arrAdOFantasquadre
document.write("<form name='frmFsq' id='frmFsq' action='rating.htm' method='get'>")
document.write("<table width='100%' border='00' cellspacing='0' cellpadding='0'>")
document.write("<tr><td width='5%' class='t-xxsB'><nobr>Fantasquadra:&nbsp;<select name='Fsq' class='t-xxs' id='Fsq'>")
for (i=1;i<arrF.length;i++) {
	document.write("<option value='" + arrF[i].IDf + "'")
        if (arrF[i].IDf == cFsq) document.write(" selected")
	document.write(">" + arrF[i].nome + "</option>")
}
document.write("</select></nobr></td>")
document.write("<td width='95%' class='t-xxsB'>&nbsp;&nbsp;<input name='Invia' type='submit' class='t-xxs' id='Invia' value='  Vai  '></td></tr>")
document.write("</tr></table></form>")
}

function GeneraTopRating(IDSq) {
    var i;
    var trovata = 0; 
    var conta = 0;
    var Giocatore = "";
    var topRating = new Array()
    topRating = arrAlTopRat;

    document.write("  <div align='center' id='CostanteFCarriera'>Top Rating</div>");
    document.write("  <table width='300' class='TBLCARRIERA' border='0' cellpadding='2' cellspacing='0' style='width: 100%;'>");
    document.write("    <tr align='left'>");
    document.write("        <th>Giocatore</th>");
    document.write("        <th align='center'>Ruolo</th>");
    document.write("        <th align='center'>Rating</th>");
    document.write("        <th align='center'>FV</th>");
    document.write("        <th align='center'>Costo</th>");
    document.write("        <th align='center'>Presenze</th>");
    document.write("   </tr>");

    for(y=1;y<topRating.length;y++) {
      trovato=0
      if ((topRating[y].IDSquadraStorica!=IDSq)) {
        if ( trovato == 1 ) {
          y=topRating.lenght
        }
      } else {
        trovato=1

	      conta++;	 
              if( conta % 2 == 0 ) {
		document.write ("  <tr class='onOutPari' onMouseOver=\"this.className='onOver'\" onMouseOut=\"this.className='onOutPari'\">")
	      } else {
		document.write ("  <tr class='onOut' onMouseOver=\"this.className='onOver'\" onMouseOut=\"this.className='onOut'\">")
              }
              document.write ("    <td nowrap>" + topRating[y].NomeGiocatore + "</td>");
              document.write ("    <td align='center'>" + topRating[y].Ruolo.substring(0,1) + "</td>");
              document.write ("    <td align='center'>" + topRating[y].Rating + "</td>");
              document.write ("    <td align='center'>" + topRating[y].FantaMediaVoto + "</td>");
              document.write ("    <td align='center'>" + topRating[y].Costo + "</td>");
              document.write ("    <td align='center'>" + topRating[y].Presenze + "</td>");
              document.write ("  </tr>");

       }
     }
     document.write("  </table>");
}

function GeneraFlopRating(IDSq) {
    var i;
    var trovata = 0; 
    var conta = 0;
    var Giocatore = "";
    var flopRating = new Array()
    flopRating = arrAlFlopRat;

    document.write("  <div align='center' id='CostanteFCarriera'>Flop Rating</div>");
    document.write("  <table width='300' class='TBLCARRIERA' border='0' cellpadding='2' cellspacing='0' style='width: 100%;'>");
    document.write("    <tr align='left'>");
    document.write("        <th>Giocatore</th>");
    document.write("        <th align='center'>Ruolo</th>");
    document.write("        <th align='center'>Rating</th>");
    document.write("        <th align='center'>FV</th>");
    document.write("        <th align='center'>Costo</th>");
    document.write("        <th align='center'>Presenze</th>");
    document.write("   </tr>");

    for(y=1;y<flopRating.length;y++) {
      trovato=0
      if ((flopRating[y].IDSquadraStorica!=IDSq)) {
        if ( trovato == 1 ) {
          y=flopRating.lenght
        }
      } else {
        trovato=1

	      conta++;	 
              if( conta % 2 == 0 ) {
		document.write ("  <tr class='onOutPari' onMouseOver=\"this.className='onOver'\" onMouseOut=\"this.className='onOutPari'\">")
	      } else {
		document.write ("  <tr class='onOut' onMouseOver=\"this.className='onOver'\" onMouseOut=\"this.className='onOut'\">")
              }
              document.write ("    <td nowrap>" + flopRating[y].NomeGiocatore + "</td>");
              document.write ("    <td align='center'>" + flopRating[y].Ruolo.substring(0,1) + "</td>");
              document.write ("    <td align='center'>" + flopRating[y].Rating + "</td>");
              document.write ("    <td align='center'>" + flopRating[y].FantaMediaVoto + "</td>");
              document.write ("    <td align='center'>" + flopRating[y].Costo + "</td>");
              document.write ("    <td align='center'>" + flopRating[y].Presenze + "</td>");
              document.write ("  </tr>");

       }
     }
     document.write("  </table>");
}


var aModuli=new Array()
mod=aModuli
mod[1]=new AMOD("0","4-4-2")
mod[2]=new AMOD("1","3-4-3")
mod[3]=new AMOD("2","3-5-2")
mod[4]=new AMOD("3","4-3-3")
mod[5]=new AMOD("4","4-5-1")
mod[6]=new AMOD("5","5-4-1")
mod[7]=new AMOD("6","5-3-2")
mod[8]=new AMOD("7","6-3-1")
