<?PHP



?>

<html>

<head>

<title>Example</title>

<style>

<!--

        A                         { color: #000000; text-decoration: none; }

        A:link                { color: #003366; text-decoration: none; }

        A:visited        { color: #003366; text-decoration: none; }

        A:active        { color: #54622D;  }

        A:hover        { color: #54622D;  }





BODY,TD,TR{

                font-family: "Trebuchet MS";

                color:#000000;

                font-size:11;

                font-weight:normal;

}

.banner {

        font-family: "Trebuchet MS";

        color:white;

        font-size:large;

        font-weight:bold;

        border-left:1px solid #FFF;

        border-right:1px solid #FFF;

        border-top:1px solid #FFF;

        background:#003366;

        padding:7px;

}

.description{

        font-family:"Trebuchet MS";

        font-size:x-small;

        font-weight:bold;

}



//.Stile1 {

	font-size: xx-small;

	font-style: italic;

}

.Stile1 {font-size: xx-small}

-->

</style>

</head>

<body bgcolor="#ffffff">

<table border="0" width="98%" cellspacing="0" cellpadding="0">

  <tr>

    <td height="35" colspan="5" class=banner > Comunicati dalla Presidenza di Lega<br>

        <span class="description">...e altro ancora</span> </td>
  </tr>

  

  <tr>
    <td width="4%" style="border-top: 1 solid #ffffff; border-bottom: 1 solid #ff0000" bgcolor="#ffffff"><a href="index.php"><img src="key.gif" alt="Login News" width="32" height="34" border="0"></a></td>
  
  

    <td width="16%" style="border-top: 1 solid #ffffff; border-bottom: 1 solid #ff0000" bgcolor="#ffffff" height="28">&nbsp;&nbsp;<a href="?">ultime news</a></td>

	<td width="16%" style="border-top: 1 solid #ffffff; border-bottom: 1 solid #ff0000" bgcolor="#ffffff">&nbsp;<a href="?do=archives">archivio</a></td>

	<td width="16%" color="#003366" style="border-top: 1 solid #ffffff; border-bottom: 1 solid #ff0000" bgcolor="#ffffff">&nbsp;

    <h><font color="#003366">cerca news</font></h></td>

	<td width="48%" style="border-top: 1 solid #ffffff; border-bottom: 1 solid #ff0000" bgcolor="#ffffff">



	<form method="post">

	<input type="text" name="story" size="32">

	<input type="hidden" name="do" value="search">
	</form></td>
  <tr>
  <tr>

    <td colspan="5"><table border="0" width="100%" cellspacing="0" cellpadding="6">

      <tr>

        <td width="100%" valign="top" align="center"><table border="0" width="100%" cellspacing="1" cellpadding="3">

          <tr>

            <td width="100%"><?PHP



/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  Here we decide what page to include

 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */



if($_POST['do'] == "search" or $_GET['dosearch'] == "yes"){ $subaction = "search"; $dosearch = "yes"; include("./search.php"); }

elseif($_GET['do'] == "archives"){ include("./show_archives.php"); }

elseif($_GET['do'] == "stats"){ echo"You can download the stats addon and include it here to show how many news, comments ... you have"; /* include("$path/stats.php"); */ }

else{

 $number = "1";

 include("./show_news.php");

 $static = TRUE;

 $template = "Mezzahead";

 include("./show_news.php");}

?>            </td>
          </tr>

        </table></td>
      </tr>

    </table></td>
  </tr>
</table>

<br>

<br>

<table border=0 width=98% style="border-top: 1px #ff0000;">

<tr><td>

    <p align="center" class="Stile1" >copyright 2008 mauz79 for teramodrome.it</td>

</tr></table>
</body>

</html>