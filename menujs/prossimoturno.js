document.write(" <TABLE width=100% border=0 cellPadding=2 cellSpacing=0> ")


if (NumIncVisProTur > 0) {
document.write(" <TD class='rigaTiT'><strong>")
document.write(" <scr" + "ipt type='text/javascript'> ")
document.write(" document.write (RiempiListaIncontri(GetProssimaGiornataDaGiocare(),0)[1].Competizione) </scr" + "ipt><br><br> </strong> ")
document.write(" <br><span class='rigaDaT'><scr" + "ipt type='text/javascript'> ")
document.write(" document.write (dataGiornata[RiempiListaIncontri(GetProssimaGiornataDaGiocare(),0)[1].GiornataDiA])</scr" + "ipt><br><br></span></td> ")
}


for (conta1=1;conta1<=NumIncVisProTur;conta1+=2)
{

document.write(" <TR><TD class='rigaP' align='left'> ")
document.write(" <scr" + "ipt type='text/javascript'> ") 
document.write(" document.write (RiempiListaIncontri(GetProssimaGiornataDaGiocare(),0)[conta1].Nomi.Casa)</scr" + "ipt> ")
document.write(" - ")
document.write(" <scr" + "ipt type='text/javascript'> ")
document.write(" document.write (RiempiListaIncontri(GetProssimaGiornataDaGiocare(),0)[conta1].Nomi.Fuori)</scr" + "ipt> ")
document.write(" </TD></TR> ")
if (conta1<NumIncVisProTur)
	{
document.write(" <TR><TD class='rigaD' align='left'> ")
document.write(" <scr" + "ipt type='text/javascript'> ") 
document.write(" document.write (RiempiListaIncontri(GetProssimaGiornataDaGiocare(),0)[conta1+1].Nomi.Casa)</scr" + "ipt> ")
document.write(" - ")
document.write(" <scr" + "ipt type='text/javascript'> ")
document.write(" document.write (RiempiListaIncontri(GetProssimaGiornataDaGiocare(),0)[conta1+1].Nomi.Fuori)</scr" + "ipt> ")
document.write(" </TD></TR> ")
	}
}
document.write(" </TABLE> ")