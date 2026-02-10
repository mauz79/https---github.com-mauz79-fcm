<?PHP

?>
<html>
<head>
<title>Example</title>
<style>
<!--
        A                         { color: #003366; text-decoration: none; }
        A:link                { color: #003366; text-decoration: none; }
        A:visited        { color: #003366; text-decoration: none; }
        A:active        { color: #54622D;  }
        A:hover        { color: #54622D;  }


BODY,TD,TR{
                font-family: verdana, arial, sans-serif;
                color:#000;
                font-size:11;
                font-weight:normal;
}
.banner {
        font-family: georgia, verdana, arial, sans-serif;
        color:white;
        font-size:x-large;
        font-weight:bold;
        border-left:1px solid #FFF;
        border-right:1px solid #FFF;
        border-top:1px solid #FFF;
        background:#003366;
        padding:7px;
}
.description{
        font-family:verdana, arial, sans-serif;
        font-size:x-small;
        font-weight:bold;
}

//.Stile1 {font-family: "Trebuchet MS"}
.Stile1 {
	font-size: 9px;
	font-family: "Trebuchet MS";
	color: #003366;
}
-->
</style>
</head>
<body bgcolor="#ffffff">
<table border="0" width="600" cellspacing="0" cellpadding="0">

<tr>
<td width="490" valign="top">
<?PHP

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  Here we decide what page to include
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

if($_POST['do'] == "search" or $_GET['dosearch'] == "yes"){ $subaction = "search"; $dosearch = "yes"; include("./search.php"); }
elseif($_GET['do'] == "archives"){ include("./show_archives.php"); }
elseif($_GET['do'] == "stats"){ echo"You can download the stats addon and include it here to show how many news, comments ... you have"; /* include("$path/stats.php"); */ }
else{ include("./show_news.php"); }

?></td>
</tr>
</table> 
<br>
<table width="197" border="1" cellspacing="1" cellpadding="1">
  <tr>
    <th width="189" scope="col"><div align="center"><span class="Stile1"><a href="index.php">Login Amministratore</a></span> </div></th>
  </tr>
</table>
<p>&nbsp;</p>
</body>
</html>