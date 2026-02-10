// Oggetti JavaScript per Ranking
// Oggetto Directory

function RankDivisioni(NomeDivisione,IdAlbo,IdAttuale,Squadra,Punti,Stagioni,PuntiPrecedenti) {
	this.NomeDivisione = NomeDivisione
     	   this.IdAlbo = IdAlbo
        this.IdAttuale = IdAttuale
        this.Squadra = Squadra
        this.Punti = Punti
	this.Stagioni = Stagioni
     this.PuntiPrecedenti = PuntiPrecedenti
}

function GeneraIntestazioneRankingDivisioni(cDiv,cMin,cAtt) {
var arrD = new Object()
arrD = arrDivisioni
var nomeDivisione = ""
document.write("<form name='frmFsq' id='frmFsq' action='rankingDivisioni.php' method='get'>")
document.write("<table width='100%' border='00' cellspacing='0' cellpadding='0'>")
document.write("<td width='5%' class='t-xxsB'><nobr>Divisione:&nbsp;<select name='Div' class='t-xxs' id='Div'>")
for (i=1;i<arrD.length;i++) {
   document.write("<option value='" + arrD[i].Nome + "'")
   if (arrD[i].Nome.replace("+"," ")  == cDiv.replace("+"," ") ) document.write(" selected")
     document.write(">" + arrD[i].Nome + "</option>")
}
document.write("</select></nobr></td>")
document.write("<td width='5%' class='t-xxsB'>&nbsp;&nbsp;<nobr>Squadre con Punti minori o uguali a zero:&nbsp;<select name='Min' class='t-xxs' id='Min'>")
for (i=1;i<3;i++) {
   if ( i == 1 ) {
      document.write("<option value='" + "S" + "'")
      if ( "S" == cMin ) document.write(" selected")
        document.write(">" + "Si" + "</option>")
   }
   else if ( i == 2 ) {
      document.write("<option value='" + "N" + "'")
      if ( "N" == cMin ) document.write(" selected")
        document.write(">" + "No" + "</option>")
   }
}
document.write("</select></nobr></td>")
document.write("<td width='5%' class='t-xxsB'>&nbsp;&nbsp;<nobr>Solo Squadre Attuali:&nbsp;<select name='Att' class='t-xxs' id='Att'>")
for (i=1;i<3;i++) {
   if ( i == 1 ) {
      document.write("<option value='" + "S" + "'")
      if ( "S" == cAtt ) document.write(" selected")
        document.write(">" + "Si" + "</option>")
   }
   else if ( i == 2 ) {
      document.write("<option value='" + "N" + "'")
      if ( "N" == cAtt ) document.write(" selected")
        document.write(">" + "No" + "</option>")
   }
}
document.write("</select></nobr></td>")
document.write("<td width='95%' class='t-xxsB'>&nbsp;&nbsp;<input name='Invia' type='submit' class='t-xxs' id='Invia' value='  Vai  '></td></tr>")
document.write("</tr></table></form>")
}

function GeneraRankingDivisioni(divisione,IdMin,IdAtt) {
var i,cnt,sT,sR,fatto,c,y,d,pti
var tabR = new Tabella(2, 7) 
var ranking = new Array()
ranking = arrRankingDivisioni
rankingPrec = arrRankingDivisioni
        
        ranking.sort(ordinaRankingDivisioni)
        rankingPrec.sort(ordinaRankingDivisioniPrec)
	fatto=false

        tabR.SetStileRiga(1,"riga-blu-cx")
        tabR.intestazioni=true
        Stato("Generazione Ranking...")
        for (i=1;i<=tabR.numcolonne;i++) {
                tabR.SetSpanned(1,i,true)
        } 
        
	tabR.SetSpan(1,1,7)
        tabR.SetSpanned(1,1,false);
	tabR.SetValore(1,1,"RANKING LEGA");
        cnt=2
        tabR.SetStileRiga(cnt,"riga-orange-cx")
	tabR.SetValore(cnt,1,"<nobr>Pos.</nobr>");
	tabR.SetValore(cnt,2,"<nobr>Squadra</nobr>");
	tabR.SetValore(cnt,3,"<nobr>Punti</nobr>");
	tabR.SetValore(cnt,4,"<nobr>Pos.Prec.</nobr>");
	tabR.SetValore(cnt,5,"<nobr>Variaz.</nobr>");
	tabR.SetValore(cnt,6,"<nobr>P.ti Prec.</nobr>");
	tabR.SetValore(cnt,7,"<nobr>Stagioni</nobr>");
	cnt=3 
        c=0
	for(i=0;i<ranking.length-1;i++) {
         if ( divisione.replace("+"," ") == ranking[i].NomeDivisione.replace("+"," " ) ) {
           if ( ( IdMin == "N" && ranking[i].Punti > 0 ) || IdMin != "N" ) {
             if ( ( IdAtt == "S" && ranking[i].IdAttuale != 0 ) || IdAtt != "S" ) {
                c++
		fatto=true			
		if ((cnt % 2) != 0) {
	        	tabR.SetStileRiga(cnt,"riga-pari")
		} else {
			tabR.SetStileRiga(cnt,"riga-dispari")
		}
                
                sR="LFB"
                tabR.SetValore(cnt,1,"<nobr>"+c+"</nobr>")
		tabR.SetStile(cnt,1,"t-xxs"+sR)
                if ( ranking[i].IdAttuale != 0 ) {
                     sR="BluB";
                } else {
                     sR="Blu";
                }
		// INIZIO MODIFICA LUKESKY SCUDO
                //tabR.SetValore(cnt,2,"<nobr>"+ranking[i].Squadra+"</nobr>")
                tabR.SetValore(cnt,2,"<nobr>"+ScudoStorici(ranking[i].Squadra)+"</nobr>")
		// FINE MODIFICA LUKESKY SCUDO
		tabR.SetStile(cnt,2,"t-xxs"+sR)
                sR="RB"
                tabR.SetValore(cnt,3,"<nobr><center>"+ranking[i].Punti+"</center></nobr>")
                tabR.SetStile(cnt,3,"t-xxs"+sR)
                d=0
                for(y=0;y<rankingPrec.length-1;y++) {
                   if ( rankingPrec[y].IdAttuale == 0 ) {
             		pti = rankingPrec[y].Punti;
           	   } else {
                        pti = rankingPrec[y].PuntiPrecedenti;
           	   }
                   if ( ( IdMin == "N" && pti > 0 ) || IdMin != "N" ) {
	             if ( ( IdAtt == "S" && rankingPrec[y].IdAttuale != 0 ) || IdAtt != "S" ) {
                	d++
                        if ( ranking[i].IdAlbo == rankingPrec[y].IdAlbo ) {
                           y=rankingPrec.length
                        }
                     }
                   }
                }
                sR="GB"
                tabR.SetValore(cnt,4,"<nobr><center>"+d+"</center></nobr>")
                tabR.SetStile(cnt,4,"t-xxs"+sR)
                if ( c > d ) {
                    tabR.SetValore(cnt,5,"<nobr><center><img border=\"0\" src=\"img/ranking_sale.png\"/></center></nobr>")
                } else {
                    if ( c < d ) {
                       tabR.SetValore(cnt,5,"<nobr><center><img border=\"0\" src=\"img/ranking_scende.png\"/></center></nobr>")
                    } else {
                       tabR.SetValore(cnt,5,"<nobr><center><img border=\"0\" src=\"img/ranking_uguale.png\"/></center></nobr>")
                    }
                }
		tabR.SetStile(cnt,5,"t-xxs"+sR)
                sR="GB"
                if ( ranking[i].IdAttuale == 0 ) {
             		pti = ranking[i].Punti;
           	   } else {
                        pti = ranking[i].PuntiPrecedenti;
           	   }
                tabR.SetValore(cnt,6,"<nobr><center>"+pti+"</center></nobr>")
                tabR.SetStile(cnt,6,"t-xxs"+sR)
                sR="VB"
                tabR.SetValore(cnt,7,"<nobr><center>"+ranking[i].Stagioni+"</center></nobr>")
                tabR.SetStile(cnt,7,"t-xxs"+sR)
                cnt++
             }
           }
         }
	}

        Stato("Visualizzazione Ranking...")
        d10 = Math.ceil(tabR.numrighe / 10)
        tabR.nome="Ranking"
        tabR.larghezza=99
        tabR.altezza=0
        tabR.border=1
        tabR.cellpadding=3
        tabR.cellspacing=0
        tabR.stile="ClassEl"
        tabR.Stampa()
}

function ordinaRankingDivisioni(a, b) {
        var c
        if ((a!=null) && (b!=null)) {
           if (a.Punti<b.Punti) {
              return 1;
           }
           else {
             if (a.Punti>b.Punti) {
               return -1;
             }
             else {
        	if (a.Stagioni<b.Stagioni) {
                  return 1;
                }
                else {
                  if (a.Stagioni>b.Stagioni) {
                    return -1;
                  }
                  else {
                    return 0;
                  }
                }
             }
           }
        }
        else {
                return -(a == null) + (b == null)
        }
} 

function ordinaRankingPrec(a, b) {
        var c
        var d
        if ((a!=null) && (b!=null)) {
           if ( a.IdAttuale == 0 ) {
             c = a.Punti;
           } else {
             c = a.PuntiPrecedenti;
           }
           if ( b.IdAttuale == 0 ) {
             d = b.Punti;
           } else {
             d = b.PuntiPrecedenti;
           }
           if (c<d) {
              return 1;
           }
           else {
             if (c>d) {
               return -1;
             }
             else {
        	if (a.Stagioni<b.Stagioni) {
                  return 1;
                }
                else {
                  if (a.Stagioni>b.Stagioni) {
                    return -1;
                  }
                  else {
                    return 0;
                  }
                }
             }
           }
        }
        else {
                return -(a == null) + (b == null)
        }
}

