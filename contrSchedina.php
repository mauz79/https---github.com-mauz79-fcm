<html>
<head>
<title>Sottoscrizione Schedina</title>
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
  <? echo("<td colspan=\"2\" class=".$titoloOperazione." align=center>Sottoscrizione Schedina</span></td>");?>
 </tr>
 <tr><td colspan="2">&nbsp;</td></tr>
 <tr>
  <td align="center" width="45%"><img src="Toto/totocalcio_logo_bianco.gif"></td>
  <td align="center" width="55%">
  <?
  $myconn = mysql_connect($db_host, $db_user, $db_password) or die("Errore connessione");
  mysql_select_db($db_name, $myconn) or die("Errore nella connessione al DataBase");
  
  $id=$_POST['sqd'];
  $pwd=$_POST['pwd'];

  $vettSqd=file("Toto/info.txt");
  
  $infoSqd=explode('-', $vettSqd[$id-1]);
  if($infoSqd[1]==$pwd)
  {
	inviaSchedina($infoSqd[0], $myconn, $a, $da, $costoGiocata, $barraStato, $riga1, $riga2);
  }else
  {
    error($barraStato);
  }
  
  function inviaSchedina($squadra, $myconn, $dest, $mitt, $costoGiocata, $barraStato, $riga1, $riga2)
  {
	$a=$dest;
	$da=$mitt;
	$oggetto="Schedina da ".$squadra."";
	
	$partite = array ();
    $indice=0;
    foreach($_POST as $i=>$partita)
    {
	  if($i!="sqd" && $i!="pwd" && $i!="Invia")
	  {
		$partite[$indice]=$partita;
	    $indice++;
	  }
    }
	
	$numPartite=count($partite);
	$mexPartite="";
	$giocata=="";
	$righeTab="";
	
	//COSTRUZIONE MESSAGGIO E INVIO MAIL
	for($cont=1; $cont<=$numPartite; $cont++)
	{
	  $mexPartite=$mexPartite."Partita ". $cont .": ". $partite[$cont-1] . "\n";
	  if($cont!=$numPartite)
	  {
	    $giocata=$giocata.$partite[$cont-1]."-";
	  }else
	  {
	    $giocata=$giocata.$partite[$cont-1];
	  }
	}
	$messaggio="Schedina compilata da: ".$squadra."\n"."Pronostico: \n".$mexPartite;
	mail($a, $oggetto, $messaggio, $da);
	
	//SALVATAGGIO SCHEDINA
	$query = "SELECT giocata FROM schedine WHERE scommettitore='".$squadra."' AND (giocata IS NOT NULL AND giocata<>'');";
	$result = mysql_query($query, $myconn) or die("Errore nel caricamento del DataBase");
	$number = mysql_numrows($result);
	
	if($number>0)
	{
	  $query = "UPDATE schedine SET giocata='".$giocata."' WHERE scommettitore='".$squadra."';";
      $result = mysql_query($query, $myconn) or die("Errore nell'inserimento della nuova schedina nel DataBase");
	}else
	{
	  $query = "UPDATE schedine SET giocata='".$giocata."', borsino=borsino+".$costoGiocata." WHERE scommettitore='".$squadra."';";
      $result = mysql_query($query, $myconn) or die("Errore nell'inserimento della nuova schedina nel DataBase");
	}
	
	//COSTRUZIONE TABELLA SCHEDINA
	echo("<table border=0 cellPadding=1 cellSpacing=2 wight=30%>");
	for($cont=1; $cont<=$numPartite; $cont++)
	{
	  $div=($cont-1)%2;
	  if($div==0)
	  {
	    echo("<tr bgcolor=".$riga1."><td><img src=Toto/pallone1.jpg></td><td>Partita ".$cont.": </td><td><b>".$partite[$cont-1]."</b></td></tr>");
	  }else
	  {
	    echo("<tr bgcolor=".$riga2."><td><img src=Toto/pallone2.jpg></td><td>Partita ".$cont.": </td><td><b>".$partite[$cont-1]."</b></td></tr>");
	  }
	}
	echo("</table>");
	
	echo("<tr><td colspan=2>&nbsp;</td></tr></td></tr><tr><td colspan=2 class=".$barraStato.">Schedina Inviata con successo</td></tr>");
  }
  
  function error($barraStato)
  {
	echo("<tr><td colspan=2>&nbsp;</td></tr></td></tr><tr><td colspan=2 class=".$barraStato.">Password Errata, riprovare. Invio schedina <b>fallito</b></td></tr>");
  }
?>  
 <tr>
  <td colspan="2" align="center">
   <input name=torna onClick=reindirizza1() type=button value="Rigioca Schedina">
   <input name=home onClick=reindirizza2() type=button value="Home Page"> 
  </td>
 </tr>
</table>
</center>
</body>
</html>
