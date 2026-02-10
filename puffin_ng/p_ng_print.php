<?php 
$filename = 'p_ng.txt';
$news = $_POST["news"];
$news = stripslashes($news);

$fp = fopen($filename, "w");
$file = file_get_contents($filename);
fwrite($fp, "$news");
fwrite($fp, $file);
fclose($fp);

?>
 <html>
<head>
<title>Puffin NewsGenerator</title>
<meta name="author" content="puffin" />
<meta name="generator" content="HTML-Kit" />
</head>
<link rel="stylesheet" type="text/css" href="PnG.css" />
<body onunload="self.opener.location.reload();">
<?php 
      echo "<div class='contenuto'>";
			echo "<center><a href='javascript:self.close();' title='Chiudi'>Chiudi questa finestra</a> ||| <a href='ng.php' title='Chiudi'>Genera Nuovo Commento</a></center> </font>";
			echo "$news";
			echo "<br><center><a href='javascript:self.close();' title='Chiudi'>Chiudi questa finestra</a> ||| <a href='ng.php' title='Chiudi'>Genera Nuovo Commento</a></center> </font>";
			echo "</div>";
?>
</body>
</html>