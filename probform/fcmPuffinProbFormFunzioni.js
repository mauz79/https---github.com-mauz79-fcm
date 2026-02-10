function creafile(Prox)
{
   document.getElementById('div_loading').style.visibility = "visible";    
   document.getElementById("miaImg").onload=function() {
	 document.getElementById("LoadingFc").src="probform/loader/loaded.gif";   
	 document.getElementById('quotidianoFCC').style.background = "#D6E8A8"; 
	 document.getElementById('loadingFCC').style.background = "#D6E8A8";  
	 document.getElementById('Fc').style.color = "green";
	 document.getElementById("Fc").innerHTML = "<b>Dati letti!</b>";
	 document.getElementById('div_loading').style.visibility = "hidden";	
	 document.getElementById('div_loading').style.visibility = "hidden";
	 alert ("Generazione Dati Probabili Formazioni: TERMINATO!\nVai alla pagina Invio Formazioni!");
   top.frames['framevisualizzazionepagine'].location.href='./invform.php';
	}
	 document.getElementById("miaImg").src="probform/PuffinProbFormFc.php";
}

function ProbFormFc(NomeCognome,GiocatoriASquadra) {
	if (CheckFc(NomeCognome,GiocatoriASquadra) == undefined) {
		return "<img style='border:none;' alt='' src='probform/status_noinfo.gif'/>";
	} else if (CheckFc(NomeCognome,GiocatoriASquadra) == "non disponibile") {
		return "<img style='border:none;' alt='' src='probform/status_alert.gif'/>";
	} else {
		return "<img style='border:none;' alt='' src='probform/status_"+CheckFc(NomeCognome,GiocatoriASquadra)+".gif'/>";
	}
}

function CheckFc(NomeCognome,GiocatoriASquadra) {
	for (j=1;j<arrProbFormFc.length;j++){
		if ( (GiocatoriASquadra != "{SERIE MINORE}") || (GiocatoriASquadra != "{SERIE ESTERA}") || (GiocatoriASquadra != "{ELIMINATA}")) {
			if(arrProbFormFc[j].Squadra == GiocatoriASquadra) {
				Nome = NomeCognome.split(" ")
				if (Nome.length >1) {
					var PartiNome = new Array();
  				caratteri = /([a-z])/;
					for (l=0;l<Nome.length;l++){
					   if(!caratteri.test(Nome[l]))PartiNome[l] = Nome[l];
			 		}
					Nome[0] = PartiNome.join("");
				}	
				NomePF = arrProbFormFc[j].Nome.replace("'","");
				NomePF = stripVowelAccent(arrProbFormFc[j].Nome);
				if (NomePF != "") {
					if (Nome[0] == NomePF) {
						return arrProbFormFc[j].Status
						break;
					} 
				} else if (NomePF == "") { 
					return "non disponibile";
					break;
				}
			}
		} 
	}
}

function stripVowelAccent(str) {
	var s=str;
	var rExps=[ /[\xC0-\xC2]/g, /[\xE0-\xE2]/g,
	/[\xC8-\xCA]/g, /[\xE8-\xEB]/g,
	/[\xCC-\xCE]/g, /[\xEC-\xEE]/g,
	/[\xD2-\xD4]/g, /[\xF2-\xF4]/g,
	/[\xD9-\xDB]/g, /[\xF9-\xFB]/g ];
	var repChar=['A\'','a\'','E\'','e\'','I\'','i\'','O\'','o\'','U\'','u\''];
	for(var i=0; i<rExps.length; i++)
	s=s.replace(rExps[i],repChar[i]);
	return s;
}
