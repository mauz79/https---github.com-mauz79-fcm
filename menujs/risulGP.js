//modificata by Andrea Bertolazzi
document.write("<table class='menu' cellspacing='0' cellpadding='2'><tr>")
document.write("<img src='img/ulti.gif' border='0' style='margin-bottom: 3px'>")
document.write("<td class='newscel3' bgcolor='#FFFFFF' style='padding-bottom: 5px'>");
//********************


document.write("<TABLE width=100% border=0 cellPadding=2 cellSpacing=0> ")

if (NumIncVisUltRis > 0) {
document.write(" <TD class='rigaTiT' colSpan='2'><strong> ")
document.write(" <scr" + "ipt type='text/javascript'> ")
document.write(" document.write (RiempiListaIncontri(GetUltimaGiornataGiocata(),0)[1].Competizione) </scr" + "ipt></strong> ")
document.write(" <br><span class='rigaDat'><scr" + "ipt type='text/javascript'> ")
document.write(" document.write (dataGiornata[RiempiListaIncontri(GetUltimaGiornataGiocata(),0)[1].GiornataDiA])</scr" + "ipt></span></td> ")
}

for (conta2=1;conta2<=NumIncVisUltRis;conta2+=2)
{
document.write(" <tr><td colspan='2' class='vuota'>&nbsp;</td></tr>")
document.write(" <TR><TD class='rigaP3' align='left'>")
document.write(" <scr" + "ipt type='text/javascript'> ") 
document.write(" document.write (RiempiListaIncontri(GetUltimaGiornataGiocata(),0)[conta2].Nomi.Casa)</scr" + "ipt> ")
document.write(" </TD><TD class='rigaPuGP' width='30'>")
document.write(" <scr" + "ipt type='text/javascript'> ")
document.write(" document.write (RiempiListaIncontri(GetUltimaGiornataGiocata(),0)[conta2].Totali.Casa)</scr" + "ipt> ")
document.write(" </TD></TR> ")
if (conta2<NumIncVisUltRis)
	{
document.write(" <tr><td colspan='2' class='vuota'>&nbsp;</td></tr>")
document.write(" <TR><TD class='rigaD3' align='left'> ")
document.write(" <scr" + "ipt type='text/javascript'> ") 
document.write(" document.write (RiempiListaIncontri(GetUltimaGiornataGiocata(),0)[conta2+1].Nomi.Casa)</scr" + "ipt> ")
document.write(" </TD><TD class='rigaDuGP' width='30'> ")
document.write(" <scr" + "ipt type='text/javascript'> ")
document.write(" document.write (RiempiListaIncontri(GetUltimaGiornataGiocata(),0)[conta2+1].Totali.Casa)</scr" + "ipt> ")
document.write(" </TD></TR> ")
	}
}

document.write(" </TABLE> ")

//modificata by Puffin
document.write("</td></tr></table><br>");
//********************

