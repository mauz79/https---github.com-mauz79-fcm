function PerCento(CodiceGiocatore) {
	for (k = 1; k < arrPuffinPercento.length; k++) {
	var pc = arrPuffinPercento[k]
		for (j = 1; j < arrGiocatoriA.length; j++) {
			if (arrGiocatoriA[j].ID == CodiceGiocatore) {
			CodeOk = arrGiocatoriA[j].Codice
			break;
			}
		}

			if (pc.Giocatore == CodeOk) {
				if (pc.Percentuale >= 80) {
				charge = 3;
				} else if (pc.Percentuale > 50 && pc.Percentuale < 80) {
				charge = 2;
				} else if (pc.Percentuale > 20 && pc.Percentuale <= 50) {
				charge = 1;
				} else if (pc.Percentuale <= 20) {
				charge = 0;
				}
				if (pc.Stato == 1) {
			return "I:" + pc.Percentuale + "% <img style='border:none;' alt='' src='./img/"+charge+".png'/>" ;
			} else if (pc.Stato == 2) {
			charge = "e"
			return  pc.Percentuale + "% <img style='border:none;' alt='' src='./img/"+charge+".png'/>";
			} else {
			return  pc.Percentuale + "% <img style='border:none;' alt='' src='./img/"+charge+".png'/>";
			}
			break;
			}
				
		
	}

}