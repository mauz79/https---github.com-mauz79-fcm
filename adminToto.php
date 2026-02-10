<html>
<head>
  <script src="js/fcmGenerale.js" type="text/javascript"></script>
  <script src="js/fcmCalendarioFunzioni.js" type="text/javascript"></script>
  <script src="js/fcmCalendarioDati.js" type="text/javascript"></script>
  <script src="js/fcmRisultatiFunzioni.js" type="text/javascript"></script>
<title>Area Amministratore</title>
<link href="fcm.css" rel="stylesheet" type="text/css">
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
<SCRIPT language=JavaScript>
function reindirizza1()
{
  window.location="totofantacalcio.php"
}
function reindirizza2()
{
  window.location="index.htm"
}
</script>
</head>
<body>
<center>
<?
  @include("config.php"); 
  echo("<table class=".$tabella2." width=\"65%\">");
?>
 <tr>
  <? echo("<td colspan=\"2\" class=".$titoloOperazione." align=center>Area Amministratore</span></td>");?>
 </tr>
 <tr><td colspan="2">&nbsp;</td></tr>
 <tr>
  <td align="center" width="45%"><img src="Toto/totocalcio_logo_bianco.gif"></td>
  <td align="center" width="55%">
  <?
  $myconn = mysql_connect($db_host, $db_user, $db_password) or die("Errore connessione");
  mysql_select_db($db_name, $myconn) or die("Errore nella connessione al DataBase");
  
  $pwd=$_POST['pwd'];
  $vincitore=$_POST['vincitore'];
  $cancella=$_POST['cancella'];

  if($vincitore!='' && $pwd==$passwordAdmin)
  {
	$query = "SELECT scommettitore, giocata FROM schedine WHERE giocata<>'' AND giocata IS NOT NULL;";
	$result = mysql_query($query, $myconn) or die("Errore nel caricamento del DataBase");
	$number = mysql_numrows($result);
	if($number>0)
	{
	  echo("<table border=0 cellPadding=1 cellSpacing=2 class=".$tabella1." wight=70%>");
	  echo("<tr class=".$titoliColonne."><td align=center>Scommettitore</td><td align=center>Risultato</td>");
	  echo("<script type='text/javascript'> \n");
	  for($i=0; $i<$number; $i++)
	  {
		$sqd=mysql_result($result,$i,"scommettitore");
	    $giocata=mysql_result($result,$i,"giocata");
		
		$risultato=explode('-', $giocata);
		$numPartite=count($risultato);
		
		echo("win=".$numPartite." \n");
		for($j=1; $j<=$numPartite; $j++)
		{
		  echo("casa=RiempiListaIncontri(GetUltimaGiornataGiocata(),0)[".$j."].Gol.Casa \n");
  		  echo("fuori=RiempiListaIncontri(GetUltimaGiornataGiocata(),0)[".$j."].Gol.Fuori \n");
		  //echo(" document.write(\" ".$risultato[$j-1].": \"+casa+\"-\"+fuori) ");
		  echo("
if(casa == fuori) \n
{ \n
  risultato".$j."=X \n
}else if(casa > fuori) \n
{ \n
  risultato".$j."=1 \n
}else \n
{ \n
  risultato".$j."=2 \n
} \n
if(risultato".$j."!=\"".$risultato[$j-1]."\") \n
{ \n
  win=win-1 \n
} \n
");
		}
		echo("if(win==".$numPartite.") \n
		{ \n
		  document.write( \"<tr><td align=left>".$sqd."</td><td align=center>HA VINTO</td></tr>\") \n
		}else \n
		{ \n
		  document.write( \"<tr><td align=left>".$sqd."</td><td align=center>\"+win+\" / ".$numPartite."</td></tr>\") \n
		} \n
		");
	  }
	}
	echo("</script>");
	echo("</table>");
	
	echo("</td></tr><tr><td colspan=2>&nbsp;</td></tr><tr><td colspan=2 class=".$barraStato.">Calcolo vincitore avvenuto con successo</td></tr>");
  }else if($cancella!='' && $pwd==$passwordAdmin)
  {
    $query = "UPDATE schedine SET giocata='';";
    $result = mysql_query($query, $myconn) or die
	("</td></tr><tr><td colspan=2>&nbsp;</td></tr><tr><td colspan=2 class=".$barraStato.">Errore nella cancellazione delle giocate</td></tr>");
	echo("<img src=Toto/giocateDelete.jpg>");
	echo("</td></tr><tr><td colspan=2>&nbsp;</td></tr><tr><td colspan=2 class=".$barraStato.">Cancellazione giocate avvenuta con successo</td></tr>");
  }else
  {
    echo("</td></tr><tr><td colspan=2>&nbsp;</td></tr><tr><td colspan=2 class=".$barraStato.">Password Errata. <b>Area riservata all'amministratore</b></td></tr>");
  }
?>
 <tr>
  <td colspan="2" align="center">
   <input name=torna onClick=reindirizza1() type=button value="Torna">
   <input name=home onClick=reindirizza2() type=button value="Home Page"> 
  </td>
 </tr>
</table>
</center>
</body>
</html>
