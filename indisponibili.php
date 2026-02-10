<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
  <?php include("indisponibiliredux.php") ?>
  <meta http-equiv="Content-Language" content="it">
  <title>Indisponibili</title>
  <meta name="author" content="Andrea Bertolazzi - www.badtothebone.it">
  <link href="fcmmael.css" rel="stylesheet" type="text/css">
  <link href="http://www.fantacalcio.kataweb.it/css/sezioni.css" rel="stylesheet" type="text/css" />

  <base target="_self">
  <script src="js/fcmSerieAFunzioni.js" type="text/javascript"></script>
  <script src="js/fcmSerieADati.js" type="text/javascript"></script>
  <script src="js/fcmSerieADatiDettaglio.js" type="text/javascript"></script>
  <script src="indisponibilijs/indisponibiliFunzioni.js" type="text/javascript"></script>
  <script src="indisponibilijs/indisponibili.js" type="text/javascript"></script>
</head>
<body>
<div align="center">
	<table style="border: 1px solid #003366;" bgcolor="#ffFFFF" cellpadding="5" cellspacing="0" height="100%" width="100%">
  		<tbody>
    		<tr>
      			<td align="top" height="100%" width="100%" valign="top">
					<h2 class="titletext" align="left">Indisponibili Serie A</h2>
					<div align="center">
					<script language="javascript" type="text/javascript">GeneraIndisponibili();</script>
					<font class="cpr">Powered by </font>
					<font class="cpr2">Maelstrom</font>
				    </div>
			</td>
    		</tr>
  		</tbody>
	</table>
	 <center>
					
				 </center>
	<script type="text/javascript" language="javascript" src="fkounter5/counter.js.php?id=indisponibili&mode=hidden"></script>
</div>
	<script type="text/javascript" language="javascript">
	<!--
	top.ridif();
	document.onload=top.ridif();
	// -->
	</script>
</body>
</html>