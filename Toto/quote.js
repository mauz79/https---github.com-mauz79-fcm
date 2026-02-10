var Ma // la fantamedia della squadra che gioca in casa
var Mb // la fantamedia della squadra che gioca in trasferta
var maxM
var maxP

var aggio=0.15 //vantaggio del banco
var sogliaUnderOver=69 //con la media dei totali a 69 ciascuna squadra può far 1 o 2 reti...
var scarto12gol=6 //la differenza fra un gol e il secondo

var prob1
var probX
var prob2

var probUnder
var probOver

var Pa // punti della squadra che gioca in casa
var Pb // punti della squadra che gioca in trasferta

var D // la differenza dei punti (ipotizzo che ne abbia di meno la squadra in trasferta) 

function roundTo(decimalpositions){
	var i = this * Math.pow(10,decimalpositions);
	i = Math.round(i);
	return i / Math.pow(10,decimalpositions);
}
Number.prototype.roundTo = roundTo; 


if (NumIncVisProTur > 0) {
	document.write(" <tr class='newsheader'><TD colspan=9 class=toto><strong> ")
	document.write(" <scr" + "ipt type='text/javascript'> ")
	document.write(" document.write (RiempiListaIncontri(GetProssimaGiornataDaGiocare(),0)[1].Competizione) </scr" + "ipt></strong> ")
	document.write(" <scr" + "ipt type='text/javascript'> ")
	document.write(" document.write (dataGiornata[RiempiListaIncontri(GetProssimaGiornataDaGiocare(),0)[1].GiornataDiA])</scr" + "ipt></td> </tr>")
}

document.write(" <TR><TD bgcolor=#FFFFFF colspan=1></TD> ")
document.write(" <td bgcolor=#e6868e align=center><font color=white><b>1</b></font></td><td bgcolor=#7275c6 align=center><font color=white><b>X</b></font></td><td bgcolor=#66a0f5 align=center><font color=white><b>2</b></font></td><td bgcolor=#8eff8e align=center><font color=white><b>Under</b></font></td><td bgcolor=#FFaa66 align=center><font color=white><b>Over</b></font></td></TR>")

partita=0
for (conta1=1;conta1<=NumIncVisProTur;conta1++)
{

	for (var conta2=1;conta2<=NumSquVisCla;conta2++){
		if(arrClassifica[conta2].Nome==RiempiListaIncontri(GetProssimaGiornataDaGiocare(),0)[conta1].Nomi.Casa){
			Ma=arrClassifica[conta2].TMed
			Pa=arrClassifica[conta2].Punti
		}
	}
	for (var conta3=1;conta3<=NumSquVisCla;conta3++){
		if(arrClassifica[conta3].Nome==RiempiListaIncontri(GetProssimaGiornataDaGiocare(),0)[conta1].Nomi.Fuori){
			Mb=arrClassifica[conta3].TMed
			Pb=arrClassifica[conta3].Punti
		}
	}
	
	D = Pa-Pb
	if (D<0){D=Pb-Pa}
	
	
	if(Ma>=Mb){maxM=Ma
	} else{maxM=Mb
	}
	
	if(Pa>=Pb){maxP=Pa
	} else{maxP=Pb
	}
	
	var RDM=((Ma-Mb)/(maxM-60))
	var RDC=((Pa-Pb)/maxP)
	
	var RDassoluto
	if(RDM+RDC>=0){RDassoluto=(RDM+RDC)
	}else(RDassoluto=(0-(RDM+RDC)))
	
		probX=(1-(RDassoluto/2)/2)
		prob1=(((2.1+RDM+RDC)/2)/2)
		prob2=(0-(((0-1.9+RDM+RDC)/2)/2))
		
		var probTripla = prob1+probX+prob2

		quota1=((probTripla/prob1-aggio))
		var torta1=(1/quota1)
		
		quotax=((probTripla/probX-aggio))
		var tortax=(1/quotax)
		
		quota2=((probTripla/prob2-aggio))
		var torta2=(1/quota2)


		var tortaTot=torta1+torta2+tortax

		spicchio1=(100*torta1/tortaTot).roundTo(1)
		spicchio2=(100*torta2/tortaTot).roundTo(1)
		spicchiox=(100*tortax/tortaTot).roundTo(1)

		var scartoUnderOver=((Ma+Mb)/2)-sogliaUnderOver
		
		if((scartoUnderOver/scarto12gol)>=0){
			probOver=(Math.min(0.4+(scartoUnderOver/scarto12gol),0.75)*100).roundTo(1)
			probUnder=(100-probOver).roundTo(1)
		}else{			
			probUnder=((Math.min(0.4-(scartoUnderOver/scarto12gol),0.75))*100).roundTo(1)
			probOver=(((100-probUnder))).roundTo(1)
		}
		
			quotaOver=(100/probOver-aggio).roundTo(2)
			quotaUnder=(100/probUnder-aggio).roundTo(2)
			var spicchioUnder=(probUnder/100).roundTo(1)
			var spicchioOver=(probOver/100).roundTo(1)
		
	partita++
	document.write(" <TR bgcolor=#FFF2F8><TD align=center class=totoD> ")
	document.write(" <scr" + "ipt type='text/javascript'> ") 
	document.write(" document.write (RiempiListaIncontri(GetProssimaGiornataDaGiocare(),0)[conta1].Nomi.Casa)</scr" + "ipt> ")
	document.write("<BR>")
	document.write(" <scr" + "ipt type='text/javascript'> ")
	document.write(" document.write (RiempiListaIncontri(GetProssimaGiornataDaGiocare(),0)[conta1].Nomi.Fuori)</scr" + "ipt> ")
	document.write(" </TD>")



	document.write(" <td align=center class=totoD>"+quota1.roundTo(2)+"</td><td align=center class=totoD>"+quotax.roundTo(2)+"</td><td align=center class=totoD>"+quota2.roundTo(2)+"</td><td align=center  class=totoP>"+quotaUnder)



	document.write("</td><td align=center  class=totoP>"+quotaOver)



	document.write("</td>")

	document.write("</TR> ")


}