//modificata by Andrea Bertolazzi
var arrGirone=new Array()
var arrIDGironi=new Array()
var contatore=1
var i=1
var j=2
var w
var contameno=0
document.write("<table border=0 width=100% cellspacing=0 cellpadding=2>")

//document.write("<tr><TD colspan='2' class='rigaTiT'>")
//document.write(" <scr" + "ipt type='text/javascript'> ")
//document.write(" document.write (RiempiListaIncontri(GetUltimaGiornataGiocata(),0)[1].Competizione) </scr" + "ipt></td></tr> ")


document.write("<tr><TD class='rigaTiT'>Squadra<br><br><br></td><TD class='rigaTiT'>pt.<br><br><br></td></tr> ")





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

if( conta % 2 == 0 ) document.write("<td class='rigaDgol' align='right'>")
else document.write("<td class='rigaPgol' align='right'>")


document.write(" <scr" + "ipt type='text/javascript'> ")
document.write(" document.write (arrClassifica[conta].Punti)  ")
document.write(" </scr" + "ipt></div></td></tr> ")
}

document.write("</table>")

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