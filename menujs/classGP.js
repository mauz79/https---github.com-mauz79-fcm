//modificata by Andrea Bertolazzi
var arrGirone=new Array()
var arrIDGironi=new Array()
var contatore=1
var i=1
var j=2
var w
var contameno=0
document.write("<table class='menu' cellspacing='0' cellpadding='2'><tr>")
document.write("<img src='img/clas.gif' border='0' style='margin-bottom: 3px'>")
document.write("<td class='newscel3' bgcolor='#FFFFFF' style='padding-bottom: 5px'>");
document.write("<div id='layMiniclassCampioH' class='IntLayer'>&nbsp;")
document.write("<a href='#' onclick='invertiDisplayLayer(\"layMiniclassCampio\")'><b>Campionato</b></a>")
document.write("</div>")
document.write("<div id='layMiniclassCampio'>")
//********************

document.write("<table border=0 width=100% cellspacing=0 cellpadding=2><tr><td colspan='2' class='vuota'>&nbsp;</td></tr>")

for (conta=1;conta<=NumSquVisCla;conta+=1)
{

document.write("<tr>")

//if( conta % 2 == 0 ) document.write("<td bgcolor='#CCCCCC' align='left'>")
//else document.write("<td bgcolor='#EEEEEE' align='left'>")

if( conta % 2 == 0 ) document.write("<td class='rigaD' align='left'>")
else document.write("<td class='rigaP' align='left'>")


document.write(" <div align='left'><scr" + "ipt type='text/javascript'> ")
document.write(" document.write (arrClassifica[conta].Nome) ")
document.write(" </scr" + "ipt> ")
document.write(" </td> ")


//if( conta % 2 == 0 ) document.write("<td bgcolor='#CCCCCC' align='right'>")
//else document.write("<td bgcolor='#EEEEEE' align='right'>")

if( conta % 2 == 0 ) document.write("<td class='rigaDTtot'>")
else document.write("<td class='rigaPTtot'>")


document.write(" <scr" + "ipt type='text/javascript'> ")
document.write(" document.write (arrClassifica[conta].TTot)  ")
document.write(" </scr" + "ipt></div></td></tr> ")
}

document.write("</table>")


//modificata by Andrea "Maelstrom"Bertolazzi
document.write("</div>")
document.write("<div id='layMiniclassCoppaH' class='IntLayer'>&nbsp;")
document.write("<a href='#' onclick='invertiDisplayLayer(\"layMiniclassCoppa\")'><b>Coppa</b></a>")
document.write("</div>")
document.write("<div id='layMiniclassCoppa' style='display: none;'>")   
//**************

//Modificato da Andrea Bertolazzi
for (conta=2;conta<arrClassifica.length;conta++){
	contameno++
	
	if (arrClassifica[conta].IDGirone>arrClassifica[contameno].IDGirone){
											arrGirone[contatore]=conta
											arrIDGironi[contatore]=contatore
											contatore++
											}
}
arrGirone[contatore]=arrClassifica.length
//Modificato da Andrea Bertolazzi
for (w=1;w<arrIDGironi.length;w++){
document.write("<table border=0 width=100% cellspacing=0 cellpadding=2><tr><td colspan='2' class='vuota'>&nbsp;</td></tr>")
document.write("<span class='t-xxsBB'>&nbsp;"+arrGironi[j].Nome+"</span>")
for (conta=arrGirone[i];conta<arrGirone[j];conta++)
{

document.write("<tr>")

//if( conta % 2 == 0 ) document.write("<td bgcolor='#CCCCCC' align='left'>")
//else document.write("<td bgcolor='#EEEEEE' align='left'>")

if( conta % 2 == 0 ) document.write("<td class='rigaD' align='left'>")
else document.write("<td class='rigaP' align='left'>")


document.write(" <div align='left'><scr" + "ipt type='text/javascript'> ")
document.write(" document.write (arrClassifica[conta].Nome) ")
document.write(" </scr" + "ipt> ")
document.write(" </td> ")


//if( conta % 2 == 0 ) document.write("<td bgcolor='#CCCCCC' align='right'>")
//else document.write("<td bgcolor='#EEEEEE' align='right'>")

if( conta % 2 == 0 ) document.write("<td class='rigaDgol' align='right'>")
else document.write("<td class='rigaPgol' align='right'>")


document.write(" <scr" + "ipt type='text/javascript'> ")
document.write(" document.write (arrClassifica[conta].Punti)  ")
document.write(" </scr" + "ipt></div></td></tr> ")
}
document.write("</table>")
i++
j++
}



//modificata by Andrea "Maelstrom"Bertolazzi
document.write("</div>")
document.write("</td></tr></table><br>");
//********************