//Puffin NewsGenerator - by Puffin v.1.2
//Thanks to: AlfaAlfa,golclaudio,asorbanseo,piri,Tencar,Master WE,nonsimuovekid


//CICLO PRINCIPALE
//************************************
// Necessario per il confronto dei contenuti
 Array.prototype.Contain=function(str,CaseInsensitive) {
  for(var x=0;x<this.length;x++)
if((CaseInsensitive&&this[x].toUpperCase()==str.toUpperCase())||(!CaseInsensitive&&this[x]==str)) return true;
  return false;
 } //Contain

Confronto1=new Array();
Confronto2=new Array();
Confronto3=new Array();
Confronto4=new Array();
Confronto5=new Array();
Confronto6=new Array();
Confronto7=new Array();
Confronto8=new Array();
Confronto9=new Array();
Confronto10=new Array();
Confronto11=new Array();
Confronto12=new Array();

//Fine istruzioni necessarie per il confronto dei contenuti =<?php echo $PHP_SELF?> 
document.write("<div class='contenuto'>");
document.write("<form action='p_ng_print.php' method='POST'>"); 
//document.write("<form name='uno' action='p_ng_print.php' method='POST'>"); 
//document.write("<form action='p_ng_print.php' method='POST' onsubmit='this.elements['best'].value=team'>"); 
document.write("<textarea style='display:none;' rows=10 cols=60 name='news'>"); 



NumIncGioc = RiempiListaIncontri(GetUltimaGiornataGiocata(),0).length-1
NumComp = arrCompetizioni.length-1
//document.write("Numero di competizioni: "+NumComp+"<br>")
//document.write("Numero di incontri giocati totale: "+NumIncGioc+"<br>")

for (Comp=1;Comp<arrCompetizioni.length;Comp++) {
	CodComp = arrCompetizioni[Comp].ID
	//document.write("<br>Il cui codice è: "+arrCompetizioni[Comp].ID)
	//document.write("<br>"+arrCompetizioni[Comp].Nome);
	//document.write("<br>Risultati della "+GetUltimaGiornataGiocata()+"a giornata.");
	for(fa=1;fa<arrIncontri.length;fa++) {
				if ((arrIncontri[fa].GiornataDiA == GetUltimaGiornataGiocata()) && CodComp == (arrIncontri[fa].IDCompetizione)) {
					Fgiornata=arrIncontri[fa].Fantagiornata
				}	
	}
	CompID = arrCompetizioni[Comp].ID
	NumIncGiocPerComp = RiempiListaIncontri(GetUltimaGiornataGiocata(),[CompID]).length-1;
	//document.write("<br>Numero di incontri di questa competizione è: "+NumIncGiocPerComp+"<br><br>");
	if (NumIncGiocPerComp > 0 ){
	document.write("<br><span class='competizione'>"+arrCompetizioni[Comp].Nome+"</span>");
	document.write("<br><span class='giornata'>Risultati della "+GetUltimaGiornataGiocata()+"a giornata.</span>");
	document.write("<br><span class='fantagiornata'>Siamo alla "+Fgiornata+" Fantagiornata.</span><br><br><span class='testocomm'>");
	//document.write("<br>Ecco gli incontri della competizione n°: "+Comp)
	//document.write("<br>che si chiama: "+arrCompetizioni[Comp].Nome)
	//document.write("<br>Il cui codice è: "+arrCompetizioni[Comp].ID)
	//CompID = arrCompetizioni[Comp].ID
	//NumIncGiocPerComp = RiempiListaIncontri(GetUltimaGiornataGiocata(),[CompID]).length-1;
	//document.write("<br>Numero di incontri di questa competizione è: "+NumIncGiocPerComp+"<br><br>");

		for (j=1;j<=NumIncGiocPerComp;j+=2) {
			casa=RiempiListaIncontri(GetUltimaGiornataGiocata(),CompID)[j].Nomi.Casa
			fuori=RiempiListaIncontri(GetUltimaGiornataGiocata(),CompID)[j].Nomi.Fuori
			glcasa=RiempiListaIncontri(GetUltimaGiornataGiocata(),CompID)[j].Gol.Casa
			glfuori=RiempiListaIncontri(GetUltimaGiornataGiocata(),CompID)[j].Gol.Fuori
		
			ControllaVincita(casa,fuori,glcasa,glfuori)

			if (j<NumIncGiocPerComp) 
			{
			casa=RiempiListaIncontri(GetUltimaGiornataGiocata(),CompID)[j+1].Nomi.Casa
			fuori=RiempiListaIncontri(GetUltimaGiornataGiocata(),CompID)[j+1].Nomi.Fuori
			glcasa=RiempiListaIncontri(GetUltimaGiornataGiocata(),CompID)[j+1].Gol.Casa
			glfuori=RiempiListaIncontri(GetUltimaGiornataGiocata(),CompID)[j+1].Gol.Fuori
			
			ControllaVincita(casa,fuori,glcasa,glfuori)

			}
		}
	}
}
document.write("</span></textarea>");
document.write("<center>Nuovo commento generato!<br>");
document.write("<br><input type='submit' value='Leggi Commento'></center></form>");
document.write("</div>");
//************************************
//FINE CICLO PRINCIPALE

//*******   FUNZIONE CONTROLLAVINCITA    *******
//Questa funzione viene eseguita per ogni incontro
//**********************************************
function ControllaVincita(casa,fuori,glcasa,glfuori){
var vince,perde,pari1,pari2,golvince,golperde,PresVince,PresPerde

//CONTROLLA SE LA SQUADRA DI CASA VINCE
if (glcasa > glfuori){
vince = casa;
perde = fuori;
golvince=glcasa;
golperde=glfuori;

			for(p=1;p<arrFantasquadre.length;p++) {
				if (arrFantasquadre[p].Nome == vince) {
					PresVince=arrFantasquadre[p].Presidente
				}	else if (arrFantasquadre[p].Nome == perde)  {
					PresPerde=arrFantasquadre[p].Presidente
				}
			}
diffCasa = golvince-golperde
//CASTICHE INTERNE - VITTORIA SQUADRA DI CASA
if (diffCasa == 1 && golvince == 1) {
VinceCasaMisura(vince,perde,golvince,golperde,PresVince,PresPerde)
} else if (diffCasa == 1 && golvince > 1) {
VinceCasaMisuraGol(vince,perde,golvince,golperde,PresVince,PresPerde)
} else if (diffCasa >=2 & diffCasa <=3) {
VinceCasaNetto(vince,perde,golvince,golperde,PresVince,PresPerde)
} else if (diffCasa >= 4) {
VinceCasaLargo(vince,perde,golvince,golperde,PresVince,PresPerde)
} 
//CONTROLLA SE LA SQUADRA DI FUORI VINCE
} else if (glcasa < glfuori){
vince = fuori;
perde = casa;
golvince=glfuori;
golperde=glcasa;


			for(p=1;p<arrFantasquadre.length;p++) {
				if (arrFantasquadre[p].Nome == perde) {
					PresPerde=arrFantasquadre[p].Presidente
				}	else if (arrFantasquadre[p].Nome == vince)  {
					PresVince=arrFantasquadre[p].Presidente
				}
			}
diffFuori = golvince-golperde
//CASTICHE INTERNE - VITTORIA SQUADRA Fuori
if (diffFuori == 1 && golvince == 1) {
VinceFuoriMisura(vince,perde,golvince,golperde,PresVince,PresPerde)
} else if (diffFuori == 1 && golvince > 1) {
VinceFuoriMisuraGol(vince,perde,golvince,golperde,PresVince,PresPerde)
} else if (diffFuori >=2 & diffFuori <=3) {
VinceFuoriNetto(vince,perde,golvince,golperde,PresVince,PresPerde)
} else if (diffFuori >= 4) {
VinceFuoriLargo(vince,perde,golvince,golperde,PresVince,PresPerde)
}

//CONTROLLA SE C'E' PAREGGIO
} else if (glcasa == glfuori){
pari1 = casa;
pari2 = fuori;
golvince=glcasa;
golperde=glfuori;

			for(p=1;p<arrFantasquadre.length;p++) {
			 	if (arrFantasquadre[p].Nome == pari1) {
					PresPari1=arrFantasquadre[p].Presidente
				}	else if (arrFantasquadre[p].Nome == pari2)  {
					PresPari2=arrFantasquadre[p].Presidente
				}
			}

//CASTICHE INTERNE - PAREGGIO
if (golvince == 0) {
PareggioG00(pari1,pari2,golvince,golperde,PresPari1,PresPari2)
} else if (golvince == 1) {
PareggioG11(pari1,pari2,golvince,golperde,PresPari1,PresPari2)
} else if (golvince >=2 & golvince <4) {
PareggioG33(pari1,pari2,golvince,golperde,PresPari1,PresPari2)
} else if (golvince >= 4) {
PareggioG44(pari1,pari2,golvince,golperde,PresPari1,PresPari2)
}
}

//****** CASISTICA DELLE FRASI - SQUADRA DI CASA VINCE ************
//DEFINISCO LA CASISTICA DELLE FRASI - SQUADRA DI CASA VINCE DI MISURA
//*********************************************************
function VinceCasaMisura(vince,perde,golvince,golperde,PresVince,PresPerde) {
function CvMis(frase) {
	this.frase = frase
}
var arrCasaVMis=new Array()
arrCasaVMis[1]=new CvMis(vince+" sfrutta il fattore campo e batte di misura "+ perde+" con il risultato di "+golvince+" a "+golperde+".<br>"+PresVince+" ringrazia la buona sorte ed incassa i 3 punti!<br>");
arrCasaVMis[2]=new CvMis(vince+" batte "+ perde+" sottolineando l'importanza del fattore campo. Il risultato di "+golvince+" a "+golperde+" però rimane indigesto al mister "+PresPerde+".<br>");
arrCasaVMis[3]=new CvMis(PresVince+" ha la meglio su "+PresPerde+" imponendosi di misura per "+golvince+" a "+golperde+".<br>");
arrCasaVMis[4]=new CvMis(vince+" la spunta su "+perde+" con uno striminzito "+golvince+" a "+golperde+" e "+PresVince+" gioisce!<br>");
arrCasaVMis[5]=new CvMis("'Il massimo risultato con il minimo sforzo', questo avrà pensato "+PresVince+ "alla fine della partita che la sua "+vince+ "ha vinto per "+golvince+" a "+golperde+"contro la "+perde+" di "+PresPerde+".<br>")
arrCasaVMis[6]=new CvMis("Nonostante il forsing finale "+vince+" supera "+perde+" per "+golvince+" a "+golperde+" con un gol realizzato su una punizione dubbia. il presidente "+PresPerde+" amareggiato per il risultato maturato su un episodio dubbio preferisce non rilasciare dichiarazioni.<br>");
arrCasaVMis[7]=new CvMis("A discapito della supremazia territoriale "+vince+" batte "+perde+" soltanto per "+golvince+" a "+golperde+" rischiando nel finale la beffa. Il presidente "+PresVince+" deluso per lo striminzito risultato promette hai tifosi che interverrà sul mercato.<br>");
arrCasaVMis[8]=new CvMis("La partita poteva finire molto più largamente a favore di "+vince+", ma la grande giornata del portiere di "+perde+" a limitato i danni: il risultato maturato nel finale è "+vince+" batte "+perde+" per "+golvince+" a "+golperde+".<br>");
arrCasaVMis[9]=new CvMis("Partita emozionante e senza esclusione di colpi. Nessuno ci stava a perdere e il risultato di "+golvince+" a "+golperde+" è scaturito grazie ad un singolo episodio. "+PresPerde+" finita la partita parla di complotto arbitrale mentre "+PresVince+" invece elogia i suoi per il carattere mostrato in campo.<br>"); 
arrCasaVMis[10]=new CvMis("Il pareggio sarebbe stato il risultato più giusto. Ma la classe e uno spropositato c...uore di "+vince+" fanno si che "+perde+" esca sconfitta da questo match. "+PresPerde+" non ha voluto rilasciare dichiarazioni mentre "+PresVince+" ammette senza pudore che il risultato di "+golvince+" a "+golperde+" è più che meritato.<br>"); 
arrCasaVMis[11]=new CvMis(vince+", è furto con scasso: 3 punti col minimo sforzo e per "+perde+" solo tante recriminazioni: "+golvince+" a "+golperde+".<br>"); 
arrCasaVMis[12]=new CvMis(vince+" - "+perde+" "+golvince+" a "+golperde+" e "+PresVince+" fa uno scatto in classifica senza sudare troppo.<br>"); 
arrCasaVMis[13]=new CvMis(PresPerde+",non ci sta. Si scaglia contro arbitro e soprattutto guardialinee colpevoli secondo lui di avere indirizzato la partita a favore di "+vince+" che giocava in casa. "+PresVince+" non ribatte e ringrazia i ragazzi per il meritato "+golvince+" a "+golperde+".<br>"); 
arrCasaVMis[14]=new CvMis("Partita povera di goal ma non di emozioni. L'"+golvince+" a "+golperde+" va forse stretto a "+vince+" ma anche "+perde+" potrebbe ricriminare su parecchi episodi strani.<br>"); 
arrCasaVMis[15]=new CvMis("Partita scialba. Bel gioco solo a sprazzi e risultato di misura per "+vince+". Con un pò di impegno e un pizzico di fortuna in più "+perde+" sarebbe riuscita a strappare un importante punto in trasferta.<br>"); 



var lvc = arrCasaVMis.length-2
var numvc=null;
while(numvc==null||Confronto1.Contain(numvc))
numvc =(Math.round(lvc*Math.random()))+1;	
Confronto1[Confronto1.length]= numvc
document.write(arrCasaVMis[numvc].frase);
//STAMPA COMMENTO SENZA CONFRONTO
//var lvc = arrCasaVMis.length-2
//var numvc = (Math.round(lvc*Math.random()))+1;
//document.write(arrCasaVMis[numvc].frase);
}

//DEFINISCO LA CASISTICA DELLE FRASI - SQUADRA DI CASA VINCE DI MISURA CON GOL
//*********************************************************
function VinceCasaMisuraGol(vince,perde,golvince,golperde,PresVince,PresPerde) {
function CvMisG(frase) {
	this.frase = frase
}
var arrCasaVMisG=new Array()
arrCasaVMisG[1]=new CvMisG("Un solo gol divide le due squadre, ma è una realizzazione importantissima che vale la bellezza di tre punti! "+vince+" sconfigge " +perde+" per "+golvince+" a "+golperde+".<br>");
arrCasaVMisG[2]=new CvMisG("E alla fine la spunta "+PresVince+": "+vince+" - "+perde+" "+golvince+" a "+golperde+" sul filo di lana.<br>"); 
arrCasaVMisG[3]=new CvMisG("Quando si dice il 'fattore C': "+vince+" ne fa uno in più e "+perde+" piange lacrime amare!<br>");
arrCasaVMisG[4]=new CvMisG(vince+" - "+perde+" è tiratissima fino all'ultimo, ma il successo arride a "+PresVince+" ed è "+golvince+" a "+golperde+".<br>"); 
arrCasaVMisG[5]=new CvMisG("Partita bellissima e ricca di colpi di scena che vede Mister "+PresVince+" soddisfatto della vittoria. Al Presidente "+PresPerde+" non rimane che rammaricarsi per l’occasione persa e "+vince+" vs. "+perde+" finisce "+golvince+" a "+golperde+".<br>"); 
arrCasaVMisG[6]=new CvMisG(vince+" fortunata, grazie ai "+golvince+" gol, "+PresVince+" può dichiararsi soddisfatto. "+PresPerde+", ha dichiarato che quei gol di scarto tra le due squadre non ci sono. Finisce "+golvince+" a "+golperde+" per la squadra di casa.<br>"); 
arrCasaVMisG[7]=new CvMisG(vince+" sconfigge "+perde+" per "+golvince+" a "+golperde+", "+PresVince+" ha dichiarato che non è soddisfatto del gioco espresso dai suoi. "+perde+" veramente sfortunata.<br>"); 
arrCasaVMisG[8]=new CvMisG("Quando tutti pensavano ad un pareggio, ecco l’acuto di "+vince+", che condanna "+perde+" ad una cocente sconfitta: è "+golvince+" a "+golperde+".<br>"); 
arrCasaVMisG[9]=new CvMisG("Dopo la sconfitta per "+golvince+" a "+golperde+", "+PresPerde+" ha dichiarato che il risultato è ingiusto. Euforia in conferenza stampa di "+PresVince+", presidente de "+vince+".<br>"); 
arrCasaVMisG[10]=new CvMisG("Ovviamente giocare in casa porta vantaggi e "+PresVince+" lo sa bene dato che la sua "+vince+" è riuscita nell'impresa di sconfiggere "+perde+" per "+golvince+" a "+golperde+".<br>"); 
arrCasaVMisG[11]=new CvMisG("'Più culo che anima', queste le parole di "+PresPerde+" durante le interviste di rito alla fine della partita contro "+vince+". "+perde+", nonostante una buona prova, è costretta a tornare a casa con le pive nel sacco a causa di un "+golvince+" a "+golperde+".<br>");  
arrCasaVMisG[12]=new CvMisG("Il fattore campo non sempre è determinante, ma andatelo a dire a "+PresPerde+" che, anche dopo una partita maiuscola, è costretto a soccombere. "+vince+" conquista i tre punti contro "+perde+" per "+golvince+" a "+golperde+".<br>"); 
arrCasaVMisG[13]=new CvMisG(vince+ "trema fino all'ultimo, ma la vittoria per "+golvince+" a "+golperde+", non rende merito a "+PresVince+". "+perde+" a bocca asciutta.<br>"); 
arrCasaVMisG[14]=new CvMisG("Il risultato di "+golvince+" a "+golperde+", "+vince+" sugli allori, "+PresPerde+" amareggiato per la sconfitta.<br>"); 
arrCasaVMisG[15]=new CvMisG(PresVince+": 'vittoria del cuore!!' - "+PresPerde+": 'Un ingiustizia!!' - "+vince+" batte "+perde+" "+golvince+" a "+golperde+".<br>");


var lvcG = arrCasaVMisG.length-2
var numvcG=null;
while(numvcG==null||Confronto2.Contain(numvcG))
numvcG =(Math.round(lvcG*Math.random()))+1;	
Confronto2[Confronto2.length]= numvcG
document.write(arrCasaVMisG[numvcG].frase);
//STAMPA COMMENTO SENZA CONFRONTO
//var lvcG = arrCasaVMisG.length-2
//var numvcG = (Math.round(lvcG*Math.random()))+1;
//document.write(arrCasaVMisG[numvcG].frase);
}

//DEFINISCO LA CASISTICA DELLE FRASI - SQUADRA DI CASA VINCE NETTO
//*********************************************************
function VinceCasaNetto(vince,perde,golvince,golperde,PresVince,PresPerde) {
function CvNetto(frase) {
	this.frase = frase
}
var arrCasaVNetto=new Array()
arrCasaVNetto[1]=new CvNetto("Risultato all'italiana, "+vince+" attenta in difesa ed abile in contropiede vince per "+golvince+" a "+golperde+" contro "+perde+" incapace di fermare gli attacchi continui dei giocatori di mister "+PresVince+".<br>");
arrCasaVNetto[2]=new CvNetto("Giornata da cancellare dalla memoria per "+PresPerde+". Un "+golvince+" a "+golperde+" che potrebbe provocare ripercussioni catasftrofiche per "+perde+". I Complimenti per la partita perfetta vanno, invece a "+PresVince+".<br>"); 
arrCasaVNetto[3]=new CvNetto("Finisce con il più classico dei risultati "+vince+" - "+perde+" "+golvince+" a "+golperde+"; e "+PresVince+" se la gode!<br>"); 
arrCasaVNetto[4]=new CvNetto("I tifosi di casa fanno festa e ne hanno tutte le ragioni!!! "+vince+" non si accontenta di un risultato soft e sconfigge "+perde+" per "+golvince+" - "+golperde+".<br>"); 
arrCasaVNetto[5]=new CvNetto(PresVince+" trasforma una partita di calcio in un tiro al bersaglio. "+golvince+" a "+golperde+" e "+perde+" a casa. Meritati i tre punti per "+vince+".<br>"); 
arrCasaVNetto[6]=new CvNetto(PresVince+ " voleva rabbia agonistica e l'ha avuta. I  ragazzi di "+vince+" hanno dato il meglio di loro stessi andando a stravincere in casa contro "+perde+" con un rotondo "+golvince+" a "+golperde+".<br>"); 
arrCasaVNetto[7]=new CvNetto(vince+" dà una sonora lezione a "+perde+"; il "+golvince+" - "+golperde+" finale lascia "+PresPerde+" di sasso.<br>"); 
arrCasaVNetto[8]=new CvNetto("Tra "+vince+" e "+perde+" non c'è partita; gli ospiti tornano a casa con "+golvince+" pere nel sacco!<br>");
arrCasaVNetto[9]=new CvNetto(vince+" spietata: la porta di "+perde+" violata "+golvince+" volte: finisce "+golvince+" a "+golperde+".<br>"); 
arrCasaVNetto[10]=new CvNetto("Clamoroso! "+perde+" incassa una sonora sconfitta contro "+vince+", che ne fa "+golvince+" e zittisce le polemiche.<br>");
arrCasaVNetto[11]=new CvNetto(PresPerde+" si rassegni: "+vince+" è troppo forte e si impone con un netto "+golvince+" a "+golperde+" contro "+perde+".<br>");
arrCasaVNetto[12]=new CvNetto(golvince+" a "+golperde+". Risultato netto e "+vince+" porta a casa 3 meritati punti contro "+perde+".<br>");
arrCasaVNetto[13]=new CvNetto("La partita perfetta è quella giocata da "+vince+" contro "+perde+". Il risultato di "+golvince+" a "+golperde+" è di quelli chiari e netti! Congratulazioni "+PresVince+".<br>");
arrCasaVNetto[14]=new CvNetto("'Contro vento ci si va ma contro c#@o no! E' questa la poco elegante affermazione di "+PresPerde+" dopo la netta sconfitta per "+golvince+" a "+golperde+" subita giocando contro "+vince+".<br>");
arrCasaVNetto[15]=new CvNetto(vince+" batte "+perde+": "+golvince+" - "+golperde+" ma lo spettacolo non è mancato. "+PresVince+" porta a casa 3 preziosi punti.<br>");

var lNetto = arrCasaVNetto.length-2
var numNetto=null;
while(numNetto==null||Confronto3.Contain(numNetto))
numNetto =(Math.round(lNetto*Math.random()))+1;	
Confronto3[Confronto3.length]= numNetto
document.write(arrCasaVNetto[numNetto].frase);
//STAMPA COMMENTO SENZA CONFROTNO
//var lNetto = arrCasaVNetto.length-2
//var numNetto = (Math.round(lNetto*Math.random()))+1;
//document.write(arrCasaVNetto[numNetto].frase);
}
//*****************************************

//DEFINISCO LA CASISTICA DELLE FRASI - SQUADRA DI CASA VINCE LARGO
//*********************************************************
function VinceCasaLargo(vince,perde,golvince,golperde,PresVince,PresPerde) {
function CvLar(frase) {
	this.frase = frase
}
var arrCasaVLar=new Array()
arrCasaVLar[1]=new CvLar("Non c'è storia per "+perde+", strapazzata brutalmente da "+vince+" con un rotondo "+golperde+" a "+golvince+".<br>");
arrCasaVLar[2]=new CvLar("Il tornado "+vince+ "si abbatte su "+perde+"! "+golvince+" a "+golperde+" e non c'è spazio per le recriminazioni!<br>");
arrCasaVLar[3]=new CvLar("Spettacolo "+vince+"! "+perde+" si lecca le ferite dopo un roboante "+golvince+" a "+golperde+".<br>");
arrCasaVLar[4]=new CvLar("E adesso chi consolerà "+PresPerde+"? "+vince+" passeggia sul velluto: "+perde+" sconfitta "+golvince+" a "+golperde+".<br>");
arrCasaVLar[5]=new CvLar("Per "+PresVince+" è gioia pura!" +vince+" polverizza "+perde+" per "+golvince+" a "+golperde+".<br>")
arrCasaVLar[6]=new CvLar("La schiena del portiere di "+perde+" è a pezzi, deve essere faticoso raccogliere così tanti palloni dalla rete. "+vince+" dilaga vincendo per "+golvince+" a "+golperde+".<br>")
arrCasaVLar[7]=new CvLar("Servirà il pallottoliere a "+PresPerde+" che ha perso i conti dei gol subiti dalla sua squadra. "+vince+" si è comportata benissimo, andando a stravincere tra le mura amiche per "+golvince+" a "+golperde+" contro "+perde+".<br>");
arrCasaVLar[8]=new CvLar("Clamorosa vittoria per "+vince+" che asfalta "+perde+" con un risultato umiliante e difficilmente dimenticabile per "+PresPerde+".<br>"); 
arrCasaVLar[9]=new CvLar(golvince+" a "+golperde+". Poco da dire per un risultato scontato vista la pochezza disarmante della prestazione generale di "+perde+". Soddisfazione invece per "+PresVince+" che potrà da sfottere per parecchio tempo "+PresPerde+".<br>"); 
arrCasaVLar[10]=new CvLar("Vittoria clamorosa ! "+vince+" distrugge "+perde+" ! Nessuna attenuante per "+PresPerde+": "+golvince+" gol sono una severa punizione.<br>");
arrCasaVLar[11]=new CvLar("La più classica delle goleade, "+golvince+" gol sono anche pochi, "+PresVince+" dichiara: '"+perde+" inguardabile!!' "+vince+" pronta per traguardi importanti.<br>"); 
arrCasaVLar[12]=new CvLar("Il risultato di "+golvince+" a "+golperde+" non lascia spazio a grandi commenti, "+vince+" padrona del campo, "+perde+"... non pervenuta!<br>"); 
arrCasaVLar[13]=new CvLar("Clamorosa vittoria in casa per "+vince+". Ci si poteva aspettare una vittoria ma mai di queste proporzioni. "+PresPerde+" si chiude immediatamente in un 'bruciante' silenzio stampa. Addirittura ci sono voci di um probabile esonero dopo il roboante "+golvince+" a "+golperde+".<br>"); 
arrCasaVLar[14]=new CvLar("Comunicato ufficiale della Federazione. L'ufficio indagini aprirà una inchiesta su questo risultato. Voci parlano di alcuni giocatori di "+perde+" coinvolti in strani affari. Staremo a vedere. Nel frattempo "+PresVince+" non rilascia dichiarazioni in merito e si gode questo storico "+golvince+" a "+golperde+".<br>"); 
arrCasaVLar[15]=new CvLar("Eccezionale vittoria per "+vince+". Miserabile sconfitta per "+perde+". Poco serve a "+PresPerde+" parlare di assenti e arbitraggio dopo questo sonoro "+golvince+" a "+golperde+".<br>");

var lLar = arrCasaVLar.length-2
var numLar=null;
while(numLar==null||Confronto4.Contain(numLar))
numLar =(Math.round(lLar*Math.random()))+1;	
Confronto4[Confronto4.length]= numLar
document.write(arrCasaVLar[numLar].frase);
//STAMPA COMMENTO SENZA OCNFRONTO
//var lLar = arrCasaVLar.length-2
//var numLar = (Math.round(lLar*Math.random()))+1;
//document.write(arrCasaVLar[numLar].frase);
}
//*****************************************
//***** FINE CASISTICA DELLE FRASI - SQUADRA DI CASA VINCE *****


//****** CASISTICA DELLE FRASI - SQUADRA FUORI VINCE ************
//DEFINISCO LA CASISTICA DELLE FRASI - SQUADRA FUORI VINCE DI MISURA
//*********************************************************
function VinceFuoriMisura(vince,perde,golvince,golperde,PresVince,PresPerde) {
function CfMis(frase) {
	this.frase = frase
}
var arrFuoriVMis=new Array()
arrFuoriVMis[1]=new CfMis("La fortuna aiuta gli audaci ed al termine di una partita noiosissima la "+vince+" si aggiudica la partita segnando l'unico gol del match contro "+perde+".<br>"); 
arrFuoriVMis[2]=new CfMis("Dopo questa ennesima vittoria in trasferta, anche "+vince+" può ambire a qualcosa di grande: "+vince+" batte "+perde+" "+golvince+" - "+golperde+".<br>");
arrFuoriVMis[3]=new CfMis("I ripetuti attacchi di "+vince+" hanno portato solo un gol all'attivo, ma come dice il presidente "+PresVince+" 'giochiamo in trasferta: l'importante è fare 3 punti.' "+vince+" batte "+perde+" "+golvince+" - "+golperde+".<br>");
arrFuoriVMis[4]=new CfMis("La panchina di "+PresPerde+" inizia a scottare, dopo l'ennesima sconfitta casaligna questa volta contro "+PresVince+": il risultato finale è "+vince+" batte "+perde+" "+golvince+" - "+golperde+".<br>");
arrFuoriVMis[5]=new CfMis("Dopo aver avuto numerose palle gol ed una superiorità territoriale non indifferente, il gol beffa. "+vince+" batte "+perde+" "+golvince+" a "+golperde+". "+PresPerde+" dopo la partita ha dichiarato che la squadra andrà in ritiro punitivo x 7 giorni!<br>");
arrFuoriVMis[6]=new CfMis("Partita ricca di emozioni da entrambe le parti, che però causa gli errori sotto porta finisce con "+vince+" che prevale su "+perde+" per "+golvince+" - "+golperde+". 'Peccato aver sbagliato tutti quei gol sotto porta, la partita poteva finire in altro modo, ha dichiarato "+PresPerde+".<br>");
arrFuoriVMis[7]=new CfMis("Partita con poche emozioni, che si infiamma nel finale con un gol in zona cesarini da parte di "+vince+". Neanche il tempo di battere il centrocampo che l'arbitro fischia la fine. "+vince+" batte "+perde+" "+golvince+" - "+golperde+".<br>");
arrFuoriVMis[8]=new CfMis("Nessuno si sarebbe aspettato un risultato del genere "+vince+" supera in trasferta "+perde+" "+golvince+" a "+golperde+". E "+PresVince+" paga la cena a tutta la squadra.<br>");
arrFuoriVMis[9]=new CfMis("Soffertissima sfida risolta con un gol nel finale di "+vince+" del Presidente "+PresVince+" che però non rende giustizia alla generosa prova dei ragazzi di "+PresPerde+".<br>"); 
arrFuoriVMis[10]=new CfMis(vince+" corsara in casa di "+perde+" grazie ad un gol che zittische lo stadio. Anche se striminzito, il risultato di "+golvince+" a "+golperde+" dei ragazzi di "+PresVince+" lascia con un palmo di naso i padroni di casa.<br>"); 
arrFuoriVMis[11]=new CfMis(PresVince+" urla di gioia per il risultato di "+golvince+" a "+golperde+" in trasferta contro "+perde+" del Presidentissimo "+PresPerde+".<br>"); 
arrFuoriVMis[12]=new CfMis("Piratesca impresa di "+vince+" che si impone in casa di "+perde+" per "+golvince+" a "+golperde+". "+PresPerde+" sconsolato se ne è uscito con un: Caccio tutti!!!<br>"); 
arrFuoriVMis[13]=new CfMis("Clamoroso! Il risultato di "+golvince+" a "+golperde+" per "+vince+" rende orgoglioso "+PresVince+", una vittoria fuori casa importantissima.<br>"); 
arrFuoriVMis[14]=new CfMis("Spettacolo zero!! "+perde+" senza gioco, "+vince+" con un tiro in porta, incamera 3 punti preziosissimi.<br>"); 
arrFuoriVMis[15]=new CfMis("Vittoria meritata per "+vince+", "+perde+" si rammarica per le occasioni specate, ma il risultato di "+golvince+" a "+golperde+" premia "+PresVince+" che ha saputo guidare i suoi alla vittoria.<br>"); 

var lvf = arrFuoriVMis.length-2
var numvf=null;
while(numvf==null||Confronto5.Contain(numvf))
numvf =(Math.round(lvf*Math.random()))+1;	
Confronto5[Confronto5.length]= numvf
document.write(arrFuoriVMis[numvf].frase);
//STAMPA COMMENTO SENZA CONFRONTO
//var lvf = arrFuoriVMis.length-2
//var numvf = (Math.round(lvf*Math.random()))+1;
//document.write(arrFuoriVMis[numvf].frase);
}

//DEFINISCO LA CASISTICA DELLE FRASI - SQUADRA FUORI VINCE DI MISURA CON GOL
//*********************************************************
function VinceFuoriMisuraGol(vince,perde,golvince,golperde,PresVince,PresPerde) {
function CfMisG(frase) {
	this.frase = frase
}
var arrFuoriVMisG=new Array()
arrFuoriVMisG[1]=new CfMisG("Un solo gol divide le due squadre, ma è una realizzazione importantissima che vale la bellezza di tre punti! "+vince+" sconfigge " +perde+" per "+golvince+" a "+golperde+".<br>");
arrFuoriVMisG[2]=new CfMisG(vince+" corsara in trasferta: "+golvince+" a "+golperde+" con "+perde+".<br>");
arrFuoriVMisG[3]=new CfMisG(perde+" non ce la fa e alla fine soccombe a "+vince+", che ne fa uno in più: "+golvince+" a "+golperde+".<br>"); 
arrFuoriVMisG[4]=new CfMisG("Tre punti preziosissimi per "+vince+", che espugna il campo di "+perde+" per "+golvince+" a "+golperde+" dopo una gara tirata.<br>");
arrFuoriVMisG[5]=new CfMisG("Clamorosa zampata all'ultimo minuto per "+vince+" che beffa l'undici di "+PresPerde+" battendolo per "+golvince+" a "+golperde+". "+PresVince+", soddisfatto dei suoi, festeggia negli spogliatoi i tre punti preziosissimi conquistati oggi.<br>"); 
arrFuoriVMisG[6]=new CfMisG("Trasferta fortunata per "+PresVince+" che, grazie alle motivazioni fornite in settimana alla squadra e ad ottime scelte di formazione, si aggiudica tre punti importanti battendo "+perde+" per "+golvince+" a "+golperde+". Deluso dall'accaduto "+PresPerde+" scende negli spogliatoi senza rilasciare dichiarazioni.<br>"); 
arrFuoriVMisG[7]=new CfMisG("Battuta d'arresto per "+perde+" che poteva sfruttare meglio il vantaggio casalingo. Non riescono infatti gli undici di "+PresPerde+" a battere la formazione di "+PresVince+". Tre punti quindi per "+vince+" che ha la meglio su "+perde+" per "+golvince+" a "+golperde+".<br>");
arrFuoriVMisG[8]=new CfMisG(vince+" - "+perde+" si decide solo all'ultimo; a "+PresPerde+" rimane il rimpianto di non aver sfruttato meglio il fattore campo.<br>");
arrFuoriVMisG[9]=new CfMisG("Botta e risposta tra "+vince+" e "+perde+", ma è "+PresVince+", ribaltando il fattore campo, a far festa: "+golvince+" a "+golperde+".<br>");
arrFuoriVMisG[10]=new CfMisG(perde+" a un passo dalla vittoria, ma "+vince+" fa il colpaccio in trasferta per "+golvince+" a "+golperde+".<br>"); 
arrFuoriVMisG[11]=new CfMisG(perde+" si arrende in casa all'arrembante "+vince+": il risultato finale è di "+golvince+" a "+golperde+" per gli ospiti.<br>");
arrFuoriVMisG[12]=new CfMisG(golperde+" a "+golvince+" di "+vince+" sul campo di "+perde+"; grande la delusione di "+PresPerde+", che rimane a bocca asciutta.<br>"); 
arrFuoriVMisG[13]=new CfMisG("Colpo gobbo di "+vince+", che espugna il campo di "+perde+" e porta a casa la vittoria per "+golperde+" a "+golvince+".<br>"); 
arrFuoriVMisG[14]=new CfMisG("Un gol in extremis manda in frantumi i sogni di gloria di "+PresPerde+" che si deve arrendere a "+PresVince+", nonostante il turno casalingo, per "+golperde+" a "+golvince+".<br>"); 
arrFuoriVMisG[15]=new CfMisG("Colpaccio di "+PresVince+" sul campo di "+perde+": "+golperde+" a "+golvince+" e tre bei punti in classifica!<br>"); 

var lvfG = arrFuoriVMisG.length-2
var numvfG=null;
while(numvfG==null||Confronto6.Contain(numvfG))
numvfG =(Math.round(lvfG*Math.random()))+1;	
Confronto6[Confronto6.length]= numvfG
document.write(arrFuoriVMisG[numvfG].frase);
//STAMPA COMMENTO SENZA CONFRONTO
//var lvfG = arrFuoriVMisG.length-2
//var numvfG = (Math.round(lvfG*Math.random()))+1;
//document.write(arrFuoriVMisG[numvfG].frase);
}

//DEFINISCO LA CASISTICA DELLE FRASI - SQUADRA FUORI VINCE NETTO
//*********************************************************
function VinceFuoriNetto(vince,perde,golvince,golperde,PresVince,PresPerde) {
function CfNetto(frase) {
	this.frase = frase
}
var arrFuoriNetto=new Array()
arrFuoriNetto[1]=new CfNetto("Difesa compatta e rapide ripartenze, questo avrà chiesto "+PresVince+" ai suoi ragazzi;  "+vince+" torna a casa con 3 punti grazie alla vittoria in trasferta per "+golvince+" a "+golperde+" contro "+perde+".<br>");
arrFuoriNetto[2]=new CfNetto(vince+" spettacolare! "+golvince+" a "+golperde+" contro "+perde+", e adesso tutti zitti!<br>"); 
arrFuoriNetto[3]=new CfNetto(perde+ "si spegne sotto i colpi di "+vince+" e ne incassa "+golvince+" in casa e senza appello.<br>"); 
arrFuoriNetto[4]=new CfNetto("Impietoso "+golvince+" a "+golperde+" in trasferta di "+vince+" su "+perde+"; "+PresPerde+" piomba nella depressione più cupa!<br>"); 
arrFuoriNetto[5]=new CfNetto(PresPerde+", basta chiacchiere: questo il messaggio vergato ieri con i "+golvince+" gol subiti in casa da "+PresVince+".<br>"); 
arrFuoriNetto[6]=new CfNetto("Risultato netto e scontato, "+perde+" - "+vince+": "+golperde+" - "+golvince+". Si era capito fin dalle prime battute della partita che i giocatori di "+perde+" avrebbero preferito una giornata in spiaggia, alla partita.<br>"); 
arrFuoriNetto[7]=new CfNetto("Furioso "+PresPerde+" si è presentato in sala stampa tuonando contro le scelte fatte dal suo allenatore durante la gara e tutti hanno pensato ad un esonero imminente. "+perde+" - "+vince+": "+golperde+" - "+golvince+".<br>"); 
arrFuoriNetto[8]=new CfNetto("Tra errori difensivi ed errori arbitrali non c'è da stare allegri. "+perde+" - "+vince+" finisce "+golperde+" - "+golvince+". 'Dove si firma per avere questa fortuna tutte le domeniche?', ha dichiarato "+PresVince+".<br>");
arrFuoriNetto[9]=new CfNetto("Secco "+golperde+" a "+golvince+" subìto da "+perde+". Alla vigilia "+PresPerde+" sembrava molto fiducioso nei suoi, ma il campo lo ha smentito vedendo "+vince+" uscire a testa alta.<br>"); 
arrFuoriNetto[10]=new CfNetto("Tafferugli tra tifosi e polizia all'uscita dello stadio di "+perde+". Stizziti dal "+golperde+" a "+golvince+" subito oggi da "+vince+", gli ultras si sono lanciati prima in direzione del pulmann della squadra ospite, poi verso i veicoli dei propri giocatori ricoprendoli di carta igienica rubata alle forze dell'ordine (ecco il motivo dei tafferugli .ndr).<br>"); 
arrFuoriNetto[11]=new CfNetto("Chiunque nutriva dei dubbi sulle abilità di "+PresVince+" è stato zittito oggi dal netto "+golvince+" a "+golperde+" esterno inferto a "+perde+".<br>"); 
arrFuoriNetto[12]=new CfNetto("Con "+golvince+" reti oggi "+vince+" conquista tre punti in casa di "+perde+". '"+golperde+" reti sono troppo poche per un attacco come il nostro' - commenta "+PresPerde+" - 'e anche la difesa non si è mossa al meglio. C'è ancora tanto da lavorare, ma siamo fiduciosi nel futuro'.<br>"); 
arrFuoriNetto[13]=new CfNetto("Niente da fare per "+perde+", "+vince+" è troppo forte, ed il divario non è solo nella rosa, ma anche nel gioco, il "+golvince+" a "+golperde+", non ammette scuse.<br>"); 
arrFuoriNetto[14]=new CfNetto(PresVince+ "finalmente soddisfatto, "+vince+" finalmente padrone fuori casa. "+PresPerde+" chiede scusa ai tifosi per il pesante "+golperde+" a "+golvince+" subito.<br>"); 
arrFuoriNetto[15]=new CfNetto(vince+ "sugli scudi "+golvince+" a "+golperde+" fuori casa. "+perde+" dovrà lavorare molto per riconquistare i suoi tifosi.<br>"); 


var lfNetto = arrFuoriNetto.length-2
var numfNetto=null;
while(numfNetto==null||Confronto7.Contain(numfNetto))
numfNetto =(Math.round(lfNetto*Math.random()))+1;	
Confronto7[Confronto7.length]= numfNetto
document.write(arrFuoriNetto[numfNetto].frase);
//FINE CASISTICA DELLE FRASI - SQUADRA FUORI VINCE NETTO
//STAMPA COMMENTO SENZA CONFRONTO
//var lfNetto = arrFuoriNetto.length-2
//var numfNetto = (Math.round(lfNetto*Math.random()))+1;
//document.write(arrFuoriNetto[numfNetto].frase);
}
//*****************************************

//DEFINISCO LA CASISTICA DELLE FRASI - SQUADRA FUORI VINCE LARGO
//*********************************************************
function VinceFuoriLargo(vince,perde,golvince,golperde,PresVince,PresPerde) {
function CfLar(frase) {
	this.frase = frase
}
var arrFuoriVLar=new Array()
arrFuoriVLar[1]=new CfLar("I tifosi di "+vince+" stentano a credere ai loro occhi. I ragazzi di "+PresVince+", infatti, hanno vincono "+golvince+" a "+golperde+" in trasferta contro "+perde+" e metteno in cassaforte tre punti pesantissimi.<br>");
arrFuoriVLar[2]=new CfLar("Goleada in trasferta per "+vince+" che seppelliscono con "+golvince+" gol i padroni di casa di  "+perde+".<br>"); 
arrFuoriVLar[3]=new CfLar("I giocatori di "+perde+" escono dal campo tra i fischi dei loro sostenitori. "+perde+" - "+vince+" finisce "+golperde+" - "+golvince+". "+PresPerde+" si è detto furioso con la sua squadra. 'E' vergognoso quello che ho visto oggi in campo', ha aggiunto.<br>"); 
arrFuoriVLar[4]=new CfLar("Saranno presto presi dei provvedimenti a dichiarato "+PresPerde+", non si può andare avanti così, si rischia la retrocessione. "+perde+" - "+vince+": "+golperde+" - "+golvince+".<br>"); 
arrFuoriVLar[5]=new CfLar("Brutta giornata per il portire di "+perde+". Finisce "+golperde+" - "+golvince+" per "+vince+". Continuando così potremmo ambire a qualcosa in più della salvezza, ha dichiarato "+PresVince+".<br>"); 
arrFuoriVLar[6]=new CfLar("Pioggia di goal oggi allo stadio di "+perde+", ma nella porta difesa dal proprio portiere. Gli scatenati undici di "+PresVince+" tirano in porta non appena possibile, facendo centro per "+golvince+" volte. "+PresPerde+", stizzito dall'umiliante "+golperde+" a "+golvince+", ha imposto il silenzio stampa a tutta la squadra fino a nuovo ordine.<br>"); 
arrFuoriVLar[7]=new CfLar(golperde+" a "+golvince+". Nient'altro da aggiungere allo schiacciante risultato del confronto tra "+perde+" e "+vince+" che parla da solo.<br>"); 
arrFuoriVLar[8]=new CfLar("'Abbiamo sbagliato tutto, ma siamo pronti a cancellare questa sconfitta e ripartire da zero.' Si assume le sue responsabilità "+PresPerde+" in merito alla clamorosa sconfitta casalinga per "+golperde+" a "+golvince+" subita da "+vince+".<br>"); 
arrFuoriVLar[9]=new CfLar("Travolto dai fischi dei propri tifosi e dallo scherno di quelli avversari, "+PresPerde+" non commenta lo schiacciante "+golperde+" a "+golvince+" subito oggi in casa contro "+vince+" e corre negli spogliatoi in cui si chiude con la squadra.<br>"); 
arrFuoriVLar[10]=new CfLar("Un manipolo di ultras di "+perde+" è stato allontanato dalle forze dell'ordine mentre cercava di incidere sul cofano della macchina di "+PresPerde+" il risultato oggi ottenuto in casa contro "+vince+" ("+golperde+" a "+golvince+",ndr).<br>"); 
arrFuoriVLar[11]=new CfLar("Con la cravatta legata in testa e una bottiglia di spumante in mano "+PresVince+" festeggia la pesante vittoria esterna inferta per "+golvince+" a "+golperde+" a "+perde+" oggi apparsa veramente fuori fase. "+PresPerde+" commenta con un laconico: 'Partita da dimenticare'.<br>"); 
arrFuoriVLar[12]=new CfLar("'Se giochiamo tutte le settimane così li sfondiamo tutti!' Si lascia scappare "+PresVince+" in uno slancio di euforia mentre commenta l'ottimo risultato di "+golvince+" a "+golperde+" inflitto oggi a "+perde+" che può recriminare qualcosa ma che non basta a negare la superiorità degli avversari.<br>"); 
arrFuoriVLar[13]=new CfLar(perde+": grave umiliazione sul proprio terreno. "+vince+" finalmente gol e bel gioco grazie a questo "+golvince+" a "+golperde+" in trasferta.<br>"); 
arrFuoriVLar[14]=new CfLar(PresPerde+" tornerà sul mercato? Serve solo un portiere? "+PresVince+" 'Finalmente ho visto la squadra che ho sempre sognato!'. Il risultato è "+perde+" - "+vince+": "+golperde+" a "+golvince+".<br>"); 
arrFuoriVLar[15]=new CfLar("Che dire? "+golvince+" a "+golperde+" ha solo due commenti: "+vince+" stupendo risultato in trasferta - "+perde+" orribile risultato casalingo!.<br>");

var lfLar = arrFuoriVLar.length-2
var numfLar=null;
while(numfLar==null||Confronto8.Contain(numfLar))
numfLar =(Math.round(lfLar*Math.random()))+1;	
Confronto8[Confronto8.length]= numfLar
document.write(arrFuoriVLar[numfLar].frase);
//STAMPA COMMENTO SENZA COMMENTO
//var lfLar = arrFuoriVLar.length-2
//var numfLar = (Math.round(lfLar*Math.random()))+1;
//document.write(arrFuoriVLar[numfLar].frase);
}

//FINE CASISTICA DELLE FRASI - SQUADRA DI FUORI VINCE
//*****************************************



//****** CASISTICA DELLE FRASI - PAREGGIO ************
//DEFINISCO LA CASISTICA DELLE FRASI - PAREGGIO 0-0 
//*********************************************************
function PareggioG00(pari1,pari2,golvince,golperde,PresPari1,PresPari2) {
function Par00(frase) {
	this.frase = frase
}
var arrPareG00=new Array()
arrPareG00[1]=new Par00("Finisce a reti inviolate tra "+pari1+" e "+pari2+". Lo "+golvince+" a "+golperde+" però, non soddisfa ne "+PresPari1+" ne "+PresPari2+".<br>");
arrPareG00[2]=new Par00(golvince+" a "+ golperde+" è il deludente epilogo di una gara senza emozioni tra "+pari1+" e "+pari2+", "+PresPari1+" e "+PresPari2+" si dividono le briciole.<br>");
arrPareG00[3]=new Par00("Tra "+PresPari1+" e "+PresPari2+" nasce uno "+golvince+" a "+golperde+" privo di emozioni. Un punto per ciascuno che scontenta i tifosi.<br>");
arrPareG00[4]=new Par00(pari1+" e "+pari2+" si dividono la posta pareggiando per "+golvince+" a "+golperde+". Ne "+PresPari1+" ne "+PresPari2+" sono soddisfatti delle loro squadre. Entrami potevano fare almeno un gol per il pubblico!<br>");
arrPareG00[5]=new Par00("La noia la fa da padrona e la partita termina a reti inviolate. "+pari1+" e "+pari2+" preferiscono non farsi male, accontentandosi di un pareggio.<br>")
arrPareG00[6]=new Par00("Partita inguardabile e vomitevole tra "+pari1+" e "+pari2+". Uno "+golvince+" a "+golperde+" che ha rischiato di fare addormentare il pubblico sugli spalti. Partite come questa è meglio non farle vedere ai bambini, potrebbero odiare il calcio per tutta la vita.<br>"); 
arrPareG00[7]=new Par00("Sterile pareggio per "+pari1+". Nello scontro con "+pari2+" le due compagini non riescono a penetrare le rispettive difese lasciando a bocca asciutta i propri tifosi."+golvince+" - "+golperde+"<br>"); 
arrPareG00[8]=new Par00("I tifosi di "+pari1+" che hanno supportato i loro beniamini per tutti i 90 minuti sono rimasti delusi dal misero "+golvince+" a "+golperde+" ottenuto con "+pari2+".<br>");
arrPareG00[9]=new Par00("Stretta di mano tra "+PresPari1+" e "+PresPari2+" al termine delle ostilità. Nessuno dei due è riuscito a prevaricare l'avversario. Lo scontro si è concluso con un triste "+golvince+" a "+golperde+".<br>");
arrPareG00[10]=new Par00("Noia mortale nello scontro tra "+pari1+" e "+pari2+". I fischi hanno accompagnato l'intera partita conclusasi sullo "+golvince+" a "+golperde+". Unico momento di suspance è stato lo smarrimento del bimbo Gigi di cui ci auguriamo sinceramente il ritrovamento.<br>");
arrPareG00[11]=new Par00("Tra "+pari1+" e "+pari2+" vince lo sbadiglio: "+golvince+" a "+golperde+" e nessuno si fa male.<br>");
arrPareG00[12]=new Par00("Attacchi spuntati in "+pari2+" - "+pari1+": al 90' nulla di fatto e un punto ciascuno col minimo sforzo.<br>");
arrPareG00[13]=new Par00(PresPari1+" e "+PresPari2+" scelgono di non farsi male: "+pari1+" - "+pari2+" finisce "+golvince+" a "+golperde+".<br>");
arrPareG00[14]=new Par00("Per vincere bisogna segnare, ma né "+pari1+" né "+pari2+" ne hanno l'intenzione!<br>");
arrPareG00[15]=new Par00("Bella giornata. Temperatura ottimale per fare una bella gita in montagna o al mare. Oppure un bel pic-nic con la famiglia. Ah, sembra ci fosse una partita tra "+pari1+" e "+pari2+". Qualsiasi cosa sarebbe stata più bella ed emozionante di questo sonnolento "+golvince+" a "+golperde+".<br>"); 

var l00 = arrPareG00.length-2
var num00=null;
while(num00==null||Confronto9.Contain(num00))
num00 =(Math.round(l00*Math.random()))+1;	
Confronto9[Confronto9.length]= num00
document.write(arrPareG00[num00].frase);
//STAMPA COMMENTO SENZA CONFRONTO
//var l00 = arrPareG00.length-2
//var num00 = (Math.round(l00*Math.random()))+1;	
//document.write(arrPareG00[num00].frase);
}
//*****************************************


//DEFINISCO LA CASISTICA DELLE FRASI - PAREGGIO 1-1
//*********************************************************
function PareggioG11(pari1,pari2,golvince,golperde,PresPari1,PresPari2) {
function Par11(frase) {
	this.frase = frase
}
var arrPareG11=new Array()
arrPareG11[1]=new Par11("Finisce in parità tra"+pari1+" e "+pari2+". Il risultato di "+golvince+" a "+golperde+" però, non soddisfa ne "+PresPari1+" ne "+PresPari2+".<br>");
arrPareG11[2]=new Par11(golvince+" a "+ golperde+" è il risultato tra "+pari1+" e "+pari2+", "+PresPari1+" e"+PresPari2+" si dividono la posta.<br>");
arrPareG11[3]=new Par11("Tra "+PresPari1+" e "+PresPari2+" finisce "+golvince+" a "+golperde+". Un punto per ciascuno e tutti contenti!<br>");
arrPareG11[4]=new Par11(pari1+" e "+pari2+" si dividono la posta pareggiando per "+golvince+" a "+golperde+". Ne "+PresPari1+" ne "+PresPari2+" riesco a fare bottino pieno. Sarà per la prossima volta!<br>");
arrPareG11[5]=new Par11("Una rete per parte e "+pari1+" e "+pari2+" ottengono un pareggio che non permette grandi balzi in classifica.<br>") 
arrPareG11[6]=new Par11("Pareggio annunciato tra "+pari1+" e "+pari2+". Finisce "+golvince+" - "+golperde+" con i portieri in grande spolvero. Con i pareggi non ci si salva, ha dichiarato "+PresPari1+".<br>"); 
arrPareG11[7]=new Par11("Dopo le innumerevoli occasioni, per chiudere la partita fallite, il gol su rigore allo scadere. "+pari1+" - "+pari2+": "+golvince+" - "+golperde+". Non si può gettare alle ortiche 2 punti così ha dichiarato "+PresPari1+".<br>"); 
arrPareG11[8]=new Par11("Nella sfida tra "+pari1+" e "+pari2+" manca il guizzo finale: "+golvince+" - "+golperde+" e sia "+PresPari1+" che "+PresPari2+" sono contenti a metà.<br>");
arrPareG11[9]=new Par11("Al 90' "+pari1+" e "+pari2+" si fermano sul "+golvince+" a "+golperde+", ma un punto è meglio di niente... forse!<br>"); 
arrPareG11[10]=new Par11("Tra "+pari1+" e "+pari2+" è pareggio con un gol a testa e le distanze in classifica rimangono invariate.<br>"); 
arrPareG11[11]=new Par11(PresPari1+" si lamenta, ma a "+PresPari2+" il pari va stretto: "+pari2+" a un passo dal colpaccio: finisce "+golvince+" a "+golperde+".<br>"); 
arrPareG11[12]=new Par11(pari1+" e "+pari2+" si spartiscono la torta: un gol a testa e nessuno si fa male.<br>"); 
arrPareG11[13]=new Par11("Tra "+pari1+" e "+pari2+" finisce col più classico dei pareggi; è un "+golvince+" a "+golperde+" poco utile per entrambi.<br>");
arrPareG11[14]=new Par11("Nel primo tempo "+pari1+" gioca meglio e segna "+golvince+" gol. Nel secondo tempo, invece, è "+pari2+" a giocare meglio e realizzare "+golperde+" gol. Che dire... risultato giusto e un punto ciascuno.<br>");
arrPareG11[15]=new Par11(golvince+" a "+golperde+". "+PresPari1+" è soddisfatto della sua gara mentre "+PresPari2+"... è soddisfatto anche lui: in pratica "+pari1+" e "+pari2+" adottano la filosofia: 'un punto è meglio di niente!'<br>");

var l11 = arrPareG11.length-2
var num11=null;
while(num11==null||Confronto10.Contain(num11))
num11 =(Math.round(l11*Math.random()))+1;	
Confronto10[Confronto10.length]= num11
document.write(arrPareG11[num11].frase);
//STAMPA COMMENTO SENZA CONFRONTO
//var l11 = arrPareG11.length-2
//var num11 = (Math.round(l11*Math.random()))+1;
//document.write(arrPareG11[num11].frase);
}
//*****************************************

//DEFINISCO LA CASISTICA DELLE FRASI - PAREGGIO 2-2 e 3-3
//*********************************************************
function PareggioG33(pari1,pari2,golvince,golperde,PresPari1,PresPari2) {
function Par33(frase) {
	this.frase = frase
}
var arrPareG33=new Array()
arrPareG33[1]=new Par33("Gol e spettacolo tra"+pari1+" e "+pari2+". Il risultato di "+golvince+" a "+golperde+" non soddisferà ne "+PresPari1+" ne "+PresPari2+" ma ha sicuramente divertito il pubblico.<br>");
arrPareG33[2]=new Par33(golvince+" a "+ golperde+" è il risultato dello spumeggiante incontro tra "+pari1+" e "+pari2+", "+PresPari1+" e"+PresPari2+" si dichiarano soddisfatti delle loro squadre.<br>");
arrPareG33[3]=new Par33(PresPari1+" non riesce a battere "+PresPari2+" finisce "+golvince+" a "+golperde+" una partita ricca di emozioni e cambi di fronte che frutta, però, soltanto un punto a testa!<br>");
arrPareG33[4]=new Par33(pari1+" e "+pari2+" fanno "+golvince+" a "+golperde+". "+PresPari1+" e "+PresPari2+" si godono lo spettacolo ricco di gol dalla panchina ed applaudono i loro ragazzi.<br>");
arrPareG33[5]=new Par33("Fuochi d'artificio per "+pari1+" e "+pari2+", ma alla fine entrambi sono contenti a metà.<br>"); 
arrPareG33[6]=new Par33("Tra "+pari1+" e "+pari2+ " i gol si sprecano: tanta fatica, ma solo un punticino!<br>");
arrPareG33[7]=new Par33("A "+pari1+" e "+pari2+" manca lo sprint finale ed entrambi si accontentano del pari: "+golvince+" a "+golperde+".<br>"); 
arrPareG33[8]=new Par33("Più che una partita di professionisti, sembrava una gara tra scapoli ed ammogliati: difese scoperte e portieri alla mercè degli attaccanti. "+pari1+" e "+pari2+" ottengono un punto grazie al "+golvince+" a "+golperde+".<br>"); 
arrPareG33[9]=new Par33("Difese ballerine e gli attaccanti hanno vita facile, divertendosi a chi segna di più. La partita tra "+pari1+" e "+pari2+" è stata divertente da vedere e il "+golvince+" a "+golperde+" porta un punto ad entrambe.<br>"); 
arrPareG33[10]=new Par33(PresPari1+" e "+PresPari2+" non possono rammaricarsi, i loro giocatori hanno avuto parecchie occasioni e le hanno sfruttate al meglio, ma purtroppo per loro, nessuno l'ha spuntata. "+pari1+" e "+pari2+" pareggiano per "+golvince+" a "+golperde+".<br>");
arrPareG33[11]=new Par33("Dopo essere andati sotto di "+golvince+" gol, la partita sembrava chiusa, ma nel secondo tempo "+pari2+" si presenta in campo con un altro spirito. Alla fine il risultato è di "+golvince+" - "+golperde+", facendo tirare un sospiro di sollievo a "+PresPari2+".<br>"); 
arrPareG33[12]=new Par33("Il primo tempo si era chiuso in favore di "+pari2+" per 0 - "+golperde+". Nell'intervallo "+PresPari1+" sceso negli spogliatoi ha fatto capire ai giocatori che il loro stipendio era a rischio. Fatto sta che con "+golvince+" rigori dubbi "+pari1+" acciuffa il pareggio nel finale. "+golvince+" - "+golperde+".<br>"); 
arrPareG33[13]=new Par33("Emozioni senza fine tra "+pari1+" e "+pari2+"; dopo un frenetico botta e risposta, al 90' è "+golvince+" - "+golperde+"!<br>");
arrPareG33[14]=new Par33("Finale al cardiopalma per "+pari1+": "+pari2+" la raggiunge fissando il risultato sul "+golvince+" a "+golperde+".<br>"); 
arrPareG33[15]=new Par33(pari1+" - "+pari2+" è la fiera del gol, ma il "+golvince+" - "+golperde+" finale produce solo un punticino a testa.<br>");

var l33 = arrPareG33.length-2
var num33=null;
while(num33==null||Confronto11.Contain(num33))
num33 =(Math.round(l33*Math.random()))+1;	
Confronto11[Confronto11.length]= num33
document.write(arrPareG33[num33].frase);
//STAMPA COMMENTO - METODO SENZA CONFRONTO
//var l33 = arrPareG33.length-2
//var num33 = (Math.round(l33*Math.random()))+1;	
//document.write(arrPareG33[num33].frase);

}
//*****************************************

//DEFINISCO LA CASISTICA DELLE FRASI - PAREGGIO 4-4 o superiore
//*********************************************************
function PareggioG44(pari1,pari2,golvince,golperde,PresPari1,PresPari2) {
function Par44(frase) {
	this.frase = frase
}
var arrPareG44=new Array()
arrPareG44[1]=new Par44("Finisce in parità tra"+pari1+" e "+pari2+". Il risultato di "+golvince+" a "+golperde+" però, non soddisfa ne "+PresPari1+" ne "+PresPari2+".<br>");
arrPareG44[2]=new Par44(golvince+" a "+ golperde+" è il risultato tra "+pari1+" e "+pari2+", "+PresPari1+" e "+PresPari2+" si dividono la posta.<br>");
arrPareG44[3]=new Par44("Tra "+PresPari1+" e "+PresPari2+" finisce "+golvince+" a "+golperde+". Un punto per ciascuno e tutti contenti!<br>");
arrPareG44[4]=new Par44(pari1+" e "+pari2+" si dividono la posta pareggiando per "+golvince+" a "+golperde+". Ne "+PresPari1+" ne "+PresPari2+" riesco a fare bottino pieno. Sarà per la prossima volta!<br>");
arrPareG44[5]=new Par44("Spettacolo puro per i tifosi in casa della "+pari1+", un "+golvince+" a "+golperde+" pirotecnico ed i mister "+PresPari1+" e "+PresPari2+", soddisfatti dello spettacolo, ottengono un punto a testa.<br>") 
arrPareG44[6]=new Par44(PresPari1+ " a rischio infarto: "+pari1+" ne fa "+golvince+", ma l'11 di "+PresPari2+" pareggia il conto!.<br>");
arrPareG44[7]=new Par44(pari1+" - "+pari2+" : "+golvince+" a "+golperde+": e pensare che c'è chi fa 3 punti con un misero 66... <br>");
arrPareG44[8]=new Par44("Situazione surreale in "+pari1+" - "+pari2+": è un'orgia di gol, +golvince+ a testa!<br>");
arrPareG44[9]=new Par44(PresPari1+" amareggiato dalla mancata vittoria, "+PresPari2+" orgoglioso dei suoi! Ed è finita "+golvince+" a "+golperde+"<br>"); 
arrPareG44[10]=new Par44(pari1+": "+golvince+" - "+pari2+": "+golperde+", che altro dire!!! Lo spettacolo è stato servito.<br>"); 
arrPareG44[11]=new Par44(PresPari1+" e "+PresPari2+" si sono scambiati i complimenti dichiarando che il risultato di "+golvince+" a "+golperde+" riconcilia il pubblico con il calcio.<br>");
arrPareG44[12]=new Par44("Partita spettacolare. Indimenticabile. Un "+golvince+" a "+golperde+" che non serve ne a "+pari1+" ne a "+pari2+"  ma che gli spettatori ricorderanno a lungo.<br>"); 
arrPareG44[13]=new Par44("Da tempo non si vedevano tanti goal nella stessa partita. "+PresPari1+" recrimina e accusa aspramente l'arbitro per l'eccessivo recupero che gli è costato il pareggio nel finale, mentre "+PresPari2+" ringrazia i suoi ragazzi per questp avvincente "+golvince+" a "+golperde+".<br>");
arrPareG44[14]=new Par44("Gara emozionante e ricca di goal tra "+pari1+" e "+pari2+". Un "+golvince+" a "+golperde+" che farà storia.<br>"); 
arrPareG44[15]=new Par44(PresPari2+" è soddisfattissimo per avere strappato un pareggio così difficile contro "+pari1+", mentre "+PresPari1+" visibilmente amareggiato critica aspramente la prestazione del proprio reparto difensivo: il finale è "+pari1+" - "+pari2+": "+golvince+" a "+golperde+".<br>");

var l44 = arrPareG44.length-2
var num44=null;
while(num44==null||Confronto12.Contain(num44))
num44 =(Math.round(l44*Math.random()))+1;	
Confronto12[Confronto12.length]= num44
document.write(arrPareG44[num44].frase);
//STAMPA COMMENTO SENZA CONFRONTO
//var l44 = arrPareG44.length-2
//var num44 = (Math.round(l44*Math.random()))+1;
//document.write(arrPareG44[num44].frase);
}
//*****************************************
//***** FINE CASISTICA DELLE FRASI - PAREGGIO *****



} //FINE FUNZIONE CONTROLLAVINCENTE



//********  FILE NECESSARI ED ISTRUZIONI PER L'USO    **********
//RIFERIMENTI CHE DEVONO ESSERE PRESENTI NELLA PAGINA DI RICHIAMO
//<script src="js/fcmVariabili.js" type="text/javascript"></script> 
//<script src="js/fcmSerieADati.js" type="text/javascript"></script>  
//<script src="js/fcmGenerale.js" type="text/javascript"></script>  
//<script src="js/fcmCompetizioniFunzioni.js" type="text/javascript"></script>
//<script src="js/fcmCompetizioniDati.js" type="text/javascript"></script> 
//<script src="js/fcmCalendarioFunzioni.js" type="text/javascript"></script>
//<script src="js/fcmCalendarioDati.js" type="text/javascript"></script> 
//<script src="js/fcmRisultatiFunzioni.js" type="text/javascript"></script>
//<!-- <script src="js/fcmNewsGenerator.js" type="text/javascript"></script> -->
//<script type="text/javascript">
//document.write("<script src='js/fcmRisultatiDati"+GetUltimaGiornataGiocata()+".js' type='text/javascript'></scr" //+ "ipt>")	
//</script>

//TESTO PER RICHIAMARE LO SCRIPT DA INSERIRE DOVE NECESSARIO
// <script src="js/fcmNewsGenerator.js" type="text/javascript"></script>

