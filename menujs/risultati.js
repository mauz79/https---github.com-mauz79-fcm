document.write("<TABLE width=100% border=0 cellPadding=2 cellSpacing=0> ")

if (NumIncVisUltRis > 0) {
document.write(" <TD colspan='2' class='rigaTiT' ><strong> ")
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
document.write(" </TD><TD class='rigaPu' width='30'>")
document.write(" <scr" + "ipt type='text/javascript'> ")
document.write(" document.write (RiempiListaIncontri(GetUltimaGiornataGiocata(),0)[conta2].Gol.Casa)</scr" + "ipt> ")
document.write(" </TR><TR><TD class='rigaP3' align='left'>")
document.write(" <scr" + "ipt type='text/javascript'> ")
document.write(" document.write (RiempiListaIncontri(GetUltimaGiornataGiocata(),0)[conta2].Nomi.Fuori)</scr" + "ipt> ")
document.write(" </TD><TD class='rigaPu' width='30'>")
document.write(" <scr" + "ipt type='text/javascript'> ")
document.write(" document.write (RiempiListaIncontri(GetUltimaGiornataGiocata(),0)[conta2].Gol.Fuori)</scr" + "ipt> ")
document.write(" </TD></TR> ")
if (conta2<NumIncVisUltRis)
	{
document.write(" <tr><td colspan='2' class='vuota'>&nbsp;</td></tr>")
document.write(" <TR><TD class='rigaD3' align='left'> ")
document.write(" <scr" + "ipt type='text/javascript'> ") 
document.write(" document.write (RiempiListaIncontri(GetUltimaGiornataGiocata(),0)[conta2+1].Nomi.Casa)</scr" + "ipt> ")
document.write(" </TD><TD class='rigaDu' width='30'> ")
document.write(" <scr" + "ipt type='text/javascript'> ")
document.write(" document.write (RiempiListaIncontri(GetUltimaGiornataGiocata(),0)[conta2+1].Gol.Casa)</scr" + "ipt> ")
document.write(" </TR><TR><TD class='rigaD3' align='left'>")
document.write(" <scr" + "ipt type='text/javascript'> ")
document.write(" document.write (RiempiListaIncontri(GetUltimaGiornataGiocata(),0)[conta2+1].Nomi.Fuori)</scr" + "ipt> ")
document.write(" </TD><TD class='rigaDu' width='30'>")
document.write(" <scr" + "ipt type='text/javascript'> ")
document.write(" document.write (RiempiListaIncontri(GetUltimaGiornataGiocata(),0)[conta2+1].Gol.Fuori)</scr" + "ipt> ")
document.write(" </TD></TR> ")
	}
}

document.write(" </TABLE> ")