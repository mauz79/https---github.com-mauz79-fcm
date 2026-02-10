// 
// puffin BigMatch
//
// by puffin 
//
// ver. 1.0
//
// Calcolo automatico del BigMatch della prossima giornata
// ***************************************************************
// N.b.: Script sconsigliato per leghe con più di 10 squadre e/o
// con più di 3 competizioni.
// ***************************************************************




//***********************************************************************
//PER UTILIZZARE LO SCRIPT RIFERENDOSI AD UNA UNICA COMPETIZIONE SEGUIRE
//LE 2 FASI DI SEGUITO RIPORTATE.
//************************************************************************

//FASE 1
//DECOMMENTARE LE SEGUENTI RIGHE SE UTILIZZATE LO SCRIPT PER UNA UNICA COMPETIZIONE

//Num = 3; //Specificare il numero della competizione scelta come da esempio 
//Numero_Comp = Num+1;

//ESEMPIO PER SCELTA COMPETIZIONE
//aprite il file fcmCompetizioniDati.js
//avrete all'inizio qualcosa tipo:
//arrCompetizioni[1]=new Competizione(1,"Campionato",1,1,1)
//arrCompetizioni[2]=new Competizione(2,"SuperCoppa",1,2,1)
//arrCompetizioni[3]=new Competizione(4,"Coppa",1,4,1)
//Il numero che vi interessa è quello tra le parentesi quadre!
//Es. se voglio il bigmatch di SuperCoppa il valore di Num = 2, per il campionato Num = 1, per la Coppa Num = 3. 


//FASE 2
//COMMENTATE LE SEGUENTI RIGHE
Numero_Comp = arrCompetizioni.length; //Commentare questa riga nel caso di unica competizione
Num = 1;

//NON MODIFICARE IL CODICE SEGUENTE!
//*******************************************************************************


NumIncDaGioc = RiempiListaIncontri(GetProssimaGiornataDaGiocare(),0).length-1
NumSqudre = arrFantasquadre.length-1
function ClassiF(compet,nome,posizione,punti) {
	this.compet = compet
	this.nome = nome
	this.posizione = posizione
	this.punti = punti

}
function Peso(pes,Sqcasa,Sqfuori,PuntiSqcasa,PuntiSqfuori) {
	this.pes = pes
	this.Sqcasa = Sqcasa
	this.Sqfuori = Sqfuori
	this.PuntiSqcasa = PuntiSqcasa
	this.PuntiSqfuori = PuntiSqfuori
}

function BigMatch(CompBM,pesoBM,SqcasaBM,SqfuoriBM,diffPunti) {
	this.CompBM = CompBM
	this.pesoBM = pesoBM
	this.SqcasaBM = SqcasaBM
	this.SqfuoriBM = SqfuoriBM
	this.diffPunti = diffPunti
}

var arrClassFperComp=new Array()
var arrPesoInCperComp=new Array()
var arrBigMatchperComp=new Array()

for (Comp=Num;Comp<Numero_Comp;Comp++) {
	CodComp = arrCompetizioni[Comp].ID
  for(fa=1;fa<arrIncontri.length;fa++) {
				if ((arrIncontri[fa].GiornataDiA == GetProssimaGiornataDaGiocare()) && CodComp == (arrIncontri[fa].IDCompetizione)) {
					Fgiornata=arrIncontri[fa].Fantagiornata
				}	
	}
 	CompID = arrCompetizioni[Comp].ID
  NumIncDaGiocPerComp = RiempiListaIncontri(GetProssimaGiornataDaGiocare(),[CompID]).length-1;
  if (NumIncDaGiocPerComp > 0 ){
  counter = 0
	var Peso,PosClassCasa,PosClassFuori,Sqcasa,Sqfuori,Totale,diffPunti
		for (j=1;j<=NumIncDaGiocPerComp;j++) {
			for(fa=1;fa<arrClassifica.length;fa++) {
				if ((arrClassifica[fa].Nome) == RiempiListaIncontri(GetProssimaGiornataDaGiocare(),CompID)[j].Nomi.Casa && (arrClassifica[fa].IDCompetizione == CodComp)) {
					PosClassCasa = arrClassifica[fa].Pos
					Sqcasa = RiempiListaIncontri(GetProssimaGiornataDaGiocare(),CompID)[j].Nomi.Casa
					PosClass = arrClassifica[fa].Pos
					PuntiSqcasa = arrClassifica[fa].Punti
					arrClassFperComp[counter]=new ClassiF(arrClassifica[fa].IDCompetizione,arrClassifica[fa].Nome,PosClass,arrClassifica[fa].Punti)
					counter++
				}	else if ((arrClassifica[fa].Nome) == RiempiListaIncontri(GetProssimaGiornataDaGiocare(),CompID)[j].Nomi.Fuori && (arrClassifica[fa].IDCompetizione == CodComp)) {
					PosClassFuori = arrClassifica[fa].Pos
					Sqfuori = RiempiListaIncontri(GetProssimaGiornataDaGiocare(),CompID)[j].Nomi.Fuori
					PosClass = arrClassifica[fa].Pos
					PuntiSqfuori = arrClassifica[fa].Punti
					arrClassFperComp[counter]=new ClassiF(arrClassifica[fa].IDCompetizione,arrClassifica[fa].Nome,PosClass,arrClassifica[fa].Punti)
					counter++
				}
		 }
				Totale = PosClassCasa+PosClassFuori
			  arrPesoInCperComp[j]=new Peso(Totale,Sqcasa,Sqfuori,PuntiSqcasa,PuntiSqfuori)
}

		
    //INIZIALIZZAZIONE PRIMA RIGA ARRAY BIGMATCH
		indicePesoMinore = 1
		for(fa=1;fa<arrPesoInCperComp.length;fa++){
		if(arrPesoInCperComp[fa].PuntiSqcasa > arrPesoInCperComp[fa].PuntiSqfuori) {
		diffPunti = arrPesoInCperComp[fa].PuntiSqcasa - arrPesoInCperComp[fa].PuntiSqfuori;
		}else if (arrPesoInCperComp[fa].PuntiSqcasa < arrPesoInCperComp[fa].PuntiSqfuori) {
		diffPunti = arrPesoInCperComp[fa].PuntiSqfuori - arrPesoInCperComp[fa].PuntiSqcasa;
		}else if (arrPesoInCperComp[fa].PuntiSqcasa == arrPesoInCperComp[fa].PuntiSqfuori) {
		diffPunti = 0;
		}
		arrBigMatchperComp[fa]=new BigMatch(CodComp,arrPesoInCperComp[fa].pes,arrPesoInCperComp[fa].Sqcasa,arrPesoInCperComp[fa].Sqfuori,diffPunti)
		}
		
		for (num=1;num<arrBigMatchperComp.length-1;num++){
 		indicePesoMinore = num
 			for (fa=num+1;fa<arrBigMatchperComp.length;fa++){
  					if (arrBigMatchperComp[fa].pesoBM <= arrBigMatchperComp[indicePesoMinore].pesoBM) {
						indicePesoMinore = fa	
			}
			}
		temp1 = arrBigMatchperComp[indicePesoMinore].CompBM;
		temp2 = arrBigMatchperComp[indicePesoMinore].pesoBM;
		temp3 = arrBigMatchperComp[indicePesoMinore].SqcasaBM;
		temp4 = arrBigMatchperComp[indicePesoMinore].SqfuoriBM;
		temp5 = arrBigMatchperComp[indicePesoMinore].diffPunti;
		
		arrBigMatchperComp[indicePesoMinore].CompBM = arrBigMatchperComp[num].CompBM;
		arrBigMatchperComp[indicePesoMinore].pesoBM = arrBigMatchperComp[num].pesoBM;
		arrBigMatchperComp[indicePesoMinore].SqcasaBM = arrBigMatchperComp[num].SqcasaBM;
		arrBigMatchperComp[indicePesoMinore].SqfuoriBM = arrBigMatchperComp[num].SqfuoriBM;
		arrBigMatchperComp[indicePesoMinore].diffPunti =arrBigMatchperComp[num].diffPunti;
		
		arrBigMatchperComp[num].CompBM = temp1;
		arrBigMatchperComp[num].pesoBM= temp2;
		arrBigMatchperComp[num].SqcasaBM= temp3;
		arrBigMatchperComp[num].SqfuoriBM= temp4;
		arrBigMatchperComp[num].diffPunti= temp5;
	  }

		//CONFRONTO I PRIMI 2 INCONTRI A BASSO PESO
		var Comp_scelta, competizione,casa,ospiti, diffPunti
		if (arrBigMatchperComp[2].pesoBM > 1.2*arrBigMatchperComp[1].pesoBM) {
      competizione = arrCompetizioni[Comp].Nome;
			casa = arrBigMatchperComp[1].SqcasaBM;
			ospiti = arrBigMatchperComp[1].SqfuoriBM;
			diffPunti = arrBigMatchperComp[1].diffPunti;
		} else {
			if (arrBigMatchperComp[1].diffPunti <= arrBigMatchperComp[2].diffPunti) {
			competizione = arrCompetizioni[Comp].Nome;
			casa = arrBigMatchperComp[1].SqcasaBM;
			ospiti = arrBigMatchperComp[1].SqfuoriBM;
			diffPunti = arrBigMatchperComp[1].diffPunti;
			} else if (arrBigMatchperComp[1].diffPunti > arrBigMatchperComp[2].diffPunti) {
			competizione = arrCompetizioni[Comp].Nome;
			casa = arrBigMatchperComp[2].SqcasaBM;
			ospiti = arrBigMatchperComp[2].SqfuoriBM;
			diffPunti = arrBigMatchperComp[2].diffPunti;
			}
		}
	}
}

