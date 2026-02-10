//FANTAMISTER BEST & WORSE BY PUFFIN


// Oggetti JavaScript per Fantasquadre
// Oggetto Fantasquadra
function Fm(Nome,Scarto,Voti,ScSuVoti,Parz,ModParz,Max,ModMax) {
	this.Nome = Nome
	this.Scarto = Scarto
	this.Voti = Voti
	this.ScSuVoti = ScSuVoti
	this.Parz = Parz
	this.ModParz = ModParz
	this.Max = Max
	this.ModMax = ModMax
}


function FmTot(Nome,ScartoP,Partite) {
	this.Nome = Nome
	this.ScartoP = ScartoP
	this.Partite = Partite
}

function FmHome(Nome,Scarto,ScSuVoti) {
	this.Nome = Nome
	this.Scarto = Scarto
	this.ScSuVoti = ScSuVoti
}


function GeneraBestWorse(){
document.write("<table class='menu' cellspacing='0' cellpadding='2'><tr>")
document.write("<td class='newscel3' bgcolor='#FFFFFF' style='padding-bottom: 5px'>");	
	
document.write("<div class='bestFM'><table style='BORDER: #ffffff 0px solid;' width='600' cellspacing='0' cellpadding='2'><tr class='newscel3'>")
document.write("<td bgcolor='#003366' style='padding-left:2px; color:white; font-size:11; font-weight: bold;' colspan='7'>")
document.write("<scr"+ "ipt type='text/javascript'>")
document.write("document.write('Miglior FantaMister della '+GetUltimaGiornataGiocata()+'a giornata');")
document.write(" </scr" + "ipt> ")
document.write("</td></tr><tr class='newscel3'><td width='10%' rowspan='2'><img alt='fup (1K)' src='img/fup.gif' height='20' width='24' /></td>")
document.write("<td width='30%' style='padding-left:5px; font-size:xx-small'>Nome</td>")
document.write("<td width='12%' style='text-align:center; font-size:xx-small' bgcolor='cc0000'><b><font color='white'>scarto</font></b></td>")
document.write("<td width='12%' style='text-align:center; font-size:xx-small'>voti</td>")
document.write("<td width='12%' style='text-align:center; font-size:xx-small'>sc/voti</td>")
document.write("<td width='12%' style='text-align:center; font-size:xx-small'>parz</td>")
document.write("<td width='12%' style='text-align:center; font-size:xx-small'>max</td>")
document.write("</td></tr><tr class='newscel3' bgcolor='#66ccff' ><td width='40%' style='padding-left:5px;'>")
document.write("<b><scr"+ "ipt type='text/javascript'>document.write(arrFantamister[1].Nome)</scr" + "ipt></b></td>")
document.write("<td width='12%' style='text-align:center;' bgcolor='#cc0000'><b><font color='white'>")
document.write("<scr"+ "ipt type='text/javascript'>document.write(arrFantamister[1].Scarto)</scr" + "ipt></font></b></td>")
document.write("<td width='12%' style='text-align:center;'>")
document.write("<scr"+ "ipt type='text/javascript'>document.write(arrFantamister[1].Voti)</scr" + "ipt></td>")
document.write("<td width='12%' style='text-align:center;'>")
document.write("<scr"+ "ipt type='text/javascript'>document.write(arrFantamister[1].ScSuVoti)</scr" + "ipt></td>")
document.write("<td width='12%' style='text-align:center;'>")
document.write("<scr"+ "ipt type='text/javascript'>document.write(arrFantamister[1].Parz)</scr" + "ipt></td>")
document.write("<td width='12%' style='text-align:center;'>")
document.write("<scr"+ "ipt type='text/javascript'>document.write(arrFantamister[1].Max)</scr" + "ipt></td>")
document.write("</tr><tr><td bgcolor='#003366' style='padding-left:2px; color:white; font-size:11px; font-weight: bold;' colspan='7'>")
document.write("<scr"+ "ipt type='text/javascript'>")
document.write("document.write('Peggior FantaMister della '+GetUltimaGiornataGiocata()+'a giornata');</scr" + "ipt>")
document.write("</td></tr><tr class='newscel3'><td width='10%' rowspan='2'><img alt='fup (1K)' src='img/fdown.gif' height='20' width='24' /></td>")
document.write("<td width='30%' style='padding-left:5px; font-size:xx-small'>Nome</td>")
document.write("<td width='12%' style='text-align:center; font-size:xx-small' bgcolor='#cc0000'><b><font color='white'>scarto</font></b></td>")
document.write("<td width='12%' style='text-align:center; font-size:xx-small'>voti</td>")
document.write("<td width='12%' style='text-align:center; font-size:xx-small'>sc/voti</td>")
document.write("<td width='12%' style='text-align:center; font-size:xx-small'>parz</td>")
document.write("<td width='12%' style='text-align:center; font-size:xx-small'>max</td>")
document.write("<tr class='newscel3' bgcolor='#66ccff' ><td width='40%' style='padding-left:5px;'>")
document.write("<b><scr"+ "ipt type='text/javascript'>document.write(arrFantamister[arrFantamister.length-1].Nome)</scr" + "ipt></b></td>")
document.write("<td width='12%' style='text-align:center;' bgcolor='cc0000'><b><font color='white'>")
document.write("<scr"+ "ipt type='text/javascript'>document.write(arrFantamister[arrFantamister.length-1].Scarto)</scr" + "ipt></font></b></td>")
document.write("<td width='12%' style='text-align:center;'>")
document.write("<scr"+ "ipt type='text/javascript'>document.write(arrFantamister[arrFantamister.length-1].Voti)</scr" + "ipt></td>")
document.write("<td width='12%' style='text-align:center;'>")
document.write("<scr"+ "ipt type='text/javascript'>document.write(arrFantamister[arrFantamister.length-1].ScSuVoti)</scr" + "ipt></td>")
document.write("<td width='12%' style='text-align:center;'>")
document.write("<scr"+ "ipt type='text/javascript'>document.write(arrFantamister[arrFantamister.length-1].Parz)</scr" + "ipt></td>")
document.write("<td width='12%' style='text-align:center;'>")
document.write("<scr"+ "ipt type='text/javascript'>document.write(arrFantamister[arrFantamister.length-1].Max)</scr" + "ipt></td>")
document.write("</tr></table></div></td></table>")
}

// function GeneraFmClass(){
// document.write("<div class='fantatot'><table border='0' style='BORDER: #ff0000 1px solid;' width='166px' cellspacing=0 cellpadding=2>")
// document.write("<img src='img/classfm.gif' border='0' style='margin-bottom: 3px'>")
// document.write("<td class='newscel3' bgcolor='#FFFFFF' style='padding-bottom: 5px'>");
// //document.write("<tr><td bgcolor='#003366' colspan='3' style='padding-bottom:5px; color:white; font-size:x-small;'>Classifica FM</td></tr>")
// for (conta=1;conta<arrFantamTot.length;conta+=1)
// {
// document.write("<tr class='newscel3'>")
// if( conta % 2 == 0 ) document.write("<td bgcolor='#66ccff' align='left' style='padding-left:5px;'>")
// else document.write("<td bgcolor='#FFFFFF' style='padding-left:5px;' align='left'>")
// document.write(" <scr" + "ipt type='text/javascript'> ")
// document.write(" document.write (arrFantamTot[conta].Nome) ")
// document.write(" </scr" + "ipt> ")
// document.write(" </td> ")
// if( conta % 2 == 0 ) document.write("<td bgcolor='#66ccff' align='left'>")
// else document.write("<td bgcolor='#FFFFFF' align='left'>")
// document.write(" <scr" + "ipt type='text/javascript'> ")
// document.write(" document.write (arrFantamTot[conta].ScartoP) ")
// document.write(" </scr" + "ipt> ")
// document.write(" </td> ")
// if( conta % 2 == 0 ) document.write("<td bgcolor='#66ccff' align='center'>")
// else document.write("<td bgcolor='#FFFFFF' align='center'>")
// document.write(" <scr" + "ipt type='text/javascript'> ")
// document.write(" document.write (arrFantamTot[conta].Partite)  ")
// document.write(" </scr" + "ipt></td></tr> ")
// }
// document.write("</table></div>")
// }

function GeneraFmClass(){
	
document.write("<table class='menu' cellspacing='0' cellpadding='2'><tr>")
// document.write("<img src='img/classfm.gif' border='0' style='margin-bottom: 3px'>")
document.write("<td class='newscel3' bgcolor='#FFFFFF' style='padding-bottom: 5px'>");	

document.write(" <TABLE width=100% border=0 cellPadding=2 cellSpacing=0> ")
	
document.write("<div class='fantatot'><table border='0' style='BORDER: #ffffff 0px solid;' width='600px' cellspacing=0 cellpadding=2>")
document.write("<tr><td bgcolor='#003366' colspan='3' style='padding-left:2px; color:white; font-size:11; font-weight: bold;'>MiniClassifica Fantamister</td></tr>")
for (conta=1;conta<arrFantamTot.length;conta+=1)
{
document.write("<tr class='newscel3'>")
if( conta % 2 == 0 ) document.write("<td bgcolor='#66ccff' align='left' style='padding-left:5px;'>")
else document.write("<td bgcolor='#FFFFFF' style='padding-left:5px;' align='left'>")
document.write(" <scr" + "ipt type='text/javascript'> ")
document.write(" document.write (arrFantamTot[conta].Nome) ")
document.write(" </scr" + "ipt> ")
document.write(" </td> ")
if( conta % 2 == 0 ) document.write("<td bgcolor='#66ccff' align='left'>")
else document.write("<td bgcolor='#FFFFFF' align='left'>")
document.write(" <scr" + "ipt type='text/javascript'> ")
document.write(" document.write (arrFantamTot[conta].ScartoP) ")
document.write(" </scr" + "ipt> ")
document.write(" </td> ")
if( conta % 2 == 0 ) document.write("<td bgcolor='#66ccff' align='center'>")
else document.write("<td bgcolor='#FFFFFF' align='center'>")
document.write(" <scr" + "ipt type='text/javascript'> ")
document.write(" document.write (arrFantamTot[conta].Partite)  ")
document.write(" </scr" + "ipt></td></tr> ")
}
document.write("</div></table>")
}
document.write("</td></tr></div></table>><br>");

/* besteworst per home*/


function GeneraBestWorseHome(){
document.write("<table class='menu' cellspacing='0' cellpadding='2'><tr>")
document.write("<img src='img/classfm.gif' border='0' style='margin-bottom: 3px'>")
document.write("<td class='newscel3' width='166px' bgcolor='#FFFFFF' style='padding-bottom: 5px'>");	
	
document.write("<div class='bestFM'><table style='BORDER: #ffffff 0px solid;' width='100%' cellspacing='0' cellpadding='2'><tr>")
document.write("<td bgcolor='#003366' style='padding-left:2px; color:white; font-size:11px; font-weight: bold;' colspan='7'>")
document.write("<scr"+ "ipt type='text/javascript'>")
document.write("document.write(GetUltimaGiornataGiocata()+'a giornata');")
document.write(" </scr" + "ipt> ")
document.write("</td></tr><tr class='newscel3'><td width='15%' rowspan='2'><img alt='fup (1K)' src='img/fup.gif' height='20' width='24' /></td>")
document.write("<td width='40%' style='padding-left:5px; font-size:9px'>Nome</td>")
document.write("<td width='25%' style='text-align:center; font-size:9px' bgcolor='cc0000'><font color='white'>scarto</font></td>")
document.write("<td width='20%' style='text-align:center; font-size:9px'>sc/voti</td>")
document.write("</td></tr><tr class='newscel3' bgcolor='#66ccff' ><td width='55%' style='padding-left:5px; font-size:9px'>")
document.write("<scr"+ "ipt type='text/javascript'>document.write(arrFantamister[1].Nome)</scr" + "ipt></td>")
document.write("<td width='25%' style='text-align:center; font-size:9px' bgcolor='#cc0000'><font color='white'>")
document.write("<scr"+ "ipt type='text/javascript'>document.write(arrFantamister[1].Scarto)</scr" + "ipt></font></td>")
document.write("<td width='20%' style='text-align:center; font-size:9px'>")
document.write("<scr"+ "ipt type='text/javascript'>document.write(arrFantamister[1].ScSuVoti)</scr" + "ipt></td>")
document.write("</tr><tr><td bgcolor='#003366' style='padding-left:2px; color:white; font-size:11px; font-weight: bold;' colspan='7'>")
document.write("<scr"+ "ipt type='text/javascript'>")

document.write("document.write(GetUltimaGiornataGiocata()+'a giornata');</scr" + "ipt>")
document.write("</td></tr><tr class='newscel3'><td width='15%' rowspan='2'><img alt='fup (1K)' src='img/fdown.gif' height='20' width='24' /></td>")
document.write("<td width='40%' style='padding-left:5px; font-size:9px'>Nome</td>")
document.write("<td width='25%' style='text-align:center; font-size:9px' bgcolor='#cc0000'><font color='white'>scarto</font></td>")
document.write("<td width='20%' style='text-align:center; font-size:9px'>sc/voti</td>")
document.write("<tr class='newscel3' bgcolor='#66ccff' ><td width='55%' style='padding-left:5px; font-size:9px'>")
document.write("<scr"+ "ipt type='text/javascript'>document.write(arrFantamister[arrFantamister.length-1].Nome)</scr" + "ipt></td>")
document.write("<td width='25%' style='text-align:center; font-size:9px' bgcolor='cc0000'><font color='white'>")
document.write("<scr"+ "ipt type='text/javascript'>document.write(arrFantamister[arrFantamister.length-1].Scarto)</scr" + "ipt></font></td>")
document.write("<td width='20%' style='text-align:center; font-size:9px'>")
document.write("<scr"+ "ipt type='text/javascript'>document.write(arrFantamister[arrFantamister.length-1].ScSuVoti)</scr" + "ipt></td>")
document.write("</tr></table></div></td></table>")
}

/*fine*/
