<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<?php include("PuffinProbFormEvo.php") ?>
<!--

	invform.htm



	(C) 2005 Marcello 'John Doe' Puri



	Versione 0.9.0 (15/09/2005)

	Versione 0.9.5 (28/09/2005)

	Versione 0.9.6 (07/10/2005)

	 * Modificato titolo della pagina

	Versione 1.0.0 (02/12/2005)

	* Modificato nell'impostazione grafica da Andrea Bertolazzi

-->
	<meta name="author" content="Andrea Bertolazzi - www.badtothebone.it">
	<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
	<title>Invio Formazione</title>
	<script src="js/fcmVariabili.js" type="text/javascript"></script>
	<script src="js/fcmLegaDati.js" type="text/javascript"></script>
	<script src="js/fcmSerieAFunzioni.js" type="text/javascript"></script>
	<script src="js/fcmSerieADati.js" type="text/javascript"></script>
	<script src="js/fcmGenerale.js" type="text/javascript"></script>
	<script src="js/fcmUtils.js" type="text/javascript"></script>
	<script src="js/fcmTabelle.js" type="text/javascript"></script>
	<script src="js/fcmCompetizioniFunzioni.js" type="text/javascript"></script>
	<script src="js/fcmCompetizioniDati.js" type="text/javascript"></script>
	<script src="js/fcmCalendarioFunzioni.js" type="text/javascript"></script>
	<script src="js/fcmCalendarioDati.js" type="text/javascript"></script>
	<script src="js/fcmFantasquadreFunzioni.js" type="text/javascript"></script>
	<script src="js/fcmFantasquadreDati.js" type="text/javascript"></script>
	<script src="js/javacrypt.js" type="text/javascript"></script>
	<script src="js/fcmInvioFormazioneFunzioni.js" type="text/javascript"></script>
	<script src="js/fcmInvioFormazioneDati.js" type="text/javascript"></script>
	<link href="fcmmael.css" rel="stylesheet" type="text/css">
	<script src="js/fcmSerieAFunzioni.js" type="text/javascript"></script>
<script src="js/fcmSerieADatiDettaglio.js" type="text/javascript"></script>
<script src="js/PuffinProbFormEvoFunzioni.js" type="text/javascript"></script>
<script src="js/PuffinProbFormEvoDati.js" type="text/javascript"></script>

<link rel="stylesheet" href="tabber.css">
<script src="js/topform.js" type="text/javascript"></script>
<script src="js/TopFormSettings.js" type="text/javascript"></script>
</head>
<body>
	<table style="border: 1px solid #FF0000; padding-bottom: 12px;" bgcolor="#FFFFFF" border="0" cellpadding="0" cellspacing="0" width="100%">
		<tbody>
			<tr>
				<td colspan="3" style="padding-left: 10px; padding-top: 12px; padding-right: 15px;">
				 <h2 class="titletext">Invio Formazioni</h2>
				 

				 <?
// tira fuori data e ora dal server e li inverte per il controllo
$day = date("d",time());
$month = date("m",time());
$year = date("Y",time());
$grab_time= date('H:M:S');
$hour = date("H", time());
$min= date("i", time());
$timeinv= ("$year$month$day$hour$min");
$time= ("$day/$month/$year $hour.$min");
?>   
<script language="JavaScript" type="text/javascript">

pippo =  ("<? echo "$time";?>");
document.write ("<b> DATA E ORA ATTUALI: </b>" + pippo)
document.write (" - <B> TERMINE INVIO FORMAZIONE: </B>" + TermineInviog + "/" + TermineInviom + "/" + TermineInvioa + " " + TermineInviohh + "." + TermineInviomm)

poppo = ("<? echo "$timeinv";?>");
pluto = (TermineInvioa + TermineInviom + TermineInviog + TermineInviohh + TermineInviomm)
prova = ( TermineInviog + "/" + TermineInviom + "/" + TermineInvioa + " " + TermineInviohh + "." + TermineInviomm);

//ATTIVARE QUESTA FUNZIONE PER CONTROLLARE LE CIFRE
//document.write ("<br> DATA E ORA ODIERNE INVERTITE: " + poppo + " - DATA E ORA MASSIMO INVIO INVERTITE: " + pluto)

if (poppo < pluto) {

        var cGio,cFsq,cVmin,cMod,cAff,cMvFm,cCF,cPanc;
		cFsq = JSQueryString("Fsq");
		cGio = JSQueryString("Gio");


// INIZIO MODIFICA
        cVmin = JSQueryString("Vmin");
        cMod = JSQueryString("Mod");
        cAff = JSQueryString("Aff");
        cMvFm = JSQueryString("MvFm");
        cCF = JSQueryString("CF");
        cPanc = JSQueryString("Panc");
// FINE MODIFICA


if (CaricaDefault == "si") {
	CaricaDefault = true;
} else {
	CaricaDefault = false;
}
if (CaricaDefault) {
	if (cFsq == null || cFsq=="") cFsq = arrFantasquadre[1].ID;
	if (cGio == null || cGio=="") cGio = GetProssimaGiornataDaGiocare();
	
	// INIZIO MODIFICA
		DefaultSave();

		//FINE MODIFICA
	
	
}
var result; 
result = GeneraSelezioneCompetizioni(cFsq, cGio); 

if (result) { 
GeneraIntestazioneInvioFormazione(cFsq, cGio, "invform"); 
GeneraTabellaGiocatori(); 
document.write ("<input type='button' onclick='GeneraTabellaFormazioneCPU();' value='  Formazione Consigliata '>") 
TopFormSettings();
GeneraControlliPerInvio();
}
} else {
document.write ("<br> <p align='center'><b><font size='4' color='#FF0000'>IL TERMINE PER INVIARE LA FORMAZIONE E' SCADUTO.</font></b></p>");
}      

   

</script>	
	 


			 <center>
					<font class="cpr">Powered by </font>
					<font class="cpr2">John Doe</font>
				 </center>
				</td>
			</tr>
		</tbody>
	</table>
	 <script type="text/javascript" language="javascript" src="fkounter5/counter.js.php?id=invform&mode=hidden"></script>
</body>
</html>
