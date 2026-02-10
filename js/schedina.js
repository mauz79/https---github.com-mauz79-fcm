/*  
------------------------
RisultatiSnaiSK versione 1.1
------------------------
by SuperKaze
kaze (at) email.it

RisultatiSnaiSK è un piccolo script per siti generati con Fantacalcio Manager che restituisce i risultati in stile Snai dell'ultima giornata disputata, ovvero con l'indicazione di 1X2 per quanto riguarda il vincitore del match, mentre per quanto riguarda le reti segnati viene indicato l'Under-Over (meno di 3 gol totali o da 3 in su), il Goal-NoGoal (entrambe le squadre segnano o almeno una delle due rimane a porta inviolata), il Pari-Dispari (il totale dei gol segnati pari o dispari, 0 vale pari ovviamente). 
 */
function getRisultatiSnaiSK(){
	/*document.write("<TABLE width='720' cellspacing='2' colspan='3' class='RigaD'>")*/
	document.write("<table class='menu' cellspacing='0' cellpadding='2'><tr>")
// document.write("<img src='img/classfm.gif' border='0' style='margin-bottom: 3px'>")
document.write("<td class='newscel3' bgcolor='#FFFFFF' style='padding-bottom: 5px'>");	

document.write(" <TABLE width='718' border=0 cellPadding=2 cellSpacing=0> ")
	if (NumIncVisUltRis > 0) {
		document.write("<TR><TD class='newshead' colSpan='8'><strong>")
		document.write("<scr" + "ipt type='text/javascript'>")
		document.write("document.write (RiempiListaIncontri(GetUltimaGiornataGiocata(),0)[1].Competizione)</scr" + "ipt></strong> ")
		document.write("<scr" + "ipt type='text/javascript'>")
		document.write("document.write(dataGiornata[RiempiListaIncontri(GetUltimaGiornataGiocata(),0)[1].GiornataDiA])</scr" + "ipt></TD></TR>")
	}

	for (conta2=1;conta2<=(NumIncVisUltRis);conta2++){

		var casa = RiempiListaIncontri(GetUltimaGiornataGiocata(),0)[conta2].Gol.Casa
		var fuori = RiempiListaIncontri(GetUltimaGiornataGiocata(),0)[conta2].Gol.Fuori

		document.write("<TR><TD class='rigaP' align='left'>")
		document.write("<P>Partita " + conta2 + "</P>")
		document.write("</TD>")
		
		
		document.write("<TD class='rigaD' align='center'>")
		document.write("<scr" + "ipt type='text/javascript'>")
		document.write("document.write (RiempiListaIncontri(GetUltimaGiornataGiocata(),0)[conta2].Nomi.Casa)</scr" + "ipt>")
		document.write(" - ")//separatore fra le due squadre
		document.write("<scr" + "ipt type='text/javascript'> ")
		document.write("document.write (RiempiListaIncontri(GetUltimaGiornataGiocata(),0)[conta2].Nomi.Fuori)</scr" + "ipt></TD>")
		document.write("<TD class='rigaD' align='center'><B>"+casa+"-"+fuori+"</B></TD>")
		document.write("<TD class='rigaP' align='center'><B>")

			get1X2(casa, fuori)

		document.write("</B></TD><TD class='rigaP' align='center'>")
		
			get1X2H(casa, fuori)

		document.write("</TD><TD class='rigaP' align='center'>")
		
			getUnderOver(casa, fuori)

		document.write("</TD><TD class='rigaP' align='center'>")
		
			getGoalNoGoal(casa, fuori)
		
		document.write("</TD><TD class='rigaP' align='center'>")
		
			getPariDispari(casa, fuori)

		document.write("</TD></TR>")
		
	}
	document.write("</TABLE></td></tr></table>")
}	

function get1X2(casa, fuori){
	if(casa > fuori){
		document.write("1")
	}
	if(fuori == casa){
		document.write("X")
	}
	if(casa < fuori){
		document.write("2")
	}
}

//Esito 1H, XH, 2H, Handicap di un gol
function get1X2H(casa, fuori){
	if(casa > (fuori+1)){
		document.write("1H")
	}
	if((fuori+1) == casa){
		document.write("XH")
	}
	if(casa < (fuori+1)){
		document.write("2H")
	}
}

function getUnderOver(casa, fuori){

	if((fuori + casa)<3){
		document.write("Under")
	}
	else{
		document.write("Over")
	}
}

function getGoalNoGoal(casa, fuori){		
	if((fuori)==0 | (casa)==0){
		document.write("NoGoal")
	}
	else{
		document.write("Goal")
	}
}

function getPariDispari(casa, fuori){
	var tot = casa + fuori;
	if(tot==0|tot==2|tot==4|tot==6|tot==8|tot==10|tot==12|tot==14|tot==16|tot==18|tot==20|tot==22|tot==24|tot==26|tot==28|tot==30|tot==32|tot==34|tot==36|tot==38|tot==40|tot==42|tot==44){
		document.write("Pari")
	}
	else{
		document.write("Dispari")
	}

}
