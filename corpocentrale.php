<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">



<html>



<head>



	<title>La Lega</title>
	<meta name="author" content="Andrea Bertolazzi - www.badtothebone.it">
	<link href="fcmmael.css" rel="stylesheet" type="text/css">
	<base target="_self">

	<script src="script.js" type="text/javascript"></script>
	<script src="js/fcmVariabili.js" type="text/javascript"></script>
	<script src="js/fcmGenerale.js" type="text/javascript"></script>
	<script src="js/fcmLegaDati.js" type="text/javascript"></script>
	<script src="js/fcmSerieAFunzioni.js" type="text/javascript"></script>
	<script src="js/fcmSerieADati.js" type="text/javascript"></script>
	<script src="js/fcmCalendarioFunzioni.js" type="text/javascript"></script>
	<script src="js/fcmCalendarioDati.js" type="text/javascript"></script>
	
<!-- MINI CLASSIFICHE -->

	<script src="js/fcmCompetizioniFunzioni.js"></script>
	<script src="js/fcmCompetizioniDati.js"></script>
	<script src="js/fcmUtils.js" type="text/javascript"></script>
	<script src="js/fcmTabelle.js" type="text/javascript"></script>
	<script src="js/fcmClassificaFunzioni.js" type="text/javascript"></script>
	<script src="js/fcmClassificaDati.js" type="text/javascript"></script>
	<script src="js/DataA.js" type="text/javascript"></script>

<!-- MINI CLASSIFICHE -->



<!-- best e worst -->



	<script src="js/fcmGenerale.js" type="text/javascript"></script>
	<script src="js/fcmCalendarioFunzioni.js" type="text/javascript"></script>
	<script src="js/fcmCalendarioDati.js" type="text/javascript"></script>
	<script src="js/fcmFantamisterFunzioni.js" type="text/javascript"></script>
	<script src="js/fcmFantamisterTot.js" type="text/javascript"></script>
	
	<script language="javascript" type="text/javascript">
	document.write("<script src='js/fcmFantamisterDati"+GetUltimaGiornataGiocata()+".js' type='text/javascript'></scr" + "ipt>")</script>

<!-- puffin big match , anche se non ha senso... -->

	<script src="js/fcmGenerale.js" type="text/javascript"></script>
    <script src="js/fcmCompetizioniFunzioni.js" type="text/javascript"></script>
    <script src="js/fcmCompetizioniDati.js" type="text/javascript"></script>
    <script src="js/fcmClassificaFunzioni.js" type="text/javascript"></script>
    <script src="js/fcmClassificaDati.js" type="text/javascript"></script>
    <script src="js/fcmCalendarioFunzioni.js" type="text/javascript"></script>
    <script src="js/fcmCalendarioDati.js" type="text/javascript"></script>
    <script src="js/fcmSerieAFunzioni.js" type="text/javascript"></script>
    <script src="js/fcmSerieADati.js" type="text/javascript"></script> 
    <script src="js/fcmFantasquadreFunzioni.js" type="text/javascript"></script>
    <script src="js/fcmFantasquadreDati.js" type="text/javascript"></script>
    <script src="js/fcmPuffinBigmatch.js" type="text/javascript"></script>
	
	<!-- scudo -->
	<script src="js/fcmLegaDati.js" type="text/javascript"></script>
     <script src="js/fcmAlboDOroFunzioni.js" type="text/javascript"></script>
     <script src="js/fcmAlboDOroDati.js" type="text/javascript"></script>
     <script src="persjs/fcmConfrontiFunzioni.js" type="text/javascript"></script>
     <script src="persjs/fcmConfrontiDati.js" type="text/javascript"></script>
     <script src="js/fcmSerieAFunzioni.js" type="text/javascript"></script>
     <script src="js/fcmSerieADati.js" type="text/javascript"></script>
     <script src="js/fcmFantasquadreFunzioni.js" type="text/javascript"></script>
     <script src="js/fcmFantasquadreDati.js" type="text/javascript"></script>
     <script src="persjs/LukeskyScudo.js" type="text/javascript"></script>
</head>
<!-- fine -->







<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
<style type="text/css">
h1 {
	color: #FFFFFF;
}
.Stile3 {font-size: 9px}
</style>

<body>
				<td style="padding-left: 0px; padding-top: 0px; padding-right: 0px;" bgcolor="#FFFFFF" valign="top" width="100%">
					
					<table cellpadding="2" cellspacing="0" width="720" height="1200">
						<tbody>
							
								<!-- news cute.php -->
								
					<!--puffin big match -->  
					<td width="74%" align="left" valign="top" bordercolor="#003366" bgcolor="#FFFFFF" style="padding-left: 10px; padding-top: 12px; padding-right: 10px; border-left:1px solid #003366; border-top:1px solid #003366; border-right: 1px solid #003366; border-bottom:1px solid #003366;">
										<h2 class="titletext">Big Match</h2>	
					  <div align="center">
										  <script type="text/javascript">
      var IdSqCasa, IdSqOspiti
      for(p=1;p<arrFantasquadre.length;p++) {
         if (arrFantasquadre[p].Nome == casa) {
         IdSqCasa=arrFantasquadre[p].ID
         }   else if (arrFantasquadre[p].Nome == ospiti) {
         IdSqOspiti=arrFantasquadre[p].ID
         }
         }
		 
		 
document.write(" <img src='img/sq/"+casa+".jpg' height='100' align='center'  > ")
document.write(" <img src='img/sq/vs.jpg' width='50' align='center' style='padding-left:40px;'> ")

document.write(" <img src='img/sq/"+ospiti+".jpg' height='100' align='center' style='padding-left:40px;'>")

document.write("<br><b>"+casa+"</b><i> vs  </i><b>" +ospiti+"</b><br>");
document.write("differenza punti: "+diffPunti);
                                        </script>
					                    </div></td> <!-- fine puffin big match -->
								

<td></td>

								  <td width="22%" height="100%" rowspan="4" cellpadding="10" align="left" valign="top" bordercolor="#FF0000" bgcolor="#FFFFFF" style="border-bottom: #ff0000; border-top:#ff0000; border-right: #ff0000; ">
								

								<!-- INIZIO MINI CLASSIFICHE -->
								<script language="javascript" type="text/javascript">GeneraBestWorseHome()</script>
								
							
								<div align="center" valign="top" class='tooltip' id='link1' style='width: 166px'>
								<script language='JavaScript' src='menujs/class.js'></script>
								</div>

								<div align="center" class='tooltip' id='link2' style='width: 166px'>
								<script language='JavaScript' src='menujs/risultati.js'></script>
								</div>

								<div align="center" class='tooltip' id='link3' style='width: 166px'>
								<script language='JavaScript' src='menujs/prossimoturno.js'></script>
								</div>
	
							
	  							<script language="javascript" type="text/javascript">							
									if (GPorNOT=="no") {
				 					document.write("<scr" + "ipt language='JavaScript' type='text/javascript' src='menujs/minicSD.js'></scr" + "ipt>");
	   								} 
									else {
	   								document.write("<scr" + "ipt language='JavaScript' type='text/javascript' src='menujs/minicGP.js'></scr" + "ipt>");
									}
								</script>
	
	  							<!-- FINE MINI CLASSIFICHE -->        						</td>
								
							<!-- riga vuota
								<tr>
								<td valign="top" bordercolor="#003366" bgcolor="#FFFFFF" style="padding-left: 10px; padding-top: 12px; padding-right: 10px; border-left:1px solid #003366; border-top:1px solid #003366; border-right: 1px solid #003366;">								</td>
						  		</tr> 
								
								<tr>-->
<tr>
<td width="74%" align="left" valign="top" bordercolor="#003366" bgcolor="#FFFFFF" style="padding-left: 10px; padding-top: 12px; padding-right: 10px; padding-bottom: 10px; border-left:1px solid #003366; border-top:1px solid #003366; border-right: 1px solid #003366; border-bottom:1px solid #003366;">
										<h2 class="titletext">News</h2>	
										<iframe name="frameguestbook" src="cutenews/news.php" height="425" frameborder="0" scrolling="auto" width="100%"></iframe> 
	  </td>
							<!-- guestbook -->	
								<tr>
								<td width="74%" align="left" valign="top" bordercolor="#003366" bgcolor="#FFFFFF" style="padding-left: 10px; padding-top: 12px; padding-right: 10px; border-left:1px solid #003366; border-top:1px solid #003366; border-right: 1px solid #003366; border-bottom:1px solid #003366;">
										<h2 class="titletext">TempoReale & Ultimora</h2>	
										<embed src="http://www.gazzetta.it/tools1024/includes/flash/MascherinaTempoReale.swf?withForceReload=Y&amp;forceReloadTimer=300000&amp;path=http://www.gazzetta.it/temporeale/flash/" width="246" height="85" align="middle" quality="high" name="temporeale" allowscriptaccess="sameDomain" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer">
								 <object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=5,0,0,0" align="middle" height="85" width="246"> 
      <param name="allowScriptAccess" value="sameDomain"> 
      <param name="wmode" value="transparent"> 
      <param name="movie" value="http://www.gazzetta.it/tools/includes/flash/news-home-counter.swf?xml_path=http://www.gazzetta.it/ultimora/notizie/&amp;xml_name=smallnotiziegazzettahome.xml&amp;mostra_sottosezione=no&amp;mostra_data=no&amp;mostra_ora=si&amp;rotazioni=2"> 
      <param name="quality" value="high"> 
      <param name="bgcolor" value="#ffffff"> 
      <embed src="http://www.gazzetta.it/tools/includes/flash/news-home-counter.swf?xml_path=http://www.gazzetta.it/ultimora/notizie/&amp;xml_name=smallnotiziegazzettahome.xml&amp;mostra_sottosezione=no&amp;mostra_data=no&amp;mostra_ora=si&amp;rotazioni=2" quality="high" bgcolor="#ffffff" name="news" allowscriptaccess="sameDomain" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" align="middle" height="77" width="246"></object>
            </td>
								
								<tr>
								<td valign="top" bordercolor="#003366" bgcolor="#FFFFFF" style="padding-left: 10px; padding-top: 12px; padding-right: 15px; border-left:1px solid #003366; border-bottom:1px solid #003366; border-right: 1px solid #003366; border-top:1px solid #003366;">

									<h2 class="titletext">Guestbook</h2>
									<iframe name="frameguestbook" src="gb/index.html" frameborder="0" height="300" scrolling="auto" width="100%"></iframe>								</td>
							
						</tbody>
				  </table>



				</td>

	<script type="text/javascript" language="javascript" src="fkounter5/counter.js.php?id=corpocentrale&mode=hidden"></script>



</body>



</html>







