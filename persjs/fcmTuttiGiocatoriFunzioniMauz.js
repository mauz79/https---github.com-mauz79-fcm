// Oggetti JavaScript per TuttiGiocatori
// Oggetto TuttiGiocatori
function TuttiGiocatori(IDGiocatore,NomeGiocatore,Stagione,AnnoStagione,IDGiocatoreStagione,PrimaGiornataInSquadra,IDSquadra,IDSquadraStorica,NomeSquadra,Ruolo,SquadraA1,SquadraA2,SquadraA3,Presenze,TotVoti,TotFantaVoti,Goal,Espulsioni,Ammonizioni,IDDivisione,NomeDivisione,Costo,AnniContratto) {
	this.IDGiocatore = IDGiocatore
	this.NomeGiocatore = NomeGiocatore
        this.Stagione = Stagione
        this.AnnoStagione = AnnoStagione
 	this.IDGiocatoreStagione = IDGiocatoreStagione
 	this.PrimaGiornataInSquadra = PrimaGiornataInSquadra
        this.IDSquadra = IDSquadra
        this.IDSquadraStorica = IDSquadraStorica
	this.NomeSquadra = NomeSquadra
	this.Ruolo = Ruolo
	this.SquadraA1 = SquadraA1
	this.SquadraA2 = SquadraA2
	this.SquadraA3 = SquadraA3
	this.Presenze = Presenze
	this.TotVoti = TotVoti
	this.TotFantaVoti = TotFantaVoti
	this.Goal = Goal
	this.Espulsioni = Espulsioni
	this.Ammonizioni = Ammonizioni
	this.IDDivisione = IDDivisione
	this.NomeDivisione = NomeDivisione
	this.Costo = Costo
	this.AnniContratto = AnniContratto
}

function GeneraIntestazioneFantasquadreTopCosti(cFsq) {
var arrF = new Object()
arrF = arrAdOFantasquadre
document.write("<form name='frmFsq' id='frmFsq' action='topcosti.php' method='get'>")
document.write("<table width='100%' border='00' cellspacing='0' cellpadding='0'>")
document.write("<tr><td width='5%' class='t-xxsB'><nobr>Fantasquadra:&nbsp;<select name='Fsq' class='t-xxs' id='Fsq'>")
document.write("<option value='" + 0 + "'")
if (0 == cFsq) document.write(" selected")
document.write(">" + "** TOTALE LEGA **" + "</option>")
for (i=1;i<arrF.length;i++) {
	document.write("<option value='" + arrF[i].IDf + "'")
        if (arrF[i].IDf == cFsq) document.write(" selected")
	document.write(">" + arrF[i].nome + "</option>")
}
document.write("</select></nobr></td>")
document.write("<td width='95%' class='t-xxsB'>&nbsp;&nbsp;<input name='Invia' type='submit' class='t-xxs' id='Invia' value='  Vai  '></td></tr>")
document.write("</tr></table></form>")
}

function GeneraTuttiGiocatoriCosto(IDSq) {
    var i, y, p;
    var tuttiGiocatori= new Array();
    tuttiGiocatori = arrTuttiGiocatori;

    var conta   = 0;	
    var elabora = 0;
    var precedente        = new Object();
    var arrPortieri       = new Array();
    var arrDifensori      = new Array();
    var arrCentrocampisti = new Array();
    var arrAttaccanti     = new Array();
    var arrGlobale        = new Array();
    var numPortieri       = 0;
    var numDifensori      = 0;
    var numCentrocampisti = 0;
    var numAttaccanti     = 0;
    var numGlobale        = 0;

    tuttiGiocatori.sort(ordinaTuttiGiocatoriCosto)

    for(i=0;i<tuttiGiocatori.length-1;i++) {
      if (    (     IDSq == tuttiGiocatori[i].IDSquadraStorica 
		 || IDSq == 0 
              ) 
           && (     lcsAnnoPrimoContratto == 0 
                 || tuttiGiocatori[i].AnniContratto == lcsAnnoPrimoContratto 
              )
         ) {
	 elabora = 0;
	 if ( precedente == null ) {
	    elabora = 1;           
         } else {
            if (     	precedente.NomeGiocatore 	!= tuttiGiocatori[i].NomeGiocatore
		 ||	precedente.IDGiocatore 	 	!= tuttiGiocatori[i].IDGiocatore
                 ||	precedente.IDSquadraStorica	!= tuttiGiocatori[i].IDSquadraStorica
		 ||	precedente.Costo  	 	!= tuttiGiocatori[i].Costo
	       ) {
		elabora = 1;
	    }
	 }
	 precedente = tuttiGiocatori[i];

	 if ( elabora == 1 ) {
	   if ( numGlobale < 20 ) {
	     arrGlobale[numGlobale] = tuttiGiocatori[i];
	     numGlobale++;
	   }      
	   if ( tuttiGiocatori[i].Ruolo == "P" ) {
	     if ( numPortieri < 10 ) {
	        arrPortieri[numPortieri] = tuttiGiocatori[i];
                numPortieri++;
	     }
           } else {
	   if ( tuttiGiocatori[i].Ruolo == "D" ) {
	     if ( numDifensori < 10 ) {
	        arrDifensori[numDifensori] = tuttiGiocatori[i];
                numDifensori++;
	     }
           } else {
           if ( tuttiGiocatori[i].Ruolo == "C" ) {
	     if ( numCentrocampisti < 10 ) {
	        arrCentrocampisti[numCentrocampisti] = tuttiGiocatori[i];
                numCentrocampisti++;
	     }
	   } else {
	   if ( tuttiGiocatori[i].Ruolo == "A" ) {
             if ( numAttaccanti < 10 ) {
	        arrAttaccanti[numAttaccanti] = tuttiGiocatori[i];
                numAttaccanti++;
	     }
	   }
	   }
	   }
	   }
        }

	 if (      numGlobale        >= 20
	      	&& numPortieri       >= 10
	     	&& numDifensori      >= 10
		&& numCentrocampisti >= 10
		&& numAttaccanti     >= 10
	    ) {
	    i=tuttiGiocatori.length+1;
         }	
      }
    }

    // ELABORA GLOBALE
    document.write("  <div align='center' id='CostanteFCarriera'>Totali</div>");
    stampaTabellaTuttiGioc(IDSq, arrGlobale);
    document.write("  </table>"); 

    // ELABORA PORTIERI
    document.write("  <div align='center' id='CostanteFCarriera'>Portieri</div>");
    stampaTabellaTuttiGioc(IDSq, arrPortieri);
    document.write("  </table>"); 

    // ELABORA DIFENSORI
    document.write("  <div align='center' id='CostanteFCarriera'>Difensori</div>");
    stampaTabellaTuttiGioc(IDSq, arrDifensori);
    document.write("  </table>"); 
    
    // ELABORA CENTROCAMPISTI
    document.write("  <div align='center' id='CostanteFCarriera'>Centrocampisti</div>");
    stampaTabellaTuttiGioc(IDSq, arrCentrocampisti);
    document.write("  </table>"); 
     
    // ELABORA ATTACCANTI
    document.write("  <div align='center' id='CostanteFCarriera'>Attaccanti</div>");
    stampaTabellaTuttiGioc(IDSq, arrAttaccanti);
    document.write("  </table>"); 
    
}

function stampaTabellaTuttiGioc(IDSq, arrTG) {
	var i, y, p;
	var conta = 0;

	document.write("  <table width='300' class='TBLCARRIERA' border='0' cellpadding='2' cellspacing='0' style='width: 100%;'>");
	document.write("    <tr align='left'>");
	document.write("        <th>Pos.</th>");
	document.write("        <th align='center'>Giocatore</th>");
	if (IDSq == 0) {
		document.write("    <th align='center'>Fantasquadra</th>");
	}
	document.write("        <th align='center'>Squadra</th>");
	document.write("        <th align='center'>Ruolo</th>");
	document.write("        <th align='center'>Stagione</th>");
	document.write("        <th align='center'>Anno</th>");
	document.write("        <th align='center'>$Acq</th>");
	document.write("   </tr>");

	for (y = 0; y < arrTG.length; y++) {
		conta++;
		if (conta % 2 == 0) {
			document.write("  <tr class='onOutPari' onMouseOver=\"this.className='onOver'\" onMouseOut=\"this.className='onOutPari'\">")
		} else {
			document.write("  <tr class='onOut' onMouseOver=\"this.className='onOver'\" onMouseOut=\"this.className='onOut'\">")
		}
		p = y + 1;
		document.write("    <td align='center'>" + p                     + "</td>");
		document.write("    <td nowrap>" + arrTG[y].NomeGiocatore        + "</td>");
		if (IDSq == 0) {
			document.write("<td align='center'>" + arrTG[y].NomeSquadra  + "</td>");
		}
		document.write("    <td align='center'>" + arrTG[y].SquadraA1    + "</td>");
		document.write("    <td align='center'>" + arrTG[y].Ruolo        + "</td>");
		document.write("    <td align='center'>" + arrTG[y].Stagione     + "</td>");
		document.write("    <td align='center'>" + arrTG[y].AnnoStagione + "</td>");
		document.write("    <td align='center'>" + arrTG[y].Costo        + "</td>");
		document.write("  </tr>");
	}
}

function ordinaTuttiGiocatoriCosto(a, b) {
	var c
	if ((a != null) && (b != null)) {
		if (a.Costo < b.Costo) {
			return 1;
		} else if (a.Costo > b.Costo) {
			return -1;
		} else if (a.Ruolo < b.Ruolo) {
			return 1;
		} else if (a.Ruolo > b.Ruolo) {
			return -1;
		} else if (a.IDGiocatore > b.IDGiocatore) {
			return 1;
		} else if (a.IDGiocatore < b.IDGiocatore) {
			return -1;
		} else if (a.NomeGiocatore > b.NomeGiocatore) {
			return 1;
		} else if (a.NomeGiocatore < b.NomeGiocatore) {
			return -1;
		} else if (a.IDSquadraStorica > b.IDSquadraStorica) {
			return 1;
		} else if (a.IDSquadraStorica < b.IDSquadraStorica) {
			return -1;
		} else if (a.Stagione < b.Stagione) {
			return 1;
		} else if (a.Stagione > b.Stagione) {
			return -1;
		} else if (a.PrimaGiornataInSquadra < b.PrimaGiornataInSquadra) {
			return 1;
		} else if (a.PrimaGiornataInSquadra > b.PrimaGiornataInSquadra) {
			return -1;
		} else {
			return 0;
		}

	} else {
		return -(a == null) + (b == null)
	}
}




function GeneraIntestazioneFantasquadreTopCostiStagione(cFsq) {
	var arrF = new Object()
	arrF = arrAdOFantasquadre
	document.write("<form name='frmFsq' id='frmFsq' action='topcostistagione.htm' method='get'>")
	document.write("<table width='100%' border='00' cellspacing='0' cellpadding='0'>")
	document.write("<tr><td width='5%' class='t-xxsB'><nobr>Fantasquadra:&nbsp;<select name='Fsq' class='t-xxs' id='Fsq'>")
	document.write("<option value='" + 0 + "'")
	if (0 == cFsq) document.write(" selected")
	document.write(">" + "** TOTALE LEGA **" + "</option>")
	for (i=1;i<arrF.length;i++) {
		document.write("<option value='" + arrF[i].IDf + "'")
	        if (arrF[i].IDf == cFsq) document.write(" selected")
		document.write(">" + arrF[i].nome + "</option>")
	}
	document.write("</select></nobr></td>")
	document.write("<td width='95%' class='t-xxsB'>&nbsp;&nbsp;<input name='Invia' type='submit' class='t-xxs' id='Invia' value='  Vai  '></td></tr>")
	document.write("</tr></table></form>")
}


function GeneraTuttiGiocatoriStagioneCosto(IDSq) {
	var i, y, p;
	var tuttiGiocatori = new Array();
	tuttiGiocatori = arrTuttiGiocatori;

	var conta = 0;
	var elabora = 0;
	var precedente = new Object();
	var arrPortieri = new Array();
	var arrDifensori = new Array();
	var arrCentrocampisti = new Array();
	var arrAttaccanti = new Array();
	var arrGlobale = new Array();
	var numPortieri = 0;
	var numDifensori = 0;
	var numCentrocampisti = 0;
	var numAttaccanti = 0;
	var numGlobale = 0;
	var stagioneGlobale        = 9999;
	var stagionePortieri       = 9999;
	var stagioneDifensori      = 9999;
	var stagioneCentrocampisti = 9999;
	var stagioneAttaccanti     = 9999;

	tuttiGiocatori.sort(ordinaTuttiGiocatoriCostoStagione);

	for (i = 0; i < tuttiGiocatori.length - 1; i++) {
		
		if (	(    IDSq == tuttiGiocatori[i].IDSquadraStorica 
				  || IDSq == 0
				)
//			&&  (  	 lcsAnnoPrimoContratto == 0
//				  || tuttiGiocatori[i].AnniContratto == lcsAnnoPrimoContratto
//				)
		   ) {
				

			if (stagioneGlobale != tuttiGiocatori[i].Stagione) {
				arrGlobale[numGlobale] = tuttiGiocatori[i];
				numGlobale++;
				stagioneGlobale = tuttiGiocatori[i].Stagione;
			}

			if (tuttiGiocatori[i].Ruolo == "P") {
				if (stagionePortieri != tuttiGiocatori[i].Stagione) {
					arrPortieri[numPortieri] = tuttiGiocatori[i];
					numPortieri++;
					stagionePortieri = tuttiGiocatori[i].Stagione;
				}
			} else if (tuttiGiocatori[i].Ruolo == "D") {
				if (stagioneDifensori != tuttiGiocatori[i].Stagione) {
					arrDifensori[numDifensori] = tuttiGiocatori[i];
					numDifensori++;
					stagioneDifensori = tuttiGiocatori[i].Stagione;
				}
			} else if (tuttiGiocatori[i].Ruolo == "C") {
				if (stagioneCentrocampisti != tuttiGiocatori[i].Stagione) {
					arrCentrocampisti[numCentrocampisti] = tuttiGiocatori[i];
					numCentrocampisti++;
					stagioneCentrocampisti = tuttiGiocatori[i].Stagione;
				}
			} else if (tuttiGiocatori[i].Ruolo == "A") {
				if (stagioneAttaccanti != tuttiGiocatori[i].Stagione) {
					arrAttaccanti[numAttaccanti] = tuttiGiocatori[i];
					numAttaccanti++;
					stagioneAttaccanti = tuttiGiocatori[i].Stagione;
				}

			}

		}
	}

	// ELABORA GLOBALE
	document.write("  <div align='center' id='CostanteFCarriera'>Totali</div>");
	stampaTabellaTuttiGiocStag(IDSq, arrGlobale);
	document.write("  </table>");

	// ELABORA PORTIERI
	document
			.write("  <div align='center' id='CostanteFCarriera'>Portieri</div>");
	stampaTabellaTuttiGiocStag(IDSq, arrPortieri);
	document.write("  </table>");

	// ELABORA DIFENSORI
	document
			.write("  <div align='center' id='CostanteFCarriera'>Difensori</div>");
	stampaTabellaTuttiGiocStag(IDSq, arrDifensori);
	document.write("  </table>");

	// ELABORA CENTROCAMPISTI
	document
			.write("  <div align='center' id='CostanteFCarriera'>Centrocampisti</div>");
	stampaTabellaTuttiGiocStag(IDSq, arrCentrocampisti);
	document.write("  </table>");

	// ELABORA ATTACCANTI
	document
			.write("  <div align='center' id='CostanteFCarriera'>Attaccanti</div>");
	stampaTabellaTuttiGiocStag(IDSq, arrAttaccanti);
	document.write("  </table>");

}

function stampaTabellaTuttiGiocStag(IDSq, arrTG) {
	var i, y, p;
	var conta = 0;

	document.write("  <table width='300' class='TBLCARRIERA' border='0' cellpadding='2' cellspacing='0' style='width: 100%;'>");
	document.write("    <tr align='left'>");
	document.write("        <th align='center'>Stagione</th>");
	document.write("        <th align='center'>Anno</th>");
	document.write("        <th align='center'>Giocatore</th>");
	if (IDSq == 0) {
		document.write("    <th align='center'>Fantasquadra</th>");
	}
	document.write("        <th align='center'>Squadra</th>");
	document.write("        <th align='center'>Ruolo</th>");
	document.write("        <th align='center'>$Acq</th>");
	document.write("   </tr>");

	for (y = 0; y < arrTG.length; y++) {
		conta++;
		if (conta % 2 == 0) {
			document.write("  <tr class='onOutPari' onMouseOver=\"this.className='onOver'\" onMouseOut=\"this.className='onOutPari'\">")
		} else {
			document.write("  <tr class='onOut' onMouseOver=\"this.className='onOver'\" onMouseOut=\"this.className='onOut'\">")
		}
		p = y + 1;
		document.write("    <td align='center'>" + arrTG[y].Stagione     + "</td>");
		document.write("    <td align='center'>" + arrTG[y].AnnoStagione + "</td>");
		document.write("    <td nowrap>" + arrTG[y].NomeGiocatore        + "</td>");
		if (IDSq == 0) {
			document.write("<td align='center'>" + arrTG[y].NomeSquadra  + "</td>");
		}
		document.write("    <td align='center'>" + arrTG[y].SquadraA1    + "</td>");
		document.write("    <td align='center'>" + arrTG[y].Ruolo        + "</td>");
		document.write("    <td align='center'>" + arrTG[y].Costo        + "</td>");
		document.write("  </tr>");
	}
}



function ordinaTuttiGiocatoriCostoStagione(a, b) {
	var c
	if ((a != null) && (b != null)) {
		if (a.Stagione > b.Stagione) {
			return 1;
		} else if (a.Stagione < b.Stagione) {
			return -1;
		} else if (a.Costo < b.Costo) {
			return 1;
		} else if (a.Costo > b.Costo) {
			return -1;
		} else if (a.Ruolo < b.Ruolo) {
			return 1;
		} else if (a.Ruolo > b.Ruolo) {
			return -1;
		} else if (a.IDGiocatore > b.IDGiocatore) {
			return 1;
		} else if (a.IDGiocatore < b.IDGiocatore) {
			return -1;
		} else if (a.NomeGiocatore > b.NomeGiocatore) {
			return 1;
		} else if (a.NomeGiocatore < b.NomeGiocatore) {
			return -1;
		} else if (a.IDSquadraStorica > b.IDSquadraStorica) {
			return 1;
		} else if (a.IDSquadraStorica < b.IDSquadraStorica) {
			return -1;
		} else if (a.PrimaGiornataInSquadra < b.PrimaGiornataInSquadra) {
			return 1;
		} else if (a.PrimaGiornataInSquadra > b.PrimaGiornataInSquadra) {
			return -1;
		} else {
			return 0;
		}

	} else {
		return -(a == null) + (b == null)
	}
}
