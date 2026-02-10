// Oggetti JavaScript per Confronti
// Oggetto Directory

function X(Stagione,Salve,Directory) {
	this.Stagione = Stagione
	this.Salve = Salve
	this.Directory = Directory
}

function ZP(Competizione,Label,Icona) {
	this.Competizione = Competizione
	this.Label = Label
	this.Icona = Icona
}

// Oggetto Confronti
function Y(Stagione,Competizione,GiornataA,Data,IDASquadraCasa,SquadraCasa,IDASquadraFuori,SquadraFuori,Neutro,GolCasa,GolFuori,TipoRis,GolRegoCasa,GolRegoFuori,GolSupplCasa,GolSupplFuori,GolRigoriCasa,GolRigoriFuori,PuntiCasa,PuntiFuori) {
	this.Stagione = Stagione
	this.Competizione = Competizione
	this.GiornataA = GiornataA
	this.Data = Data
	this.IDASquadraCasa = IDASquadraCasa
	this.SquadraCasa = SquadraCasa
	this.IDASquadraFuori = IDASquadraFuori
	this.SquadraFuori = SquadraFuori
	this.Neutro = Neutro
	this.GolCasa = GolCasa
	this.GolFuori = GolFuori
	this.TipoRis = TipoRis
	this.GolRegoCasa = GolRegoCasa
	this.GolRegoFuori = GolRegoFuori
	this.GolSupplCasa = GolSupplCasa
	this.GolSupplFuori = GolSupplFuori
	this.GolRigoriCasa = GolRigoriCasa
	this.GolRigoriFuori = GolRigoriFuori
	this.PuntiCasa = PuntiCasa
	this.PuntiFuori = PuntiFuori
}

function AdOConf(IDASquadra,Squadra,Giocate,GiocateConPunti,Vinte,Nulle,Perse,GF,GS,PuntiFatti,PuntiSubiti)
{
        var c
        this.IDASquadra = IDASquadra
        this.Squadra = Squadra
        this.Giocate = Giocate
        this.GiocateConPunti = GiocateConPunti
        this.Vinte = Vinte
        this.Nulle = Nulle
        this.Perse = Perse
        this.GF = GF
        this.GS = GS
        this.PuntiFatti = PuntiFatti
        this.PuntiSubiti = PuntiSubiti
        this.GiocateC = new Array(arrAdOCompetizioni.length)
        for (c = 1; c < arrAdOCompetizioni.length; this.GiocateC[arrAdOCompetizioni[c++].IDc] = 0);
        this.GiocateConPuntiC = new Array(arrAdOCompetizioni.length)
        for (c = 1; c < arrAdOCompetizioni.length; this.GiocateConPuntiC[arrAdOCompetizioni[c++].IDc] = 0);
        this.VinteC = new Array(arrAdOCompetizioni.length)
        for (c = 1; c < arrAdOCompetizioni.length; this.VinteC[arrAdOCompetizioni[c++].IDc] = 0);
        this.NulleC = new Array(arrAdOCompetizioni.length)
        for (c = 1; c < arrAdOCompetizioni.length; this.NulleC[arrAdOCompetizioni[c++].IDc] = 0);
        this.PerseC = new Array(arrAdOCompetizioni.length)
        for (c = 1; c < arrAdOCompetizioni.length; this.PerseC[arrAdOCompetizioni[c++].IDc] = 0);
        this.GFC = new Array(arrAdOCompetizioni.length)
        for (c = 1; c < arrAdOCompetizioni.length; this.GFC[arrAdOCompetizioni[c++].IDc] = 0);
        this.GSC = new Array(arrAdOCompetizioni.length)
        for (c = 1; c < arrAdOCompetizioni.length; this.GSC[arrAdOCompetizioni[c++].IDc] = 0);
        this.PuntiFattiC = new Array(arrAdOCompetizioni.length)
        for (c = 1; c < arrAdOCompetizioni.length; this.PuntiFattiC[arrAdOCompetizioni[c++].IDc] = 0);
        this.PuntiSubitiC = new Array(arrAdOCompetizioni.length)
        for (c = 1; c < arrAdOCompetizioni.length; this.PuntiSubitiC[arrAdOCompetizioni[c++].IDc] = 0);
} 

function PalmaR(idSquadra,nome,idAttuale)
{
        var c
        this.idSquadra = idSquadra
        this.nome=nome
        this.idAttuale=idAttuale
        this.retrocessione = new Array(arrAdOCompetizioni.length)
        for (c = 1; c < arrAdOCompetizioni.length; this.retrocessione[arrAdOCompetizioni[c++].IDc] = 0);
}

function AdOSqSerie(IDfSquadra,IDaSquadra,IDSerieAttiva)
{
        this.IDfSquadra = IDfSquadra
        this.IDaSquadra = IDaSquadra
        this.IDSerieAttiva = IDSerieAttiva
}

function AdOSerie(IDASquadra,Squadra,Totale,Parziale1,Parziale2,Parziale3,StagioneI,GiornataI,DataI,StagioneF,GiornataF,DataF,Chiusa)
{
        this.IDASquadra = IDASquadra
        this.Squadra = Squadra
        this.Totale = Totale
        this.Parziale1 = Parziale1
        this.Parziale2 = Parziale2
        this.Parziale3 = Parziale3
        this.StagioneI = StagioneI
        this.GiornataI = GiornataI
        this.DataI = DataI
        this.StagioneF = StagioneF
        this.GiornataF = GiornataF
        this.DataF = DataF
        this.Chiusa = Chiusa
}

function ATR(IDTR,Descrizione)
{
        this.IDTR = IDTR
        this.Descrizione = Descrizione
}

function ABilancio(Competizione,NomeCompetizione,Incontro,IDSquadraA,NomeSquadraA,IDSquadraB,NomeSquadraB,Giocate,VinteA,Nulle,VinteB,GA,GB,PuntiA,PuntiB,UltimaVittoriaA,UltimoPareggio,UltimaVittoriaB,PanchineCompetizioneA,PanchineCompetizioneB,PanchineTotaliA,PanchineTotaliB)
{
        this.Competizione = Competizione
        this.NomeCompetizione = NomeCompetizione
        this.Incontro = Incontro
        this.IDSquadraA = IDSquadraA
        this.NomeSquadraA = NomeSquadraA
        this.IDSquadraB = IDSquadraB
        this.NomeSquadraB = NomeSquadraB
        this.Giocate = Giocate
        this.VinteA = VinteA
        this.Nulle = Nulle
        this.VinteB = VinteB
        this.GA = GA
        this.GB = GB
        this.PuntiA = PuntiA
        this.PuntiB = PuntiB
        this.UltimaVittoriaA = UltimaVittoriaA
        this.UltimoPareggio = UltimoPareggio
        this.UltimaVittoriaB = UltimaVittoriaB
        this.PanchineCompetizioneA = PanchineCompetizioneA
        this.PanchineCompetizioneB = PanchineCompetizioneB
        this.PanchineTotaliA = PanchineTotaliA
        this.PanchineTotaliB = PanchineTotaliB
} 

function GeneraIntestazioneFantasquadreC(cFsq,cComp,cStadio,cFsq2,cComp2,cStadio2,cTipo,cVisu,CTVisu,cFsq3,cComp3,cStadio3) {
var arrF = new Object()
var arrC = new Object()
var arrT = new Object()
arrF = arrAdOFantasquadre
arrC = arrAdOCompetizioni
arrT = aATR
document.write("<form name='frmFsq' id='frmFsq' action='confronti.php' method='get'>")
document.write("<table width='100%' border='00' cellspacing='0' cellpadding='0'>")
document.write("<tr><td width='5%' class='t-xxsB'><nobr>Fantasquadra:&nbsp;<select name='Fsq' class='t-xxs' id='Fsq'>")
for (i=1;i<arrF.length;i++) {
        if (arrF[i].idAttuale == 0 ) {
	   document.write("<option value='" + arrF[i].IDf + "'")
           if (arrF[i].IDf == cFsq) document.write(" selected")
	   document.write(">" + arrF[i].nome + "</option>")
        }
        else {
	   document.write("<option value='" + arrF[i].IDf + "'")
           if (arrF[i].IDf == cFsq) document.write(" selected")
	   document.write(">" + arrF[i].nome + "</option>")
        }
}
document.write("</select></nobr></td>")
document.write("<td width='5%' class='t-xxsB'>&nbsp;&nbsp;<nobr>Competizione:&nbsp;<select name='Comp' class='t-xxs' id='Comp'>")
for (i=1;i<arrC.length;i++) {
	   document.write("<option value='" + arrC[i].IDc + "'")
           if (arrC[i].IDc == cComp) document.write(" selected")
	   document.write(">" + arrC[i].nome + "</option>")
}
document.write("</select></nobr></td>")
document.write("<td width='5%' class='t-xxsB'>&nbsp;&nbsp;<nobr>Stadio:&nbsp;<select name='Stadio' class='t-xxs' id='Stadio'>")
for (i=1;i<5;i++) {
   if ( i == 1 ) {
      document.write("<option value='" + "T" + "'")
      if ( "T" == cStadio ) document.write(" selected")
        document.write(">" + "Tutti" + "</option>")
   }
   else if ( i == 2 ) {
      document.write("<option value='" + "C" + "'")
      if ( "C" == cStadio ) document.write(" selected")
        document.write(">" + "Casa" + "</option>")
   }
   else if ( i == 3 ) {
      document.write("<option value='" + "F" + "'")
      if ( "F" == cStadio ) document.write(" selected")
        document.write(">" + "Fuori" + "</option>")
   }
   else if ( i == 4 ) {
      document.write("<option value='" + "N" + "'")
      if ( "N" == cStadio ) document.write(" selected")
        document.write(">" + "Neutro" + "</option>")
   }
}
document.write("</select></nobr></td>")
document.write("<td width='95%' class='t-xxsB'>&nbsp;&nbsp;<input name='Invia' type='submit' class='t-xxs' id='Invia' value='  Vai  '></td></tr>")

document.write("<tr><td width='5%' class='t-xxsBInvisible'><nobr>Avversario:&nbsp;<select name='Fsq2' class='t-xxs' id='Fsq2'>")
for (i=0;i<arrF.length;i++) {
     if (i==0) { 
	   document.write("<option value='" + "0" + "'")
           if (cFsq2==0) document.write(" selected")
	   document.write(">" + "-Non selezionato-" + "</option>")
     }
     else {
      if ( arrF[i].IDf != cFsq ) {
        if (arrF[i].idAttuale == 0 ) {
	   document.write("<option value='" + arrF[i].IDf + "'")
           if (arrF[i].IDf == cFsq2) document.write(" selected")
	   document.write(">" + arrF[i].nome + "</option>")
        }
        else {
	   document.write("<option value='" + arrF[i].IDf + "'")
           if (arrF[i].IDf == cFsq2) document.write(" selected")
	   document.write(">" + arrF[i].nome + "</option>")
        }
      }
     }
}
document.write("</select></nobr></td>")
document.write("<td width='5%' class='t-xxsBInvisible'>&nbsp;&nbsp;<nobr>Competizione:&nbsp;<select name='Comp2' class='t-xxs' id='Comp2'>")
for (i=0;i<arrC.length;i++) {
     if (i==0) { 
	   document.write("<option value='" + "0" + "'")
           if (cComp2 == "0") document.write(" selected")
	   document.write(">" + "Tutte" + "</option>")
     }
     else {
	   document.write("<option value='" + arrC[i].IDc + "'")
           if (arrC[i].IDc == cComp2) document.write(" selected")
	   document.write(">" + arrC[i].nome + "</option>")
     }
}
document.write("</select></nobr></td>")
document.write("<td width='5%' class='t-xxsBInvisible'>&nbsp;&nbsp;<nobr>Stadio:&nbsp;<select name='Stadio2' class='t-xxs' id='Stadio2'>")
for (i=1;i<5;i++) {
   if ( i == 1 ) {
      document.write("<option value='" + "T" + "'")
      if ( "T" == cStadio2 ) document.write(" selected")
        document.write(">" + "Tutti" + "</option>")
   }
   else if ( i == 2 ) {
      document.write("<option value='" + "C" + "'")
      if ( "C" == cStadio2 ) document.write(" selected")
        document.write(">" + "Casa" + "</option>")
   }
   else if ( i == 3 ) {
      document.write("<option value='" + "F" + "'")
      if ( "F" == cStadio2 ) document.write(" selected")
        document.write(">" + "Fuori" + "</option>")
   }
   else if ( i == 4 ) {
      document.write("<option value='" + "N" + "'")
      if ( "N" == cStadio2 ) document.write(" selected")
        document.write(">" + "Neutro" + "</option>")
   }
}

document.write("<tr><td width='5%' class='t-xxsBInvisible'><nobr>Tipo Record:&nbsp;<select name='Tipo' class='t-xxs' id='Tipo'>")
for (i=1;i<arrT.length;i++) {
	document.write("<option value='" + arrT[i].IDTR + "'")
        if (arrT[i].IDTR == cTipo) document.write(" selected")
        document.write(">" + arrT[i].Descrizione + "</option>")
}
document.write("</select></nobr></td>")

document.write("<td width='5%' class='t-xxsBInvisible'><nobr>Righe a Video:&nbsp;<select name='Visu' class='t-xxs' id='Visu'>")
for (i=1;i<21;i++) {
	document.write("<option value='" + i + "'")
        if (i == cVisu) document.write(" selected")
        document.write(">" + i + "</option>")
}
document.write("</select></nobr></td>")

document.write("<td width='5%' class='t-xxsBInvisible'><nobr>Continua se pari:&nbsp;<select name='TVisu' class='t-xxs' id='TVisu'>")
  document.write("<option value='" + "S" + "'")
  if ("S" == cTVisu) document.write(" selected")
        document.write(">" + "Si" + "</option>")
  document.write("<option value='" + "N" + "'")
  if ("N" == cTVisu) document.write(" selected")
        document.write(">" + "No" + "</option>")
document.write("</select></nobr></td></tr><tr></tr>")

document.write("<tr><td width='5%' class='t-xxsBInvisible'><nobr>Squadra:&nbsp;<select name='Fsq3' class='t-xxs' id='Fsq3'>")
for (i=0;i<arrF.length;i++) {
     if (i==0) { 
	   document.write("<option value='" + "0" + "'")
           if (cFsq3==0) document.write(" selected")
	   document.write(">" + "-T U T T E-" + "</option>")
     }
     else {
        if (arrF[i].idAttuale == 0 ) {
	   document.write("<option value='" + arrF[i].IDf + "'")
           if (arrF[i].IDf == cFsq3) document.write(" selected")
	   document.write(">" + arrF[i].nome + "</option>")
        }
        else {
	   document.write("<option value='" + arrF[i].IDf + "'")
           if (arrF[i].IDf == cFsq3) document.write(" selected")
	   document.write(">" + arrF[i].nome + "</option>")
        }
     }
}
document.write("</select></nobr></td>")

document.write("<td width='5%' class='t-xxsBInvisible'>&nbsp;&nbsp;<nobr>Competizione:&nbsp;<select name='Comp3' class='t-xxs' id='Comp3'>")
for (i=0;i<arrC.length;i++) {
     if (i==0) { 
	   document.write("<option value='" + "0" + "'")
           if (cComp3 == "0") document.write(" selected")
	   document.write(">" + "Tutte" + "</option>")
     }
     else {
	   document.write("<option value='" + arrC[i].IDc + "'")
           if (arrC[i].IDc == cComp3) document.write(" selected")
	   document.write(">" + arrC[i].nome + "</option>")
     }
}
document.write("</select></nobr></td>")
document.write("<td width='5%' class='t-xxsBInvisible'>&nbsp;&nbsp;<nobr>Stadio:&nbsp;<select name='Stadio3' class='t-xxs' id='Stadio3'>")
for (i=1;i<5;i++) {
   if ( i == 1 ) {
      document.write("<option value='" + "T" + "'")
      if ( "T" == cStadio3 ) document.write(" selected")
        document.write(">" + "Tutti" + "</option>")
   }
   else if ( i == 2 ) {
      document.write("<option value='" + "C" + "'")
      if ( "C" == cStadio3 ) document.write(" selected")
        document.write(">" + "Casa" + "</option>")
   }
   else if ( i == 3 ) {
      document.write("<option value='" + "F" + "'")
      if ( "F" == cStadio3 ) document.write(" selected")
        document.write(">" + "Fuori" + "</option>")
   }
   else if ( i == 4 ) {
      document.write("<option value='" + "N" + "'")
      if ( "N" == cStadio3 ) document.write(" selected")
        document.write(">" + "Neutro" + "</option>")
   }
}
document.write("</tr></table></form>")
}

function GeneraIntestazioneFantasquadreC2(cFsq,cComp,cStadio,cFsq2,cComp2,cStadio2,cTipo,cVisu,CTVisu,cFsq3,cComp3,cStadio3) {
var arrF = new Object()
var arrC = new Object()
var arrT = new Object()
arrF = arrAdOFantasquadre
arrC = arrAdOCompetizioni
arrT = aATR
document.write("<form name='frmFsq2' id='frmFsq2' action='#' method='get'>")
document.write("<table width='100%' border='00' cellspacing='0' cellpadding='0'>")
document.write("<tr><td width='5%' class='t-xxsBInvisible'><nobr>Fantasquadra:&nbsp;<select name='Fsq' class='t-xxs' id='Fsq'>")
for (i=1;i<arrF.length;i++) {
        if (arrF[i].idAttuale == 0 ) {
	   document.write("<option value='" + arrF[i].IDf + "'")
           if (arrF[i].IDf == cFsq) document.write(" selected")
	   document.write(">" + arrF[i].nome + "</option>")
        }
        else {
	   document.write("<option value='" + arrF[i].IDf + "'")
           if (arrF[i].IDf == cFsq) document.write(" selected")
	   document.write(">" + arrF[i].nome + "</option>")
        }
}
document.write("</select></nobr></td>")
document.write("<td width='5%' class='t-xxsBInvisible'>&nbsp;&nbsp;<nobr>Competizione:&nbsp;<select name='Comp' class='t-xxs' id='Comp'>")
for (i=1;i<arrC.length;i++) {
	   document.write("<option value='" + arrC[i].IDc + "'")
           if (arrC[i].IDc == cComp) document.write(" selected")
	   document.write(">" + arrC[i].nome + "</option>")
}
document.write("</select></nobr></td>")
document.write("<td width='5%' class='t-xxsBInvisible'>&nbsp;&nbsp;<nobr>Stadio:&nbsp;<select name='Stadio' class='t-xxs' id='Stadio'>")
for (i=1;i<5;i++) {
   if ( i == 1 ) {
      document.write("<option value='" + "T" + "'")
      if ( "T" == cStadio ) document.write(" selected")
        document.write(">" + "Tutti" + "</option>")
   }
   else if ( i == 2 ) {
      document.write("<option value='" + "C" + "'")
      if ( "C" == cStadio ) document.write(" selected")
        document.write(">" + "Casa" + "</option>")
   }
   else if ( i == 3 ) {
      document.write("<option value='" + "F" + "'")
      if ( "F" == cStadio ) document.write(" selected")
        document.write(">" + "Fuori" + "</option>")
   }
   else if ( i == 4 ) {
      document.write("<option value='" + "N" + "'")
      if ( "N" == cStadio ) document.write(" selected")
        document.write(">" + "Neutro" + "</option>")
   }
}
document.write("<tr><td width='5%' class='t-xxsB'><nobr>Avversario:&nbsp;<select name='Fsq2' class='t-xxs' id='Fsq2'>")
for (i=0;i<arrF.length;i++) {
     if (i==0) { 
	   document.write("<option value='" + "0" + "'")
           if (cFsq2==0) document.write(" selected")
	   document.write(">" + "-Non selezionato-" + "</option>")
     }
     else {
      if ( arrF[i].IDf != cFsq ) {
        if (arrF[i].idAttuale == 0 ) {
	   document.write("<option value='" + arrF[i].IDf + "'")
           if (arrF[i].IDf == cFsq2) document.write(" selected")
	   document.write(">" + arrF[i].nome + "</option>")
        }
        else {
	   document.write("<option value='" + arrF[i].IDf + "'")
           if (arrF[i].IDf == cFsq2) document.write(" selected")
	   document.write(">" + arrF[i].nome + "</option>")
        }
      }
     }
}
document.write("</select></nobr></td>")
document.write("<td width='5%' class='t-xxsB'>&nbsp;&nbsp;<nobr>Competizione:&nbsp;<select name='Comp2' class='t-xxs' id='Comp2'>")
for (i=0;i<arrC.length;i++) {
     if (i==0) { 
	   document.write("<option value='" + "0" + "'")
           if (cComp2 == "0") document.write(" selected")
	   document.write(">" + "Tutte" + "</option>")
     }
     else {
	   document.write("<option value='" + arrC[i].IDc + "'")
           if (arrC[i].IDc == cComp2) document.write(" selected")
	   document.write(">" + arrC[i].nome + "</option>")
     }
}
document.write("</select></nobr></td>")
document.write("<td width='5%' class='t-xxsB'>&nbsp;&nbsp;<nobr>Stadio:&nbsp;<select name='Stadio2' class='t-xxs' id='Stadio2'>")
for (i=1;i<5;i++) {
   if ( i == 1 ) {
      document.write("<option value='" + "T" + "'")
      if ( "T" == cStadio2 ) document.write(" selected")
        document.write(">" + "Tutti" + "</option>")
   }
   else if ( i == 2 ) {
      document.write("<option value='" + "C" + "'")
      if ( "C" == cStadio2 ) document.write(" selected")
        document.write(">" + "Casa" + "</option>")
   }
   else if ( i == 3 ) {
      document.write("<option value='" + "F" + "'")
      if ( "F" == cStadio2 ) document.write(" selected")
        document.write(">" + "Fuori" + "</option>")
   }
   else if ( i == 4 ) {
      document.write("<option value='" + "N" + "'")
      if ( "N" == cStadio2 ) document.write(" selected")
        document.write(">" + "Neutro" + "</option>")
   }
}
document.write("</select></nobr></td>")
document.write("<td width='95%' class='t-xxsB'>&nbsp;&nbsp;<input name='Invia2' type='submit' class='t-xxs' id='Invia2' value='  Vai  '></td>")

document.write("<tr><td width='5%' class='t-xxsBInvisible'><nobr>Tipo Record:&nbsp;<select name='Tipo' class='t-xxs' id='Tipo'>")
for (i=1;i<arrT.length;i++) {
	document.write("<option value='" + arrT[i].IDTR + "'")
        if (arrT[i].IDTR == cTipo) document.write(" selected")
        document.write(">" + arrT[i].Descrizione + "</option>")
}
document.write("</select></nobr></td>")

document.write("<td width='5%' class='t-xxsBInvisible'><nobr>Righe a Video:&nbsp;<select name='Visu' class='t-xxs' id='Visu'>")
for (i=1;i<21;i++) {
	document.write("<option value='" + i + "'")
        if (i == cVisu) document.write(" selected")
        document.write(">" + i + "</option>")
}
document.write("</select></nobr></td>")

document.write("<td width='5%' class='t-xxsBInvisible'><nobr>Continua se pari:&nbsp;<select name='TVisu' class='t-xxs' id='TVisu'>")
  document.write("<option value='" + "S" + "'")
  if ("S" == cTVisu) document.write(" selected")
        document.write(">" + "Si" + "</option>")
  document.write("<option value='" + "N" + "'")
  if ("N" == cTVisu) document.write(" selected")
        document.write(">" + "No" + "</option>")
document.write("</select></nobr></td></tr><tr></tr>")

document.write("<tr><td width='5%' class='t-xxsBInvisible'><nobr>Squadra:&nbsp;<select name='Fsq3' class='t-xxs' id='Fsq3'>")
for (i=0;i<arrF.length;i++) {
     if (i==0) { 
	   document.write("<option value='" + "0" + "'")
           if (cFsq3==0) document.write(" selected")
	   document.write(">" + "-T U T T E-" + "</option>")
     }
     else {
        if (arrF[i].idAttuale == 0 ) {
	   document.write("<option value='" + arrF[i].IDf + "'")
           if (arrF[i].IDf == cFsq3) document.write(" selected")
	   document.write(">" + arrF[i].nome + "</option>")
        }
        else {
	   document.write("<option value='" + arrF[i].IDf + "'")
           if (arrF[i].IDf == cFsq3) document.write(" selected")
	   document.write(">" + arrF[i].nome + "</option>")
        }
     }
}
document.write("</select></nobr></td>")

document.write("<td width='5%' class='t-xxsBInvisible'>&nbsp;&nbsp;<nobr>Competizione:&nbsp;<select name='Comp3' class='t-xxs' id='Comp3'>")
for (i=0;i<arrC.length;i++) {
     if (i==0) { 
	   document.write("<option value='" + "0" + "'")
           if (cComp3 == "0") document.write(" selected")
	   document.write(">" + "Tutte" + "</option>")
     }
     else {
	   document.write("<option value='" + arrC[i].IDc + "'")
           if (arrC[i].IDc == cComp3) document.write(" selected")
	   document.write(">" + arrC[i].nome + "</option>")
     }
}
document.write("</select></nobr></td>")

document.write("<td width='5%' class='t-xxsBInvisible'>&nbsp;&nbsp;<nobr>Stadio:&nbsp;<select name='Stadio3' class='t-xxs' id='Stadio3'>")
for (i=1;i<5;i++) {
   if ( i == 1 ) {
      document.write("<option value='" + "T" + "'")
      if ( "T" == cStadio3 ) document.write(" selected")
        document.write(">" + "Tutti" + "</option>")
   }
   else if ( i == 2 ) {
      document.write("<option value='" + "C" + "'")
      if ( "C" == cStadio3 ) document.write(" selected")
        document.write(">" + "Casa" + "</option>")
   }
   else if ( i == 3 ) {
      document.write("<option value='" + "F" + "'")
      if ( "F" == cStadio3 ) document.write(" selected")
        document.write(">" + "Fuori" + "</option>")
   }
   else if ( i == 4 ) {
      document.write("<option value='" + "N" + "'")
      if ( "N" == cStadio3 ) document.write(" selected")
        document.write(">" + "Neutro" + "</option>")
   }
}
document.write("</tr></table></form>")
}

function GeneraIntestazioneRecord(cFsq,cComp,cStadio,cFsq2,cComp2,cStadio2,cTipo,cVisu,CTVisu,cFsq3,cComp3,cStadio3) {
var arrF = new Object()
var arrC = new Object()
var arrT = new Object()
arrF = arrAdOFantasquadre
arrC = arrAdOCompetizioni
arrT = aATR
document.write("<form name='frmFsq3' id='frmFsq3' action='#' method='get'>")
document.write("<table width='100%' border='00' cellspacing='0' cellpadding='0'>")
document.write("<tr><td width='5%' class='t-xxsBInvisible'><nobr>Fantasquadra:&nbsp;<select name='Fsq' class='t-xxs' id='Fsq'>")
for (i=1;i<arrF.length;i++) {
        if (arrF[i].idAttuale == 0 ) {
	   document.write("<option value='" + arrF[i].IDf + "'")
           if (arrF[i].IDf == cFsq) document.write(" selected")
	   document.write(">" + arrF[i].nome + "</option>")
        }
        else {
	   document.write("<option value='" + arrF[i].IDf + "'")
           if (arrF[i].IDf == cFsq) document.write(" selected")
	   document.write(">" + arrF[i].nome + "</option>")
        }
}
document.write("</select></nobr></td>")
document.write("<td width='5%' class='t-xxsBInvisible'>&nbsp;&nbsp;<nobr>Competizione:&nbsp;<select name='Comp' class='t-xxs' id='Comp'>")
for (i=1;i<arrC.length;i++) {
	   document.write("<option value='" + arrC[i].IDc + "'")
           if (arrC[i].IDc == cComp) document.write(" selected")
	   document.write(">" + arrC[i].nome + "</option>")
}
document.write("</select></nobr></td>")
document.write("<td width='5%' class='t-xxsBInvisible'>&nbsp;&nbsp;<nobr>Stadio:&nbsp;<select name='Stadio' class='t-xxs' id='Stadio'>")
for (i=1;i<5;i++) {
   if ( i == 1 ) {
      document.write("<option value='" + "T" + "'")
      if ( "T" == cStadio ) document.write(" selected")
        document.write(">" + "Tutti" + "</option>")
   }
   else if ( i == 2 ) {
      document.write("<option value='" + "C" + "'")
      if ( "C" == cStadio ) document.write(" selected")
        document.write(">" + "Casa" + "</option>")
   }
   else if ( i == 3 ) {
      document.write("<option value='" + "F" + "'")
      if ( "F" == cStadio ) document.write(" selected")
        document.write(">" + "Fuori" + "</option>")
   }
   else if ( i == 4 ) {
      document.write("<option value='" + "N" + "'")
      if ( "N" == cStadio ) document.write(" selected")
        document.write(">" + "Neutro" + "</option>")
   }
}
document.write("<tr><td width='5%' class='t-xxsBInvisible'><nobr>Avversario:&nbsp;<select name='Fsq2' class='t-xxs' id='Fsq2'>")
for (i=0;i<arrF.length;i++) {
     if (i==0) { 
	   document.write("<option value='" + "0" + "'")
           if (cFsq2==0) document.write(" selected")
	   document.write(">" + "-Non selezionato-" + "</option>")
     }
     else {
      if ( arrF[i].IDf != cFsq ) {
        if (arrF[i].idAttuale == 0 ) {
	   document.write("<option value='" + arrF[i].IDf + "'")
           if (arrF[i].IDf == cFsq2) document.write(" selected")
	   document.write(">" + arrF[i].nome + "</option>")
        }
        else {
	   document.write("<option value='" + arrF[i].IDf + "'")
           if (arrF[i].IDf == cFsq2) document.write(" selected")
	   document.write(">" + arrF[i].nome + "</option>")
        }
      }
     }
}
document.write("</select></nobr></td>")
document.write("<td width='5%' class='t-xxsBInvisible'>&nbsp;&nbsp;<nobr>Competizione:&nbsp;<select name='Comp2' class='t-xxs' id='Comp2'>")
for (i=0;i<arrC.length;i++) {
     if (i==0) { 
	   document.write("<option value='" + "0" + "'")
           if (cComp2 == "0") document.write(" selected")
	   document.write(">" + "Tutte" + "</option>")
     }
     else {
	   document.write("<option value='" + arrC[i].IDc + "'")
           if (arrC[i].IDc == cComp2) document.write(" selected")
	   document.write(">" + arrC[i].nome + "</option>")
     }
}
document.write("</select></nobr></td>")
document.write("<td width='5%' class='t-xxsBInvisible'>&nbsp;&nbsp;<nobr>Stadio:&nbsp;<select name='Stadio2' class='t-xxs' id='Stadio2'>")
for (i=1;i<5;i++) {
   if ( i == 1 ) {
      document.write("<option value='" + "T" + "'")
      if ( "T" == cStadio2 ) document.write(" selected")
        document.write(">" + "Tutti" + "</option>")
   }
   else if ( i == 2 ) {
      document.write("<option value='" + "C" + "'")
      if ( "C" == cStadio2 ) document.write(" selected")
        document.write(">" + "Casa" + "</option>")
   }
   else if ( i == 3 ) {
      document.write("<option value='" + "F" + "'")
      if ( "F" == cStadio2 ) document.write(" selected")
        document.write(">" + "Fuori" + "</option>")
   }
   else if ( i == 4 ) {
      document.write("<option value='" + "N" + "'")
      if ( "N" == cStadio2 ) document.write(" selected")
        document.write(">" + "Neutro" + "</option>")
   }
}
document.write("</select></nobr></td>")
document.write("<tr class='t-xxsB'><td width='100%' class='t-xxsB'><nobr>Tipo Record:&nbsp;<select name='Tipo' class='t-xxs' id='Tipo'>")
for (i=1;i<arrT.length;i++) {
	document.write("<option value='" + arrT[i].IDTR + "'")
        if (arrT[i].IDTR == cTipo) document.write(" selected")
        document.write(">" + arrT[i].Descrizione + "</option>")
}
document.write("</select></nobr>")

document.write("<nobr>&nbsp;&nbsp;Righe a Video:&nbsp;<select name='Visu' class='t-xxs' id='Visu'>")
for (i=1;i<21;i++) {
	document.write("<option value='" + i + "'")
        if (i == cVisu) document.write(" selected")
        document.write(">" + i + "</option>")
}
document.write("</select></nobr>")

document.write("<nobr>&nbsp;&nbsp;Continua se pari:&nbsp;<select name='TVisu' class='t-xxs' id='TVisu'>")
  document.write("<option value='" + "S" + "'")
  if ("S" == cTVisu) document.write(" selected")
        document.write(">" + "Si" + "</option>")
  document.write("<option value='" + "N" + "'")
  if ("N" == cTVisu) document.write(" selected")
        document.write(">" + "No" + "</option>")
document.write("</select></nobr></td></tr><tr>&nbsp</tr><tr>")

document.write("<tr class='t-xxsB'><td width='100%' class='t-xxsB'><nobr>Squadra:&nbsp;<select name='Fsq3' class='t-xxs' id='Fsq3'>")
for (i=0;i<arrF.length;i++) {
     if (i==0) { 
	   document.write("<option value='" + "0" + "'")
           if (cFsq3==0) document.write(" selected")
	   document.write(">" + "-T U T T E-" + "</option>")
     }
     else {
        if (arrF[i].idAttuale == 0 ) {
	   document.write("<option value='" + arrF[i].IDf + "'")
           if (arrF[i].IDf == cFsq3) document.write(" selected")
	   document.write(">" + arrF[i].nome + "</option>")
        }
        else {
	   document.write("<option value='" + arrF[i].IDf + "'")
           if (arrF[i].IDf == cFsq3) document.write(" selected")
	   document.write(">" + arrF[i].nome + "</option>")
        }
     }
}
document.write("</select></nobr>")

document.write("<nobr>&nbsp;&nbsp;Competizione:&nbsp;<select name='Comp3' class='t-xxs' id='Comp3'>")
for (i=0;i<arrC.length;i++) {
     if (i==0) { 
	   document.write("<option value='" + "0" + "'")
           if (cComp3 == "0") document.write(" selected")
	   document.write(">" + "Tutte" + "</option>")
     }
     else {
	   document.write("<option value='" + arrC[i].IDc + "'")
           if (arrC[i].IDc == cComp3) document.write(" selected")
	   document.write(">" + arrC[i].nome + "</option>")
     }
}
document.write("</select></nobr>")
document.write("<nobr>&nbsp;&nbsp;Stadio:&nbsp;<select name='Stadio3' class='t-xxs' id='Stadio3'>")
for (i=1;i<5;i++) {
   if ( i == 1 ) {
      document.write("<option value='" + "T" + "'")
      if ( "T" == cStadio3 ) document.write(" selected")
        document.write(">" + "Tutti" + "</option>")
   }
   else if ( i == 2 ) {
      document.write("<option value='" + "C" + "'")
      if ( "C" == cStadio3 ) document.write(" selected")
        document.write(">" + "Casa" + "</option>")
   }
   else if ( i == 3 ) {
      document.write("<option value='" + "F" + "'")
      if ( "F" == cStadio3 ) document.write(" selected")
        document.write(">" + "Fuori" + "</option>")
   }
   else if ( i == 4 ) {
      document.write("<option value='" + "N" + "'")
      if ( "N" == cStadio3 ) document.write(" selected")
        document.write(">" + "Neutro" + "</option>")
   }
}
document.write("</select></nobr>")
document.write("&nbsp;&nbsp;<input name='Invia3' type='submit' class='t-xxs' id='Invia3' value='  Vai  '>")
document.write("</td></tr></table></form>")
}

function GeneraConfronti(Idaodf,IdComp,IdStadio) {
var i,cnt,sT,sR,fatto,c,x,y,z,d
var competizioni = arrAdOCompetizioni.length - 1
var competizioni2 = 1
var tabR = new Tabella(2, (competizioni2 * 8) + 9 ) 
var confronti = new Array()
var arrRiferimentiColonne = new Array()
var arrTotali = new Array()
var TotGiocateConPunti, TotGiocateConPuntiC
var squadra = " "
        for (i=1;i<=tabR.numcolonne;i++) {
                arrTotali[i]=0
        } 
        TotGiocateConPunti = 0;
        TotGiocateConPuntiC = 0;
        for (i=1;i<arrAdOCompetizioni.length;i++)
                arrRiferimentiColonne[arrAdOCompetizioni[i].IDc]=i 
	for(i=1;i<arrConfronti.length;i++) {
          z=parseInt(arrConfronti[i].Competizione)
          if ( (    arrConfronti[i].Neutro == "N" && ( IdStadio == "T" || IdStadio == "N" ) ) || (   arrConfronti[i].Neutro != "N" && IdStadio != "N" )) {
	    if (arrConfronti[i].IDASquadraCasa==Idaodf && IdStadio != "F" ) {
              x=-1;
              for (c=0;c<confronti.length;c++) {
                if ( confronti[c].IDASquadra==arrConfronti[i].IDASquadraFuori) {
                  x=c;
                  c=confronti.length;
                }
              }
              if ( x == -1 ) {
                x = confronti.length;
                squadra = CercaSquadra(arrConfronti[i].IDASquadraFuori);
                if ( squadra == " " ) {
                  squadra = arrConfronti[i].SquadraFuori;
                }
                confronti[x] = new AdOConf(arrConfronti[i].IDASquadraFuori,squadra,0,0,0,0,0,0,0,0,0);
              }
              confronti[x].Giocate++;
              confronti[x].GiocateC[z]++;
              if ( ( arrConfronti[i].PuntiCasa != 0 ) || ( arrConfronti[i].PuntiFuori != 0 ) ) {
                confronti[x].GiocateConPunti++;
                confronti[x].GiocateConPuntiC[z]++;
              }
              confronti[x].GF=confronti[x].GF + arrConfronti[i].GolCasa;
              confronti[x].GFC[z]=confronti[x].GFC[z] + arrConfronti[i].GolCasa;
              confronti[x].GS=confronti[x].GS + arrConfronti[i].GolFuori;
              confronti[x].GSC[z]=confronti[x].GSC[z] + arrConfronti[i].GolFuori;
              confronti[x].PuntiFatti=confronti[x].PuntiFatti + arrConfronti[i].PuntiCasa;
              confronti[x].PuntiFattiC[z]=confronti[x].PuntiFattiC[z] + arrConfronti[i].PuntiCasa;
              confronti[x].PuntiSubiti=confronti[x].PuntiSubiti + arrConfronti[i].PuntiFuori;
              confronti[x].PuntiSubitiC[z]=confronti[x].PuntiSubitiC[z] + arrConfronti[i].PuntiFuori;
              if ( arrConfronti[i].GolCasa > arrConfronti[i].GolFuori ) {
                confronti[x].Vinte++;
                confronti[x].VinteC[z]++;
              } 
              else {
                if ( arrConfronti[i].GolCasa < arrConfronti[i].GolFuori ) {
                  confronti[x].Perse++;
                  confronti[x].PerseC[z]++;
                } 
                else {
                  confronti[x].Nulle++;
                  confronti[x].NulleC[z]++;
                }
              }
            } 
            else {
               if (arrConfronti[i].IDASquadraFuori==Idaodf && IdStadio != "C" ) {
                 x=-1;
                 for (c=0;c<confronti.length;c++) {
                   if ( confronti[c].IDASquadra==arrConfronti[i].IDASquadraCasa) {
                     x=c;
                     c=confronti.length;
                   }
                 }
                 if ( x == -1 ) {
                   x = confronti.length;
                   squadra = CercaSquadra(arrConfronti[i].IDASquadraCasa);
                   if ( squadra == " " ) {
                     squadra = arrConfronti[i].SquadraCasa;
                   }
                   confronti[x] = new AdOConf(arrConfronti[i].IDASquadraCasa,squadra,0,0,0,0,0,0,0,0,0);
                 }
                 confronti[x].Giocate++;
                 confronti[x].GiocateC[z]++;
                 if ( ( arrConfronti[i].PuntiCasa != 0 ) || ( arrConfronti[i].PuntiFuori != 0 ) ) {
                   confronti[x].GiocateConPunti++;
                   confronti[x].GiocateConPuntiC[z]++;
                 }
                 confronti[x].GF=confronti[x].GF + arrConfronti[i].GolFuori;
                 confronti[x].GFC[z]=confronti[x].GFC[z] + arrConfronti[i].GolFuori;
                 confronti[x].GS=confronti[x].GS + arrConfronti[i].GolCasa;
                 confronti[x].GSC[z]=confronti[x].GSC[z] + arrConfronti[i].GolCasa;
                 confronti[x].PuntiFatti=confronti[x].PuntiFatti + arrConfronti[i].PuntiFuori;
                 confronti[x].PuntiFattiC[z]=confronti[x].PuntiFattiC[z] + arrConfronti[i].PuntiFuori;
                 confronti[x].PuntiSubiti=confronti[x].PuntiSubiti + arrConfronti[i].PuntiCasa;
                 confronti[x].PuntiSubitiC[z]=confronti[x].PuntiSubitiC[z] + arrConfronti[i].PuntiCasa;
                 if ( arrConfronti[i].GolCasa < arrConfronti[i].GolFuori ) {
                   confronti[x].Vinte++;
                   confronti[x].VinteC[z]++;
                 } 
                 else {
                   if ( arrConfronti[i].GolCasa > arrConfronti[i].GolFuori ) {
                     confronti[x].Perse++;
                     confronti[x].PerseC[z]++;
                   } 
                   else {
                     confronti[x].Nulle++;
                     confronti[x].NulleC[z]++;
                   }
                 }
               }   
            }
          }
        } 
        confronti.sort(ordinaConfronti)
	fatto=false

        tabR.SetStileRiga(1,"riga-blu-cx")
        tabR.intestazioni=true
        Stato("Generazione Confronti...")
        for (i=1;i<=tabR.numcolonne;i++) {
                tabR.SetSpanned(1,i,true)
        } 
        tabR.SetSpan(1,1,1)
        tabR.SetSpan(1,2,8)
        tabR.SetSpanned(1,2,false)
        for (c = 1; c <= competizioni2; c++) {
           y = ( c * 8 ) + 2;
	   tabR.SetSpan(1,y,8);
	   tabR.SetSpanned(1,y,false);
        }
        tabR.SetSpanned(1,1,false)
	tabR.SetValore(1,1,"");
	tabR.SetValore(1,2,"TOTALE");
        for (c = 1; c <= competizioni; c++) {
           //y = ( c * 8 ) + 2;
           if ( arrAdOCompetizioni[c].IDc == IdComp ) {
             y = ( 1 * 8 ) + 2;
             tabR.SetValore(1,y,arrAdOCompetizioni[c].nome);
           }
        }
        
        cnt=2
        tabR.SetStileRiga(2,"riga-orange-cx")
        y=1;
	tabR.SetValore(cnt,y,"Squadra");
        for (c=2; c <= (competizioni2+1) * 8 + 1; c++) {
           y++;  
           if ( y == 2 ) {
	      tabR.SetValore(cnt,c,"G");
           }
           else if ( y == 3 ) {
	      tabR.SetValore(cnt,c,"V");
           }
           else if ( y == 4 ) {
	      tabR.SetValore(cnt,c,"N");
           }
           else if ( y == 5 ) {
	      tabR.SetValore(cnt,c,"P");
           }
           else if ( y == 6 ) {
	      tabR.SetValore(cnt,c,"GF");
           }
           else if ( y == 7 ) {
	      tabR.SetValore(cnt,c,"GS");
           }
           else if ( y == 8 ) {
	      tabR.SetValore(cnt,c,"P.tiF");
           }
           else if ( y == 9 ) {
	      tabR.SetValore(cnt,c,"P.tiS");
              y=1;
           }
        }
	cnt=3 
	for(i=0;i<confronti.length;i++) {
		fatto=true			
		if ((cnt % 2) != 0) {
	        	tabR.SetStileRiga(cnt,"riga-pari")
		} else {
			tabR.SetStileRiga(cnt,"riga-dispari")
		}
                if ( confronti[i].Vinte > confronti[i].Perse ) {
                  sT="VLF"
                } 
                else if ( confronti[i].Vinte < confronti[i].Perse ) {
                  sT="RLF"
                } 
                else {
                  sT="GLF"
                }
                for (d=1;d<=arrAdOFantasquadre.length-1;d++) {
                  if ( arrAdOFantasquadre[d].IDf == confronti[i].IDASquadra ) {
                    if ( arrAdOFantasquadre[d].idAttuale != 0 ) {
                      sR=sT+"B";
                      d=arrAdOFantasquadre.length;
                    }
                    else {
                      sR=sT;
                      d=arrAdOFantasquadre.length;
                    }
                  }
                }
                tabR.SetValore(cnt,1,"<nobr>"+confronti[i].Squadra+"</nobr>")
		tabR.SetStile(cnt,1,"t-xxs"+sR)
                sR="BluB"
		tabR.SetValore(cnt,2,"<nobr><center>"+confronti[i].Giocate+"</center></nobr>")
                arrTotali[2]+=confronti[i].Giocate
                TotGiocateConPunti+=confronti[i].GiocateConPunti
		tabR.SetStile(cnt,2,"t-xxs"+sR)
                sR="VB"
		tabR.SetValore(cnt,3,"<nobr><center>"+confronti[i].Vinte+"</center></nobr>")
                arrTotali[3]+=confronti[i].Vinte
		tabR.SetStile(cnt,3,"t-xxs"+sR)
                sR="GB"
		tabR.SetValore(cnt,4,"<nobr><center>"+confronti[i].Nulle+"</center></nobr>")
                arrTotali[4]+=confronti[i].Nulle
		tabR.SetStile(cnt,4,"t-xxs"+sR)
                sR="RB"
		tabR.SetValore(cnt,5,"<nobr><center>"+confronti[i].Perse+"</center></nobr>")
                arrTotali[5]+=confronti[i].Perse
		tabR.SetStile(cnt,5,"t-xxs"+sR)
                sR="VB"
		tabR.SetValore(cnt,6,"<nobr><center>"+confronti[i].GF+"</center></nobr>")
                arrTotali[6]+=confronti[i].GF
		tabR.SetStile(cnt,6,"t-xxs"+sR)
                sR="RB"
		tabR.SetValore(cnt,7,"<nobr><center>"+confronti[i].GS+"</center></nobr>")
                arrTotali[7]+=confronti[i].GS
		tabR.SetStile(cnt,7,"t-xxs"+sR)
                sR="VB"
                if ( confronti[i].GiocateConPunti == 0 ) {
		  tabR.SetValore(cnt,8,"<nobr><center>" + (Math.round(0*1000)/1000) + "</center></nobr>")
		  tabR.SetStile(cnt,8,"t-xxs"+sR)
                  sR="RB"
		  tabR.SetValore(cnt,9,"<nobr><center>" + (Math.round(0*1000)/1000) + "</center></nobr>")
		  tabR.SetStile(cnt,9,"t-xxs"+sR)
                } 
                else {
		  tabR.SetValore(cnt,8,"<nobr><center>" + (Math.round(confronti[i].PuntiFatti/confronti[i].GiocateConPunti*1000)/1000) + "</center></nobr>")
		  tabR.SetStile(cnt,8,"t-xxs"+sR)
                  sR="RB"
		  tabR.SetValore(cnt,9,"<nobr><center>" + (Math.round(confronti[i].PuntiSubiti/confronti[i].GiocateConPunti*1000)/1000) + "</center></nobr>")
		  tabR.SetStile(cnt,9,"t-xxs"+sR)
                } 
                arrTotali[8]+=confronti[i].PuntiFatti
                arrTotali[9]+=confronti[i].PuntiSubiti
                for (c=1; c<=competizioni; c++) {
                   if ( arrAdOCompetizioni[c].IDc == IdComp ) {
                    	//y=c*8+2
                    	y=1*8+2
                    	z=arrAdOCompetizioni[c].IDc
                	sR="BluB"
			tabR.SetValore(cnt,y,"<nobr><center>"+confronti[i].GiocateC[z]+"</center></nobr>")
                        arrTotali[y]+=confronti[i].GiocateC[z]
                        TotGiocateConPuntiC+=confronti[i].GiocateConPuntiC[z]
			tabR.SetStile(cnt,y,"t-xxs"+sR)
                    	y++
                	sR="VB"
			tabR.SetValore(cnt,y,"<nobr><center>"+confronti[i].VinteC[z]+"</center></nobr>")
                        arrTotali[y]+=confronti[i].VinteC[z]
			tabR.SetStile(cnt,y,"t-xxs"+sR)
                    	y++
                	sR="GB"
			tabR.SetValore(cnt,y,"<nobr><center>"+confronti[i].NulleC[z]+"</center></nobr>")
                        arrTotali[y]+=confronti[i].NulleC[z]
			tabR.SetStile(cnt,y,"t-xxs"+sR)
                    	y++
                	sR="RB"
			tabR.SetValore(cnt,y,"<nobr><center>"+confronti[i].PerseC[z]+"</center></nobr>")
                        arrTotali[y]+=confronti[i].PerseC[z]
			tabR.SetStile(cnt,y,"t-xxs"+sR)
                    	y++
                	sR="VB"
			tabR.SetValore(cnt,y,"<nobr><center>"+confronti[i].GFC[z]+"</center></nobr>")
                        arrTotali[y]+=confronti[i].GFC[z]
			tabR.SetStile(cnt,y,"t-xxs"+sR)
                    	y++
                	sR="RB"
			tabR.SetValore(cnt,y,"<nobr><center>"+confronti[i].GSC[z]+"</center></nobr>")
                        arrTotali[y]+=confronti[i].GSC[z]
			tabR.SetStile(cnt,y,"t-xxs"+sR)
                    	y++
                	sR="VB"
                        if ( confronti[i].GiocateConPuntiC[z] == 0 ) {
				tabR.SetValore(cnt,y,"<nobr><center>" + (Math.round(0*1000)/1000) + "</center></nobr>")
				tabR.SetStile(cnt,y,"t-xxs"+sR)
                    		y++
                		sR="RB"
				tabR.SetValore(cnt,y,"<nobr><center>" + (Math.round(0*1000)/1000) + "</center></nobr>")
				tabR.SetStile(cnt,y,"t-xxs"+sR)
                	} 
                	else {
				tabR.SetValore(cnt,y,"<nobr><center>" + (Math.round(confronti[i].PuntiFattiC[z]/confronti[i].GiocateConPuntiC[z]*1000)/1000) + "</center></nobr>")
                                arrTotali[y]+=confronti[i].PuntiFattiC[z]
				tabR.SetStile(cnt,y,"t-xxs"+sR)
                    		y++
                		sR="RB"
				tabR.SetValore(cnt,y,"<nobr><center>" + (Math.round(confronti[i].PuntiSubitiC[z]/confronti[i].GiocateConPuntiC[z]*1000)/1000) + "</center></nobr>")
                                arrTotali[y]+=confronti[i].PuntiSubitiC[z]
				tabR.SetStile(cnt,y,"t-xxs"+sR)
                	} 
                   } 
                }
		cnt++
	}
    // Stampa il totale
        cnt++
	for(i=1;i<arrTotali.length;i++) {
		if ((cnt % 2) != 0) {
  		      	tabR.SetStileRiga(cnt,"riga-pari")
		} else {
			tabR.SetStileRiga(cnt,"riga-dispari")
		}
                if (i == 1) {
        	  //sR="LFB";
		  tabR.SetValore(cnt,1,"<nobr>* T O T A L E *</nobr>");
                }
                else if ( ( i % 8 )  == 0) { 
                  // Inizio Nuovo Giocate
                  if ( i == 8 ) {
                     z=TotGiocateConPunti
                  } else {
                     z=TotGiocateConPuntiC
                  }
                  // Fine Nuovo Giocate
                  // z=i-6;
                  // if ( arrTotali[z] == 0 ) {
                  if ( z == 0 ) {
		    tabR.SetValore(cnt,i,"<nobr><center>" + (Math.round(0*1000)/1000) + "</center></nobr>")
                  }
                  else {
		    //tabR.SetValore(cnt,i,"<nobr><center>" + (Math.round(arrTotali[i]/arrTotali[z]*1000)/1000) + "</center></nobr>")
		    tabR.SetValore(cnt,i,"<nobr><center>" + (Math.round(arrTotali[i]/z*1000)/1000) + "</center></nobr>")
                  }
                }
                else if ( ( (i - 1) % 8) == 0 ) { 
                  // Inizio Nuovo Giocate
                  if ( i == 9 ) {
                     z=TotGiocateConPunti
                  } else {
                     z=TotGiocateConPuntiC
                  }
                  // Fine Nuovo Giocate
                  //z=i-7;
                  //if ( arrTotali[z] == 0 ) {
                  if ( z == 0 ) {
		    tabR.SetValore(cnt,i,"<nobr><center>" + (Math.round(0*1000)/1000) + "</center></nobr>")
                  }
                  else {
		    //tabR.SetValore(cnt,i,"<nobr><center>" + (Math.round(arrTotali[i]/arrTotali[z]*1000)/1000) + "</center></nobr>")
		    tabR.SetValore(cnt,i,"<nobr><center>" + (Math.round(arrTotali[i]/z*1000)/1000) + "</center></nobr>")
                  }
                }
                else { 
		  tabR.SetValore(cnt,i,"<nobr><center>"+arrTotali[i]+"</center></nobr>")
                }
                if (i == 1) {
                  if ( arrTotali[3] > arrTotali[5] ) {
                    sR="VLFB"
                  } 
                  else if ( arrTotali[5] > arrTotali[3] ) {
                    sR="RLFB"
                  } 
                  else {
                    sR="GLFB"
                  }
		  tabR.SetStile(cnt,1,"t-xxs"+sR)
                }
                else {
		  tabR.tab[cnt].riga[i].stile = tabR.tab[cnt-2].riga[i].stile
                }
	}
    Stato("Visualizzazione Confronti...")
    d10 = Math.ceil(tabR.numrighe / 10)
    tabR.nome="Confronti"
    tabR.larghezza=99
    tabR.altezza=0
    tabR.border=1
    tabR.cellpadding=3
    tabR.cellspacing=0
    tabR.stile="ClassEl"
    tabR.Stampa()
    // Inizio BESTIA NERA & PASSEGGIATA
    confrontiStat(confronti, arrTotali[2]);
    // Fine BESTIA NERA & PASSEGGIATA
}

function ordinaConfronti(a, b) {
        var c
        if ((a!=null) && (b!=null)) {
           if (a.Squadra>b.Squadra) {
              return 1;
           }
           else {
             if (a.Squadra<b.Squadra) {
               return -1;
             }
             else {
               return 0;
             }
           }
        }
        else {
                return -(a == null) + (b == null)
        }
} 

function confrontiStat(arrConfrontiStat, totGiocate) {
var i,d
var BNVPperc = 4
// 1 = BESTA NERA
// 2 = VITTIMA PREFERITA
// 3 = SFIDA EQUILIBRATA
// 4 = ATTACCO PIU' TEMUTO
// 5 = DIFESA IMPEFORABILE
// 6 = ATTACCO MENO TEMUTO
// 7 = DIFESA COLABRODO
// x,1 = ASSOLUTA --> Nome Squadra
// x,2 = ASSOLUTA --> Media Punti, Media Gol
// x,3 = ASSOLUTA --> Giocate
// x,4 = PESATA   --> Nome Squadra
// x,5 = PESATA   --> Media Punti, Media Gol
// x,6 = PESATA   --> Giocate
// x,7 = ATTUALE  --> Nome Squadra
// x,8 = ATTUALE  --> Media Punti, Media Gol
// x,9 = ATTUALE  --> Giocate
var numTipo = 7
var tabBNVP = new Array(numTipo) 
for(i=1;i<=numTipo;i++) {
   tabBNVP[i] = new Array (9)
}

var arrTipoBNVP = new Array(numTipo) 
var BNVPAppo = 0
var BNVPCtr = 0
var BNVPAppo = 0
 
    arrTipoBNVP[1] = "BESTIA NERA";    
    arrTipoBNVP[2] = "VITTIMA PREFERITA";    
    arrTipoBNVP[3] = "SFIDA EQUILIBRATA";
    arrTipoBNVP[4] = "ATTACCO IMMARCABILE";
    arrTipoBNVP[5] = "DIFESA IMPENETRABILE";
    arrTipoBNVP[6] = "ATTACCO ANNULLATO";
    arrTipoBNVP[7] = "DIFESA COLABRODO";
        
    for(i=1;i<=numTipo;i++) {
       tabBNVP[i][1] = tabBNVP[i][4] = tabBNVP[i][7] = " ";
       tabBNVP[i][2] = tabBNVP[i][5] = tabBNVP[i][8] = 0;
       tabBNVP[i][3] = tabBNVP[i][6] = tabBNVP[i][9] = 0;
    }
        
    for(i=0;i<arrConfrontiStat.length;i++) {
       // BESTIA NERA
       BNVPAppo = ( ( arrConfrontiStat[i].Vinte * 3 ) + arrConfrontiStat[i].Nulle) / arrConfrontiStat[i].Giocate;
       BNVPCtr=1;
       if (     (    ( BNVPAppo < tabBNVP[BNVPCtr][2] )
                  || ( tabBNVP[BNVPCtr][3] == 0 )
                )
             || 
                (    ( BNVPAppo == tabBNVP[BNVPCtr][2] )
                  && ( arrConfrontiStat[i].Giocate > tabBNVP[BNVPCtr][3] )
                )
          ) {
                tabBNVP[BNVPCtr][1] = arrConfrontiStat[i].Squadra;
                tabBNVP[BNVPCtr][2] = BNVPAppo;
                tabBNVP[BNVPCtr][3] = arrConfrontiStat[i].Giocate;
       }
       if ( ( arrConfrontiStat[i].Giocate / totGiocate * 100 ) >= BNVPperc ) {
         if (     (    ( BNVPAppo < tabBNVP[BNVPCtr][5] )
                    || ( tabBNVP[BNVPCtr][6] == 0 )
                  )
               || 
                  (    ( BNVPAppo == tabBNVP[BNVPCtr][5] )
                    && ( arrConfrontiStat[i].Giocate > tabBNVP[BNVPCtr][6] )
                  )
            ) {
                  tabBNVP[BNVPCtr][4] = arrConfrontiStat[i].Squadra;
                  tabBNVP[BNVPCtr][5] = BNVPAppo;
                  tabBNVP[BNVPCtr][6] = arrConfrontiStat[i].Giocate;
         }
       }
       for (d=1;d<=arrAdOFantasquadre.length-1;d++) {
         if ( arrAdOFantasquadre[d].IDf == arrConfrontiStat[i].IDASquadra ) {
           if ( arrAdOFantasquadre[d].idAttuale != 0 ) {
             if (     (    ( BNVPAppo < tabBNVP[BNVPCtr][8] )
                        || ( tabBNVP[BNVPCtr][9] == 0 )
                      )
                   || 
                      (    ( BNVPAppo == tabBNVP[BNVPCtr][8] )
                        && ( arrConfrontiStat[i].Giocate > tabBNVP[BNVPCtr][9] )
                      )
                ) {
                    tabBNVP[BNVPCtr][7] = arrConfrontiStat[i].Squadra;
                    tabBNVP[BNVPCtr][8] = BNVPAppo;
                    tabBNVP[BNVPCtr][9] = arrConfrontiStat[i].Giocate;
             }
           }
         }
       }
       // VITTIMA PREFERITA
       BNVPAppo = ( ( arrConfrontiStat[i].Vinte * 3 ) + arrConfrontiStat[i].Nulle) / arrConfrontiStat[i].Giocate;
       BNVPCtr=2;
       if (   ( BNVPAppo > tabBNVP[BNVPCtr][2] )
           || ( ( BNVPAppo == tabBNVP[BNVPCtr][2] )
                 && ( arrConfrontiStat[i].Giocate > tabBNVP[BNVPCtr][3] )
              )
          ) {
                tabBNVP[BNVPCtr][1] = arrConfrontiStat[i].Squadra;
                tabBNVP[BNVPCtr][2] = BNVPAppo;
                tabBNVP[BNVPCtr][3] = arrConfrontiStat[i].Giocate;
       }
       if ( ( arrConfrontiStat[i].Giocate / totGiocate * 100 ) >= BNVPperc ) {
         if (   ( BNVPAppo > tabBNVP[BNVPCtr][5] )
             || ( ( BNVPAppo == tabBNVP[BNVPCtr][5] )
                   && ( arrConfrontiStat[i].Giocate > tabBNVP[BNVPCtr][6] )
                )
            ) {
                  tabBNVP[BNVPCtr][4] = arrConfrontiStat[i].Squadra;
                  tabBNVP[BNVPCtr][5] = BNVPAppo;
                  tabBNVP[BNVPCtr][6] = arrConfrontiStat[i].Giocate;
         }
       }
       for (d=1;d<=arrAdOFantasquadre.length-1;d++) {
         if ( arrAdOFantasquadre[d].IDf == arrConfrontiStat[i].IDASquadra ) {
           if ( arrAdOFantasquadre[d].idAttuale != 0 ) {
             if (   ( BNVPAppo > tabBNVP[BNVPCtr][8] )
                 || ( ( BNVPAppo == tabBNVP[BNVPCtr][8] )
                       && ( arrConfrontiStat[i].Giocate > tabBNVP[BNVPCtr][9] )
                    )
                ) {
                    tabBNVP[BNVPCtr][7] = arrConfrontiStat[i].Squadra;
                    tabBNVP[BNVPCtr][8] = BNVPAppo;
                    tabBNVP[BNVPCtr][9] = arrConfrontiStat[i].Giocate;
             }
           }
         }
       }
       // SFIDA EQUILIBRATA
       BNVPAppo = Math.abs( ( ( arrConfrontiStat[i].Vinte * 2 ) - ( arrConfrontiStat[i].Perse * 2 ) + ( arrConfrontiStat[i].GF * 0.5 ) - ( arrConfrontiStat[i].GS * 0.5 ) ) / arrConfrontiStat[i].Giocate);
       BNVPCtr=3;
       if (     (    ( BNVPAppo < tabBNVP[BNVPCtr][2] )
                  || ( tabBNVP[BNVPCtr][3] == 0 )
                )
             || 
                (    ( BNVPAppo == tabBNVP[BNVPCtr][2] )
                  && ( arrConfrontiStat[i].Giocate > tabBNVP[BNVPCtr][3] )
                )
          ) {
                tabBNVP[BNVPCtr][1] = arrConfrontiStat[i].Squadra;
                tabBNVP[BNVPCtr][2] = BNVPAppo;
                tabBNVP[BNVPCtr][3] = arrConfrontiStat[i].Giocate;
       }
       if ( ( arrConfrontiStat[i].Giocate / totGiocate * 100 ) >= BNVPperc ) {
         if (     (    ( BNVPAppo < tabBNVP[BNVPCtr][5] )
                    || ( tabBNVP[BNVPCtr][6] == 0 )
                  )
               || 
                  (    ( BNVPAppo == tabBNVP[BNVPCtr][5] )
                    && ( arrConfrontiStat[i].Giocate > tabBNVP[BNVPCtr][6] )
                  )
            ) {
                  tabBNVP[BNVPCtr][4] = arrConfrontiStat[i].Squadra;
                  tabBNVP[BNVPCtr][5] = BNVPAppo;
                  tabBNVP[BNVPCtr][6] = arrConfrontiStat[i].Giocate;
         }
       }
       for (d=1;d<=arrAdOFantasquadre.length-1;d++) {
         if ( arrAdOFantasquadre[d].IDf == arrConfrontiStat[i].IDASquadra ) {
           if ( arrAdOFantasquadre[d].idAttuale != 0 ) {
             if (     (    ( BNVPAppo < tabBNVP[BNVPCtr][8] )
                        || ( tabBNVP[BNVPCtr][9] == 0 )
                      )
                   || 
                      (    ( BNVPAppo == tabBNVP[BNVPCtr][8] )
                        && ( arrConfrontiStat[i].Giocate > tabBNVP[BNVPCtr][9] )
                      )
                ) {
                    tabBNVP[BNVPCtr][7] = arrConfrontiStat[i].Squadra;
                    tabBNVP[BNVPCtr][8] = BNVPAppo;
                    tabBNVP[BNVPCtr][9] = arrConfrontiStat[i].Giocate;
             }
           }
         }
       }
       // ATTACCO IMMARCABILE
       BNVPAppo = arrConfrontiStat[i].GS / arrConfrontiStat[i].Giocate;
       BNVPCtr=4;
       if (   ( BNVPAppo > tabBNVP[BNVPCtr][2] )
           || ( ( BNVPAppo == tabBNVP[BNVPCtr][2] )
                 && ( arrConfrontiStat[i].Giocate > tabBNVP[BNVPCtr][3] )
              )
          ) {
                tabBNVP[BNVPCtr][1] = arrConfrontiStat[i].Squadra;
                tabBNVP[BNVPCtr][2] = BNVPAppo;
                tabBNVP[BNVPCtr][3] = arrConfrontiStat[i].Giocate;
       }
       if ( ( arrConfrontiStat[i].Giocate / totGiocate * 100 ) >= BNVPperc ) {
         if (   ( BNVPAppo > tabBNVP[BNVPCtr][5] )
             || ( ( BNVPAppo == tabBNVP[BNVPCtr][5] )
                   && ( arrConfrontiStat[i].Giocate > tabBNVP[BNVPCtr][6] )
                )
            ) {
                  tabBNVP[BNVPCtr][4] = arrConfrontiStat[i].Squadra;
                  tabBNVP[BNVPCtr][5] = BNVPAppo;
                  tabBNVP[BNVPCtr][6] = arrConfrontiStat[i].Giocate;
         }
       }
       for (d=1;d<=arrAdOFantasquadre.length-1;d++) {
         if ( arrAdOFantasquadre[d].IDf == arrConfrontiStat[i].IDASquadra ) {
           if ( arrAdOFantasquadre[d].idAttuale != 0 ) {
             if (   ( BNVPAppo > tabBNVP[BNVPCtr][8] )
                 || ( ( BNVPAppo == tabBNVP[BNVPCtr][8] )
                       && ( arrConfrontiStat[i].Giocate > tabBNVP[BNVPCtr][9] )
                    )
                ) {
                    tabBNVP[BNVPCtr][7] = arrConfrontiStat[i].Squadra;
                    tabBNVP[BNVPCtr][8] = BNVPAppo;
                    tabBNVP[BNVPCtr][9] = arrConfrontiStat[i].Giocate;
             }
           }
         }
       }
       // DIFESA IMPENETRABILE
       BNVPAppo = arrConfrontiStat[i].GF / arrConfrontiStat[i].Giocate;
       BNVPCtr=5;
       if (     (    ( BNVPAppo < tabBNVP[BNVPCtr][2] )
                  || ( tabBNVP[BNVPCtr][3] == 0 )
                )
             || 
                (    ( BNVPAppo == tabBNVP[BNVPCtr][2] )
                  && ( arrConfrontiStat[i].Giocate > tabBNVP[BNVPCtr][3] )
                )
          ) {
                tabBNVP[BNVPCtr][1] = arrConfrontiStat[i].Squadra;
                tabBNVP[BNVPCtr][2] = BNVPAppo;
                tabBNVP[BNVPCtr][3] = arrConfrontiStat[i].Giocate;
       }
       if ( ( arrConfrontiStat[i].Giocate / totGiocate * 100 ) >= BNVPperc ) {
         if (     (    ( BNVPAppo < tabBNVP[BNVPCtr][5] )
                    || ( tabBNVP[BNVPCtr][6] == 0 )
                  )
               || 
                  (    ( BNVPAppo == tabBNVP[BNVPCtr][5] )
                    && ( arrConfrontiStat[i].Giocate > tabBNVP[BNVPCtr][6] )
                  )
            ) {
                  tabBNVP[BNVPCtr][4] = arrConfrontiStat[i].Squadra;
                  tabBNVP[BNVPCtr][5] = BNVPAppo;
                  tabBNVP[BNVPCtr][6] = arrConfrontiStat[i].Giocate;
         }
       }
       for (d=1;d<=arrAdOFantasquadre.length-1;d++) {
         if ( arrAdOFantasquadre[d].IDf == arrConfrontiStat[i].IDASquadra ) {
           if ( arrAdOFantasquadre[d].idAttuale != 0 ) {
             if (     (    ( BNVPAppo < tabBNVP[BNVPCtr][8] )
                        || ( tabBNVP[BNVPCtr][9] == 0 )
                      )
                   || 
                      (    ( BNVPAppo == tabBNVP[BNVPCtr][8] )
                        && ( arrConfrontiStat[i].Giocate > tabBNVP[BNVPCtr][9] )
                      )
                ) {
                    tabBNVP[BNVPCtr][7] = arrConfrontiStat[i].Squadra;
                    tabBNVP[BNVPCtr][8] = BNVPAppo;
                    tabBNVP[BNVPCtr][9] = arrConfrontiStat[i].Giocate;
             }
           }
         }
       }
       // ATTACCO ANNULLATO
       BNVPAppo = arrConfrontiStat[i].GS / arrConfrontiStat[i].Giocate;
       BNVPCtr=6;
       if (     (    ( BNVPAppo < tabBNVP[BNVPCtr][2] )
                  || ( tabBNVP[BNVPCtr][3] == 0 )
                )
             || 
                (    ( BNVPAppo == tabBNVP[BNVPCtr][2] )
                  && ( arrConfrontiStat[i].Giocate > tabBNVP[BNVPCtr][3] )
                )
          ) {
                tabBNVP[BNVPCtr][1] = arrConfrontiStat[i].Squadra;
                tabBNVP[BNVPCtr][2] = BNVPAppo;
                tabBNVP[BNVPCtr][3] = arrConfrontiStat[i].Giocate;
       }
       if ( ( arrConfrontiStat[i].Giocate / totGiocate * 100 ) >= BNVPperc ) {
         if (     (    ( BNVPAppo < tabBNVP[BNVPCtr][5] )
                    || ( tabBNVP[BNVPCtr][6] == 0 )
                  )
               || 
                  (    ( BNVPAppo == tabBNVP[BNVPCtr][5] )
                    && ( arrConfrontiStat[i].Giocate > tabBNVP[BNVPCtr][6] )
                  )
            ) {
                  tabBNVP[BNVPCtr][4] = arrConfrontiStat[i].Squadra;
                  tabBNVP[BNVPCtr][5] = BNVPAppo;
                  tabBNVP[BNVPCtr][6] = arrConfrontiStat[i].Giocate;
         }
       }
       for (d=1;d<=arrAdOFantasquadre.length-1;d++) {
         if ( arrAdOFantasquadre[d].IDf == arrConfrontiStat[i].IDASquadra ) {
           if ( arrAdOFantasquadre[d].idAttuale != 0 ) {
             if (     (    ( BNVPAppo < tabBNVP[BNVPCtr][8] )
                        || ( tabBNVP[BNVPCtr][9] == 0 )
                      )
                   || 
                      (    ( BNVPAppo == tabBNVP[BNVPCtr][8] )
                        && ( arrConfrontiStat[i].Giocate > tabBNVP[BNVPCtr][9] )
                      )
                ) {
                    tabBNVP[BNVPCtr][7] = arrConfrontiStat[i].Squadra;
                    tabBNVP[BNVPCtr][8] = BNVPAppo;
                    tabBNVP[BNVPCtr][9] = arrConfrontiStat[i].Giocate;
             }
           }
         }
       }
       // DIFESA COLABRODO
       BNVPAppo = arrConfrontiStat[i].GF / arrConfrontiStat[i].Giocate;
       BNVPCtr=7;
       if (   ( BNVPAppo > tabBNVP[BNVPCtr][2] )
           || ( ( BNVPAppo == tabBNVP[BNVPCtr][2] )
                 && ( arrConfrontiStat[i].Giocate > tabBNVP[BNVPCtr][3] )
              )
          ) {
                tabBNVP[BNVPCtr][1] = arrConfrontiStat[i].Squadra;
                tabBNVP[BNVPCtr][2] = BNVPAppo;
                tabBNVP[BNVPCtr][3] = arrConfrontiStat[i].Giocate;
       }
       if ( ( arrConfrontiStat[i].Giocate / totGiocate * 100 ) >= BNVPperc ) {
         if (   ( BNVPAppo > tabBNVP[BNVPCtr][5] )
             || ( ( BNVPAppo == tabBNVP[BNVPCtr][5] )
                   && ( arrConfrontiStat[i].Giocate > tabBNVP[BNVPCtr][6] )
                )
            ) {
                  tabBNVP[BNVPCtr][4] = arrConfrontiStat[i].Squadra;
                  tabBNVP[BNVPCtr][5] = BNVPAppo;
                  tabBNVP[BNVPCtr][6] = arrConfrontiStat[i].Giocate;
         }
       }
       for (d=1;d<=arrAdOFantasquadre.length-1;d++) {
         if ( arrAdOFantasquadre[d].IDf == arrConfrontiStat[i].IDASquadra ) {
           if ( arrAdOFantasquadre[d].idAttuale != 0 ) {
             if (   ( BNVPAppo > tabBNVP[BNVPCtr][8] )
                 || ( ( BNVPAppo == tabBNVP[BNVPCtr][8] )
                       && ( arrConfrontiStat[i].Giocate > tabBNVP[BNVPCtr][9] )
                    )
                ) {
                    tabBNVP[BNVPCtr][7] = arrConfrontiStat[i].Squadra;
                    tabBNVP[BNVPCtr][8] = BNVPAppo;
                    tabBNVP[BNVPCtr][9] = arrConfrontiStat[i].Giocate;
             }
           }
         }
       }
    }
    document.write ("<br>");
    //document.write ("<div class='IntLayer'>");
    //document.write("<table width=100% border='1' cellspacing='0' cellpadding='0'>")
    document.write("<table height='0%' width='99%' BORDER='1' CELLSPACING='0' CELLPADDING='3' class='ClassEl'>")
    document.write ("<tr class='riga-blu-cx'>");
    //document.write ("<th ROWSPAN=2 BGCOLOR='#2323B3' text-align='center'>");
    //document.write ("<font color='#FFFFFF' align='center'>Tipo</font></th>")
    document.write ("<th>STATISTICHE</th>");
    document.write ("<th COLSPAN=3 title='Dato assoluto. Fra tutte le squadre e con qualsiasi numero di partite giocate'>Assoluta</th>" )
    document.write ("<th COLSPAN=3 title='Dato Pesato. Fra tutte le squadre con un numero di partite superiore al 4% delle partite giocate'>Pesata</th>" )
    document.write ("<th COLSPAN=3 title='Dato riferito alle sole squadre attuali con qualsiasi numero di partite giocate'>Attuale</th>" )
    document.write ("</tr>");
    document.write ("<tr class='riga-orange-cx'>");
    document.write ("<th class='t-xxs'><font color='#2323B3'>Tipo</font></th>" )
    document.write ("<th class='t-xxs'><font color='#2323B3'>Squadra</font></th>" )
    document.write ("<th class='t-xxs' title='Media Punti o Media Goal'><font color='#2323B3'>MG</font></th>" )
    document.write ("<th class='t-xxs' title='Partite'><font color='#2323B3'>P</font></th>" )
    document.write ("<th class='t-xxs'><font color='#2323B3'>Squadra</font></th>" )
    document.write ("<th class='t-xxs' title='Media Punti o Media Goal'><font color='#2323B3'>MG</font></th>" )
    document.write ("<th class='t-xxs' title='Partite'><font color='#2323B3'>P</font></th>" )
    document.write ("<th class='t-xxs'><font color='#2323B3'>Squadra</font></th>" )
    document.write ("<th class='t-xxs' title='Media Punti o Media Goal'><font color='#2323B3'>MG</font></th>" )
    document.write ("<th class='t-xxs' title='Partite'><font color='#2323B3'>P</font></th>" )
    document.write ("</tr>");
    for( i=1;i<=numTipo;i++) {
       if ((i % 2) != 0) {
          document.write ("<tr class='riga-pari'>");
       } else {
          document.write ("<tr class='riga-dispari'>");
       }
       document.write ("<td class='t-xxsLFB'><nobr><center>");
       document.write (arrTipoBNVP[i] + "</center></nobr></td>");
       document.write ("<td class='t-xxsBluB'><nobr><center>" + tabBNVP[i][1] + "</center></nobr></td><td class='t-xxsVB'><center>" + Math.round ( tabBNVP[i][2] * 100 ) / 100 + "</center></td><td class='t-xxsRB'><center>" + tabBNVP[i][3] + "</center></td>");
       document.write ("<td class='t-xxsBluB'><nobr><center>" + tabBNVP[i][4] + "</center></nobr></td><td class='t-xxsVB'><center>" + Math.round ( tabBNVP[i][5] * 100 ) / 100 + "</center></td><td class='t-xxsRB'><center>" + tabBNVP[i][6] + "</center></td>");
       document.write ("<td class='t-xxsBluB'><nobr><center>" + tabBNVP[i][7] + "</center></nobr></td><td class='t-xxsVB'><center>" + Math.round ( tabBNVP[i][8] * 100 ) / 100 + "</center></td><td class='t-xxsRB'><center>" + tabBNVP[i][9] + "</center></td>");
       document.write ("</tr>");
    }
    document.write ("</table>");
    //document.write ("</div>");
} 

function GeneraIncontri(Idaodf,IdaodfAv,IdComp,IdStadio) {
var i,c,cnt,vis,data_appo
var tabR = new Tabella(2, 8) 
var tabR2 = new Tabella(2, 8) 
var arrConfIncontri = new Object()
var competizioni = arrAdOCompetizioni.length - 1
arrConfIncontri = arrConfronti
        tabR.SetStileRiga(1,"riga-blu-cx")
        tabR.intestazioni=true
        Stato("Generazione Incontri 1...")
        for (i=1;i<=tabR.numcolonne;i++) {
                tabR.SetSpanned(1,i,true)
        } 
        tabR.SetSpan(1,1,8)
        tabR.SetSpanned(1,1,false);
	tabR.SetValore(1,1,"PARTITE DISPUTATE FRA LE SQUADRE");
        cnt=2
        tabR.SetStileRiga(cnt,"riga-orange-cx")
	tabR.SetValore(cnt,1,"<nobr>N.ro</nobr>");
	tabR.SetValore(cnt,2,"<nobr>Squadra A</nobr>");
	tabR.SetValore(cnt,3,"<nobr>Squadra B</nobr>");
	tabR.SetValore(cnt,4,"<nobr>Punteggio</nobr>");
	tabR.SetValore(cnt,5,"<nobr>Stagione</nobr>");
	tabR.SetValore(cnt,6,"<nobr>Competizione</nobr>");
	tabR.SetValore(cnt,7,"<nobr>Giornata di A</nobr>");
	tabR.SetValore(cnt,8,"<nobr>Data</nobr>");
        cnt=3
	for(i=1;i<arrConfIncontri.length;i++) {
	     if ( ( ( arrConfIncontri[i].IDASquadraCasa==Idaodf ) || ( arrConfIncontri[i].IDASquadraCasa==IdaodfAv )) && ( ( arrConfIncontri[i].IDASquadraFuori==Idaodf ) || ( arrConfIncontri[i].IDASquadraFuori==IdaodfAv ))) {
	     if ( ( IdComp == 0 ) || ( IdComp == arrConfIncontri[i].Competizione ) ) {
             if ( (    arrConfIncontri[i].Neutro == "N" && ( IdStadio == "T" || IdStadio == "N" ) ) || (   arrConfIncontri[i].Neutro != "N" && IdStadio != "N" )) {
	     if (     IdStadio == "N" 
                  || (    IdStadio != "N"  
                        && ( IdStadio == "T"
                            || (   (   IdStadio == "C"
                                     && arrConfIncontri[i].IDASquadraCasa==Idaodf
                                   )
                                || (   IdStadio == "F"
                                     && arrConfIncontri[i].IDASquadraFuori==Idaodf
                                   )
                               )
                           )
                     )
                ) {
                  
		if ((cnt % 2) != 0) {
	        	tabR.SetStileRiga(cnt,"riga-pari")
		} else {
			tabR.SetStileRiga(cnt,"riga-dispari")
		}
                sR="LFB"
		//tabR.SetValore(cnt,1,"<span class='t-xxs"+sR+"B'>&nbsp;"+confronti[i].Squadra+"</span>")
                vis = cnt - 2;
		tabR.SetValore(cnt,1,"<nobr><center>"+ vis +"</center></nobr>")
		tabR.SetStile(cnt,1,"t-xxs"+sR)
		tabR.SetValore(cnt,2,"<nobr>"+arrConfIncontri[i].SquadraCasa+"</nobr>")
		tabR.SetStile(cnt,2,"t-xxs"+sR)
		tabR.SetValore(cnt,3,"<nobr>"+arrConfIncontri[i].SquadraFuori+"</nobr>")
		tabR.SetStile(cnt,3,"t-xxs"+sR)
                sR="BluB"
                if ( arrConfIncontri[i].TipoRis == "2" ) {
		  tabR.SetValore(cnt,4,"<nobr><center>"+arrConfIncontri[i].GolCasa+" - "+arrConfIncontri[i].GolFuori+" dcr</center></nobr>")
                } 
                else {
                  if ( arrConfIncontri[i].TipoRis == "1" ) {
		    tabR.SetValore(cnt,4,"<nobr><center>"+arrConfIncontri[i].GolCasa+" - "+arrConfIncontri[i].GolFuori+" dts</center></nobr>")
                  }
                  else {
		    tabR.SetValore(cnt,4,"<nobr><center>"+arrConfIncontri[i].GolCasa+" - "+arrConfIncontri[i].GolFuori+"</center></nobr>")
                  }
                }
		tabR.SetStile(cnt,4,"t-xxs"+sR)
                sR="VB"
		tabR.SetValore(cnt,5,"<nobr><center>"+arrConfIncontri[i].Stagione+"</center></nobr>")
		tabR.SetStile(cnt,5,"t-xxs"+sR)
                sR="RB"
                for (c = 1; c <= competizioni; c++) {
                   if ( arrAdOCompetizioni[c].IDc == arrConfIncontri[i].Competizione ) {
	         	tabR.SetValore(cnt,6,"<nobr><center>"+arrAdOCompetizioni[c].nome+"</center></nobr>")
		        tabR.SetStile(cnt,6,"t-xxs"+sR)
                   }
                }
                sR="GB"
		tabR.SetValore(cnt,7,"<nobr><center><a class='t-xxs"+sR+"' href='../"+arrDirectory[CercaCartellaStagione(arrConfIncontri[i].Stagione)].Directory+"/ris.htm?Gio="+arrConfIncontri[i].GiornataA+"'>"+arrConfIncontri[i].GiornataA+"</a></center></nobr>")
		tabR.SetStile(cnt,7,"t-xxs"+sR)
                sR="BluB"
	        data = new Date(arrConfIncontri[i].Data)
           	Year = data.getYear()
	        if (Year < 2000)
	       	   Year = Year + 1900
	        data_appo = DOWArray[(data.getDay()+1)] + " " + data.getDate() + " " + MOYArray[(data.getMonth()+1)] + " " + Year
		tabR.SetValore(cnt,8,"<nobr><center>"+data_appo+"</center></nobr>")
		tabR.SetStile(cnt,8,"t-xxs"+sR)
                cnt++
          }
          }
          }
          }
        }
    Stato("Visualizzazione Incontri 1...")
    d10 = Math.ceil(tabR.numrighe / 10)
    tabR.nome="incontri"
    tabR.larghezza=50
    tabR.altezza=0
    tabR.border=1
    tabR.cellpadding=3
    tabR.cellspacing=0
    tabR.stile="ClassEl"
    tabR.Stampa()
    
}

function GeneraPalmares(cFsq)
{
	//PAvar competizioni = arrAdOCompetizioni.length - 1
	var competizioni = arrPalmares.length - 1
	var vittorie = new Array()
	var retrocessione = new Array()
	//PAvar tabV = new Tabella(2, 11)
	var tabV = new Tabella(2, competizioni * 2 + 1 + 2)
	var c, s, p, v, cnt, idx, i, retro
	var arrRiferimentiColonne = new Array()
	//PAfor (i=1;i<arrAdOCompetizioni.length;i++)
	//PA	arrRiferimentiColonne[arrAdOCompetizioni[i].IDc]=i
	for (i=1;i<arrPalmares.length;i++)
		arrRiferimentiColonne[arrPalmares[i].Competizione]=i
	// Imposta proprietà della tabella
	tabV.nome = "Vittorie albo d'oro"
	tabV.larghezza = 100
	tabV.border = 0
	tabV.cellpadding = 0
	tabV.cellspacing = 5
	tabV.stile = "IntLayer"
	//tabV.SetLarghezzaColonna(1, 60)
        tabV.SetLarghezzaColonna(1, 80 / ( competizioni + 1 ))
        tabV.SetLarghezzaColonna(2, 10 / ( competizioni + 1 ))
        tabV.SetLarghezzaColonna(3, 10 / ( competizioni + 1 ))
        tabV.SetValore(1,1,"PALMAR&Egrave;S:")
	for (i=1;i<arrPalmares.length;i++) {
	  //tabV.SetLarghezzaColonna(i * 2 + 2, 20)
          tabV.SetLarghezzaColonna(i * 2 + 2, 20 / ( competizioni + 1 ))
          tabV.SetValore(1,i * 2 + 2,"<img src='img/" + arrPalmares[i].Icona + "'>")
          //tabV.SetLarghezzaColonna(i * 2 + 1 + 2, 120)
          tabV.SetLarghezzaColonna(i * 2 + 1 + 2, 80 / (competizioni + 1))
          tabV.SetValore(1, i * 2 + 1 + 2, "<nobr>" + arrPalmares[i].Label + "</nobr>")
        }
	// Calcola vittorie di ogni squadra
	for (s = 1; s < arrAdOFantasquadre.length; s++) {
		vittorie[arrAdOFantasquadre[s].IDf] = new adoV(arrAdOFantasquadre[s].IDf, arrAdOFantasquadre[s].nome,arrAdOFantasquadre[s].idAttuale)
		retrocessione[arrAdOFantasquadre[s].IDf] = new PalmaR(arrAdOFantasquadre[s].IDf, arrAdOFantasquadre[s].nome,arrAdOFantasquadre[s].idAttuale)
	}
	for (p = 1; p < arrAdOPosizioni.length; p++) {
		if (arrAdOPosizioni[p].posizione == 1) {
			vittorie[arrAdOPosizioni[p].idSquadra].vittorie[arrAdOPosizioni[p].idCompetizione]++
                }
                else {
                    idx = 0
	            for (i=1;i<arrPalmares.length;i++) {
                      if ( arrAdOPosizioni[p].idCompetizione == arrPalmares[i].Competizione ) {
                        idx = i
                        i = arrPalmares.length 
                      }
                    }
                    if ( idx == 1 ) {
                       retro = 0
	               for (i=1;i<arrDirectory.length;i++) {
                         if ( arrAdOPosizioni[p].stagione == arrDirectory[i].Stagione ) {
                           retro = arrDirectory[i].Salve
                           i = arrDirectory.length
                         }
                       }
                       if ( retro != 0 ) {
                         if (arrAdOPosizioni[p].posizione > retro ) {
                            retrocessione[arrAdOPosizioni[p].idSquadra].retrocessione[arrAdOPosizioni[p].idCompetizione]++
                         }
                       }
                    }
                }
	}
	// E le ordina
	vittorie.sort(ordinaVittoriePalmares)
	retrocessione.sort(ordinaRetrocessionePalmares)
	// Riempie la tabella
	//tabV.SetLarghezzaColonna(1, 60)
        tabV.SetLarghezzaColonna(1, 80 / ( competizioni + 1 ))
        tabV.SetValore(2,1,"&nbsp;")
	//tabV.SetLarghezzaColonna(2, 20)
        tabV.SetLarghezzaColonna(2, 10 / (competizioni + 1 ))
        tabV.SetValore(2,2,"&nbsp;")
        //tabV.SetLarghezzaColonna(3, 120)
        tabV.SetLarghezzaColonna(3, 10 / (competizioni + 1 ))
        tabV.SetValore(2,1,"&nbsp;")
	//tabV.SetLarghezzaColonna(4, 20)
        tabV.SetLarghezzaColonna(4, 20 / (competizioni + 1 ))
        tabV.SetValore(2,2,"&nbsp;")
	cnt = 2
	for (v = 0; v < vittorie.length; v++) {
		if (vittorie[v]!=null) {
                  if (vittorie[v].idSquadra == cFsq) {

			// Imposta stile e valore delle celle 'vittorie'
			for (c=1; c<vittorie[v].vittorie.length; c++) {
				if (vittorie[v].vittorie[c]!=null) {
                                       idx = 0
	                               for (i=1;i<arrPalmares.length;i++) {
                                         if ( c == arrPalmares[i].Competizione ) {
                                           idx = i * 2 + 2
                                           i = arrPalmares.length 
                                          }
                                        }
					if ( idx != 0 ) {
                                          idx++
                                          //tabV.SetLarghezzaColonna(idx, 120)
                                          tabV.SetLarghezzaColonna(idx, 80 / (competizioni + 1))
			                  vittorie[v].vittorie[c]==0?tabV.SetValore(cnt,idx,"&nbsp;"):tabV.SetValore(cnt,idx,"<center>"+vittorie[v].vittorie[c]+"</center>")
                                          idx++
                                          //tabV.SetLarghezzaColonna(idx, 20)
                                          tabV.SetLarghezzaColonna(idx, 20 / (competizioni + 1))
                                          tabV.SetValore(cnt,idx,"&nbsp;")
				        }
				}
			}
			cnt++;
		  }
		}
	}

	cnt = 2
	for (v = 0; v < retrocessione.length; v++) {
		if (retrocessione[v]!=null) {
                  if (retrocessione[v].idSquadra == cFsq) {

			// Imposta stile e valore delle celle 'vittorie'
			for (c=1; c<retrocessione[v].retrocessione.length; c++) {
				if (retrocessione[v].retrocessione[c]!=null) {
                                  if ( arrRiferimentiColonne[c] == 1 ) {
                                     idx = 0
	                             for (i=1;i<arrPalmares.length;i++) {
                                        if ( arrPalmares[i].Competizione == 0 ) {
                                           idx = i * 2 + 2
                                           i = arrPalmares.length 
                                        }
                                     }
                                     if ( idx != 0 ) {
                                        idx++
                                        //tabV.SetLarghezzaColonna(idx, 120)
                                        tabV.SetLarghezzaColonna(idx, 80 / (competizioni + 1))
			                retrocessione[v].retrocessione[c]==0?tabV.SetValore(cnt,idx,"&nbsp;"):tabV.SetValore(cnt,idx,"<center>"+retrocessione[v].retrocessione[c]+"</center>");
				     }
				  }
				}
			}
			cnt++;
		  }
		}
	}


	tabV.Stampa()
}

function ordinaVittoriePalmares(a, b)
{
	var c
	if ((a!=null) && (b!=null)) {
		//for (c = 1; c < arrAdOCompetizioni.length; c++) {
	//		if (a.vittorie[c] < b.vittorie[c]) return 1
	//		if (a.vittorie[c] > b.vittorie[c]) return -1
	//	}
		//return a.nome>b.nome?1:-1
                //if (a.vittorie==b.vittorie) {
	       	//   return a.nome>b.nome?1:-1
                //} 
                //else {
                if (a.vittorie>b.vittorie) { 
                  return -1;
                }
                else {
                   if (a.vittorie<b.vittorie) { 
                     return 1;
                   }
                   else {
                     if (a.nome>b.nome) { 
                       return 1;
                     }
                     else {
                       if (a.nome<b.nome) { 
                         return -1;
                       }
                       else {
                          return 0;
                       }
                     }
                   }
                }
	       	   //return a.vittorie>b.vittorie?-1:1
                //}
	}
	else {
		return -(a == null) + (b == null)
	}
}

function ordinaRetrocessionePalmares(a, b)
{
	var c
	if ((a!=null) && (b!=null)) {
		for (c = 1; c < arrAdOCompetizioni.length; c++) {
			if (a.retrocessione[c] < b.retrocessione[c]) return 1
			if (a.retrocessione[c] > b.retrocessione[c]) return -1
		}
		return a.nome>b.nome?1:-1
	}
	else {
		return -(a == null) + (b == null)
	}
}


function CercaSquadra(id_squadra) {
    var d
    for (d=1;d<=arrAdOFantasquadre.length-1;d++) {
      if ( arrAdOFantasquadre[d].IDf == id_squadra ) {
        return arrAdOFantasquadre[d].nome;
      }
    }
    return " ";
}

function CercaCartellaStagione(id_stagione) {
    var d
    for (d=1;d<arrDirectory.length;d++) {
      if ( arrDirectory[d].Stagione == id_stagione ) {
        return d;
      }
    }
    return 0;
}


function GeneraRecord(Tipo,Visu,TVisu,IdFsq,IdComp,IdStadio) {
    if (Tipo=="001") { 
      GeneraRecord_001(Visu,TVisu,IdFsq,IdComp,IdStadio)
    } 
    else if (Tipo=="002") {
      GeneraRecord_002(Visu,TVisu,IdFsq,IdComp,IdStadio)
    } 
    else if (Tipo=="003") { 
      GeneraRecord_003(Visu,TVisu,IdFsq,IdComp,IdStadio,"N")
    } 
    else if (Tipo=="004") { 
      GeneraRecord_003(Visu,TVisu,IdFsq,IdComp,IdStadio,"S")
    } 
    else if (Tipo=="005") { 
      GeneraRecord_004(Visu,TVisu,IdFsq,IdComp,IdStadio,"N")
    } 
    else if (Tipo=="006") { 
      GeneraRecord_004(Visu,TVisu,IdFsq,IdComp,IdStadio,"S")
    } 
    else if (Tipo=="007") { 
      GeneraRecord_005(Visu,TVisu,IdFsq,IdComp,IdStadio,"N")
    } 
    else if (Tipo=="008") { 
      GeneraRecord_005(Visu,TVisu,IdFsq,IdComp,IdStadio,"S")
    } 
    else if (Tipo=="009") { 
      GeneraRecord_006(Visu,TVisu,IdFsq,IdComp,IdStadio,"N")
    } 
    else if (Tipo=="010") { 
      GeneraRecord_006(Visu,TVisu,IdFsq,IdComp,IdStadio,"S")
    } 
    else if (Tipo=="011") { 
      GeneraRecord_007(Visu,TVisu,IdFsq,IdComp,IdStadio,"N")
    } 
    else if (Tipo=="012") { 
      GeneraRecord_007(Visu,TVisu,IdFsq,IdComp,IdStadio,"S")
    } 
    else if (Tipo=="013") {
      GeneraRecord_008(Visu,TVisu,IdFsq,IdComp,IdStadio)
    } 
    else if (Tipo=="014") {
      GeneraRecord_009(Visu,TVisu,IdFsq,IdComp,IdStadio)
    } 
    else if (Tipo=="015") {
      GeneraBilancioPT()
    } 
} 

function GeneraRecord_001(Visu,TVisu,IdFsq,IdComp,IdStadio) {
var i,c,cnt,vis,data_appo,cont_stampati
var tabR = new Tabella(2, 7) 
var arrRecord = new Object()
var competizioni = arrAdOCompetizioni.length - 1
arrRecord = arrConfronti

       if ( arrRecord.length > Visu ) {
          vis=Visu;
        }
        else {
          vis=arrRecord.length;
        }
        arrRecord.sort(ordinaRecord1)
        tabR.SetStileRiga(1,"riga-blu-cx")
        tabR.intestazioni=true
        Stato("Generazione Record 1...")
        for (i=1;i<=tabR.numcolonne;i++) {
                tabR.SetSpanned(1,i,true)
        } 
        tabR.SetSpan(1,1,7)
        tabR.SetSpanned(1,1,false);
	tabR.SetValore(1,1,"PARTITE CON PIU' GOL NEI TEMPI REGOLAMENTARI");
        cnt=2
        tabR.SetStileRiga(cnt,"riga-orange-cx")
	tabR.SetValore(cnt,1,"<nobr>Squadra A</nobr>");
	tabR.SetValore(cnt,2,"<nobr>Squadra B</nobr>");
	tabR.SetValore(cnt,3,"<nobr>Punteggio</nobr>");
	tabR.SetValore(cnt,4,"<nobr>Stagione</nobr>");
	tabR.SetValore(cnt,5,"<nobr>Competizione</nobr>");
	tabR.SetValore(cnt,6,"<nobr>Giornata di A</nobr>");
	tabR.SetValore(cnt,7,"<nobr>Data</nobr>");
        cnt=3
        cont_stampati=0
	for(i=0;i< ( arrRecord.length - 1) ;i++) {
            if (   (     ( IdComp == 0 )
                     ||  ( IdComp == arrRecord[i].Competizione )
                   )
                && (     ( IdStadio == "T" )
                     ||  (      ( IdStadio == "N" )
                             && ( arrRecord[i].Neutro == "N" )
                         )
                     ||  (      ( IdStadio == "C" )
                             && (   (    ( IdFsq == 0 )
                                      && ( arrRecord[i].GolRegoCasa >= arrRecord[i].GolRegoFuori )
                                    )
                                 || ( IdFsq == arrRecord[i].IDASquadraCasa )
                                )
                         )
                     ||  (      ( IdStadio == "F" )
                             && (   (    ( IdFsq == 0 )
                                      && ( arrRecord[i].GolRegoFuori >= arrRecord[i].GolRegoCasa )
                                    )
                                 || ( IdFsq == arrRecord[i].IDASquadraFuori )
                                )
                         )
                   )
                && (     ( IdFsq == 0 )
                     ||  ( IdFsq == arrRecord[i].IDASquadraCasa )
                     ||  ( IdFsq == arrRecord[i].IDASquadraFuori )
                   )
                ) {

                cont_stampati++            
    
       		if ((cnt % 2) != 0) {
	        	tabR.SetStileRiga(cnt,"riga-pari")
		} else {
			tabR.SetStileRiga(cnt,"riga-dispari")
		}
                sR="LFB"
		//tabR.SetValore(cnt,1,"<span class='t-xxs"+sR+"B'>&nbsp;"+confronti[i].Squadra+"</span>")
		tabR.SetValore(cnt,1,"<nobr>"+arrRecord[i].SquadraCasa+"</nobr>")
		tabR.SetStile(cnt,1,"t-xxs"+sR)
		tabR.SetValore(cnt,2,"<nobr>"+arrRecord[i].SquadraFuori+"</nobr>")
		tabR.SetStile(cnt,2,"t-xxs"+sR)
                sR="BluB"
		tabR.SetValore(cnt,3,"<nobr><center>"+arrRecord[i].GolRegoCasa+" - "+arrRecord[i].GolRegoFuori+"</center></nobr>")
		tabR.SetStile(cnt,3,"t-xxs"+sR)
                sR="VB"
		tabR.SetValore(cnt,4,"<nobr><center>"+arrRecord[i].Stagione+"</center></nobr>")
		tabR.SetStile(cnt,4,"t-xxs"+sR)
                sR="RB"
                for (c = 1; c <= competizioni; c++) {
                   if ( arrAdOCompetizioni[c].IDc == arrRecord[i].Competizione ) {
	         	tabR.SetValore(cnt,5,"<nobr><center>"+arrAdOCompetizioni[c].nome+"</center></nobr>")
		        tabR.SetStile(cnt,5,"t-xxs"+sR)
                   }
                }
                sR="GB"
		tabR.SetValore(cnt,6,"<nobr><center><a class='t-xxs"+sR+"' href='../"+arrDirectory[CercaCartellaStagione(arrRecord[i].Stagione)].Directory+"/ris.htm?Gio="+arrRecord[i].GiornataA+"'>"+arrRecord[i].GiornataA+"</a></center></nobr>")
		tabR.SetStile(cnt,6,"t-xxs"+sR)
                sR="BluB"
	        data = new Date(arrRecord[i].Data)
           	Year = data.getYear()
	        if (Year < 2000)
	       	   Year = Year + 1900
	        data_appo = DOWArray[(data.getDay()+1)] + " " + data.getDate() + " " + MOYArray[(data.getMonth()+1)] + " " + Year
		tabR.SetValore(cnt,7,"<nobr><center>"+data_appo+"</center></nobr>")
		tabR.SetStile(cnt,7,"t-xxs"+sR)
                cnt++

            }

            if ( cont_stampati>=vis ) {
               if ( TVisu == "N" ) {
                  i=arrRecord.length;
               }
               else {
                 if ( i < (arrRecord.length - 2) ) {
                   if ( ( arrRecord[i].GolRegoCasa + arrRecord[i].GolRegoFuori ) > ( arrRecord[i+1].GolRegoCasa + arrRecord[i+1].GolRegoFuori ) ) {
                     i=arrRecord.length;
                   }
                 }
               }
            }
            
        }
    Stato("Visualizzazione Record 1...")
    d10 = Math.ceil(tabR.numrighe / 10)
    tabR.nome="record"
    tabR.larghezza=50
    tabR.altezza=0
    tabR.border=1
    tabR.cellpadding=3
    tabR.cellspacing=0
    tabR.stile="ClassEl"
    tabR.Stampa()
}

function GeneraRecord_002(Visu,TVisu,IdFsq,IdComp,IdStadio) {
var i,c,cnt,vis,data_appo,cont_stampati
var tabR2 = new Tabella(2, 7) 
var arrRecord = new Object()
var competizioni = arrAdOCompetizioni.length - 1
arrRecord = arrConfronti

        if ( arrRecord.length > Visu ) {
          vis=Visu;
        }
        else {
          vis=arrRecord.length;
        }

        arrRecord.sort(ordinaRecord2)
        tabR2.SetStileRiga(1,"riga-blu-cx")
        tabR2.intestazioni=true
        Stato("Generazione Record 2...")
        for (i=1;i<=tabR2.numcolonne;i++) {
                tabR2.SetSpanned(1,i,true)
        } 
        tabR2.SetSpan(1,1,7)
        tabR2.SetSpanned(1,1,false);
	tabR2.SetValore(1,1,"PARTITE CON PIU' SCARTO NEI TEMPI REGOLAMENTARI");
        cnt=2
        tabR2.SetStileRiga(cnt,"riga-orange-cx")
	tabR2.SetValore(cnt,1,"<nobr>Squadra A</nobr>");
	tabR2.SetValore(cnt,2,"<nobr>Squadra B</nobr>");
	tabR2.SetValore(cnt,3,"<nobr>Punteggio</nobr>");
	tabR2.SetValore(cnt,4,"<nobr>Stagione</nobr>");
	tabR2.SetValore(cnt,5,"<nobr>Competizione</nobr>");
	tabR2.SetValore(cnt,6,"<nobr>Giornata di A</nobr>");
	tabR2.SetValore(cnt,7,"<nobr>Data</nobr>");
        cnt=3
        cont_stampati=0
	for(i=0;i < (arrRecord.length - 1) ;i++) {

           if (   (     ( IdComp == 0 )
                     ||  ( IdComp == arrRecord[i].Competizione )
                   )
                && (     ( IdStadio == "T" )
                     ||  (      ( IdStadio == "N" )
                             && ( arrRecord[i].Neutro == "N" )
                         )
                     ||  (      ( IdStadio == "C" )
                             && (   (    ( IdFsq == 0 )
                                      && ( arrRecord[i].GolRegoCasa >= arrRecord[i].GolRegoFuori )
                                    )
                                 || ( IdFsq == arrRecord[i].IDASquadraCasa )
                                ) 
                         )
                     ||  (      ( IdStadio == "F" )
                             && (   (    ( IdFsq == 0 )
                                      && ( arrRecord[i].GolRegoFuori >= arrRecord[i].GolRegoCasa )
                                    )
                                 || ( IdFsq == arrRecord[i].IDASquadraFuori )
                                )
                         )
                   )
                && (     ( IdFsq == 0 )
                     ||  ( IdFsq == arrRecord[i].IDASquadraCasa )
                     ||  ( IdFsq == arrRecord[i].IDASquadraFuori )
                   )
                ) {

                cont_stampati++            

		if ((cnt % 2) != 0) {
	        	tabR2.SetStileRiga(cnt,"riga-pari")
		} else {
			tabR2.SetStileRiga(cnt,"riga-dispari")
		}
                sR="LFB"
		//tabR2.SetValore(cnt,1,"<span class='t-xxs"+sR+"B'>&nbsp;"+confronti[i].Squadra+"</span>")
		tabR2.SetValore(cnt,1,"<nobr>"+arrRecord[i].SquadraCasa+"</nobr>")
		tabR2.SetStile(cnt,1,"t-xxs"+sR)
		tabR2.SetValore(cnt,2,"<nobr>"+arrRecord[i].SquadraFuori+"</nobr>")
		tabR2.SetStile(cnt,2,"t-xxs"+sR)
                sR="BluB"
		tabR2.SetValore(cnt,3,"<nobr><center>"+arrRecord[i].GolRegoCasa+" - "+arrRecord[i].GolRegoFuori+"</center></nobr>")
		tabR2.SetStile(cnt,3,"t-xxs"+sR)
                sR="VB"
		tabR2.SetValore(cnt,4,"<nobr><center>"+arrRecord[i].Stagione+"</center></nobr>")
		tabR2.SetStile(cnt,4,"t-xxs"+sR)
                sR="RB"
                for (c = 1; c <= competizioni; c++) {
                   if ( arrAdOCompetizioni[c].IDc == arrRecord[i].Competizione ) {
	         	tabR2.SetValore(cnt,5,"<nobr><center>"+arrAdOCompetizioni[c].nome+"</center></nobr>")
		        tabR2.SetStile(cnt,5,"t-xxs"+sR)
                   }
                }
                sR="GB"
		tabR2.SetValore(cnt,6,"<nobr><center><a class='t-xxs"+sR+"' href='../"+arrDirectory[CercaCartellaStagione(arrRecord[i].Stagione)].Directory+"/ris.htm?Gio="+arrRecord[i].GiornataA+"'>"+arrRecord[i].GiornataA+"</a></center></nobr>")
		tabR2.SetStile(cnt,6,"t-xxs"+sR)
                sR="BluB"
	        data = new Date(arrRecord[i].Data)
           	Year = data.getYear()
	        if (Year < 2000)
	       	   Year = Year + 1900
	        data_appo = DOWArray[(data.getDay()+1)] + " " + data.getDate() + " " + MOYArray[(data.getMonth()+1)] + " " + Year
		tabR2.SetValore(cnt,7,"<nobr><center>"+data_appo+"</center></nobr>")
		tabR2.SetStile(cnt,7,"t-xxs"+sR)
                cnt++
            }

            if ( cont_stampati>=vis ) {
               if ( TVisu == "N" ) {
                  i=arrRecord.length;
               }
               else {
                 if ( i < (arrRecord.length - 2) ) {
                   if ( Math.abs( arrRecord[i].GolRegoCasa - arrRecord[i].GolRegoFuori ) > Math.abs( arrRecord[i+1].GolRegoCasa - arrRecord[i+1].GolRegoFuori ) ) {
                     i=arrRecord.length;
                   }
                 }
               }
            }
        }
    Stato("Visualizzazione Record 2...")
    d10 = Math.ceil(tabR2.numrighe / 10)
    tabR2.nome="record2"
    tabR2.larghezza=50
    tabR2.altezza=0
    tabR2.border=1
    tabR2.cellpadding=3
    tabR2.cellspacing=0
    tabR2.stile="ClassEl"
    tabR2.Stampa()
}

function ordinaRecord1(a, b) {
        var c
        if ((a!=null) && (b!=null)) {
           if ( ( a.GolRegoCasa + a.GolRegoFuori ) < ( b.GolRegoCasa + b.GolRegoFuori ) ) {
              return 1;
           }
           else {
             if ( ( a.GolRegoCasa + a.GolRegoFuori ) > ( b.GolRegoCasa + b.GolRegoFuori ) ) {
               return -1;
             }
             else {
               return 0;
             }
           }
        }
        else {
                return -(a == null) + (b == null)
        }
}

function ordinaRecord2(a, b) {
        var c
        if ((a!=null) && (b!=null)) {
           if ( Math.abs( a.GolRegoCasa - a.GolRegoFuori ) < Math.abs( b.GolRegoCasa - b.GolRegoFuori ) ) {
              return 1;
           }
           else {
             if ( Math.abs( a.GolRegoCasa - a.GolRegoFuori ) > Math.abs( b.GolRegoCasa - b.GolRegoFuori ) ) {
               return -1;
             }
             else {
               return 0;
             }
           }
        }
        else {
                return -(a == null) + (b == null)
        }
}


function GeneraRecord_003(Visu,TVisu,IdFsq,IdComp,IdStadio,FlStagione) {
var i,c,cnt,vis,data_appo,cont_stampati,max_IDf,ids,id_serie,squadra,save_stagione
var tabR2 = new Tabella(2, 12) 
var arrF = new Object()
var SqSerie = new Array()
var Serie = new Array()
var competizioni = arrAdOCompetizioni.length - 1
var IdAppo
arrF = arrAdOFantasquadre
        Stato("Generazione Record 3...")

       max_IDf = 0
       for (i=1;i<arrF.length;i++) {
          if ( arrF[i].IDf > max_IDf ) {
            max_IDf = arrF[i].IDf
          }
       }
     
       for (i=1;i<=max_IDf;i++) {
          SqSerie[i] = new AdOSqSerie(i,0,0)
       }
 
       for (i=1;i<arrF.length;i++) {
         SqSerie[arrF[i].IDf].IDaSquadra = arrF[i].idAttuale
       }

       id_serie = 0
       save_stagione = 0
       for(i=1;i<arrConfronti.length;i++) {
         if (   (      ( IdComp == 0 )
                   ||  ( IdComp == arrConfronti[i].Competizione )
                )
             && (      ( IdStadio == "T" || IdStadio == "C" || IdStadio == "F")
                   ||  (      ( IdStadio == "N" )
                           && ( arrConfronti[i].Neutro == "N" )
                       )
                )
             && (      ( IdFsq == 0 )
                   ||  ( IdFsq == arrConfronti[i].IDASquadraCasa )
                   ||  ( IdFsq == arrConfronti[i].IDASquadraFuori )
                )
            ) {

                if (       ( FlStagione == "S" )
                   ) {
                   //Interrompe serie squadra casa
                     if (     ( IdStadio != "F" )
                           && (     ( IdFsq == 0 )
                                ||  ( IdFsq == arrConfronti[i].IDASquadraCasa )
                              )
                        ) {
                       ids = arrConfronti[i].IDASquadraCasa
                       if (     ( SqSerie[ids].IDSerieAttiva != 0 )
                             && ( Serie[SqSerie[ids].IDSerieAttiva].StagioneI != arrConfronti[i].Stagione )
                          ) {
                         Serie[SqSerie[ids].IDSerieAttiva].Chiusa = "S"
                         SqSerie[ids].IDSerieAttiva = 0
                       }
                     }
                  //Interrompe serie squadra fuori
                     if (     ( IdStadio != "C" )
                           && (     ( IdFsq == 0 )
                                ||  ( IdFsq == arrConfronti[i].IDASquadraFuori )
                              )
                        ) {
                        ids = arrConfronti[i].IDASquadraFuori
                        if (     ( SqSerie[ids].IDSerieAttiva != 0 )
                             && ( Serie[SqSerie[ids].IDSerieAttiva].StagioneI != arrConfronti[i].Stagione )
                          ) {
                          Serie[SqSerie[ids].IDSerieAttiva].Chiusa = "S"
                          SqSerie[ids].IDSerieAttiva = 0
                        }
                     }
                }
                save_stagione = arrConfronti[i].Stagione

                if ( arrConfronti[i].GolCasa > arrConfronti[i].GolFuori ) { 
                     //Interrompe serie squadra fuori
                     if (     ( IdStadio != "C" )
                           && (     ( IdFsq == 0 )
                                ||  ( IdFsq == arrConfronti[i].IDASquadraFuori )
                              )
                        ) {
                        ids = arrConfronti[i].IDASquadraFuori
                        if ( SqSerie[ids].IDSerieAttiva != 0 ) {
                          Serie[SqSerie[ids].IDSerieAttiva].Chiusa = "S"
                          SqSerie[ids].IDSerieAttiva = 0
                        }
                     }
                     if (     ( IdStadio != "F" )
                           && (     ( IdFsq == 0 )
                                ||  ( IdFsq == arrConfronti[i].IDASquadraCasa )
                              )
                        ) {
                       //Aggiorna serie squadra Casa VITTORIA
                       ids = arrConfronti[i].IDASquadraCasa
                       squadra = CercaSquadra(arrConfronti[i].IDASquadraCasa);
                       if ( squadra == " " ) {
                         squadra = arrConfronti[i].SquadraCasa;
                       }
                       if ( SqSerie[ids].IDSerieAttiva != 0 ) {
                         Serie[SqSerie[ids].IDSerieAttiva].Totale++
                         Serie[SqSerie[ids].IDSerieAttiva].Parziale1++
                         Serie[SqSerie[ids].IDSerieAttiva].StagioneF = arrConfronti[i].Stagione
                         Serie[SqSerie[ids].IDSerieAttiva].GiornataF = arrConfronti[i].GiornataA
                         Serie[SqSerie[ids].IDSerieAttiva].DataF = arrConfronti[i].Data
                       }
                       else {
                         id_serie++                     
                         SqSerie[ids].IDSerieAttiva = id_serie
                         Serie[id_serie] = new AdOSerie(ids,squadra,0,0,0,0,arrConfronti[i].Stagione,arrConfronti[i].GiornataA,arrConfronti[i].Data,arrConfronti[i].Stagione,arrConfronti[i].GiornataA,arrConfronti[i].Data,"N")
                         Serie[id_serie].Totale++
                         Serie[id_serie].Parziale1++
                       }
                     }
                }
                else {
                   if ( arrConfronti[i].GolCasa < arrConfronti[i].GolFuori ) {  
                     //Interrompe serie squadra casa
                     if (     ( IdStadio != "F" )
                           && (     ( IdFsq == 0 )
                                ||  ( IdFsq == arrConfronti[i].IDASquadraCasa )
                              )
                        ) {
                       ids = arrConfronti[i].IDASquadraCasa
                       if ( SqSerie[ids].IDSerieAttiva != 0 ) {
                         Serie[SqSerie[ids].IDSerieAttiva].Chiusa = "S"
                         SqSerie[ids].IDSerieAttiva = 0
                       }
                     }
                     //Aggiorna serie squadra Fuori VITTORIA
                     if (     ( IdStadio != "C" )
                           && (     ( IdFsq == 0 )
                                ||  ( IdFsq == arrConfronti[i].IDASquadraFuori )
                              )
                        ) {
                       ids = arrConfronti[i].IDASquadraFuori
                       squadra = CercaSquadra(arrConfronti[i].IDASquadraFuori);
                       if ( squadra == " " ) {
                         squadra = arrConfronti[i].SquadraFuori;
                       }
                       if ( SqSerie[ids].IDSerieAttiva != 0 ) {
                         Serie[SqSerie[ids].IDSerieAttiva].Totale++
                         Serie[SqSerie[ids].IDSerieAttiva].Parziale1++
                         Serie[SqSerie[ids].IDSerieAttiva].StagioneF = arrConfronti[i].Stagione
                         Serie[SqSerie[ids].IDSerieAttiva].GiornataF = arrConfronti[i].GiornataA
                         Serie[SqSerie[ids].IDSerieAttiva].DataF = arrConfronti[i].Data
                       }
                       else {
                         id_serie++                     
                         SqSerie[ids].IDSerieAttiva = id_serie
                         Serie[id_serie] = new AdOSerie(ids,squadra,0,0,0,0,arrConfronti[i].Stagione,arrConfronti[i].GiornataA,arrConfronti[i].Data,arrConfronti[i].Stagione,arrConfronti[i].GiornataA,arrConfronti[i].Data,"N")
                         Serie[id_serie].Totale++
                         Serie[id_serie].Parziale1++
                       }
                     }
                   }
                   else {
                     //Aggiorna serie squadra Casa PAREGGIO
                     if (     ( IdStadio != "F" )
                           && (     ( IdFsq == 0 )
                                ||  ( IdFsq == arrConfronti[i].IDASquadraCasa )
                              )
                        ) {
                       ids = arrConfronti[i].IDASquadraCasa
                       squadra = CercaSquadra(arrConfronti[i].IDASquadraCasa);
                       if ( squadra == " " ) {
                         squadra = arrConfronti[i].SquadraCasa;
                       }
                       if ( SqSerie[ids].IDSerieAttiva != 0 ) {
                         Serie[SqSerie[ids].IDSerieAttiva].Totale++
                         Serie[SqSerie[ids].IDSerieAttiva].Parziale2++
                         Serie[SqSerie[ids].IDSerieAttiva].StagioneF = arrConfronti[i].Stagione
                         Serie[SqSerie[ids].IDSerieAttiva].GiornataF = arrConfronti[i].GiornataA
                        Serie[SqSerie[ids].IDSerieAttiva].DataF = arrConfronti[i].Data
                       } 
                       else {
                         id_serie++                     
                         SqSerie[ids].IDSerieAttiva = id_serie
                         Serie[id_serie] = new AdOSerie(ids,squadra,0,0,0,0,arrConfronti[i].Stagione,arrConfronti[i].GiornataA,arrConfronti[i].Data,arrConfronti[i].Stagione,arrConfronti[i].GiornataA,arrConfronti[i].Data,"N")
                         Serie[id_serie].Totale++
                         Serie[id_serie].Parziale2++
                       }
                     }
                     //Aggiorna serie squadra Fuori PAREGGIO
                     if (     ( IdStadio != "C" )
                           && (     ( IdFsq == 0 )
                                ||  ( IdFsq == arrConfronti[i].IDASquadraFuori )
                              )
                        ) {
                       ids = arrConfronti[i].IDASquadraFuori
                       squadra = CercaSquadra(arrConfronti[i].IDASquadraFuori);
                       if ( squadra == " " ) {
                         squadra = arrConfronti[i].SquadraFuori;
                       }
                       if ( SqSerie[ids].IDSerieAttiva != 0 ) {
                         Serie[SqSerie[ids].IDSerieAttiva].Totale++
                         Serie[SqSerie[ids].IDSerieAttiva].Parziale2++
                         Serie[SqSerie[ids].IDSerieAttiva].StagioneF = arrConfronti[i].Stagione
                         Serie[SqSerie[ids].IDSerieAttiva].GiornataF = arrConfronti[i].GiornataA
                         Serie[SqSerie[ids].IDSerieAttiva].DataF = arrConfronti[i].Data
                       }
                       else {
                         id_serie++                     
                         SqSerie[ids].IDSerieAttiva = id_serie
                         Serie[id_serie] = new AdOSerie(ids,squadra,0,0,0,0,arrConfronti[i].Stagione,arrConfronti[i].GiornataA,arrConfronti[i].Data,arrConfronti[i].Stagione,arrConfronti[i].GiornataA,arrConfronti[i].Data,"N")
                         Serie[id_serie].Totale++
                         Serie[id_serie].Parziale2++
                       }
                     }
                   }
                }
          }
       }
             
       
        if ( Serie.length > Visu ) {
          vis=Visu;
        }
        else {
          vis=Serie.length;
        }

        Serie.sort(ordinaSerie)
        tabR2.SetStileRiga(1,"riga-blu-cx")
        tabR2.intestazioni=true
        for (i=1;i<=tabR2.numcolonne;i++) {
                tabR2.SetSpanned(1,i,true)
        } 
        tabR2.SetSpan(1,1,12)
        tabR2.SetSpanned(1,1,false);
	tabR2.SetValore(1,1,"SERIE POSITIVE");
        cnt=2
        tabR2.SetStileRiga(cnt,"riga-orange-cx")
	tabR2.SetValore(cnt,1,"<nobr>Prog.</nobr>");
	tabR2.SetValore(cnt,2,"<nobr>Squadra</nobr>");
	tabR2.SetValore(cnt,3,"<nobr>Totale</nobr>");
	tabR2.SetValore(cnt,4,"<nobr>Vinte</nobr>");
	tabR2.SetValore(cnt,5,"<nobr>Nulle</nobr>");
	tabR2.SetValore(cnt,6,"<nobr>-</nobr>");
	tabR2.SetValore(cnt,7,"<nobr>Stag.I</nobr>");
	tabR2.SetValore(cnt,8,"<nobr>Gior.I</nobr>");
	tabR2.SetValore(cnt,9,"<nobr>Data I</nobr>");
	tabR2.SetValore(cnt,10,"<nobr>Stag.F</nobr>");
	tabR2.SetValore(cnt,11,"<nobr>Gior.F</nobr>");
	tabR2.SetValore(cnt,12,"<nobr>Data F</nobr>");
        cnt=3
        cont_stampati=0
	for(i=0;i < (Serie.length - 1) ;i++) {

                cont_stampati++            

		if ((cnt % 2) != 0) {
	        	tabR2.SetStileRiga(cnt,"riga-pari")
		} else {
			tabR2.SetStileRiga(cnt,"riga-dispari")
		}
                sR="LFB"
		//tabR2.SetValore(cnt,1,"<span class='t-xxs"+sR+"B'>&nbsp;"+Serie[i].Squadra+"</span>")
		tabR2.SetValore(cnt,1,"<nobr><center>"+ ( i + 1 ) +"</center></nobr>")
		tabR2.SetStile(cnt,1,"t-xxs"+sR)
		tabR2.SetValore(cnt,2,"<nobr>"+Serie[i].Squadra+"</nobr>")
		tabR2.SetStile(cnt,2,"t-xxs"+sR)
                sR="BluB"
		tabR2.SetValore(cnt,3,"<nobr><center>"+Serie[i].Totale+"</center></nobr>")
		tabR2.SetStile(cnt,3,"t-xxs"+sR)
                sR="VB"
		tabR2.SetValore(cnt,4,"<nobr><center>"+Serie[i].Parziale1+"</center></nobr>")
		tabR2.SetStile(cnt,4,"t-xxs"+sR)
                sR="GB"
		tabR2.SetValore(cnt,5,"<nobr><center>"+Serie[i].Parziale2+"</center></nobr>")
		tabR2.SetStile(cnt,5,"t-xxs"+sR)
                sR="RB"
		tabR2.SetValore(cnt,6,"<nobr><center></center></nobr>")
		tabR2.SetStile(cnt,6,"t-xxs"+sR)
                sR="VB"
		tabR2.SetValore(cnt,7,"<nobr><center>"+Serie[i].StagioneI+"</center></nobr>")
		tabR2.SetStile(cnt,7,"t-xxs"+sR)
		tabR2.SetValore(cnt,8,"<nobr><center><a class='t-xxs"+sR+"' href='../"+arrDirectory[CercaCartellaStagione(Serie[i].StagioneI)].Directory+"/ris.htm?Gio="+Serie[i].GiornataI+"'>"+Serie[i].GiornataI+"</a></center></nobr>")
		tabR2.SetStile(cnt,8,"t-xxs"+sR)
	        data = new Date(Serie[i].DataI)
           	Year = data.getYear()
	        if (Year < 2000)
	       	   Year = Year + 1900
	        data_appo = DOWArray[(data.getDay()+1)] + " " + data.getDate() + " " + MOYArray[(data.getMonth()+1)] + " " + Year
		tabR2.SetValore(cnt,9,"<nobr><center>"+data_appo+"</center></nobr>")
		tabR2.SetStile(cnt,9,"t-xxs"+sR)
                sR="RB"
                if ( Serie[i].Chiusa == "S" || SqSerie[Serie[i].IDASquadra].IDaSquadra == 0 ) {
		  tabR2.SetValore(cnt,10,"<nobr><center>"+Serie[i].StagioneF+"</center></nobr>")
                  tabR2.SetStile(cnt,10,"t-xxs"+sR)
		  tabR2.SetValore(cnt,11,"<nobr><center><a class='t-xxs"+sR+"' href='../"+arrDirectory[CercaCartellaStagione(Serie[i].StagioneF)].Directory+"/ris.htm?Gio="+Serie[i].GiornataF+"'>"+Serie[i].GiornataF+"</a></center></nobr>")
	          tabR2.SetStile(cnt,11,"t-xxs"+sR)
	          data = new Date(Serie[i].DataF)
           	  Year = data.getYear()
	          if (Year < 2000)
	       	     Year = Year + 1900
	          data_appo = DOWArray[(data.getDay()+1)] + " " + data.getDate() + " " + MOYArray[(data.getMonth()+1)] + " " + Year
		  tabR2.SetValore(cnt,12,"<nobr><center>"+data_appo+"</center></nobr>")
		  tabR2.SetStile(cnt,12,"t-xxs"+sR)
                }
                else {
		  tabR2.SetValore(cnt,10,"<nobr><center></center></nobr>")
                  tabR2.SetStile(cnt,10,"t-xxs"+sR)
		  tabR2.SetValore(cnt,11,"<nobr><center></center></nobr>")
	          tabR2.SetStile(cnt,11,"t-xxs"+sR)
		  tabR2.SetValore(cnt,12,"<nobr><center></center></nobr>")
		  tabR2.SetStile(cnt,12,"t-xxs"+sR)
                }

                cnt++

            if ( cont_stampati>=vis ) {
               if ( TVisu == "N" ) {
                  i=Serie.length;
               }
               else {
                 if ( i < (Serie.length - 2) ) {
                   if ( Serie[i].Totale  > Serie[i+1].Totale ) {
                     i=Serie.length;
                   }
                 }
               }
            }
        }
    Stato("Visualizzazione Record 3...")
    d10 = Math.ceil(tabR2.numrighe / 10)
    tabR2.nome="record2"
    tabR2.larghezza=50
    tabR2.altezza=0
    tabR2.border=1
    tabR2.cellpadding=3
    tabR2.cellspacing=0
    tabR2.stile="ClassEl"
    tabR2.Stampa()
}

function GeneraRecord_004(Visu,TVisu,IdFsq,IdComp,IdStadio,FlStagione) {
var i,c,cnt,vis,data_appo,cont_stampati,max_IDf,ids,id_serie,squadra,save_stagione
var tabR2 = new Tabella(2, 12) 
var arrF = new Object()
var SqSerie = new Array()
var Serie = new Array()
var competizioni = arrAdOCompetizioni.length - 1
var IdAppo
arrF = arrAdOFantasquadre
        Stato("Generazione Record 4...")

       max_IDf = 0
       for (i=1;i<arrF.length;i++) {
          if ( arrF[i].IDf > max_IDf ) {
            max_IDf = arrF[i].IDf
          }
       }
     
       for (i=1;i<=max_IDf;i++) {
          SqSerie[i] = new AdOSqSerie(i,0,0)
       }
 
       for (i=1;i<arrF.length;i++) {
         SqSerie[arrF[i].IDf].IDaSquadra = arrF[i].idAttuale
       }

       id_serie = 0
       save_stagione = 0
       for(i=1;i<arrConfronti.length;i++) {
         if (   (      ( IdComp == 0 )
                   ||  ( IdComp == arrConfronti[i].Competizione )
                )
             && (      ( IdStadio == "T" || IdStadio == "C" || IdStadio == "F")
                   ||  (      ( IdStadio == "N" )
                           && ( arrConfronti[i].Neutro == "N" )
                       )
                )
             && (      ( IdFsq == 0 )
                   ||  ( IdFsq == arrConfronti[i].IDASquadraCasa )
                   ||  ( IdFsq == arrConfronti[i].IDASquadraFuori )
                )
            ) {

                if (       ( FlStagione == "S" )
                   ) {
                   //Interrompe serie squadra casa
                     if (     ( IdStadio != "F" )
                           && (     ( IdFsq == 0 )
                                ||  ( IdFsq == arrConfronti[i].IDASquadraCasa )
                              )
                        ) {
                       ids = arrConfronti[i].IDASquadraCasa
                       if (     ( SqSerie[ids].IDSerieAttiva != 0 )
                             && ( Serie[SqSerie[ids].IDSerieAttiva].StagioneI != arrConfronti[i].Stagione )
                          ) {
                         Serie[SqSerie[ids].IDSerieAttiva].Chiusa = "S"
                         SqSerie[ids].IDSerieAttiva = 0
                       }
                     }
                  //Interrompe serie squadra fuori
                     if (     ( IdStadio != "C" )
                           && (     ( IdFsq == 0 )
                                ||  ( IdFsq == arrConfronti[i].IDASquadraFuori )
                              )
                        ) {
                        ids = arrConfronti[i].IDASquadraFuori
                        if (     ( SqSerie[ids].IDSerieAttiva != 0 )
                             && ( Serie[SqSerie[ids].IDSerieAttiva].StagioneI != arrConfronti[i].Stagione )
                          ) {
                          Serie[SqSerie[ids].IDSerieAttiva].Chiusa = "S"
                          SqSerie[ids].IDSerieAttiva = 0
                        }
                     }
                }
                save_stagione = arrConfronti[i].Stagione

                if ( arrConfronti[i].GolFuori > arrConfronti[i].GolCasa ) { 
                     //Interrompe serie squadra fuori
                     if (     ( IdStadio != "C" )
                           && (     ( IdFsq == 0 )
                                ||  ( IdFsq == arrConfronti[i].IDASquadraFuori )
                              )
                        ) {
                        ids = arrConfronti[i].IDASquadraFuori
                        if ( SqSerie[ids].IDSerieAttiva != 0 ) {
                          Serie[SqSerie[ids].IDSerieAttiva].Chiusa = "S"
                          SqSerie[ids].IDSerieAttiva = 0
                        }
                     }
                     if (     ( IdStadio != "F" )
                           && (     ( IdFsq == 0 )
                                ||  ( IdFsq == arrConfronti[i].IDASquadraCasa )
                              )
                        ) {
                       //Aggiorna serie squadra Casa VITTORIA
                       ids = arrConfronti[i].IDASquadraCasa
                       squadra = CercaSquadra(arrConfronti[i].IDASquadraCasa);
                       if ( squadra == " " ) {
                         squadra = arrConfronti[i].SquadraCasa;
                       }
                       if ( SqSerie[ids].IDSerieAttiva != 0 ) {
                         Serie[SqSerie[ids].IDSerieAttiva].Totale++
                         Serie[SqSerie[ids].IDSerieAttiva].Parziale1++
                         Serie[SqSerie[ids].IDSerieAttiva].StagioneF = arrConfronti[i].Stagione
                         Serie[SqSerie[ids].IDSerieAttiva].GiornataF = arrConfronti[i].GiornataA
                         Serie[SqSerie[ids].IDSerieAttiva].DataF = arrConfronti[i].Data
                       }
                       else {
                         id_serie++                     
                         SqSerie[ids].IDSerieAttiva = id_serie
                         Serie[id_serie] = new AdOSerie(ids,squadra,0,0,0,0,arrConfronti[i].Stagione,arrConfronti[i].GiornataA,arrConfronti[i].Data,arrConfronti[i].Stagione,arrConfronti[i].GiornataA,arrConfronti[i].Data,"N")
                         Serie[id_serie].Totale++
                         Serie[id_serie].Parziale1++
                       }
                     }
                }
                else {
                   if ( arrConfronti[i].GolFuori < arrConfronti[i].GolCasa ) {  
                     //Interrompe serie squadra casa
                     if (     ( IdStadio != "F" )
                           && (     ( IdFsq == 0 )
                                ||  ( IdFsq == arrConfronti[i].IDASquadraCasa )
                              )
                        ) {
                       ids = arrConfronti[i].IDASquadraCasa
                       if ( SqSerie[ids].IDSerieAttiva != 0 ) {
                         Serie[SqSerie[ids].IDSerieAttiva].Chiusa = "S"
                         SqSerie[ids].IDSerieAttiva = 0
                       }
                     }
                     //Aggiorna serie squadra Fuori VITTORIA
                     if (     ( IdStadio != "C" )
                           && (     ( IdFsq == 0 )
                                ||  ( IdFsq == arrConfronti[i].IDASquadraFuori )
                              )
                        ) {
                       ids = arrConfronti[i].IDASquadraFuori
                       squadra = CercaSquadra(arrConfronti[i].IDASquadraFuori);
                       if ( squadra == " " ) {
                         squadra = arrConfronti[i].SquadraFuori;
                       }
                       if ( SqSerie[ids].IDSerieAttiva != 0 ) {
                         Serie[SqSerie[ids].IDSerieAttiva].Totale++
                         Serie[SqSerie[ids].IDSerieAttiva].Parziale1++
                         Serie[SqSerie[ids].IDSerieAttiva].StagioneF = arrConfronti[i].Stagione
                         Serie[SqSerie[ids].IDSerieAttiva].GiornataF = arrConfronti[i].GiornataA
                         Serie[SqSerie[ids].IDSerieAttiva].DataF = arrConfronti[i].Data
                       }
                       else {
                         id_serie++                     
                         SqSerie[ids].IDSerieAttiva = id_serie
                         Serie[id_serie] = new AdOSerie(ids,squadra,0,0,0,0,arrConfronti[i].Stagione,arrConfronti[i].GiornataA,arrConfronti[i].Data,arrConfronti[i].Stagione,arrConfronti[i].GiornataA,arrConfronti[i].Data,"N")
                         Serie[id_serie].Totale++
                         Serie[id_serie].Parziale1++
                       }
                     }
                   }
                   else {
                     //Aggiorna serie squadra Casa PAREGGIO
                     if (     ( IdStadio != "F" )
                           && (     ( IdFsq == 0 )
                                ||  ( IdFsq == arrConfronti[i].IDASquadraCasa )
                              )
                        ) {
                       ids = arrConfronti[i].IDASquadraCasa
                       squadra = CercaSquadra(arrConfronti[i].IDASquadraCasa);
                       if ( squadra == " " ) {
                         squadra = arrConfronti[i].SquadraCasa;
                       }
                       if ( SqSerie[ids].IDSerieAttiva != 0 ) {
                         Serie[SqSerie[ids].IDSerieAttiva].Totale++
                         Serie[SqSerie[ids].IDSerieAttiva].Parziale2++
                         Serie[SqSerie[ids].IDSerieAttiva].StagioneF = arrConfronti[i].Stagione
                         Serie[SqSerie[ids].IDSerieAttiva].GiornataF = arrConfronti[i].GiornataA
                        Serie[SqSerie[ids].IDSerieAttiva].DataF = arrConfronti[i].Data
                       } 
                       else {
                         id_serie++                     
                         SqSerie[ids].IDSerieAttiva = id_serie
                         Serie[id_serie] = new AdOSerie(ids,squadra,0,0,0,0,arrConfronti[i].Stagione,arrConfronti[i].GiornataA,arrConfronti[i].Data,arrConfronti[i].Stagione,arrConfronti[i].GiornataA,arrConfronti[i].Data,"N")
                         Serie[id_serie].Totale++
                         Serie[id_serie].Parziale2++
                       }
                     }
                     //Aggiorna serie squadra Fuori PAREGGIO
                     if (     ( IdStadio != "C" )
                           && (     ( IdFsq == 0 )
                                ||  ( IdFsq == arrConfronti[i].IDASquadraFuori )
                              )
                        ) {
                       ids = arrConfronti[i].IDASquadraFuori
                       squadra = CercaSquadra(arrConfronti[i].IDASquadraFuori);
                       if ( squadra == " " ) {
                         squadra = arrConfronti[i].SquadraFuori;
                       }
                       if ( SqSerie[ids].IDSerieAttiva != 0 ) {
                         Serie[SqSerie[ids].IDSerieAttiva].Totale++
                         Serie[SqSerie[ids].IDSerieAttiva].Parziale2++
                         Serie[SqSerie[ids].IDSerieAttiva].StagioneF = arrConfronti[i].Stagione
                         Serie[SqSerie[ids].IDSerieAttiva].GiornataF = arrConfronti[i].GiornataA
                         Serie[SqSerie[ids].IDSerieAttiva].DataF = arrConfronti[i].Data
                       }
                       else {
                         id_serie++                     
                         SqSerie[ids].IDSerieAttiva = id_serie
                         Serie[id_serie] = new AdOSerie(ids,squadra,0,0,0,0,arrConfronti[i].Stagione,arrConfronti[i].GiornataA,arrConfronti[i].Data,arrConfronti[i].Stagione,arrConfronti[i].GiornataA,arrConfronti[i].Data,"N")
                         Serie[id_serie].Totale++
                         Serie[id_serie].Parziale2++
                       }
                     }
                   }
                }
          }
       }
             
       
        if ( Serie.length > Visu ) {
          vis=Visu;
        }
        else {
          vis=Serie.length;
        }

        Serie.sort(ordinaSerie)
        tabR2.SetStileRiga(1,"riga-blu-cx")
        tabR2.intestazioni=true
        for (i=1;i<=tabR2.numcolonne;i++) {
                tabR2.SetSpanned(1,i,true)
        } 
        tabR2.SetSpan(1,1,12)
        tabR2.SetSpanned(1,1,false);
	tabR2.SetValore(1,1,"SERIE NEGATIVE");
        cnt=2
        tabR2.SetStileRiga(cnt,"riga-orange-cx")
	tabR2.SetValore(cnt,1,"<nobr>Prog.</nobr>");
	tabR2.SetValore(cnt,2,"<nobr>Squadra</nobr>");
	tabR2.SetValore(cnt,3,"<nobr>Totale</nobr>");
	tabR2.SetValore(cnt,4,"<nobr>Perse</nobr>");
	tabR2.SetValore(cnt,5,"<nobr>Nulle</nobr>");
	tabR2.SetValore(cnt,6,"<nobr>-</nobr>");
	tabR2.SetValore(cnt,7,"<nobr>Stag.I</nobr>");
	tabR2.SetValore(cnt,8,"<nobr>Gior.I</nobr>");
	tabR2.SetValore(cnt,9,"<nobr>Data I</nobr>");
	tabR2.SetValore(cnt,10,"<nobr>Stag.F</nobr>");
	tabR2.SetValore(cnt,11,"<nobr>Gior.F</nobr>");
	tabR2.SetValore(cnt,12,"<nobr>Data F</nobr>");
        cnt=3
        cont_stampati=0
	for(i=0;i < (Serie.length - 1) ;i++) {

                cont_stampati++            

		if ((cnt % 2) != 0) {
	        	tabR2.SetStileRiga(cnt,"riga-pari")
		} else {
			tabR2.SetStileRiga(cnt,"riga-dispari")
		}
                sR="LFB"
		//tabR2.SetValore(cnt,1,"<span class='t-xxs"+sR+"B'>&nbsp;"+Serie[i].Squadra+"</span>")
		tabR2.SetValore(cnt,1,"<nobr><center>"+ ( i + 1 ) +"</center></nobr>")
		tabR2.SetStile(cnt,1,"t-xxs"+sR)
		tabR2.SetValore(cnt,2,"<nobr>"+Serie[i].Squadra+"</nobr>")
		tabR2.SetStile(cnt,2,"t-xxs"+sR)
                sR="BluB"
		tabR2.SetValore(cnt,3,"<nobr><center>"+Serie[i].Totale+"</center></nobr>")
		tabR2.SetStile(cnt,3,"t-xxs"+sR)
                sR="VB"
		tabR2.SetValore(cnt,4,"<nobr><center>"+Serie[i].Parziale1+"</center></nobr>")
		tabR2.SetStile(cnt,4,"t-xxs"+sR)
                sR="GB"
		tabR2.SetValore(cnt,5,"<nobr><center>"+Serie[i].Parziale2+"</center></nobr>")
		tabR2.SetStile(cnt,5,"t-xxs"+sR)
                sR="RB"
		tabR2.SetValore(cnt,6,"<nobr><center></center></nobr>")
		tabR2.SetStile(cnt,6,"t-xxs"+sR)
                sR="VB"
		tabR2.SetValore(cnt,7,"<nobr><center>"+Serie[i].StagioneI+"</center></nobr>")
		tabR2.SetStile(cnt,7,"t-xxs"+sR)
		tabR2.SetValore(cnt,8,"<nobr><center><a class='t-xxs"+sR+"' href='../"+arrDirectory[CercaCartellaStagione(Serie[i].StagioneI)].Directory+"/ris.htm?Gio="+Serie[i].GiornataI+"'>"+Serie[i].GiornataI+"</a></center></nobr>")
		tabR2.SetStile(cnt,8,"t-xxs"+sR)
	        data = new Date(Serie[i].DataI)
           	Year = data.getYear()
	        if (Year < 2000)
	       	   Year = Year + 1900
	        data_appo = DOWArray[(data.getDay()+1)] + " " + data.getDate() + " " + MOYArray[(data.getMonth()+1)] + " " + Year
		tabR2.SetValore(cnt,9,"<nobr><center>"+data_appo+"</center></nobr>")
		tabR2.SetStile(cnt,9,"t-xxs"+sR)
                sR="RB"
                if ( Serie[i].Chiusa == "S" || SqSerie[Serie[i].IDASquadra].IDaSquadra == 0 ) {
		  tabR2.SetValore(cnt,10,"<nobr><center>"+Serie[i].StagioneF+"</center></nobr>")
                  tabR2.SetStile(cnt,10,"t-xxs"+sR)
		  tabR2.SetValore(cnt,11,"<nobr><center><a class='t-xxs"+sR+"' href='../"+arrDirectory[CercaCartellaStagione(Serie[i].StagioneF)].Directory+"/ris.htm?Gio="+Serie[i].GiornataF+"'>"+Serie[i].GiornataF+"</a></center></nobr>")
	          tabR2.SetStile(cnt,11,"t-xxs"+sR)
	          data = new Date(Serie[i].DataF)
           	  Year = data.getYear()
	          if (Year < 2000)
	       	     Year = Year + 1900
	          data_appo = DOWArray[(data.getDay()+1)] + " " + data.getDate() + " " + MOYArray[(data.getMonth()+1)] + " " + Year
		  tabR2.SetValore(cnt,12,"<nobr><center>"+data_appo+"</center></nobr>")
		  tabR2.SetStile(cnt,12,"t-xxs"+sR)
                }
                else {
		  tabR2.SetValore(cnt,10,"<nobr><center></center></nobr>")
                  tabR2.SetStile(cnt,10,"t-xxs"+sR)
		  tabR2.SetValore(cnt,11,"<nobr><center></center></nobr>")
	          tabR2.SetStile(cnt,11,"t-xxs"+sR)
		  tabR2.SetValore(cnt,12,"<nobr><center></center></nobr>")
		  tabR2.SetStile(cnt,12,"t-xxs"+sR)
                }

                cnt++

            if ( cont_stampati>=vis ) {
               if ( TVisu == "N" ) {
                  i=Serie.length;
               }
               else {
                 if ( i < (Serie.length - 2) ) {
                   if ( Serie[i].Totale  > Serie[i+1].Totale ) {
                     i=Serie.length;
                   }
                 }
               }
            }
        }
    Stato("Visualizzazione Record 4...")
    d10 = Math.ceil(tabR2.numrighe / 10)
    tabR2.nome="record2"
    tabR2.larghezza=50
    tabR2.altezza=0
    tabR2.border=1
    tabR2.cellpadding=3
    tabR2.cellspacing=0
    tabR2.stile="ClassEl"
    tabR2.Stampa()
}

function GeneraRecord_005(Visu,TVisu,IdFsq,IdComp,IdStadio,FlStagione) {
var i,c,cnt,vis,data_appo,cont_stampati,max_IDf,ids,id_serie,squadra,save_stagione
var tabR2 = new Tabella(2, 12) 
var arrF = new Object()
var SqSerie = new Array()
var Serie = new Array()
var competizioni = arrAdOCompetizioni.length - 1
var IdAppo
arrF = arrAdOFantasquadre

       Stato("Generazione Record 5...")
       max_IDf = 0
       for (i=1;i<arrF.length;i++) {
          if ( arrF[i].IDf > max_IDf ) {
            max_IDf = arrF[i].IDf
          }
       }
     
       for (i=1;i<=max_IDf;i++) {
          SqSerie[i] = new AdOSqSerie(i,0,0)
       }
 
       for (i=1;i<arrF.length;i++) {
         SqSerie[arrF[i].IDf].IDaSquadra = arrF[i].idAttuale
       }

       id_serie = 0
       save_stagione = 0
       for(i=1;i<arrConfronti.length;i++) {
         if (   (      ( IdComp == 0 )
                   ||  ( IdComp == arrConfronti[i].Competizione )
                )
             && (      ( IdStadio == "T" || IdStadio == "C" || IdStadio == "F")
                   ||  (      ( IdStadio == "N" )
                           && ( arrConfronti[i].Neutro == "N" )
                       )
                )
             && (      ( IdFsq == 0 )
                   ||  ( IdFsq == arrConfronti[i].IDASquadraCasa )
                   ||  ( IdFsq == arrConfronti[i].IDASquadraFuori )
                )
            ) {

                if (       ( FlStagione == "S" )
                   ) {
                   //Interrompe serie squadra casa
                     if (     ( IdStadio != "F" )
                           && (     ( IdFsq == 0 )
                                ||  ( IdFsq == arrConfronti[i].IDASquadraCasa )
                              )
                        ) {
                       ids = arrConfronti[i].IDASquadraCasa
                       if (     ( SqSerie[ids].IDSerieAttiva != 0 )
                             && ( Serie[SqSerie[ids].IDSerieAttiva].StagioneI != arrConfronti[i].Stagione )
                          ) {
                         Serie[SqSerie[ids].IDSerieAttiva].Chiusa = "S"
                         SqSerie[ids].IDSerieAttiva = 0
                       }
                     }
                  //Interrompe serie squadra fuori
                     if (     ( IdStadio != "C" )
                           && (     ( IdFsq == 0 )
                                ||  ( IdFsq == arrConfronti[i].IDASquadraFuori )
                              )
                        ) {
                        ids = arrConfronti[i].IDASquadraFuori
                        if (     ( SqSerie[ids].IDSerieAttiva != 0 )
                             && ( Serie[SqSerie[ids].IDSerieAttiva].StagioneI != arrConfronti[i].Stagione )
                          ) {
                          Serie[SqSerie[ids].IDSerieAttiva].Chiusa = "S"
                          SqSerie[ids].IDSerieAttiva = 0
                        }
                     }
                }
                save_stagione = arrConfronti[i].Stagione

                if ( arrConfronti[i].GolCasa > arrConfronti[i].GolFuori ) { 
                     //Interrompe serie squadra fuori
                     if (     ( IdStadio != "C" )
                           && (     ( IdFsq == 0 )
                                ||  ( IdFsq == arrConfronti[i].IDASquadraFuori )
                              )
                        ) {
                        ids = arrConfronti[i].IDASquadraFuori
                        if ( SqSerie[ids].IDSerieAttiva != 0 ) {
                          Serie[SqSerie[ids].IDSerieAttiva].Chiusa = "S"
                          SqSerie[ids].IDSerieAttiva = 0
                        }
                     }
                     if (     ( IdStadio != "F" )
                           && (     ( IdFsq == 0 )
                                ||  ( IdFsq == arrConfronti[i].IDASquadraCasa )
                              )
                        ) {
                       //Aggiorna serie squadra Casa VITTORIA
                       ids = arrConfronti[i].IDASquadraCasa
                       squadra = CercaSquadra(arrConfronti[i].IDASquadraCasa);
                       if ( squadra == " " ) {
                         squadra = arrConfronti[i].SquadraCasa;
                       }
                       if ( SqSerie[ids].IDSerieAttiva != 0 ) {
                         Serie[SqSerie[ids].IDSerieAttiva].Totale++
                         Serie[SqSerie[ids].IDSerieAttiva].Parziale1++
                         Serie[SqSerie[ids].IDSerieAttiva].StagioneF = arrConfronti[i].Stagione
                         Serie[SqSerie[ids].IDSerieAttiva].GiornataF = arrConfronti[i].GiornataA
                         Serie[SqSerie[ids].IDSerieAttiva].DataF = arrConfronti[i].Data
                       }
                       else {
                         id_serie++                     
                         SqSerie[ids].IDSerieAttiva = id_serie
                         Serie[id_serie] = new AdOSerie(ids,squadra,0,0,0,0,arrConfronti[i].Stagione,arrConfronti[i].GiornataA,arrConfronti[i].Data,arrConfronti[i].Stagione,arrConfronti[i].GiornataA,arrConfronti[i].Data,"N")
                         Serie[id_serie].Totale++
                         Serie[id_serie].Parziale1++
                       }
                     }
                }
                else {
                   if ( arrConfronti[i].GolCasa < arrConfronti[i].GolFuori ) {  
                     //Interrompe serie squadra casa
                     if (     ( IdStadio != "F" )
                           && (     ( IdFsq == 0 )
                                ||  ( IdFsq == arrConfronti[i].IDASquadraCasa )
                              )
                        ) {
                       ids = arrConfronti[i].IDASquadraCasa
                       if ( SqSerie[ids].IDSerieAttiva != 0 ) {
                         Serie[SqSerie[ids].IDSerieAttiva].Chiusa = "S"
                         SqSerie[ids].IDSerieAttiva = 0
                       }
                     }
                     //Aggiorna serie squadra Fuori VITTORIA
                     if (     ( IdStadio != "C" )
                           && (     ( IdFsq == 0 )
                                ||  ( IdFsq == arrConfronti[i].IDASquadraFuori )
                              )
                        ) {
                       ids = arrConfronti[i].IDASquadraFuori
                       squadra = CercaSquadra(arrConfronti[i].IDASquadraFuori);
                       if ( squadra == " " ) {
                         squadra = arrConfronti[i].SquadraFuori;
                       }
                       if ( SqSerie[ids].IDSerieAttiva != 0 ) {
                         Serie[SqSerie[ids].IDSerieAttiva].Totale++
                         Serie[SqSerie[ids].IDSerieAttiva].Parziale1++
                         Serie[SqSerie[ids].IDSerieAttiva].StagioneF = arrConfronti[i].Stagione
                         Serie[SqSerie[ids].IDSerieAttiva].GiornataF = arrConfronti[i].GiornataA
                         Serie[SqSerie[ids].IDSerieAttiva].DataF = arrConfronti[i].Data
                       }
                       else {
                         id_serie++                     
                         SqSerie[ids].IDSerieAttiva = id_serie
                         Serie[id_serie] = new AdOSerie(ids,squadra,0,0,0,0,arrConfronti[i].Stagione,arrConfronti[i].GiornataA,arrConfronti[i].Data,arrConfronti[i].Stagione,arrConfronti[i].GiornataA,arrConfronti[i].Data,"N")
                         Serie[id_serie].Totale++
                         Serie[id_serie].Parziale1++
                       }
                     }
                   }
                   else {
                     //Interrompe serie squadra casa
                     if (     ( IdStadio != "F" )
                           && (     ( IdFsq == 0 )
                                ||  ( IdFsq == arrConfronti[i].IDASquadraCasa )
                              )
                        ) {
                       ids = arrConfronti[i].IDASquadraCasa
                       if ( SqSerie[ids].IDSerieAttiva != 0 ) {
                         Serie[SqSerie[ids].IDSerieAttiva].Chiusa = "S"
                         SqSerie[ids].IDSerieAttiva = 0
                       }
                     }
                     //Interrompe serie squadra fuori
                     if (     ( IdStadio != "C" )
                           && (     ( IdFsq == 0 )
                                ||  ( IdFsq == arrConfronti[i].IDASquadraFuori )
                              )
                        ) {
                        ids = arrConfronti[i].IDASquadraFuori
                        if ( SqSerie[ids].IDSerieAttiva != 0 ) {
                          Serie[SqSerie[ids].IDSerieAttiva].Chiusa = "S"
                          SqSerie[ids].IDSerieAttiva = 0
                        }
                     }
                   }
                }
          }
       }
             
       
        if ( Serie.length > Visu ) {
          vis=Visu;
        }
        else {
          vis=Serie.length;
        }

        Serie.sort(ordinaSerie)
        tabR2.SetStileRiga(1,"riga-blu-cx")
        tabR2.intestazioni=true
        for (i=1;i<=tabR2.numcolonne;i++) {
                tabR2.SetSpanned(1,i,true)
        } 
        tabR2.SetSpan(1,1,12)
        tabR2.SetSpanned(1,1,false);
	tabR2.SetValore(1,1,"VITTORIE CONSECUTIVE");
        cnt=2
        tabR2.SetStileRiga(cnt,"riga-orange-cx")
	tabR2.SetValore(cnt,1,"<nobr>Prog.</nobr>");
	tabR2.SetValore(cnt,2,"<nobr>Squadra</nobr>");
	tabR2.SetValore(cnt,3,"<nobr>Totale</nobr>");
	tabR2.SetValore(cnt,4,"<nobr>-</nobr>");
	tabR2.SetValore(cnt,5,"<nobr>-</nobr>");
	tabR2.SetValore(cnt,6,"<nobr>-</nobr>");
	tabR2.SetValore(cnt,7,"<nobr>Stag.I</nobr>");
	tabR2.SetValore(cnt,8,"<nobr>Gior.I</nobr>");
	tabR2.SetValore(cnt,9,"<nobr>Data I</nobr>");
	tabR2.SetValore(cnt,10,"<nobr>Stag.F</nobr>");
	tabR2.SetValore(cnt,11,"<nobr>Gior.F</nobr>");
	tabR2.SetValore(cnt,12,"<nobr>Data F</nobr>");
        cnt=3
        cont_stampati=0
	for(i=0;i < (Serie.length - 1) ;i++) {

                cont_stampati++            

		if ((cnt % 2) != 0) {
	        	tabR2.SetStileRiga(cnt,"riga-pari")
		} else {
			tabR2.SetStileRiga(cnt,"riga-dispari")
		}
                sR="LFB"
		//tabR2.SetValore(cnt,1,"<span class='t-xxs"+sR+"B'>&nbsp;"+Serie[i].Squadra+"</span>")
		tabR2.SetValore(cnt,1,"<nobr><center>"+ ( i + 1 ) +"</center></nobr>")
		tabR2.SetStile(cnt,1,"t-xxs"+sR)
		tabR2.SetValore(cnt,2,"<nobr>"+Serie[i].Squadra+"</nobr>")
		tabR2.SetStile(cnt,2,"t-xxs"+sR)
                sR="BluB"
		tabR2.SetValore(cnt,3,"<nobr><center>"+Serie[i].Totale+"</center></nobr>")
		tabR2.SetStile(cnt,3,"t-xxs"+sR)
                sR="VB"
		tabR2.SetValore(cnt,4,"<nobr><center></center></nobr>")
		tabR2.SetStile(cnt,4,"t-xxs"+sR)
                sR="GB"
		tabR2.SetValore(cnt,5,"<nobr><center></center></nobr>")
		tabR2.SetStile(cnt,5,"t-xxs"+sR)
                sR="RB"
		tabR2.SetValore(cnt,6,"<nobr><center></center></nobr>")
		tabR2.SetStile(cnt,6,"t-xxs"+sR)
                sR="VB"
		tabR2.SetValore(cnt,7,"<nobr><center>"+Serie[i].StagioneI+"</center></nobr>")
		tabR2.SetStile(cnt,7,"t-xxs"+sR)
		tabR2.SetValore(cnt,8,"<nobr><center><a class='t-xxs"+sR+"' href='../"+arrDirectory[CercaCartellaStagione(Serie[i].StagioneI)].Directory+"/ris.htm?Gio="+Serie[i].GiornataI+"'>"+Serie[i].GiornataI+"</a></center></nobr>")
		tabR2.SetStile(cnt,8,"t-xxs"+sR)
	        data = new Date(Serie[i].DataI)
           	Year = data.getYear()
	        if (Year < 2000)
	       	   Year = Year + 1900
	        data_appo = DOWArray[(data.getDay()+1)] + " " + data.getDate() + " " + MOYArray[(data.getMonth()+1)] + " " + Year
		tabR2.SetValore(cnt,9,"<nobr><center>"+data_appo+"</center></nobr>")
		tabR2.SetStile(cnt,9,"t-xxs"+sR)
                sR="RB"
                if ( Serie[i].Chiusa == "S" || SqSerie[Serie[i].IDASquadra].IDaSquadra == 0 ) {
		  tabR2.SetValore(cnt,10,"<nobr><center>"+Serie[i].StagioneF+"</center></nobr>")
                  tabR2.SetStile(cnt,10,"t-xxs"+sR)
		  tabR2.SetValore(cnt,11,"<nobr><center><a class='t-xxs"+sR+"' href='../"+arrDirectory[CercaCartellaStagione(Serie[i].StagioneF)].Directory+"/ris.htm?Gio="+Serie[i].GiornataF+"'>"+Serie[i].GiornataF+"</a></center></nobr>")
	          tabR2.SetStile(cnt,11,"t-xxs"+sR)
	          data = new Date(Serie[i].DataF)
           	  Year = data.getYear()
	          if (Year < 2000)
	       	     Year = Year + 1900
	          data_appo = DOWArray[(data.getDay()+1)] + " " + data.getDate() + " " + MOYArray[(data.getMonth()+1)] + " " + Year
		  tabR2.SetValore(cnt,12,"<nobr><center>"+data_appo+"</center></nobr>")
		  tabR2.SetStile(cnt,12,"t-xxs"+sR)
                }
                else {
		  tabR2.SetValore(cnt,10,"<nobr><center></center></nobr>")
                  tabR2.SetStile(cnt,10,"t-xxs"+sR)
		  tabR2.SetValore(cnt,11,"<nobr><center></center></nobr>")
	          tabR2.SetStile(cnt,11,"t-xxs"+sR)
		  tabR2.SetValore(cnt,12,"<nobr><center></center></nobr>")
		  tabR2.SetStile(cnt,12,"t-xxs"+sR)
                }

                cnt++

            if ( cont_stampati>=vis ) {
               if ( TVisu == "N" ) {
                  i=Serie.length;
               }
               else {
                 if ( i < (Serie.length - 2) ) {
                   if ( Serie[i].Totale  > Serie[i+1].Totale ) {
                     i=Serie.length;
                   }
                 }
               }
            }
        }
    Stato("Visualizzazione Record 5...")
    d10 = Math.ceil(tabR2.numrighe / 10)
    tabR2.nome="record2"
    tabR2.larghezza=50
    tabR2.altezza=0
    tabR2.border=1
    tabR2.cellpadding=3
    tabR2.cellspacing=0
    tabR2.stile="ClassEl"
    tabR2.Stampa()
}

function GeneraRecord_006(Visu,TVisu,IdFsq,IdComp,IdStadio,FlStagione) {
var i,c,cnt,vis,data_appo,cont_stampati,max_IDf,ids,id_serie,squadra,save_stagione
var tabR2 = new Tabella(2, 12) 
var arrF = new Object()
var SqSerie = new Array()
var Serie = new Array()
var competizioni = arrAdOCompetizioni.length - 1
var IdAppo
arrF = arrAdOFantasquadre

       Stato("Generazione Record 6...")
       max_IDf = 0
       for (i=1;i<arrF.length;i++) {
          if ( arrF[i].IDf > max_IDf ) {
            max_IDf = arrF[i].IDf
          }
       }
     
       for (i=1;i<=max_IDf;i++) {
          SqSerie[i] = new AdOSqSerie(i,0,0)
       }
 
       for (i=1;i<arrF.length;i++) {
         SqSerie[arrF[i].IDf].IDaSquadra = arrF[i].idAttuale
       }

       id_serie = 0
       save_stagione = 0
       for(i=1;i<arrConfronti.length;i++) {
         if (   (      ( IdComp == 0 )
                   ||  ( IdComp == arrConfronti[i].Competizione )
                )
             && (      ( IdStadio == "T" || IdStadio == "C" || IdStadio == "F")
                   ||  (      ( IdStadio == "N" )
                           && ( arrConfronti[i].Neutro == "N" )
                       )
                )
             && (      ( IdFsq == 0 )
                   ||  ( IdFsq == arrConfronti[i].IDASquadraCasa )
                   ||  ( IdFsq == arrConfronti[i].IDASquadraFuori )
                )
            ) {

                if (       ( FlStagione == "S" )
                   ) {
                   //Interrompe serie squadra casa
                     if (     ( IdStadio != "F" )
                           && (     ( IdFsq == 0 )
                                ||  ( IdFsq == arrConfronti[i].IDASquadraCasa )
                              )
                        ) {
                       ids = arrConfronti[i].IDASquadraCasa
                       if (     ( SqSerie[ids].IDSerieAttiva != 0 )
                             && ( Serie[SqSerie[ids].IDSerieAttiva].StagioneI != arrConfronti[i].Stagione )
                          ) {
                         Serie[SqSerie[ids].IDSerieAttiva].Chiusa = "S"
                         SqSerie[ids].IDSerieAttiva = 0
                       }
                     }
                  //Interrompe serie squadra fuori
                     if (     ( IdStadio != "C" )
                           && (     ( IdFsq == 0 )
                                ||  ( IdFsq == arrConfronti[i].IDASquadraFuori )
                              )
                        ) {
                        ids = arrConfronti[i].IDASquadraFuori
                        if (     ( SqSerie[ids].IDSerieAttiva != 0 )
                             && ( Serie[SqSerie[ids].IDSerieAttiva].StagioneI != arrConfronti[i].Stagione )
                          ) {
                          Serie[SqSerie[ids].IDSerieAttiva].Chiusa = "S"
                          SqSerie[ids].IDSerieAttiva = 0
                        }
                     }
                }
                save_stagione = arrConfronti[i].Stagione

                if ( arrConfronti[i].GolCasa == arrConfronti[i].GolFuori ) { 
                     //Aggiorna serie squadra Casa PAREGGIO
                     if (     ( IdStadio != "F" )
                           && (     ( IdFsq == 0 )
                                ||  ( IdFsq == arrConfronti[i].IDASquadraCasa )
                              )
                        ) {
                       ids = arrConfronti[i].IDASquadraCasa
                       squadra = CercaSquadra(arrConfronti[i].IDASquadraCasa);
                       if ( squadra == " " ) {
                         squadra = arrConfronti[i].SquadraCasa;
                       }
                       if ( SqSerie[ids].IDSerieAttiva != 0 ) {
                         Serie[SqSerie[ids].IDSerieAttiva].Totale++
                         Serie[SqSerie[ids].IDSerieAttiva].Parziale1++
                         Serie[SqSerie[ids].IDSerieAttiva].StagioneF = arrConfronti[i].Stagione
                         Serie[SqSerie[ids].IDSerieAttiva].GiornataF = arrConfronti[i].GiornataA
                         Serie[SqSerie[ids].IDSerieAttiva].DataF = arrConfronti[i].Data
                       }
                       else {
                         id_serie++                     
                         SqSerie[ids].IDSerieAttiva = id_serie
                         Serie[id_serie] = new AdOSerie(ids,squadra,0,0,0,0,arrConfronti[i].Stagione,arrConfronti[i].GiornataA,arrConfronti[i].Data,arrConfronti[i].Stagione,arrConfronti[i].GiornataA,arrConfronti[i].Data,"N")
                         Serie[id_serie].Totale++
                         Serie[id_serie].Parziale1++
                       }
                     }
                     //Aggiorna serie squadra Fuori PAREGGIO
                     if (     ( IdStadio != "C" )
                           && (     ( IdFsq == 0 )
                                ||  ( IdFsq == arrConfronti[i].IDASquadraFuori )
                              )
                        ) {
                       ids = arrConfronti[i].IDASquadraFuori
                       squadra = CercaSquadra(arrConfronti[i].IDASquadraFuori);
                       if ( squadra == " " ) {
                         squadra = arrConfronti[i].SquadraFuori;
                       }
                       if ( SqSerie[ids].IDSerieAttiva != 0 ) {
                         Serie[SqSerie[ids].IDSerieAttiva].Totale++
                         Serie[SqSerie[ids].IDSerieAttiva].Parziale1++
                         Serie[SqSerie[ids].IDSerieAttiva].StagioneF = arrConfronti[i].Stagione
                         Serie[SqSerie[ids].IDSerieAttiva].GiornataF = arrConfronti[i].GiornataA
                         Serie[SqSerie[ids].IDSerieAttiva].DataF = arrConfronti[i].Data
                       }
                       else {
                         id_serie++                     
                         SqSerie[ids].IDSerieAttiva = id_serie
                         Serie[id_serie] = new AdOSerie(ids,squadra,0,0,0,0,arrConfronti[i].Stagione,arrConfronti[i].GiornataA,arrConfronti[i].Data,arrConfronti[i].Stagione,arrConfronti[i].GiornataA,arrConfronti[i].Data,"N")
                         Serie[id_serie].Totale++
                         Serie[id_serie].Parziale1++
                       }
                     }
                }
                else {
                     //Interrompe serie squadra casa
                     if (     ( IdStadio != "F" )
                           && (     ( IdFsq == 0 )
                                ||  ( IdFsq == arrConfronti[i].IDASquadraCasa )
                              )
                        ) {
                       ids = arrConfronti[i].IDASquadraCasa
                       if ( SqSerie[ids].IDSerieAttiva != 0 ) {
                         Serie[SqSerie[ids].IDSerieAttiva].Chiusa = "S"
                         SqSerie[ids].IDSerieAttiva = 0
                       }
                     }
                     //Interrompe serie squadra fuori
                     if (     ( IdStadio != "C" )
                           && (     ( IdFsq == 0 )
                                ||  ( IdFsq == arrConfronti[i].IDASquadraFuori )
                              )
                        ) {
                        ids = arrConfronti[i].IDASquadraFuori
                        if ( SqSerie[ids].IDSerieAttiva != 0 ) {
                          Serie[SqSerie[ids].IDSerieAttiva].Chiusa = "S"
                          SqSerie[ids].IDSerieAttiva = 0
                        }
                     }
                }
          }
       }
             
       
        if ( Serie.length > Visu ) {
          vis=Visu;
        }
        else {
          vis=Serie.length;
        }

        Serie.sort(ordinaSerie)
        tabR2.SetStileRiga(1,"riga-blu-cx")
        tabR2.intestazioni=true
        for (i=1;i<=tabR2.numcolonne;i++) {
                tabR2.SetSpanned(1,i,true)
        } 
        tabR2.SetSpan(1,1,12)
        tabR2.SetSpanned(1,1,false);
	tabR2.SetValore(1,1,"PAREGGI CONSECUTIVI");
        cnt=2
        tabR2.SetStileRiga(cnt,"riga-orange-cx")
	tabR2.SetValore(cnt,1,"<nobr>Prog.</nobr>");
	tabR2.SetValore(cnt,2,"<nobr>Squadra</nobr>");
	tabR2.SetValore(cnt,3,"<nobr>Totale</nobr>");
	tabR2.SetValore(cnt,4,"<nobr>-</nobr>");
	tabR2.SetValore(cnt,5,"<nobr>-</nobr>");
	tabR2.SetValore(cnt,6,"<nobr>-</nobr>");
	tabR2.SetValore(cnt,7,"<nobr>Stag.I</nobr>");
	tabR2.SetValore(cnt,8,"<nobr>Gior.I</nobr>");
	tabR2.SetValore(cnt,9,"<nobr>Data I</nobr>");
	tabR2.SetValore(cnt,10,"<nobr>Stag.F</nobr>");
	tabR2.SetValore(cnt,11,"<nobr>Gior.F</nobr>");
	tabR2.SetValore(cnt,12,"<nobr>Data F</nobr>");
        cnt=3
        cont_stampati=0
	for(i=0;i < (Serie.length - 1) ;i++) {

                cont_stampati++            

		if ((cnt % 2) != 0) {
	        	tabR2.SetStileRiga(cnt,"riga-pari")
		} else {
			tabR2.SetStileRiga(cnt,"riga-dispari")
		}
                sR="LFB"
		//tabR2.SetValore(cnt,1,"<span class='t-xxs"+sR+"B'>&nbsp;"+Serie[i].Squadra+"</span>")
		tabR2.SetValore(cnt,1,"<nobr><center>"+ ( i + 1 ) +"</center></nobr>")
		tabR2.SetStile(cnt,1,"t-xxs"+sR)
		tabR2.SetValore(cnt,2,"<nobr>"+Serie[i].Squadra+"</nobr>")
		tabR2.SetStile(cnt,2,"t-xxs"+sR)
                sR="BluB"
		tabR2.SetValore(cnt,3,"<nobr><center>"+Serie[i].Totale+"</center></nobr>")
		tabR2.SetStile(cnt,3,"t-xxs"+sR)
                sR="VB"
		tabR2.SetValore(cnt,4,"<nobr><center></center></nobr>")
		tabR2.SetStile(cnt,4,"t-xxs"+sR)
                sR="GB"
		tabR2.SetValore(cnt,5,"<nobr><center></center></nobr>")
		tabR2.SetStile(cnt,5,"t-xxs"+sR)
                sR="RB"
		tabR2.SetValore(cnt,6,"<nobr><center></center></nobr>")
		tabR2.SetStile(cnt,6,"t-xxs"+sR)
                sR="VB"
		tabR2.SetValore(cnt,7,"<nobr><center>"+Serie[i].StagioneI+"</center></nobr>")
		tabR2.SetStile(cnt,7,"t-xxs"+sR)
		tabR2.SetValore(cnt,8,"<nobr><center><a class='t-xxs"+sR+"' href='../"+arrDirectory[CercaCartellaStagione(Serie[i].StagioneI)].Directory+"/ris.htm?Gio="+Serie[i].GiornataI+"'>"+Serie[i].GiornataI+"</a></center></nobr>")
		tabR2.SetStile(cnt,8,"t-xxs"+sR)
	        data = new Date(Serie[i].DataI)
           	Year = data.getYear()
	        if (Year < 2000)
	       	   Year = Year + 1900
	        data_appo = DOWArray[(data.getDay()+1)] + " " + data.getDate() + " " + MOYArray[(data.getMonth()+1)] + " " + Year
		tabR2.SetValore(cnt,9,"<nobr><center>"+data_appo+"</center></nobr>")
		tabR2.SetStile(cnt,9,"t-xxs"+sR)
                sR="RB"
                if ( Serie[i].Chiusa == "S" || SqSerie[Serie[i].IDASquadra].IDaSquadra == 0 ) {
		  tabR2.SetValore(cnt,10,"<nobr><center>"+Serie[i].StagioneF+"</center></nobr>")
                  tabR2.SetStile(cnt,10,"t-xxs"+sR)
		  tabR2.SetValore(cnt,11,"<nobr><center><a class='t-xxs"+sR+"' href='../"+arrDirectory[CercaCartellaStagione(Serie[i].StagioneF)].Directory+"/ris.htm?Gio="+Serie[i].GiornataF+"'>"+Serie[i].GiornataF+"</a></center></nobr>")
	          tabR2.SetStile(cnt,11,"t-xxs"+sR)
	          data = new Date(Serie[i].DataF)
           	  Year = data.getYear()
	          if (Year < 2000)
	       	     Year = Year + 1900
	          data_appo = DOWArray[(data.getDay()+1)] + " " + data.getDate() + " " + MOYArray[(data.getMonth()+1)] + " " + Year
		  tabR2.SetValore(cnt,12,"<nobr><center>"+data_appo+"</center></nobr>")
		  tabR2.SetStile(cnt,12,"t-xxs"+sR)
                }
                else {
		  tabR2.SetValore(cnt,10,"<nobr><center></center></nobr>")
                  tabR2.SetStile(cnt,10,"t-xxs"+sR)
		  tabR2.SetValore(cnt,11,"<nobr><center></center></nobr>")
	          tabR2.SetStile(cnt,11,"t-xxs"+sR)
		  tabR2.SetValore(cnt,12,"<nobr><center></center></nobr>")
		  tabR2.SetStile(cnt,12,"t-xxs"+sR)
                }

                cnt++

            if ( cont_stampati>=vis ) {
               if ( TVisu == "N" ) {
                  i=Serie.length;
               }
               else {
                 if ( i < (Serie.length - 2) ) {
                   if ( Serie[i].Totale  > Serie[i+1].Totale ) {
                     i=Serie.length;
                   }
                 }
               }
            }
        }
    Stato("Visualizzazione Record 6...")
    d10 = Math.ceil(tabR2.numrighe / 10)
    tabR2.nome="record2"
    tabR2.larghezza=50
    tabR2.altezza=0
    tabR2.border=1
    tabR2.cellpadding=3
    tabR2.cellspacing=0
    tabR2.stile="ClassEl"
    tabR2.Stampa()
}

function GeneraRecord_007(Visu,TVisu,IdFsq,IdComp,IdStadio,FlStagione) {
var i,c,cnt,vis,data_appo,cont_stampati,max_IDf,ids,id_serie,squadra,save_stagione
var tabR2 = new Tabella(2, 12) 
var arrF = new Object()
var SqSerie = new Array()
var Serie = new Array()
var competizioni = arrAdOCompetizioni.length - 1
var IdAppo
arrF = arrAdOFantasquadre

       Stato("Generazione Record 7...")
       max_IDf = 0
       for (i=1;i<arrF.length;i++) {
          if ( arrF[i].IDf > max_IDf ) {
            max_IDf = arrF[i].IDf
          }
       }
     
       for (i=1;i<=max_IDf;i++) {
          SqSerie[i] = new AdOSqSerie(i,0,0)
       }
 
       for (i=1;i<arrF.length;i++) {
         SqSerie[arrF[i].IDf].IDaSquadra = arrF[i].idAttuale
       }

       id_serie = 0
       save_stagione = 0
       for(i=1;i<arrConfronti.length;i++) {
         if (   (      ( IdComp == 0 )
                   ||  ( IdComp == arrConfronti[i].Competizione )
                )
             && (      ( IdStadio == "T" || IdStadio == "C" || IdStadio == "F")
                   ||  (      ( IdStadio == "N" )
                           && ( arrConfronti[i].Neutro == "N" )
                       )
                )
             && (      ( IdFsq == 0 )
                   ||  ( IdFsq == arrConfronti[i].IDASquadraCasa )
                   ||  ( IdFsq == arrConfronti[i].IDASquadraFuori )
                )
            ) {

                if (       ( FlStagione == "S" )
                   ) {
                   //Interrompe serie squadra casa
                     if (     ( IdStadio != "F" )
                           && (     ( IdFsq == 0 )
                                ||  ( IdFsq == arrConfronti[i].IDASquadraCasa )
                              )
                        ) {
                       ids = arrConfronti[i].IDASquadraCasa
                       if (     ( SqSerie[ids].IDSerieAttiva != 0 )
                             && ( Serie[SqSerie[ids].IDSerieAttiva].StagioneI != arrConfronti[i].Stagione )
                          ) {
                         Serie[SqSerie[ids].IDSerieAttiva].Chiusa = "S"
                         SqSerie[ids].IDSerieAttiva = 0
                       }
                     }
                  //Interrompe serie squadra fuori
                     if (     ( IdStadio != "C" )
                           && (     ( IdFsq == 0 )
                                ||  ( IdFsq == arrConfronti[i].IDASquadraFuori )
                              )
                        ) {
                        ids = arrConfronti[i].IDASquadraFuori
                        if (     ( SqSerie[ids].IDSerieAttiva != 0 )
                             && ( Serie[SqSerie[ids].IDSerieAttiva].StagioneI != arrConfronti[i].Stagione )
                          ) {
                          Serie[SqSerie[ids].IDSerieAttiva].Chiusa = "S"
                          SqSerie[ids].IDSerieAttiva = 0
                        }
                     }
                }
                save_stagione = arrConfronti[i].Stagione

                if ( arrConfronti[i].GolFuori > arrConfronti[i].GolCasa ) { 
                     //Interrompe serie squadra fuori
                     if (     ( IdStadio != "C" )
                           && (     ( IdFsq == 0 )
                                ||  ( IdFsq == arrConfronti[i].IDASquadraFuori )
                              )
                        ) {
                        ids = arrConfronti[i].IDASquadraFuori
                        if ( SqSerie[ids].IDSerieAttiva != 0 ) {
                          Serie[SqSerie[ids].IDSerieAttiva].Chiusa = "S"
                          SqSerie[ids].IDSerieAttiva = 0
                        }
                     }
                     if (     ( IdStadio != "F" )
                           && (     ( IdFsq == 0 )
                                ||  ( IdFsq == arrConfronti[i].IDASquadraCasa )
                              )
                        ) {
                       //Aggiorna serie squadra Casa SCONFITTA
                       ids = arrConfronti[i].IDASquadraCasa
                       squadra = CercaSquadra(arrConfronti[i].IDASquadraCasa);
                       if ( squadra == " " ) {
                         squadra = arrConfronti[i].SquadraCasa;
                       }
                       if ( SqSerie[ids].IDSerieAttiva != 0 ) {
                         Serie[SqSerie[ids].IDSerieAttiva].Totale++
                         Serie[SqSerie[ids].IDSerieAttiva].Parziale1++
                         Serie[SqSerie[ids].IDSerieAttiva].StagioneF = arrConfronti[i].Stagione
                         Serie[SqSerie[ids].IDSerieAttiva].GiornataF = arrConfronti[i].GiornataA
                         Serie[SqSerie[ids].IDSerieAttiva].DataF = arrConfronti[i].Data
                       }
                       else {
                         id_serie++                     
                         SqSerie[ids].IDSerieAttiva = id_serie
                         Serie[id_serie] = new AdOSerie(ids,squadra,0,0,0,0,arrConfronti[i].Stagione,arrConfronti[i].GiornataA,arrConfronti[i].Data,arrConfronti[i].Stagione,arrConfronti[i].GiornataA,arrConfronti[i].Data,"N")
                         Serie[id_serie].Totale++
                         Serie[id_serie].Parziale1++
                       }
                     }
                }
                else {
                   if ( arrConfronti[i].GolFuori < arrConfronti[i].GolCasa ) {  
                     //Interrompe serie squadra casa
                     if (     ( IdStadio != "F" )
                           && (     ( IdFsq == 0 )
                                ||  ( IdFsq == arrConfronti[i].IDASquadraCasa )
                              )
                        ) {
                       ids = arrConfronti[i].IDASquadraCasa
                       if ( SqSerie[ids].IDSerieAttiva != 0 ) {
                         Serie[SqSerie[ids].IDSerieAttiva].Chiusa = "S"
                         SqSerie[ids].IDSerieAttiva = 0
                       }
                     }
                     //Aggiorna serie squadra Fuori SCONFITTE
                     if (     ( IdStadio != "C" )
                           && (     ( IdFsq == 0 )
                                ||  ( IdFsq == arrConfronti[i].IDASquadraFuori )
                              )
                        ) {
                       ids = arrConfronti[i].IDASquadraFuori
                       squadra = CercaSquadra(arrConfronti[i].IDASquadraFuori);
                       if ( squadra == " " ) {
                         squadra = arrConfronti[i].SquadraFuori;
                       }
                       if ( SqSerie[ids].IDSerieAttiva != 0 ) {
                         Serie[SqSerie[ids].IDSerieAttiva].Totale++
                         Serie[SqSerie[ids].IDSerieAttiva].Parziale1++
                         Serie[SqSerie[ids].IDSerieAttiva].StagioneF = arrConfronti[i].Stagione
                         Serie[SqSerie[ids].IDSerieAttiva].GiornataF = arrConfronti[i].GiornataA
                         Serie[SqSerie[ids].IDSerieAttiva].DataF = arrConfronti[i].Data
                       }
                       else {
                         id_serie++                     
                         SqSerie[ids].IDSerieAttiva = id_serie
                         Serie[id_serie] = new AdOSerie(ids,squadra,0,0,0,0,arrConfronti[i].Stagione,arrConfronti[i].GiornataA,arrConfronti[i].Data,arrConfronti[i].Stagione,arrConfronti[i].GiornataA,arrConfronti[i].Data,"N")
                         Serie[id_serie].Totale++
                         Serie[id_serie].Parziale1++
                       }
                     }
                   }
                   else {
                     //Interrompe serie squadra casa
                     if (     ( IdStadio != "F" )
                           && (     ( IdFsq == 0 )
                                ||  ( IdFsq == arrConfronti[i].IDASquadraCasa )
                              )
                        ) {
                       ids = arrConfronti[i].IDASquadraCasa
                       if ( SqSerie[ids].IDSerieAttiva != 0 ) {
                         Serie[SqSerie[ids].IDSerieAttiva].Chiusa = "S"
                         SqSerie[ids].IDSerieAttiva = 0
                       }
                     }
                     //Interrompe serie squadra fuori
                     if (     ( IdStadio != "C" )
                           && (     ( IdFsq == 0 )
                                ||  ( IdFsq == arrConfronti[i].IDASquadraFuori )
                              )
                        ) {
                        ids = arrConfronti[i].IDASquadraFuori
                        if ( SqSerie[ids].IDSerieAttiva != 0 ) {
                          Serie[SqSerie[ids].IDSerieAttiva].Chiusa = "S"
                          SqSerie[ids].IDSerieAttiva = 0
                        }
                     }
                   }
                }
          }
       }
             
       
        if ( Serie.length > Visu ) {
          vis=Visu;
        }
        else {
          vis=Serie.length;
        }

        Serie.sort(ordinaSerie)
        tabR2.SetStileRiga(1,"riga-blu-cx")
        tabR2.intestazioni=true
        for (i=1;i<=tabR2.numcolonne;i++) {
                tabR2.SetSpanned(1,i,true)
        } 
        tabR2.SetSpan(1,1,12)
        tabR2.SetSpanned(1,1,false);
	tabR2.SetValore(1,1,"SCONFITTE CONSECUTIVE");
        cnt=2
        tabR2.SetStileRiga(cnt,"riga-orange-cx")
	tabR2.SetValore(cnt,1,"<nobr>Prog.</nobr>");
	tabR2.SetValore(cnt,2,"<nobr>Squadra</nobr>");
	tabR2.SetValore(cnt,3,"<nobr>Totale</nobr>");
	tabR2.SetValore(cnt,4,"<nobr>-</nobr>");
	tabR2.SetValore(cnt,5,"<nobr>-</nobr>");
	tabR2.SetValore(cnt,6,"<nobr>-</nobr>");
	tabR2.SetValore(cnt,7,"<nobr>Stag.I</nobr>");
	tabR2.SetValore(cnt,8,"<nobr>Gior.I</nobr>");
	tabR2.SetValore(cnt,9,"<nobr>Data I</nobr>");
	tabR2.SetValore(cnt,10,"<nobr>Stag.F</nobr>");
	tabR2.SetValore(cnt,11,"<nobr>Gior.F</nobr>");
	tabR2.SetValore(cnt,12,"<nobr>Data F</nobr>");
        cnt=3
        cont_stampati=0
	for(i=0;i < (Serie.length - 1) ;i++) {

                cont_stampati++            

		if ((cnt % 2) != 0) {
	        	tabR2.SetStileRiga(cnt,"riga-pari")
		} else {
			tabR2.SetStileRiga(cnt,"riga-dispari")
		}
                sR="LFB"
		//tabR2.SetValore(cnt,1,"<span class='t-xxs"+sR+"B'>&nbsp;"+Serie[i].Squadra+"</span>")
		tabR2.SetValore(cnt,1,"<nobr><center>"+ ( i + 1 ) +"</center></nobr>")
		tabR2.SetStile(cnt,1,"t-xxs"+sR)
		tabR2.SetValore(cnt,2,"<nobr>"+Serie[i].Squadra+"</nobr>")
		tabR2.SetStile(cnt,2,"t-xxs"+sR)
                sR="BluB"
		tabR2.SetValore(cnt,3,"<nobr><center>"+Serie[i].Totale+"</center></nobr>")
		tabR2.SetStile(cnt,3,"t-xxs"+sR)
                sR="VB"
		tabR2.SetValore(cnt,4,"<nobr><center></center></nobr>")
		tabR2.SetStile(cnt,4,"t-xxs"+sR)
                sR="GB"
		tabR2.SetValore(cnt,5,"<nobr><center></center></nobr>")
		tabR2.SetStile(cnt,5,"t-xxs"+sR)
                sR="RB"
		tabR2.SetValore(cnt,6,"<nobr><center></center></nobr>")
		tabR2.SetStile(cnt,6,"t-xxs"+sR)
                sR="VB"
		tabR2.SetValore(cnt,7,"<nobr><center>"+Serie[i].StagioneI+"</center></nobr>")
		tabR2.SetStile(cnt,7,"t-xxs"+sR)
		tabR2.SetValore(cnt,8,"<nobr><center><a class='t-xxs"+sR+"' href='../"+arrDirectory[CercaCartellaStagione(Serie[i].StagioneI)].Directory+"/ris.htm?Gio="+Serie[i].GiornataI+"'>"+Serie[i].GiornataI+"</a></center></nobr>")
		tabR2.SetStile(cnt,8,"t-xxs"+sR)
	        data = new Date(Serie[i].DataI)
           	Year = data.getYear()
	        if (Year < 2000)
	       	   Year = Year + 1900
	        data_appo = DOWArray[(data.getDay()+1)] + " " + data.getDate() + " " + MOYArray[(data.getMonth()+1)] + " " + Year
		tabR2.SetValore(cnt,9,"<nobr><center>"+data_appo+"</center></nobr>")
		tabR2.SetStile(cnt,9,"t-xxs"+sR)
                sR="RB"
                if ( Serie[i].Chiusa == "S" || SqSerie[Serie[i].IDASquadra].IDaSquadra == 0 ) {
		  tabR2.SetValore(cnt,10,"<nobr><center>"+Serie[i].StagioneF+"</center></nobr>")
                  tabR2.SetStile(cnt,10,"t-xxs"+sR)
		  tabR2.SetValore(cnt,11,"<nobr><center><a class='t-xxs"+sR+"' href='../"+arrDirectory[CercaCartellaStagione(Serie[i].StagioneF)].Directory+"/ris.htm?Gio="+Serie[i].GiornataF+"'>"+Serie[i].GiornataF+"</a></center></nobr>")
	          tabR2.SetStile(cnt,11,"t-xxs"+sR)
	          data = new Date(Serie[i].DataF)
           	  Year = data.getYear()
	          if (Year < 2000)
	       	     Year = Year + 1900
	          data_appo = DOWArray[(data.getDay()+1)] + " " + data.getDate() + " " + MOYArray[(data.getMonth()+1)] + " " + Year
		  tabR2.SetValore(cnt,12,"<nobr><center>"+data_appo+"</center></nobr>")
		  tabR2.SetStile(cnt,12,"t-xxs"+sR)
                }
                else {
		  tabR2.SetValore(cnt,10,"<nobr><center></center></nobr>")
                  tabR2.SetStile(cnt,10,"t-xxs"+sR)
		  tabR2.SetValore(cnt,11,"<nobr><center></center></nobr>")
	          tabR2.SetStile(cnt,11,"t-xxs"+sR)
		  tabR2.SetValore(cnt,12,"<nobr><center></center></nobr>")
		  tabR2.SetStile(cnt,12,"t-xxs"+sR)
                }

                cnt++

            if ( cont_stampati>=vis ) {
               if ( TVisu == "N" ) {
                  i=Serie.length;
               }
               else {
                 if ( i < (Serie.length - 2) ) {
                   if ( Serie[i].Totale  > Serie[i+1].Totale ) {
                     i=Serie.length;
                   }
                 }
               }
            }
        }
    Stato("Visualizzazione Record 7...")
    d10 = Math.ceil(tabR2.numrighe / 10)
    tabR2.nome="record2"
    tabR2.larghezza=50
    tabR2.altezza=0
    tabR2.border=1
    tabR2.cellpadding=3
    tabR2.cellspacing=0
    tabR2.stile="ClassEl"
    tabR2.Stampa()
}
function ordinaSerie(a, b) {
        var c
        if ((a!=null) && (b!=null)) {
           if ( a.Totale < b.Totale ) {
              return 1;
           }
           else {
             if ( a.Totale > b.Totale ) {
               return -1;
             }
             else {
               if ( ( ( a.Parziale1 * 1000 ) + ( a.Parziale2 * 100 ) + ( a.Parziale3 * 10 ) + a.StagioneI ) < ( ( b.Parziale1 * 1000 ) + ( b.Parziale2 * 100 ) + ( b.Parziale3 * 10 ) + b.StagioneI ) ) {
                 return 1;
               }
               else {
                 if ( ( ( a.Parziale1 * 1000 ) + ( a.Parziale2 * 100 ) + ( a.Parziale3 * 10 ) + a.StagioneI ) > ( ( b.Parziale1 * 1000 ) + ( b.Parziale2 * 100 ) + ( b.Parziale3 * 10 ) + b.StagioneI ) ) {
                   return -1;
                 }
                 else {
                   return 0;
                 }
               }
             }
           }
        }
        else {
                return -(a == null) + (b == null)
        }
}

function GeneraRecord_008(Visu,TVisu,IdFsq,IdComp,IdStadio) {
var i,c,cnt,vis,data_appo,cont_stampati
var tabR = new Tabella(2, 7) 
var arrRecord = new Object()
var competizioni = arrAdOCompetizioni.length - 1
arrRecord = arrConfronti

        Stato("Generazione Record 8...")
        if ( arrRecord.length > Visu ) {
          vis=Visu;
        }
        else {
          vis=arrRecord.length;
        }
        arrRecord.sort(ordinaRecord8)
        tabR.SetStileRiga(1,"riga-blu-cx")
        tabR.intestazioni=true
        for (i=1;i<=tabR.numcolonne;i++) {
                tabR.SetSpanned(1,i,true)
        } 
        tabR.SetSpan(1,1,7)
        tabR.SetSpanned(1,1,false);
	tabR.SetValore(1,1,"MAGGIOR NUMERO PUNTI");
        cnt=2
        tabR.SetStileRiga(cnt,"riga-orange-cx")
	tabR.SetValore(cnt,1,"<nobr>Squadra A</nobr>");
	tabR.SetValore(cnt,2,"<nobr>Squadra B</nobr>");
	tabR.SetValore(cnt,3,"<nobr>Punteggio</nobr>");
	tabR.SetValore(cnt,4,"<nobr>Stagione</nobr>");
	tabR.SetValore(cnt,5,"<nobr>Competizione</nobr>");
	tabR.SetValore(cnt,6,"<nobr>Giornata di A</nobr>");
	tabR.SetValore(cnt,7,"<nobr>Data</nobr>");
        cnt=3
        cont_stampati=0
	for(i=0;i< ( arrRecord.length - 1) ;i++) {
            if (   (     ( IdComp == 0 )
                     ||  ( IdComp == arrRecord[i].Competizione )
                   )
                && (     ( IdStadio == "T" )
                     ||  (      ( IdStadio == "N" )
                             && ( arrRecord[i].Neutro == "N" )
                         )
                     ||  (      ( IdStadio == "C" )
                             && (   (    ( IdFsq == 0 )
                                      && ( arrRecord[i].PuntiCasa >= arrRecord[i].PuntiFuori )
                                    )
                                 || ( IdFsq == arrRecord[i].IDASquadraCasa )
                                )
                         )
                     ||  (      ( IdStadio == "F" )
                             && (   (    ( IdFsq == 0 )
                                      && ( arrRecord[i].PuntiFuori >= arrRecord[i].PuntiCasa )
                                    )
                                 || ( IdFsq == arrRecord[i].IDASquadraFuori )
                                )
                         )
                   )
                && (     ( IdFsq == 0 )
                     ||  ( IdFsq == arrRecord[i].IDASquadraCasa )
                     ||  ( IdFsq == arrRecord[i].IDASquadraFuori )
                   )
                ) {

                cont_stampati++            
    
       		if ((cnt % 2) != 0) {
	        	tabR.SetStileRiga(cnt,"riga-pari")
		} else {
			tabR.SetStileRiga(cnt,"riga-dispari")
		}
                sR="LFB"
		//tabR.SetValore(cnt,1,"<span class='t-xxs"+sR+"B'>&nbsp;"+confronti[i].Squadra+"</span>")
		tabR.SetValore(cnt,1,"<nobr>"+arrRecord[i].SquadraCasa+"</nobr>")
		tabR.SetStile(cnt,1,"t-xxs"+sR)
		tabR.SetValore(cnt,2,"<nobr>"+arrRecord[i].SquadraFuori+"</nobr>")
		tabR.SetStile(cnt,2,"t-xxs"+sR)
                sR="BluB"
		tabR.SetValore(cnt,3,"<nobr><center>"+arrRecord[i].PuntiCasa+" - "+arrRecord[i].PuntiFuori+"</center></nobr>")
		tabR.SetStile(cnt,3,"t-xxs"+sR)
                sR="VB"
		tabR.SetValore(cnt,4,"<nobr><center>"+arrRecord[i].Stagione+"</center></nobr>")
		tabR.SetStile(cnt,4,"t-xxs"+sR)
                sR="RB"
                for (c = 1; c <= competizioni; c++) {
                   if ( arrAdOCompetizioni[c].IDc == arrRecord[i].Competizione ) {
	         	tabR.SetValore(cnt,5,"<nobr><center>"+arrAdOCompetizioni[c].nome+"</center></nobr>")
		        tabR.SetStile(cnt,5,"t-xxs"+sR)
                   }
                }
                sR="GB"
		tabR.SetValore(cnt,6,"<nobr><center><a class='t-xxs"+sR+"' href='../"+arrDirectory[CercaCartellaStagione(arrRecord[i].Stagione)].Directory+"/ris.htm?Gio="+arrRecord[i].GiornataA+"'>"+arrRecord[i].GiornataA+"</a></center></nobr>")
		tabR.SetStile(cnt,6,"t-xxs"+sR)
                sR="BluB"
	        data = new Date(arrRecord[i].Data)
           	Year = data.getYear()
	        if (Year < 2000)
	       	   Year = Year + 1900
	        data_appo = DOWArray[(data.getDay()+1)] + " " + data.getDate() + " " + MOYArray[(data.getMonth()+1)] + " " + Year
		tabR.SetValore(cnt,7,"<nobr><center>"+data_appo+"</center></nobr>")
		tabR.SetStile(cnt,7,"t-xxs"+sR)
                cnt++

            }

            if ( cont_stampati>=vis ) {
               if ( TVisu == "N" ) {
                  i=arrRecord.length;
               }
               else {
                 if ( i < (arrRecord.length - 2) ) {
                   if ( ( Maggiore(arrRecord[i].PuntiCasa,arrRecord[i].PuntiFuori) ) > ( Maggiore(arrRecord[i+1].PuntiCasa,arrRecord[i+1].PuntiFuori) ) ) {
                     i=arrRecord.length;
                   }
                 }
               }
            }
            
        }
    Stato("Visualizzazione Record 8...")
    d10 = Math.ceil(tabR.numrighe / 10)
    tabR.nome="record"
    tabR.larghezza=50
    tabR.altezza=0
    tabR.border=1
    tabR.cellpadding=3
    tabR.cellspacing=0
    tabR.stile="ClassEl"
    tabR.Stampa()
}

function Maggiore(a, b) {
        if ((a!=null) && (b!=null)) {
          if ( a > b ) {
             return a;
          }
          else {
             return b;
          }
        }
        else {
           return a;
        }
}

function ordinaRecord8(a, b) {
        var c
        if ((a!=null) && (b!=null)) {
           if ( ( Maggiore( a.PuntiCasa,a.PuntiFuori )) < ( Maggiore( b.PuntiCasa,b.PuntiFuori )) ) {
              return 1;
           }
           else {
             if ( ( Maggiore( a.PuntiCasa,a.PuntiFuori )) > ( Maggiore( b.PuntiCasa,b.PuntiFuori )) ) {
               return -1;
             }
             else {
               return 0;
             }
           }
        }
        else {
                return -(a == null) + (b == null)
        }
}

function GeneraRecord_009(Visu,TVisu,IdFsq,IdComp,IdStadio) {
var i,c,cnt,vis,data_appo,cont_stampati
var tabR = new Tabella(2, 7) 
var arrRecord = new Object()
var competizioni = arrAdOCompetizioni.length - 1
arrRecord = arrConfronti

        Stato("Generazione Record 9...")

        if ( arrRecord.length > Visu ) {
          vis=Visu;
        }
        else {
          vis=arrRecord.length;
        }
        arrRecord.sort(ordinaRecord9)
        tabR.SetStileRiga(1,"riga-blu-cx")
        tabR.intestazioni=true
        for (i=1;i<=tabR.numcolonne;i++) {
                tabR.SetSpanned(1,i,true)
        } 
        tabR.SetSpan(1,1,7)
        tabR.SetSpanned(1,1,false);
	tabR.SetValore(1,1,"MINOR NUMERO PUNTI");
        cnt=2
        tabR.SetStileRiga(cnt,"riga-orange-cx")
	tabR.SetValore(cnt,1,"<nobr>Squadra A</nobr>");
	tabR.SetValore(cnt,2,"<nobr>Squadra B</nobr>");
	tabR.SetValore(cnt,3,"<nobr>Punteggio</nobr>");
	tabR.SetValore(cnt,4,"<nobr>Stagione</nobr>");
	tabR.SetValore(cnt,5,"<nobr>Competizione</nobr>");
	tabR.SetValore(cnt,6,"<nobr>Giornata di A</nobr>");
	tabR.SetValore(cnt,7,"<nobr>Data</nobr>");
        cnt=3
        cont_stampati=0
	for(i=0;i< ( arrRecord.length - 1) ;i++) {
            if (   (     ( IdComp == 0 )
                     ||  ( IdComp == arrRecord[i].Competizione )
                   )
                && (     ( IdStadio == "T" )
                     ||  (      ( IdStadio == "N" )
                             && ( arrRecord[i].Neutro == "N" )
                         )
                     ||  (      ( IdStadio == "C" )
                             && (   (    ( IdFsq == 0 )
                                      && ( arrRecord[i].PuntiCasa <= arrRecord[i].PuntiFuori )
                                    )
                                 || ( IdFsq == arrRecord[i].IDASquadraCasa )
                                )
                         )
                     ||  (      ( IdStadio == "F" )
                             && (   (    ( IdFsq == 0 )
                                      && ( arrRecord[i].PuntiFuori <= arrRecord[i].PuntiCasa )
                                    )
                                 || ( IdFsq == arrRecord[i].IDASquadraFuori )
                                )
                         )
                   )
                && (     ( IdFsq == 0 )
                     ||  ( IdFsq == arrRecord[i].IDASquadraCasa )
                     ||  ( IdFsq == arrRecord[i].IDASquadraFuori )
                   )
                // Aggiunto per eliminare eventuali tabellini senza punti inseriti manualmente
                && (     ( arrRecord[i].PuntiCasa != 0 )
                     ||  ( arrRecord[i].PuntiFuori != 0 )
                   )
                ) {

                cont_stampati++            
    
       		if ((cnt % 2) != 0) {
	        	tabR.SetStileRiga(cnt,"riga-pari")
		} else {
			tabR.SetStileRiga(cnt,"riga-dispari")
		}
                sR="LFB"
		//tabR.SetValore(cnt,1,"<span class='t-xxs"+sR+"B'>&nbsp;"+confronti[i].Squadra+"</span>")
		tabR.SetValore(cnt,1,"<nobr>"+arrRecord[i].SquadraCasa+"</nobr>")
		tabR.SetStile(cnt,1,"t-xxs"+sR)
		tabR.SetValore(cnt,2,"<nobr>"+arrRecord[i].SquadraFuori+"</nobr>")
		tabR.SetStile(cnt,2,"t-xxs"+sR)
                sR="BluB"
		tabR.SetValore(cnt,3,"<nobr><center>"+arrRecord[i].PuntiCasa+" - "+arrRecord[i].PuntiFuori+"</center></nobr>")
		tabR.SetStile(cnt,3,"t-xxs"+sR)
                sR="VB"
		tabR.SetValore(cnt,4,"<nobr><center>"+arrRecord[i].Stagione+"</center></nobr>")
		tabR.SetStile(cnt,4,"t-xxs"+sR)
                sR="RB"
                for (c = 1; c <= competizioni; c++) {
                   if ( arrAdOCompetizioni[c].IDc == arrRecord[i].Competizione ) {
	         	tabR.SetValore(cnt,5,"<nobr><center>"+arrAdOCompetizioni[c].nome+"</center></nobr>")
		        tabR.SetStile(cnt,5,"t-xxs"+sR)
                   }
                }
                sR="GB"
		tabR.SetValore(cnt,6,"<nobr><center><a class='t-xxs"+sR+"' href='../"+arrDirectory[CercaCartellaStagione(arrRecord[i].Stagione)].Directory+"/ris.htm?Gio="+arrRecord[i].GiornataA+"'>"+arrRecord[i].GiornataA+"</a></center></nobr>")
		tabR.SetStile(cnt,6,"t-xxs"+sR)
                sR="BluB"
	        data = new Date(arrRecord[i].Data)
           	Year = data.getYear()
	        if (Year < 2000)
	       	   Year = Year + 1900
	        data_appo = DOWArray[(data.getDay()+1)] + " " + data.getDate() + " " + MOYArray[(data.getMonth()+1)] + " " + Year
		tabR.SetValore(cnt,7,"<nobr><center>"+data_appo+"</center></nobr>")
		tabR.SetStile(cnt,7,"t-xxs"+sR)
                cnt++

            }

            if ( cont_stampati>=vis ) {
               if ( TVisu == "N" ) {
                  i=arrRecord.length;
               }
               else {
                 if ( i < (arrRecord.length - 2) ) {
                   if ( ( Minore(arrRecord[i].PuntiCasa,arrRecord[i].PuntiFuori) ) < ( Minore(arrRecord[i+1].PuntiCasa,arrRecord[i+1].PuntiFuori) ) ) {
                     i=arrRecord.length;
                   }
                 }
               }
            }
            
        }
    Stato("Visualizzazione Record 9...")
    d10 = Math.ceil(tabR.numrighe / 10)
    tabR.nome="record"
    tabR.larghezza=50
    tabR.altezza=0
    tabR.border=1
    tabR.cellpadding=3
    tabR.cellspacing=0
    tabR.stile="ClassEl"
    tabR.Stampa()
}

function Minore(a, b) {
        if ((a!=null) && (b!=null)) {
          if ( a < b ) {
             return a;
          }
          else {
             return b;
          }
        }
        else {
           return a;
        }
}

function ordinaRecord9(a, b) {
        var c
        if ((a!=null) && (b!=null)) {
           if ( ( Minore( a.PuntiCasa,a.PuntiFuori )) > ( Minore( b.PuntiCasa,b.PuntiFuori )) ) {
              return 1;
           }
           else {
             if ( ( Minore( a.PuntiCasa,a.PuntiFuori )) < ( Minore( b.PuntiCasa,b.PuntiFuori )) ) {
               return -1;
             }
             else {
               return 0;
             }
           }
        }
        else {
                return -(a == null) + (b == null)
        }
}

function GeneraBilancioPT() {
var i,x,z,cnt,sT,sR,data_appo
var bilancio = new Array()
var arrF = new Object()
var arrC = new Object()
arrF = arrAdOFantasquadre
arrC = arrAdOCompetizioni
var competizione = 0
var TipoIncontro = " "
var IDSquadraA = 0
var IDSquadraB = 0
var NomeSqA = " "
var NomeSqB = " "
var NomeComp = " "
var IDSquadraB = 0
var tabR = new Tabella(2, 8) 
        for (i=1;i<RiempiListaIncontri(GetProssimaGiornataDaGiocare(),0).length;i++) {
          if ( RiempiListaIncontri(GetProssimaGiornataDaGiocare(),0)[i].IDTipo != "2" ) {

            competizione = 0
            TipoIncontro = " "
            IDSqA = 0
            IDSqB = 0
            NomeSqA = " "
            NomeSqB = " "
            NomeComp = " "
            if ( RiempiListaIncontri(GetProssimaGiornataDaGiocare(),0)[i].IDTipo == "7" ) {
              TipoIncontro = "N"
            }
            for (x=1;x<arrC.length;x++) {
               if (arrC[x].idAttuale == RiempiListaIncontri(GetProssimaGiornataDaGiocare(),0)[i].IDCompetizione ) {
                 competizione=arrC[x].IDc
                 x=arrC.length
               }
            }
            for (x=1;x<arrF.length;x++) {
               if (arrF[x].idAttuale == RiempiListaIncontri(GetProssimaGiornataDaGiocare(),0)[i].IDSquadre.Casa ) {
                 IDSqA=arrF[x].IDf 
               }
               if (arrF[x].idAttuale == RiempiListaIncontri(GetProssimaGiornataDaGiocare(),0)[i].IDSquadre.Fuori ) {
                 IDSqB=arrF[x].IDf 
               }
            }
          
            NomeSqA = RiempiListaIncontri(GetProssimaGiornataDaGiocare(),0)[i].Nomi.Casa 
            NomeSqB = RiempiListaIncontri(GetProssimaGiornataDaGiocare(),0)[i].Nomi.Fuori
            NomeComp = RiempiListaIncontri(GetProssimaGiornataDaGiocare(),0)[i].Competizione
            
            bilancio[i]=new ABilancio( competizione, NomeComp, TipoIncontro, IDSqA, NomeSqA, IDSqB, NomeSqB,0,0,0,0,0,0,0,0," "," "," ",0,0,0,0);
          } 
        } 

	for(i=1;i<arrConfronti.length;i++) {
          z=arrConfronti[i].Competizione
          for (x=1;x<bilancio.length;x++) {
            if ( bilancio[x].IDSquadraA == arrConfronti[i].IDASquadraCasa || bilancio[x].IDSquadraA == arrConfronti[i].IDASquadraFuori ) {
              bilancio[x].PanchineTotaliA++
              if ( bilancio[x].Competizione == z ) {
                bilancio[x].PanchineCompetizioneA++
              }
            }
            if ( bilancio[x].IDSquadraB == arrConfronti[i].IDASquadraCasa || bilancio[x].IDSquadraB == arrConfronti[i].IDASquadraFuori ) {
              bilancio[x].PanchineTotaliB++
              if ( bilancio[x].Competizione == z ) {
                bilancio[x].PanchineCompetizioneB++
              }
            }
            if ( ( bilancio[x].Competizione == z ) && ( bilancio[x].Incontro == arrConfronti[i].Neutro ) ) {
              if ( bilancio[x].IDSquadraA == arrConfronti[i].IDASquadraCasa && bilancio[x].IDSquadraB ==  arrConfronti[i].IDASquadraFuori ) {
                if ( arrConfronti[i].GolCasa > arrConfronti[i].GolFuori ) {
                  bilancio[x].VinteA++
                  bilancio[x].UltimaVittoriaA=arrConfronti[i].Data
                }
                else {
                  if ( arrConfronti[i].GolCasa < arrConfronti[i].GolFuori ) {
                    bilancio[x].VinteB++
                    bilancio[x].UltimaVittoriaB=arrConfronti[i].Data
                  }
                  else {
                    bilancio[x].Nulle++
                    bilancio[x].UltimoPareggio=arrConfronti[i].Data
                  }
                }
                bilancio[x].Giocate++
                bilancio[x].GA= bilancio[x].GA + arrConfronti[i].GolCasa
                bilancio[x].GB= bilancio[x].GB + arrConfronti[i].GolFuori
                bilancio[x].PuntiA= bilancio[x].PuntiA + arrConfronti[i].PuntiCasa
                bilancio[x].PuntiB= bilancio[x].PuntiB + arrConfronti[i].PuntiFuori
              }


              else {
                  if ( ( bilancio[x].Incontro == "N" ) && ( bilancio[x].IDSquadraA == arrConfronti[i].IDASquadraFuori && bilancio[x].IDSquadraB ==  arrConfronti[i].IDASquadraCasa )) {  
                    if ( arrConfronti[i].GolCasa > arrConfronti[i].GolFuori ) {
                      bilancio[x].VinteB++
                      bilancio[x].UltimaVittoriaB=arrConfronti[i].Data
                    }
                    else {
                      if ( arrConfronti[i].GolCasa < arrConfronti[i].GolFuori ) {
                        bilancio[x].VinteA++
                        bilancio[x].UltimaVittoriaA=arrConfronti[i].Data
                      }
                      else {
                        bilancio[x].Nulle++
                        bilancio[x].UltimoPareggio=arrConfronti[i].Data
                      }
                    }
                    bilancio[x].Giocate++
                    bilancio[x].GA= bilancio[x].GA + arrConfronti[i].GolFuori
                    bilancio[x].GB= bilancio[x].GB + arrConfronti[i].GolCasa
                    bilancio[x].PuntiA= bilancio[x].PuntiA + arrConfronti[i].PuntiFuori
                    bilancio[x].PuntiB= bilancio[x].PuntiB + arrConfronti[i].PuntiCasa
                  }
              }

            }
          }
        }

        tabR.SetStileRiga(1,"riga-blu-cx")
        tabR.intestazioni=true
        Stato("Generazione Bilancio...")
        for (i=1;i<=tabR.numcolonne;i++) {
                tabR.SetSpanned(1,i,true)
        } 
        tabR.SetSpan(1,1,10)
        tabR.SetSpanned(1,1,false)
	tabR.SetValore(1,1,"Bilancio Prossimo Turno");
        cnt=1
        for (x=1; x<bilancio.length; x++) {
          cnt++
          tabR.SetStileRiga(cnt,"riga-orange-cx")
	  tabR.SetValore(cnt,1,bilancio[x].NomeCompetizione);
          tabR.SetStile(cnt,1,"t-xxsRB")
	  tabR.SetValore(cnt,2,"Giocate");
          tabR.SetStile(cnt,2,"t-xxs")
	  tabR.SetValore(cnt,3,"Vittorie");
          tabR.SetStile(cnt,3,"t-xxs")
	  tabR.SetValore(cnt,4,"Pareggi");
          tabR.SetStile(cnt,4,"t-xxs")
	  tabR.SetValore(cnt,5,"Goal");
          tabR.SetStile(cnt,5,"t-xxs")
	  tabR.SetValore(cnt,6,"Punti");
          tabR.SetStile(cnt,6,"t-xxs")
	  tabR.SetValore(cnt,7,"Panc.Com.");
          tabR.SetStile(cnt,7,"t-xxs")
	  tabR.SetValore(cnt,8,"Panc.Tot.");
          tabR.SetStile(cnt,8,"t-xxs")
          cnt++
	  if ((cnt % 2) != 0) {
	   	tabR.SetStileRiga(cnt,"riga-pari")
          } else {
		tabR.SetStileRiga(cnt,"riga-dispari")
          }
	  tabR.SetValore(cnt,1,bilancio[x].NomeSquadraA);
          tabR.SetStile(cnt,1,"t-xxsB")
	  tabR.SetValore(cnt,2,"<center>"+bilancio[x].Giocate+"</center>");
          tabR.SetStile(cnt,2,"t-xxsBluB")
          data_appo=" "
          if ( bilancio[x].UltimaVittoriaA != " " ) {
            data = new Date(bilancio[x].UltimaVittoriaA)
            Year = data.getYear()
            if (Year < 2000)
              Year = Year + 1900
            data_appo = DOWArray[(data.getDay()+1)] + " " + data.getDate() + " " + MOYArray[(data.getMonth()+1)] + " " + Year
            //tabR.SetValore(cnt,4,"<nobr><center>"+data_appo+"</center></nobr>")
          }
	  tabR.SetValore(cnt,3,"<center><a class='t-xxsVB' title='Ultima " +data_appo+ "'>"+bilancio[x].VinteA+"</a></center>");
          tabR.SetStile(cnt,3,"t-xxsVB")

          data_appo=" "
          if ( bilancio[x].UltimoPareggio != " " ) {
            data = new Date(bilancio[x].UltimoPareggio)
            Year = data.getYear()
            if (Year < 2000)
              Year = Year + 1900
            data_appo = DOWArray[(data.getDay()+1)] + " " + data.getDate() + " " + MOYArray[(data.getMonth()+1)] + " " + Year
            //tabR.SetValore(cnt,6,"<nobr><center>"+data_appo+"</center></nobr>")
          }
	  tabR.SetValore(cnt,4,"<center><a class='t-xxsGB' title='Ultimo " +data_appo+ "'>"+bilancio[x].Nulle+"</a></center>");
          tabR.SetStile(cnt,4,"t-xxsGB")
	  tabR.SetValore(cnt,5,"<center>"+bilancio[x].GA+"</center>");
          tabR.SetStile(cnt,5,"t-xxsRB")
          sR="VB"
          if ( bilancio[x].Giocate == 0 ) {
            tabR.SetValore(cnt,6,"<nobr><center>" + (Math.round(0*1000)/1000) + "</center></nobr>")
            tabR.SetStile(cnt,6,"t-xxs"+sR)
          }
          else {
            tabR.SetValore(cnt,6,"<nobr><center>" + (Math.round(bilancio[x].PuntiA/bilancio[x].Giocate*1000)/1000) + "</center></nobr>")
            tabR.SetStile(cnt,6,"t-xxs"+sR)
          }
	  tabR.SetValore(cnt,7,"<center>"+bilancio[x].PanchineCompetizioneA+"</center>");
          tabR.SetStile(cnt,7,"t-xxsBluB")
	  tabR.SetValore(cnt,8,"<center>"+bilancio[x].PanchineTotaliA+"</center>");
          tabR.SetStile(cnt,8,"t-xxsRB")
          cnt++
	  if ((cnt % 2) != 0) {
	   	tabR.SetStileRiga(cnt,"riga-pari")
          } else {
		tabR.SetStileRiga(cnt,"riga-dispari")
          }
	  tabR.SetValore(cnt,1,bilancio[x].NomeSquadraB);
          tabR.SetStile(cnt,1,"t-xxsB")
	  tabR.SetValore(cnt,2,"<center>"+bilancio[x].Giocate+"</center>");
          tabR.SetStile(cnt,2,"t-xxsBluB")
          data_appo=" "
          if ( bilancio[x].UltimaVittoriaB != " " ) {
            data = new Date(bilancio[x].UltimaVittoriaB)
            Year = data.getYear()
            if (Year < 2000)
              Year = Year + 1900
            data_appo = DOWArray[(data.getDay()+1)] + " " + data.getDate() + " " + MOYArray[(data.getMonth()+1)] + " " + Year
            //tabR.SetValore(cnt,4,"<nobr><center>"+data_appo+"</center></nobr>")
          }
	  tabR.SetValore(cnt,3,"<center><a class='t-xxsVB' title='Ultima " +data_appo+ "'>"+bilancio[x].VinteB+"</a></center>");
          tabR.SetStile(cnt,3,"t-xxsVB")
          data_appo=" "
          if ( bilancio[x].UltimoPareggio != " " ) {
            data = new Date(bilancio[x].UltimoPareggio)
            Year = data.getYear()
            if (Year < 2000)
              Year = Year + 1900
            data_appo = DOWArray[(data.getDay()+1)] + " " + data.getDate() + " " + MOYArray[(data.getMonth()+1)] + " " + Year
            //tabR.SetValore(cnt,6,"<nobr><center>"+data_appo+"</center></nobr>")
          }
	  tabR.SetValore(cnt,4,"<center><a class='t-xxsGB' title='Ultimo " +data_appo+ "'>"+bilancio[x].Nulle+"</a></center>");
          tabR.SetStile(cnt,4,"t-xxsGB")
	  tabR.SetValore(cnt,5,"<center>"+bilancio[x].GB+"</center>");
          tabR.SetStile(cnt,5,"t-xxsRB")
          sR="VB"
          if ( bilancio[x].Giocate == 0 ) {
            tabR.SetValore(cnt,6,"<nobr><center>" + (Math.round(0*1000)/1000) + "</center></nobr>")
            tabR.SetStile(cnt,6,"t-xxs"+sR)
           }
           else {
             tabR.SetValore(cnt,6,"<nobr><center>" + (Math.round(bilancio[x].PuntiB/bilancio[x].Giocate*1000)/1000) + "</center></nobr>")
             tabR.SetStile(cnt,6,"t-xxs"+sR)
           }
	   tabR.SetValore(cnt,7,"<center>"+bilancio[x].PanchineCompetizioneB+"</center>");
           tabR.SetStile(cnt,7,"t-xxsBluB")
	   tabR.SetValore(cnt,8,"<center>"+bilancio[x].PanchineTotaliB+"</center>");
           tabR.SetStile(cnt,8,"t-xxsRB")
        }
    Stato("Bilancio...")
    d10 = Math.ceil(tabR.numrighe / 10)
    tabR.nome="Bilancio"
    tabR.larghezza=99
    tabR.altezza=0
    tabR.border=1
    tabR.cellpadding=3
    tabR.cellspacing=0
    tabR.stile="ClassEl"
    tabR.Stampa()
}

var aATR=new Array()
a=aATR
a[1]=new ATR("000","-Non Selezionato-")
a[2]=new ATR("001","Partite con più gol nei tempi regolamentari")
a[3]=new ATR("002","Partite con più scarto nei tempi regolamentari")
a[4]=new ATR("003","Serie Positive")
a[5]=new ATR("004","Serie Positive/Stagione")
a[6]=new ATR("005","Serie Negative")
a[7]=new ATR("006","Serie Negative/Stagione")
a[8]=new ATR("007","Vittorie Consecutive")
a[9]=new ATR("008","Vittorie Consecutive/Stagione")
a[10]=new ATR("009","Pareggi Consecutivi")
a[11]=new ATR("010","Pareggi Consecutivi/Stagione")
a[12]=new ATR("011","Sconfitte Consecutive")
a[13]=new ATR("012","Sconfitte Consecutive/Stagione")
a[14]=new ATR("013","Maggior Numero Punti")
a[15]=new ATR("014","Minor Numero Punti")
a[16]=new ATR("015","Genera Bilancio Prox. Turno")
