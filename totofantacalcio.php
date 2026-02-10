<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
<title>FantaScommesse</title>
<script src="js/fcmVariabili.js" type="text/javascript"></script>
  <script src="js/fcmGenerale.js" type="text/javascript"></script>
  <script src="js/fcmSerieADati.js" type="text/javascript"></script>
  <script src="js/fcmFantasquadreFunzioni.js" type="text/javascript"></script>
  <script src="js/fcmFantasquadreDati.js" type="text/javascript"></script>
  <script src="js/fcmCalendarioFunzioni.js" type="text/javascript"></script>
  <script src="js/fcmCalendarioDati.js" type="text/javascript"></script>
  <script src="formazione/giornate.js" type="text/javascript"></script>
  <script src="js/fcmCalendarioFunzioni.js" type="text/javascript"></script>
  <script src="js/fcmCalendarioDati.js" type="text/javascript"></script>
  <script src="js/fcmClassificaFunzioni.js" type="text/javascript"></script>
  <script src="js/fcmClassificaDati.js" type="text/javascript"></script>
  <script language="javascript" type="text/javascript">
if (giornateDiA == MaxA)
	document.write("<script src='formazione/dataA.js' type='text/javascript'></scr" + "ipt>")
else
	document.write("<script src='formazione/dataB.js' type='text/javascript'></scr" + "ipt>")
</script>
  <link href="fcmmael.css" rel="stylesheet" type="text/css">
  <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
</head>

<body>
<table width="100%" border="0" cellpadding="0" cellspacing="0" bordercolor="#ff0000" bgcolor="#FFFFFF" style="border: 1px solid #003366; padding-bottom: 12px;">
		<tbody> 
			<tr>
			<td height="62" colspan="3" bgcolor="#FFFFFF" style="padding-left: 10px; padding-top: 12px; padding-right: 15px;"> 
				<h2 class="titletext">FantaScommesse</h2>
				<p align="left">Leggi <a href="legetoto.htm" target="_self" onClick="NewWindowf('legetoto.htm')">qui</a> come funziona il TotoFantacalcio.</p>		

				
				
				<? @include("config.php"); ?>
				<? echo("<tr><td colspan='3' bordercolor='#FF0000' bgcolor='#FFFFFF' style='padding-left: 10px; padding-top: 12px; padding-right: 15px;'><b>Valore del Montepremi: ".$montepremi." &euro;</b></td></tr>");?>
				<? echo("<tr><td align='left' font-size='x-small' style='padding-left: 10px; padding-top: 12px; padding-right: 15px;'>Costo Giocata: ".$costoGiocata." &euro;</td></tr>");?>
				
			  <tr align="center">
						<td><img src="Toto/totocalcio_logo_bianco.gif"></td>
					</tr>
				
				<form name="info" action="contrSchedina.php" method="post">
				<tr align="center">
				<td>
					<table width="97%" border="0" cellpadding="0" cellspacing="0" bgcolor="#FFFFFF" style="border: 1px solid #ff0000;">
					<tr align="center">
					<td>
						<table cellspacing="2" width="100%">
							<tr>
							<script language="JavaScript" src="./menujs/prossimoturnos.js"></script>
							</tr>
						</table>
					</td>
					</tr>
					</table>
					
					<tr align="center">
					<td>
    				<table cellspacing="2" width="95%">
						<tr>
						<td>Squadra</td>
							<td>
	  							<script language="JavaScript">
	   							var arrF = new Object();
	   							arrF = arrFantasquadre;
	   							document.write("<select name=sqd onChange=MM_jumpMenu('parent',this,0)>");
	   							var i;
	   							for (i = 1; i < arrF.length; i++)
	   							{
		 						document.write("<option value='" + arrF[i].ID + "'");
		  						document.write(">" + arrF[i].Nome + "</option>");
	   							}
	   							document.write("</select>");
	  							</script>
							</td>
    					<td>Password</td>
						<? echo("<td><input name=pwd type=password size=10 maxlength=".$lenghtPwd."></td>"); ?>
    					</tr>
					</table>
  					</td>
					</tr>
					
  					<tr>
					<td align="center"><input name="Invia" type="submit" value="Scommetti">
					</td>
					</tr>
				</td>
				</tr>
  				</form>
				
				<?
				$myconn = mysql_connect($db_host, $db_user, $db_password) or die("Errore connessione");
				mysql_select_db($db_name, $myconn) or die("Errore nella connessione al DataBase");
	
				$query = "SELECT scommettitore, giocata FROM schedine WHERE giocata<>'' AND giocata IS NOT NULL;";
				$result = mysql_query($query, $myconn) or die("Errore nel caricamento del DataBase");
				$number = mysql_numrows($result);
	
				if($number>0)
				{
	  			$sqd=mysql_result($result,0,"scommettitore");
	  			$giocata=mysql_result($result,0,"giocata");
	  			$risultato=explode('-', $giocata);
	 			$numPartite=count($risultato);
	  
	  			echo("<tr><td>&nbsp;</td></tr>");
	  			echo("<tr><td>&nbsp;</td></tr>");
				echo("<tr><td height='62' colspan='3' bgcolor='#FFFFFF' style='padding-left: 10px; padding-top: 12px; padding-right: 15px;'><h2 class=".$titoloSezione.">Schedine Giocate Questa Settimana</h2></td></tr>");
	  			echo("<tr><td align=center><table border='0' style='BORDER: #ff0000 1px solid; padding=2px' width='97%' class=".$tabella1." cellspacing='1' cellpadding='2'>");

	  			echo("<tr class=".$titoliColonne."><td class='newshead' align='center' bgcolor='#FFFFFF' style='padding-bottom: 5px'>Scommettitore</td>");
	  			for($j=1; $j<=$numPartite; $j++)
				{
				echo("<td width='100' align=center>Partita $j </td>"); 
				}
	  			echo("</tr>");
	  
	  			$id=0;
	  			for($i=0; $i<$number; $i++)
	  			{
	    		$sqd=mysql_result($result,$i,"scommettitore");
	    		$giocata=mysql_result($result,$i,"giocata");
				$risultato=explode('-', $giocata);
				if($id<1)
	    		{
	     		echo("<tr><td bgcolor=".$riga1." align=center>$sqd</td>");
				for($j=0; $j<$numPartite; $j++){ echo("<td bgcolor=".$riga1." align=center>$risultato[$j]</td>"); }
		  		echo("</tr>");
	  	  		$id++;
	    		}else
	    		{
	     		echo("<tr><td bgcolor=".$riga2." align=center>$sqd</td>");
		  		for($j=0; $j<$numPartite; $j++){ echo("<td bgcolor=".$riga2." align=center>$risultato[$j]</td>"); }
		  		echo("</tr>");
		  		$id--;
	    		}
	  			}
	  			echo("</table></td></tr>");
				}
  				?>
				
				<tr>
				<td height="62" colspan="3" bgcolor="#FFFFFF" style="padding-left: 10px; padding-top: 12px; padding-right: 15px;"> 
				<h2 class="titletext">Risultati Dell'Ultima Giornata Giocata</h2>
 				<p align="center">
  				<script language=JavaScript src="js/schedina.js"></script>
  				<script language=JavaScript>getRisultatiSnaiSK();</script>
  				<br>
 				</p>
				</td>
				</tr>
			
				<? echo("<tr><td height='62' colspan='3' bgcolor='#FFFFFF' style='padding-left: 10px; padding-top: 12px; padding-right: 15px;'><h2 class=".$titoloSezione.">Borsino scommettitori</h2></td></tr>"); ?>

  				<tr>
				<td align="center">
    			<?
				echo("<table border='0' style='BORDER: #ff0000 1px solid; padding=2px' width='97%' class=".$tabella1." cellspacing='1' cellpadding='2'>");
	
	  			$query = "SELECT scommettitore, borsino FROM schedine;";
	  			$result = mysql_query($query, $myconn) or die("Errore nel caricamento del DataBase");
	  			$number = mysql_numrows($result);
	
	  			echo("<tr class=".$titoliColonne."><td>Scommettitore</td><td>Borsino</td></tr>");
	  
	  			$id=0;
	  			for($i=0; $i<$number; $i++)
	  			{
	    		$sqd=mysql_result($result,$i,"scommettitore");
	    		$borsino=mysql_result($result,$i,"borsino");
				if($id<1)
	    		{
	      		echo("<tr>");
		  		echo("<td bgcolor=".$riga1.">$sqd</td>");
		  		echo("<td bgcolor=".$riga1." align=right>$borsino &euro;</td>");
		  		echo("</tr>");
	  	  		$id++;
	    		}else
	    		{
	      		echo("<tr>");
		  		echo("<td bgcolor=".$riga2.">$sqd</td>");
		  		echo("<td bgcolor=".$riga2." align=right>$borsino &euro;</td>");
		  		echo("</tr>");
		  		$id--;
	    		}
	  			}
  
				echo("</table>"); ?>
				</td>
				</tr>
				
				<? echo("<tr><td height='62' colspan='3' bgcolor='#FFFFFF' style='padding-left: 10px; padding-top: 12px; padding-right: 15px;'><h2 class=".$titoloSezione.">Amministratore Totofantacalcio</h2></td></tr>");?>

  				<tr>
				<td align="center">
				<form name="admin" action="adminToto.php" method="post">
					<table>
	  				<tr>
					<td align="center">Password: <input name="pwd" type="password" size="20" maxlength="10">
					</td>
					</tr>
					
					<tr>
					<td align="center">
					<input name="vincitore" type="submit" value="Calcola Vincitore">
	    			<input name="cancella" type="submit" value="Cancella Giocate">
	  				</td>
					</tr>
					</table>
				</form>
  				</td>
				</tr>
			</td>
			</tr>
		</tbody
></table>

</body>
</html>
