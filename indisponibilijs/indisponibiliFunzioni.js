//by Andrea Maelstrom Bertolazzi
function IndisponibileA(Nome,Infortunio,Rientro) {
	this.Nome = Nome
	this.Infortunio = Infortunio
	this.Rientro = Rientro
	}
function GeneraIndisponibili() {
var i,j,z,w,giocatore1,giocatore2,contatore,squadra;	
contatore=0;
squadra=1;
document.write("<table class='ClassEl' bgcolor='#FFFFFF' width='100%'>");
document.write("<thead><tr>");
document.write("<th class='riga-indisponibili-intastazione'>Giocatore</th>");
document.write("<th class='riga-indisponibili-intastazione'>Motivo Indisponibilit&agrave;</th>");
document.write("<th class='riga-indisponibili-intastazione'>Torna in Campo</th>");
document.write("</tr></thead>");
document.write("<tbody>");
j=1;
i=1;
for (i=1;i<arrIndisponibiliA.length;i++) {
for (j=1;j<arrGiocatoriA.length;j++) {
giocatore1=arrIndisponibiliA[i].Nome.toLowerCase();
giocatore2=eval("xg" + arrGiocatoriA[j].ID).toLowerCase();
if (giocatore1 == giocatore2) {
	if (eval("xa" + arrGiocatoriA[j].IDSquadra)==eval("xa"+squadra)) {
		if (contatore==0) {	
			document.write("<tr><td colspan='3' class='riga-indisponibili-squadra'>"+eval("xa"+squadra)+"</td><tr>");	
		}
		if ((contatore % 2) == 0) {
		document.write("<tr><td class='riga-indisponibili-pari'><b><font color='2323B3'>"+eval("xg" + arrGiocatoriA[j].ID)+"</font></b></td><td class='riga-indisponibili-pari'>"+arrIndisponibiliA[i].Infortunio+"</td><td class='riga-indisponibili-pari'>"+arrIndisponibiliA[i].Rientro+"</td></tr>");
		}else{
		document.write("<tr><td class='riga-indisponibili-dispari'><b><font color='2323B3'>"+eval("xg" + arrGiocatoriA[j].ID)+"</font></b></td><td class='riga-indisponibili-dispari'>"+arrIndisponibiliA[i].Infortunio+"</td><td class='riga-indisponibili-dispari'>"+arrIndisponibiliA[i].Rientro+"</td></tr>");
		}
		contatore=contatore+1;
		} else {
		if (contatore==0) {
			document.write("<tr><td colspan='3'>Nessun giocatore indisponibile</td><tr>");
			squadra=squadra+1;
			
		} else {
			squadra=squadra+1;
			document.write("<tr><td colspan='3' class='riga-indisponibili-squadra'>"+eval("xa"+squadra)+"</td><tr>");	
			contatore=0;
		    if ((contatore % 2) == 0) {
			document.write("<tr><td class='riga-indisponibili-pari'><b><font color='2323B3'>"+eval("xg" + arrGiocatoriA[j].ID)+"</font></b></td><td class='riga-indisponibili-pari'>"+arrIndisponibiliA[i].Infortunio+"</td><td class='riga-indisponibili-pari'>"+arrIndisponibiliA[i].Rientro+"</td></tr>");
			}else{
			document.write("<tr><td class='riga-indisponibili-dispari'><b><font color='2323B3'>"+eval("xg" + arrGiocatoriA[j].ID)+"</font></b></td><td class='riga-indisponibili-dispari'>"+arrIndisponibiliA[i].Infortunio+"</td><td class='riga-indisponibili-dispari'>"+arrIndisponibiliA[i].Rientro+"</td></tr>");
			}
			contatore=contatore+1;
		}	
}
}
}
}
document.write("</tbody>");
document.write("</table>");
}