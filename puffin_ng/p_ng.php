<?
$password="zuzzugamushi"; //IMPOSTA QUI LA TUA PASSWORD
if($_POST["pass"]!=$password)
//if($pass!=$password)


{ echo "
	<html><head><title>Puffin NewsGenerator</title></head>
	<link rel=\"stylesheet\" type=\"text/css\" href=\"PnG.css\" />
	<body>
	    <div class=\"contenuto\">
		  <br><br>
			<center>			
      <form action=p_ng.php method=post>
			||| Puffin NewsGenerator password |||
			<hr>
			<input type=\"password\" name=\"pass\">
			<input type=submit value=\"Login\">
			<hr>
		 </form>
		 </center>

	</div>
	</body></html>
";
}
else
include ("ng.php");

?>

