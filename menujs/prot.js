//modificata by Andrea Bertolazzi
document.write("<table class='menu' cellspacing='0' cellpadding='2'><tr>")
document.write("<img src='img/prot.gif' border='0' style='margin-bottom: 3px'>")
document.write("<td class='newscel3' bgcolor='#FFFFFF' style='padding-bottom: 5px'>");
//********************

document.write(" <TABLE width=100% border=0 cellPadding=2 cellSpacing=0> ")


if (NumIncVisProTur > 0) {
document.write(" <TD colspan='2' class='rigaTiT'><strong> ")
document.write(" <scr" + "ipt type='text/javascript'> ")
document.write(" document.write (RiempiListaIncontri(GetProssimaGiornataDaGiocare(),0)[1].Competizione) </scr" + "ipt></strong> ")
document.write(" <br><span class='rigaDat'><scr" + "ipt type='text/javascript'> ")
document.write(" document.write (dataGiornata[RiempiListaIncontri(GetProssimaGiornataDaGiocare(),0)[1].GiornataDiA])</scr" + "ipt></span></td> ")
}


for (conta1=1;conta1<=NumIncVisProTur;conta1+=2)
{
document.write(" <tr><td colspan='2' class='vuota'>&nbsp;</td></tr>")
document.write(" <TR><td rowspan='2' class='rigaVSp'>Vs</td><TD class='rigaP2'> ")
document.write(" <scr" + "ipt type='text/javascript'> ") 
document.write(" document.write (RiempiListaIncontri(GetProssimaGiornataDaGiocare(),0)[conta1].Nomi.Casa)</scr" + "ipt> ")
document.write(" </td></tr><tr><TD class='rigaP2'>  ")
document.write(" <scr" + "ipt type='text/javascript'> ")
document.write(" document.write (RiempiListaIncontri(GetProssimaGiornataDaGiocare(),0)[conta1].Nomi.Fuori)</scr" + "ipt> ")
document.write(" </TD></TR> ")
if (conta1<NumIncVisProTur)
	{
document.write(" <tr><td colspan='2' class='vuota'>&nbsp;</td></tr>")
document.write(" <TR><td rowspan='2' class='rigaVSd'>Vs</td><TD class='rigaD2'> ")
document.write(" <scr" + "ipt type='text/javascript'> ") 
document.write(" document.write (RiempiListaIncontri(GetProssimaGiornataDaGiocare(),0)[conta1+1].Nomi.Casa)</scr" + "ipt> ")
document.write(" </td></tr><tr><TD class='rigaD2'>  ")
document.write(" <scr" + "ipt type='text/javascript'> ")
document.write(" document.write (RiempiListaIncontri(GetProssimaGiornataDaGiocare(),0)[conta1+1].Nomi.Fuori)</scr" + "ipt> ")
document.write(" </TD></TR> ")
	}
}
document.write(" </TABLE> ")


//modificata by Puffin
document.write("</td></tr></table><br>");
//********************

