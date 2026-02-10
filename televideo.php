<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
  <meta http-equiv="Content-Language" content="it">
  <title>Televideo</title>
  <meta name="author" content="Andrea Bertolazzi - www.badtothebone.it">
  <link href="fcmmael.css" rel="stylesheet" type="text/css">
  <base target="_self">
  <style type="text/css">
		<!--
	.Stile4 {
	font-size: xx-small;
	color: #003366;
}
	.Stile6 {color: #003366}
.Stile8 {color: #003366}
.Stile9 {font-size: xx-small}
	-->
  </style>
</head>
<body>
<div align="center">
	<table width="100%" height="100%" cellpadding="5" cellspacing="0" bordercolor="#003366" bgcolor="#FFFFFF" style="border: 1px solid #003366;">
  		<tbody>
    		<tr>
      			<td width="100%" height="100%" align="top" valign="top" bordercolor="#FF0000" bgcolor="#FFFFFF">
					<h2 class="titletext" align="left">Televideo RAI</h2>
					<div align="center">
					<?php 
						import_request_variables('gpc');
						extract($_SERVER); 

						if (!$telev) $telev = "100"; 
						if (!$sottop) $sottop = "1"; 
						if ($invio == "Precedente") $telev = $telev-1; 
						if ($invio == "Successiva") $telev = $telev+1;
						if ($invios == "Precedente") $sottop = $sottop-1; 
						if ($invios == "Successiva") $sottop = $sottop+1;
						
						if ($sottop == "1") 
						$lnkimage = "http://www.televideo.rai.it/televideo/pub/tt4web/Nazionale/page-" . $telev . ".png"; 
						else 
						$lnkimage = "http://www.televideo.rai.it/televideo/pub/tt4web/Nazionale/page-" . $telev . "." . $sottop . ".png"; 
						
						if (!@fopen($lnkimage, "r")){ 
						$errore = "URL: $lnkimage non trovata"; 
						if ($sottop == "") {
						$lnkimage = "http://www.televideo.rai.it/televideo/pub/tt4web/Nazionale/page-" . $telev . ".png"; 
						$sottop = "";
						} 
						} 
						
						echo "<table align=center valign=top bgcolor=#ffFFFF cellpadding=2 cellspacing=4 border=0px solid> 
						<form method=\"post\" action=\"televideo.php\"> 
						<tr> 
						<td bgcolor=black align=center valign=middle><img SRC=\"$lnkimage\" hspace=0 vspace=0 /></td> 
						<td align=left valign=top>
						<font color=#003366> 
						Pagina &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type=\"text\" name=\"telev\" size=3 maxlength=3 value=$telev><input type=\"submit\" name=\"invio\" value=\"Vai\"><br>
						<input type=\"submit\" name=\"invio\" value=\"Precedente\"> 
						<input type=\"submit\" name=\"invio\" value=\"Successiva\"><br>
						Sottopagina <input type=\"text\" name=\"sottop\" size=2 maxlength=2 value=$sottop>
						<input type=\"submit\" name=\"invio\" value=\"Vai\"><br>
						<input type=\"hidden\" name=\"nome_utente\" value=$nome_utente> 
						<input type=\"hidden\" name=\"pass_fornita\" value=$pass_fornita> 
						<input type=\"submit\" name=\"invios\" value=\"Precedente\"> 
						<input type=\"submit\" name=\"invios\" value=\"Successiva\"><br><br>";
						echo"<table align=left style=color:#000000><br><FONT size=1>
						<input type=\"submit\" name=\"telev\" value=\"100\"> Indice<br> 
						<input type=\"submit\" name=\"telev\" value=\"200\"> Sport<br>
						<input type=\"submit\" name=\"telev\" value=\"201\"> Calcio<br>
						<input type=\"submit\" name=\"telev\" value=\"229\"> Brevi Calcio<br>
						<input type=\"submit\" name=\"telev\" value=\"280\"> Probabili Formazioni<br>
						<input type=\"submit\" name=\"telev\" value=\"260\"> Altri Sport<br>
						<input type=\"submit\" name=\"telev\" value=\"268\"> Serie A1 Basket<br>
						<input type=\"submit\" name=\"telev\" value=\"101\"> Ultim'ora<br>
						<input type=\"submit\" name=\"telev\" value=\"102\"> 24 Ore Notizie<br>
						<input type=\"submit\" name=\"telev\" value=\"103\"> Prima Pagina<br>
						</font>
						</table>";
						
						
						#if ($errore) echo "<hr>$errore"; 
						echo"<td align=left style=color:#000000><FONT size=1>
						<font color=#003366>
						<input type=\"submit\" name=\"telev\" value=\"230\"> Atalanta<br>
						<input type=\"submit\" name=\"telev\" value=\"231\"> Bari<br>
						<input type=\"submit\" name=\"telev\" value=\"232\"> Bologna<br>
						<input type=\"submit\" name=\"telev\" value=\"233\"> Cagliari<br>
						<input type=\"submit\" name=\"telev\" value=\"234\"> Catania<br>
						<input type=\"submit\" name=\"telev\" value=\"235\"> Chievo<br>
						<input type=\"submit\" name=\"telev\" value=\"236\"> Fiorentina<br>
						<input type=\"submit\" name=\"telev\" value=\"237\"> Genoa<br>
						<input type=\"submit\" name=\"telev\" value=\"238\"> Inter<br>
						<input type=\"submit\" name=\"telev\" value=\"239\"> Juventus<br>
						<input type=\"submit\" name=\"telev\" value=\"240\"> Lazio<br>
						<input type=\"submit\" name=\"telev\" value=\"241\"> Livorno<br>
						<input type=\"submit\" name=\"telev\" value=\"242\"> Milan<br>
						<input type=\"submit\" name=\"telev\" value=\"243\"> Napoli<br>
						<input type=\"submit\" name=\"telev\" value=\"244\"> Palermo<br>
						<input type=\"submit\" name=\"telev\" value=\"245\"> Parma<br>
						<input type=\"submit\" name=\"telev\" value=\"246\"> Roma<br>
						<input type=\"submit\" name=\"telev\" value=\"247\"> Sampdoria<br>
						<input type=\"submit\" name=\"telev\" value=\"248\"> Siena<br>
						<input type=\"submit\" name=\"telev\" value=\"249\"> Udinese<br> 
						</font>
						</td></tr></form></table>"; 
					?>
				    </div>
					<div align="center" class="Stile6"><br>
  						<span class="Stile4">Se non appare la pagina televideo può significare che la pagina non esiste o che occorre cambiare il numero di sottopagina.</span><span class="Stile8"><br>
  						<span class="Stile9">La Pagina 280 &egrave; disponibile solo dal giorno prima delle partite.</span><br>
						<span class="Stile9"> Se cliccate sui bottoni per l'accesso rapido ricordate prima di mettere 1 nella casella sottopagina. </span><br>
    					</span><br>
   						<br>
					</div>
				</td>
    		</tr>
  		</tbody>
  </table>
	<script type="text/javascript" language="javascript" src="fkounter5/counter.js.php?id=televideo&mode=hidden"></script>
</div>
</body>
</html>