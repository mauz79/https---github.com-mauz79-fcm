//fcmFormazioniFunzioniSK versione 1.0 
//visualizzazione dei titolari su campo da gioco in stile Gazzetta
//Funziona su Mozilla Firefox, Opera, Safari... ma non su Internet Explorer dato che non rispetta gli standard
//editato da SuperKaze

// Oggetto Formazione (abbreviato Z)
function Z(IDIncontro,IDSquadra,IDLega,Nome,SquadraDiA,Ruolo,Pos,Rig) {
	this.IDIncontro = IDIncontro
	this.IDSquadra = IDSquadra
	this.IDLega = IDLega
	this.Nome = Nome
	this.SquadraDiA = SquadraDiA
	this.Ruolo = Ruolo
	this.Pos = Pos
	this.Rig = Rig
}
function GetFormazione(IDIncontro,IDSquadra,IDLega) {
	// scorre la lista delle formazioni e ritorna tutte quelle che
	// hanno i tre valori corrispondenti. Quindi le ordina per pos
	// mettendo pero' quelli con -1 alla fine e non all'inizio
	var arr = new Array()
	var i,cnt=1
	var tipo,pPrimo,pUltimo
	for (i=1;i<arrFormazioni.length;i++) {
		if ((arrFormazioni[i].IDIncontro==IDIncontro) && (arrFormazioni[i].IDSquadra==IDSquadra) && (arrFormazioni[i].IDLega==IDLega)) {
			arr[cnt]=new Z
			arr[cnt]=arrFormazioni[i]
			cnt++
		} else {
			if (cnt>1) i=arrFormazioni.length
		}
	}
	//ordina
	for (i=1;i<arr.length;i++) {
		if (arr[i].Pos==-1) arr[i].Pos=999
	}
	if (arr.length>1) {
		QuickSortFormazioniPos(arr,1,arr.length-1)
		for (i=1;i<arr.length;i++) {
			if (arr[i].Pos==999) arr[i].Pos=-1
		}
		//ora ordina per ruolo all'interno delle tipologie
		// titolari
		pPrimo=arr.length-1
		pUltimo=1
		for (i=1;i<arr.length;i++) {
			if (arr[i].Pos==0) {
				if (i<pPrimo) pPrimo=i
				pUltimo=i
			}
		}
		if (pPrimo<pUltimo)	QuickSortFormazioniRuolo(arr,pPrimo,pUltimo)
		//riserve
		pPrimo=arr.length-1
		pUltimo=1
		for (i=1;i>arr.length;i++) {
			if (arr[i].Pos>0) {
				if (i<pPrimo) pPrimo=i
				pUltimo=i
			}
		}
		if (pPrimo<pUltimo)	QuickSortFormazioniRuolo(arr,pPrimo,pUltimo)
		//tribuna
		pPrimo=arr.length-1
		pUltimo=1
		for (i=1;i<arr.length;i++) {
			if (arr[i].Pos==-1) {
				if (i<pPrimo) pPrimo=i
				pUltimo=i
			}
		}
		if (pPrimo<pUltimo)	QuickSortFormazioniRuolo(arr,pPrimo,pUltimo)
	}
	return arr
}
function QuickSortFormazioniPos(arr,s,d) {
	var i,j,X,m
	var z1
	i = s
	j = d
	X = arr[Math.floor((s+d)/2)].Pos
	do {
		while (arr[i].Pos < X) {
			i++
		}
		while (X < arr[j].Pos) {
			j--
		}
		if (i<=j) {
			z1=arr[i]
			arr[i]=arr[j]
			arr[j]=z1
			i++
			j--
		}
	} while (i<=j)
	if (s<j) QuickSortFormazioniPos(arr,s,j)
	if (i<d) QuickSortFormazioniPos(arr,i,d)
}
function QuickSortFormazioniRuolo(arr,s,d) {
	var i,j,X,m
	var z1
	i = s
	j = d
	X = arr[Math.floor((s+d)/2)].Ruolo
	do {
		while (arr[i].Ruolo < X) {
			i++
		}
		while (X < arr[j].Ruolo) {
			j--
		}
		if (i<=j) {
			z1=arr[i]
			arr[i]=arr[j]
			arr[j]=z1
			i++
			j--
		}
	} while (i<=j)
	if (s<j) QuickSortFormazioniRuolo(arr,s,j)
	if (i<d) QuickSortFormazioniRuolo(arr,i,d)
}
function GeneraFormazioni(cGio,cComp) {
	var arrI = new Array()
	var f = new Array()
	var tabe = new Object()
	var str="",i,j
	var ruolo,pd,colore
	var mostra
	if (SezioniChiuse=="no") {
		mostra=""
	} else {
		mostra="display: none; "
	}
	// includi nel documento il file js corrispondente alla giornata
	//document.write("<script src='js/fcmFormazioniDati"+cGio+".js' type='text/javascript'></scr" + "ipt>")
	// carica la lista degli incontri di questa giornata e competizione
	arrI = RiempiListaIncontri(cGio,cComp)
	// per ogni incontro
	// 1- apri un layer
	// 2- crea la tabella
	for (i=1;i<arrI.length;i++) {
		// layer di intestazione
		
		document.write("<div id='lay"+arrI[i].ID+"H' class='IntLayer'><a href='#' onClick='invertiDisplayLayer(\"lay"+arrI[i].ID+"\")'>"+arrI[i].Nomi.Casa+((arrI[i].IDTipo==INC_GRANPREMIO)?"":" - "+arrI[i].Nomi.Fuori)+"</a></div>")
		// layer di contenuti
		document.write("<div id='lay"+arrI[i].ID+"' style='" + mostra + " height=100%'>")
		// tabella che contiene gli incontri
		document.write("<center><table width='95%' border=0 cellpadding=0 cellspacing=0><tr><td height='20' colspan="+((arrI[i].IDTipo==INC_GRANPREMIO)?"1":"2")+" align='center'>")
		document.write("<span class='CompetizioneForm'>"+arrI[i].Competizione+": "+arrI[i].Fantagiornata+"</span></td></tr>")
		// riga inferiore
		document.write("<tr>")
		// tabella di sinistra (o unica se gran premio)
		document.write("<td width='"+((arrI[i].IDTipo==INC_GRANPREMIO)?"100":"50")+"%' align='center' valign='top'>")

		// tabella casa
		f=GetFormazione(arrI[i].ID,arrI[i].IDSquadre.Casa,arrI[i].IDLegaSquadre.Casa)
		

		
		//Vengono cercate le immagini del Logo della Fantasquadra e la maglia della fantasquadra.
		//Nel mio si trovano tutte nella cartella "img/fsq"
		//ogni maglia si chiama come il nome della squadra.gif
		//ogni logo si chiama come il nome della squadra.png
		
		//VARIABILI da poter Personalizzare in modo semplice, all'interno del file fcmFormFieldSKDati.js
		var cartella = getCartella()
		var estMaglia = getEstMaglia() 
		var estLogo = getEstLogo()
		var estPresidente = getEstPresidente()
		var skin = getSkin()
		var altezza = getAltezza()
		var larghezza = getLarghezza()
		var bgcolor = getBgColor()
		
		var numPanchinari = getNumPanchinari() // restituisce il numero dei panchinari, 0 se non c'è una lunghezza fissa per la panchina
		var tipoPanchina = getTipoPanchina() // 1 per la panchina ordinata per ruolo, 0 per l'ordine di apparizione
		var tipoTrib = getTribuna() // 1 per visualizzare la tribuna, 0 per nasconderla
		
		var casa = filterSpecial(arrI[i].Nomi.Casa)
		var fuori = filterSpecial(arrI[i].Nomi.Fuori)
		var incontro
		if (arrI[i].IDTipo!=INC_GRANPREMIO){
			incontro = casa + " - " + fuori
		}
		else incontro = ""
		
		//document.write("<img align=middle src='img/fsq/"+ arrI[i].Nomi.Casa +".gif'> ")
		//document.write("<br>")
		//INIZIO Oggetto Flash Casa
		// Squadra di Casa	
		if (f.length>=11){
			document.write("<object classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000' codebase='http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0' name='fantatest' width="+larghezza+" height="+altezza+" align='middle' id='fantatest' http:='' macromedia.com='' cabs='' swflash.cab#version='6,0,0,0&quot;&quot;'><param name='movie' value='" + skin + "'><param name='quality' value='high'><param name='bgcolor' value="+bgcolor+">")
			
			//INIZIO parte per Browser standard come Firefox
			document.write("<embed src='" + skin + "' quality='high' bgcolor="+bgcolor+" name='fantatest' type='application/x-shockwave-flash' pluginspage='http://www.macromedia.com/go/getflashplayer' align=''  width="+larghezza+" height="+altezza+" flashvars='nomeSquadra=" + casa.toUpperCase() + "&match=" + incontro + "&imgFsq=" + cartella + casa + estMaglia + "&imgLogo=" + cartella + casa + estLogo + "&imgPresidente=" + cartella + casa + estPresidente + "&tipoPanchina=" + tipoPanchina + "&panchinari=" + numPanchinari + "&tipoTrib=" + tipoTrib)
			
			
			DisponiSuCampo(f, casa)

			document.write("'>")
			
			//FINE parte per Firefox
			
			//INIZIO parte per Internet Explorer
			document.write("<param name='FlashVars' value='nomeSquadra=" + casa.toUpperCase() + "&match=" + incontro + "&imgFsq=" + cartella + casa + estMaglia + "&imgLogo=" + cartella + casa + estLogo + "&imgPresidente=" + cartella + casa + estPresidente + "&tipoPanchina=" + tipoPanchina + "&panchinari=" + numPanchinari + "&tipoTrib=" + tipoTrib)
			if (f.length>=11){
				DisponiSuCampo(f, casa)
			}
			else {
				document.write("&giocatori=" + f.length)
			}
			document.write("'>")
			
			document.write("</embed></object>")
			
		}
		else {
			document.write("<div align=center>Formazione non ancora inviata</div>")
		}
		//FINE Oggetto Casa
		
		document.write("</td>")
		
		if (arrI[i].IDTipo!=INC_GRANPREMIO) {
			document.write("<td width='50%' align='center' valign='top'>")
			// tabella fuori

			f=GetFormazione(arrI[i].ID,arrI[i].IDSquadre.Fuori,arrI[i].IDLegaSquadre.Fuori)
			
			//document.write("<img align=middle src='img/fsq/"+ arrI[i].Nomi.Fuori +".gif'> ")
			//document.write("<br>")

			//INIZIO Oggetto Flash Fuori Casa
			// Squadra Fuori Casa
			
			if (f.length>=11){
				document.write("<object classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000' codebase='' name='fantatest' width="+larghezza+" height="+altezza+" align='middle' id='fantatest' http:='' macromedia.com='' cabs='' swflash.cab#version='6,0,0,0&quot;&quot;'><param name='movie' value=" + skin + "><param name='quality' value='high'><param name='bgcolor' value="+bgcolor+">")
				
				//INIZIO parte per Browser standard come Firefox
				document.write("<embed src=" + skin + " quality='high' bgcolor="+bgcolor+" name='fantatest' type='application/x-shockwave-flash' pluginspage='http://www.macromedia.com/go/getflashplayer' align=''  width="+larghezza+" height="+altezza+" flashvars='nomeSquadra=" + fuori.toUpperCase() + "&match=" + incontro + "&imgFsq=" + cartella + fuori + estMaglia + "&imgLogo=" + cartella + fuori + estLogo + "&imgPresidente=" + cartella + fuori + estPresidente + "&tipoPanchina=" + tipoPanchina + "&panchinari=" + numPanchinari + "&tipoTrib=" + tipoTrib)
				if (f.length>=11){
					DisponiSuCampo(f, fuori)
				}
				else {
					document.write("&giocatori=" + f.length)
				}	
				document.write("'>")
				//FINE parte per Firefox
				
				//INIZIO parte per Internet Explorer
				document.write("<param name='FlashVars' value='nomeSquadra=" + fuori.toUpperCase() + "&match=" + incontro + "&imgFsq=" + cartella + fuori + estMaglia + "&imgLogo=" + cartella + fuori + estLogo + "&imgPresidente=" + cartella + fuori + estPresidente + "&tipoPanchina=" + tipoPanchina + "&panchinari=" + numPanchinari + "&tipoTrib=" + tipoTrib)
				if (f.length>=11){
					DisponiSuCampo(f, fuori)
				}
				else {
					document.write("&giocatori=" + f.length)
				}	
				document.write("'>")
				
				document.write("</embed></object>")
				
			}
			else {
				document.write("<div align=center>Formazione non ancora inviata</div>")
			}
			//FINE Oggetto Fuori Casa
			

			document.write("</td>")
		}
		document.write("</tr>")
		document.write("<tr><td height='20' colspan="+((arrI[i].IDTipo==INC_GRANPREMIO)?"1":"2")+" align='center'></td></tr>")
		//chiudi tabella degli incontri
		document.write("</table></center>")
		// chiudi il layer di contenuti
		document.write("</div>")
	}
}

function DisponiSuCampo(f,nome) {
	var j, dif=0, cen=0, att=0
	// titolari
	for (j=1;j<=11;j++) {
		//conteggio del numero di giocatori titolari per ciascun ruolo per calcolare lo schema usato
		if (f[j].Ruolo==2){dif++}			
		if (f[j].Ruolo==3){cen++}					
		if (f[j].Ruolo==4){att++}
		
		//vengono recuperati i nomi dei giocatori, la loro squadra e l'id del ruolo
		document.write("&player" + j + "=" + toProperCase(filter(f[j].Nome)))
		document.write("&sq" + j + "=" + f[j].SquadraDiA)
		document.write("&r" + j + "=" + f[j].Ruolo)
	}
	//panchina, e tribuna
	for (j=(11+1);j<f.length;j++) {			
		document.write("&player" + j + "=" + toProperCase(filter(f[j].Nome)))
		document.write("&sq" + j + "=" + f[j].SquadraDiA)
		document.write("&r" + j + "=" + f[j].Ruolo)
	}
	document.write("&schema=" + dif + "-" + cen + "-" + att)
}

//FUNZIONCINE UTILI

//Elimina solo gli spazi. Non la uso
function removeSpaces(string) {
	var tstring = "";
	string = '' + string;
	splitstring = string.split(" ");
	for(i = 0; i < splitstring.length; i++)
	tstring += splitstring[i];
	return tstring;
}

//elimina le minuscole e l'apice dalla stringa in input
function filterSpecial(str) {
	re = /\?|\"|'/g;
	// remove special characters like "$" and "," etc...
	return str.replace(re, "");
}

//elimina le minuscole e l'apice dalla stringa in input
function filter(str) {
	re = /a|b|c|d|e|f|g|h|i|j|k|l|m|n|o|p|q|r|s|t|u|v|w|x|y|z|à|è|ì|ò|ù|'|\./g;
	// remove special characters like "$" and "," etc...
	return str.replace(re, "");
}

//elimina le iniziali maiuscole  dei Nomi che rimangono.. 
//Non la uso perchè così viene tagliata anche la seconda iniziale di chi ha un cognome doppio: Julio Cesar > Julioesar
function refine(str) {
	re = / A| B| C| D| E| F| G| H| I| J| K| L| M| N| O| P| Q| R| S| T| U| V| W| X| Y| Z|\./g;
	// remove special characters like "$" and "," etc...
	return str.replace(re, "");
}

//Mette l'iniziale di ogni parola in maiuscolo e il resto in minuscolo: In Questo Modo Qui
	// proper case function (JScript 5.5+)
	function toProperCase(s){
		return s.toLowerCase().replace(/^(.)|\s(.)/g,
		function($1) { return $1.toUpperCase(); });
	}
