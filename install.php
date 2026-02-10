<?php
@include("config.php");

$myconn = mysql_connect($db_host, $db_user, $db_password) or die("Errore connessione");
mysql_select_db($db_name, $myconn) or die("Errore nella connessione al DataBase");

$query = "CREATE TABLE `schedine` (`scommettitore` VARCHAR( 35 ) NOT NULL ,`giocata` VARCHAR( 50 ) NULL ,`borsino` DOUBLE NOT NULL DEFAULT '0', PRIMARY KEY ( `scommettitore` ) ); ";
$result = mysql_query($query, $myconn) or die("Errore nella CREAZIONE del DataBase");

$vettSqd=file("Toto/info.txt");
$numSqd=count($vettSqd);

for($j=0; $j<$numSqd; $j++)
{
  $infoSqd=explode('-', $vettSqd[$j]);
  $query = "INSERT INTO `schedine` (`scommettitore`, `giocata`, `borsino`) VALUES ('".$infoSqd[0]."', NULL, '0');";
  $result = mysql_query($query, $myconn) or die("Errore nell'inserimento degli scommettitori");
}
echo("CREAZIONE TABELLA AVVENUTO CON SUCCESSO. Chiudere la finestra e ricordarsi di cancellare il file \"install.php\" dalla cartella principale della skin, e del sito creato.");
?>