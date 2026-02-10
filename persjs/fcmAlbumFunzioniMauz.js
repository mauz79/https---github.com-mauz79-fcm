// Oggetti JavaScript per Album
// Oggetto Album
function Album(IDGiocatore,NomeGiocatore,Stagione,AnnoStagione,IDGiocatoreStagione,PrimaGiornataInSquadra,IDSquadra,IDSquadraStorica,NomeSquadra,Ruolo,SquadraA1,SquadraA2,SquadraA3,Presenze,TotVoti,TotFantaVoti,Goal,Espulsioni,Ammonizioni,IDDivisione,NomeDivisione,Costo,AnniContratto) {
	this.IDGiocatore = IDGiocatore
	this.NomeGiocatore = NomeGiocatore
        this.Stagione = Stagione
        this.AnnoStagione = AnnoStagione
 	this.IDGiocatoreStagione = IDGiocatoreStagione
 	this.PrimaGiornataInSquadra = PrimaGiornataInSquadra
        this.IDSquadra = IDSquadra
        this.IDSquadraStorica = IDSquadraStorica
	this.NomeSquadra = NomeSquadra
	this.Ruolo = Ruolo
	this.SquadraA1 = SquadraA1
	this.SquadraA2 = SquadraA2
	this.SquadraA3 = SquadraA3
	this.Presenze = Presenze
	this.TotVoti = TotVoti
	this.TotFantaVoti = TotFantaVoti
	this.Goal = Goal
	this.Espulsioni = Espulsioni
	this.Ammonizioni = Ammonizioni
	this.IDDivisione = IDDivisione
	this.NomeDivisione = NomeDivisione
	this.Costo = Costo
	this.AnniContratto = AnniContratto
}

function GeneraIntestazioneFantasquadreAlb(cFsq) {
var arrF = new Object()
arrF = arrAdOFantasquadre
var arrF2 = new Object()
arrF2 = arrFantasquadre
document.write("<form name='frmFsq' id='frmFsq' action='album.php' method='get'>")
document.write("<table width='100%' border='00' cellspacing='0' cellpadding='0'>")
document.write("<tr><td width='5%' class='t-xxsB'><nobr>Fantasquadra:&nbsp;<select name='Fsq' class='t-xxs' id='Fsq'>")
for (i=1;i<arrF.length;i++) {
        if (arrF[i].idAttuale != 0 ) {
	     for (j=1;j<arrF2.length;j++) {
                if (arrF2[j].ID == arrF[i].idAttuale) {
		   document.write("<option value='" + arrF[i].IDf + "'")
           	   if (arrF[i].IDf == cFsq) document.write(" selected")
	           document.write(">" + arrF2[j].Nome + "</option>")
                   j = arrF2.length;
                 }
              }
	      //document.write(">" + arrF[i].nome + "</option>")
        }
}
document.write("</select></nobr></td>")
document.write("<td width='95%' class='t-xxsB'>&nbsp;&nbsp;<input name='Invia' type='submit' class='t-xxs' id='Invia' value='  Vai  '></td></tr>")
document.write("</tr></table></form>")
}

function GeneraAlbum(IDSq) {
    var i, y, p;
    var codGiocatore = 0;
    var Giocatore = "";
    var album = new Array()
    album = arrAlbum;
    var arrF = new Object()
    arrF = arrAdOFantasquadre
    var arrF2 = new Object()
    arrF2 = arrFantasquadre
    var IDSqAtt = 0;
    var IDDivisione = 0;
    var Ruolo = "";
    var ImgRuolo = "";
    var Contratto = "";
    var RuoloElaborato = "";
    var conta=0;
    var giocatoreSave="";
    var squadraSave="";
    
    for (i=1;i<arrF.length;i++) {
       if (arrF[i].IDf == IDSq) {
         IDSqAtt = arrF[i].idAttuale;
         i = arrF.length;
       }
    }
    for (i=1;i<arrF2.length;i++) {
       if (arrF2[i].ID == IDSqAtt) {
         IDDivisione = arrF2[i].IDDivisione;
         i = arrF2.length;
       }
    }
        
    album.sort(ordinaAlbum)

    for(y=1;y<arrRose.length;y++) {
      if ((arrRose[y].IDSquadra==IDSqAtt) &&
          (arrRose[y].Stato==0 || arrRose[y].Stato==1 || arrRose[y].Stato==2 ) && 
          (giocatoreSave!=arrRose[y].Nome || squadraSave!=arrRose[y].Squadra)  ) {
        giocatoreSave=arrRose[y].Nome
	squadraSave=arrRose[y].Squadra
        photo=0
	for(p=1;p<arrGiocatoriA.length;p++) {
	   check = ("xg"+arrGiocatoriA[p].ID)
           checkSq = ("xa"+arrGiocatoriA[p].IDSquadra)
	   if (    (eval(check)   == arrRose[y].Nome)
                && (eval(checkSq) == arrRose[y].Squadra)
                              ) {
		 photo=arrGiocatoriA[p].Codice
                 p=arrGiocatoriA.length
           }
	}
        if (arrRose[y].Ruolo==1) {
          Ruolo="Portiere"
          ImgRuolo="img/album_small_portiere.jpg"
        } else if (arrRose[y].Ruolo==2) {
          Ruolo="Difensore"
          ImgRuolo="img/album_small_difensore.jpg"
        } else if (arrRose[y].Ruolo==3) {
          Ruolo="Centrocampista"
          ImgRuolo="img/album_small_centrocampista.jpg"
        } else if (arrRose[y].Ruolo==4) {
          Ruolo="Attaccante"
          ImgRuolo="img/album_small_attaccante.jpg"
        }
        // Elabora ruolo e stato elabotato
        if (        ( RuoloElaborato == "" )
             || (  RuoloElaborato == "P" && ( arrRose[y].Stato!=0 || arrRose[y].Ruolo!=1 ) )
             || (  RuoloElaborato == "D" && ( arrRose[y].Stato!=0 || arrRose[y].Ruolo!=2 ) )
             || (  RuoloElaborato == "C" && ( arrRose[y].Stato!=0 || arrRose[y].Ruolo!=3 ) )
             || (  RuoloElaborato == "A" && ( arrRose[y].Stato!=0 || arrRose[y].Ruolo!=4 ) )
             || (  RuoloElaborato == "S" && ( arrRose[y].Stato!=1 ) )
             || (  RuoloElaborato == "I" && ( arrRose[y].Stato!=2 ) )
           ) {
           if      ( arrRose[y].Stato==0 && arrRose[y].Ruolo==1 ) {           
             tagPortiere();
             RuoloElaborato = "P";
           }
           else if ( arrRose[y].Stato==0 && arrRose[y].Ruolo==2 ) {
             tagDifensore();
             RuoloElaborato = "D";
           }
           else if ( arrRose[y].Stato==0 && arrRose[y].Ruolo==3 ) {
             tagCentrocampista();
             RuoloElaborato = "C";
           }
           else if ( arrRose[y].Stato==0 && arrRose[y].Ruolo==4 ) {
             tagAttaccante();
             RuoloElaborato = "A";
           }
           else if ( arrRose[y].Stato==1 ) {
             tagSvincolato();
             RuoloElaborato = "S";
           }
           else if ( arrRose[y].Stato==2 ) {
             tagInfortunato();
             RuoloElaborato = "I";
           }
        }
        document.write("<tr valign='top'><td id='bodyLeft'>");
        document.write("  <table border='0' width='100%'>");
        document.write("    <tr valign='top'>");
        document.write("      <td width='55'><img src='img/foto/" + photo + ".jpg' onError=this.src='img/foto/misterx.gif' border='1' align='absmiddle'/></td>");
        document.write("      <td>");
        document.write("        <table class='TBLCARRIERA' style='width: 100%;' border='0' cellpadding='0' cellspacing='0'>");
        document.write("          <tr>");
        document.write("            <td width='300' id='NomeGiocatore'><img src='img/sq/" + arrRose[y].Squadra + ".gif' border='0' align='absmiddle'/> <b>" + arrRose[y].Nome + "</b></td>");
        document.write("            <td>Squadra: <img src='img/sq/logo/album_" + arrRose[y].Squadra + ".gif' alt='" + arrRose[y].Squadra + "' border='0' align='absmiddle'/> <b>" + arrRose[y].Squadra + "</b></td>");
        document.write("          </tr><tr>");
        document.write("            <td>&nbsp;Ruolo: <img src='" + ImgRuolo + "' <b>" + Ruolo + "</b></td>");
        if ( arrRose[y].Stato==1 ) {
          Contratto="Svinc.";
        }
        else if ( arrRose[y].Stato==2 ) {
          Contratto="Infor.";
        }
        else if ( arrRose[y].Contratto==-2 ) {
          Contratto="Pres";
        }
        else {
          Contratto=arrRose[y].Contratto;
        }
        document.write("            <td>Contratto: <b>" + Contratto + "</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Valore: <b>" + arrRose[y].Acq + "</b></td>");
        document.write("          </tr>");
        document.write("        </table>");
        document.write("      </td>");
        document.write("    </tr>");
        document.write("  </table>");
        document.write("  <div align='center' id='CostanteFCarriera'>FantaCarriera</div>");
        document.write("  <table class='TBLCARRIERA' border='0' cellpadding='2' cellspacing='0' style='width: 100%;'>");
        document.write("    <tr align='left'>");
        document.write("        <th>Stagione</th>");
        document.write("        <th>Anno</th>");
        if ( lcsGestioneDivisioni == "S" ) {
		document.write("        <th>Divisione</th>");
        }
        document.write("        <th>FantaSquadra</th>");
	document.write("        <th>Squadra di A</th>");
        document.write("        <th align='center'>Presenze</th>");
        document.write("        <th align='center'>MV</th>");
        document.write("        <th align='center'>FM</th>");
        document.write("        <th align='center'>Goal</th>");
        document.write("        <th align='center'><img src='img/album_amm.gif' alt='Ammonizioni' border='0' align='absmiddle'/></th>");
        document.write("        <th align='center'><img src='img/album_esp.gif' alt='Espulsioni' border='0' align='absmiddle'/></th>");
        document.write("   </tr>");
 
	conta=0;

	for(i=0;i<album.length-1;i++) {

         //if ( IDSq == album[i].IDSquadraStorica ) {
           if  (   (      album[i].IDGiocatore == photo 
                      || (    album[i].IDGiocatore == 0 
                           && album[i].NomeGiocatore == arrRose[y].Nome )
                    )
                 && (      lcsGestioneDivisioni == "N"
                      || (    lcsGestioneDivisioni == "S"
                           && lcsTipoGestioneDivisioni == "1"
                           && (  album[i].IDDivisione == IDDivisione 
	                      || album[i].IDDivisione == 0 
                	      || IDDivisione  == 0 )
                         )
                      || (    lcsGestioneDivisioni == "S"
                           && lcsTipoGestioneDivisioni == "2"
                         ) 
                    )
               )
           {
	      conta++;
              
              codGiocatore = album[i].IDGiocatore;
              Giocatore = album[i].NomeGiocatore;
 
	      if( conta % 2 == 0 ) {
		document.write ("  <tr class='onOutPari' onMouseOver=\"this.className='onOver'\" onMouseOut=\"this.className='onOutPari'\">")
	      } else {
		document.write ("  <tr class='onOut' onMouseOver=\"this.className='onOver'\" onMouseOut=\"this.className='onOut'\">")
              }
              document.write ("    <td>" + album[i].Stagione + "</td>");
              document.write ("    <td>" + album[i].AnnoStagione + "</td>");
              if ( lcsGestioneDivisioni == "S" ) {
	         if ( album[i].IDDivisione == 0 ) {
	            document.write ("    <td align='center'>" + "-" + "</td>");
             	 } else {
		    document.write ("    <td align='center'>" + album[i].NomeDivisione + "</td>");
                 }
	      }
              document.write ("    <td><a href='../"+arrDirectory[CercaCartellaStagione(album[i].Stagione)].Directory+"/rose.php?Fsq=" + album[i].IDSquadra + "'>" + album[i].NomeSquadra + "</a></td>");
	      document.write ("    <td><img src='img/sq/logo/album_" + album[i].SquadraA1 + ".gif' alt='" + album[i].SquadraA1 + "' border='0' align='absmiddle' style='zoom:60%'/>&nbsp;" + album[i].SquadraA1 + "</td>");
              if ( album[i].Presenze == 0 ) {
                document.write ("    <td align='center'>" + "-" + "</td>");
                document.write ("    <td align='center'>" + "-" + "</td>");
                document.write ("    <td align='center'>" + "-" + "</td>");
                document.write ("    <td align='center'>" + "-" + "</td>");
                document.write ("    <td align='center'>" + "-" + "</td>");
                document.write ("    <td align='center'>" + "-" + "</td>");
              } else {
                document.write ("    <td align='center'>" + album[i].Presenze + "</td>");
                document.write ("    <td align='center'>" + (Math.round(album[i].TotVoti / album[i].Presenze * 1000) / 1000 ) + "</td>");
                document.write ("    <td align='center'>" + (Math.round(album[i].TotFantaVoti / album[i].Presenze * 1000) / 1000 ) + "</td>");
                document.write ("    <td align='center'>" + album[i].Goal + "</td>");
                document.write ("    <td align='center'>" + album[i].Ammonizioni + "</td>");
                document.write ("    <td align='center'>" + album[i].Espulsioni + "</td>");
              }
              document.write ("  </tr>");

  	  }
	//}
       }
       document.write("  </table>");
       document.write("</td></tr>");
       document.write("<tr></tr><tr></tr><tr></tr><tr></tr>");
     }
   }

}

function tagPortiere() {
             document.write("  <tr><td>");
             document.write("    <table border='0' width='100%'>");
             document.write("      <tr valign='center'>");
             document.write("        <td width='100'>");
             document.write("           <img src='img/album_portiere.jpg'>");
             document.write("        </td>");
             document.write("        <td id='RuoliGrandi'><a name='portieri'>Portieri</a></td>");
             document.write("      </tr>");
             document.write("    </table>");
             document.write("    <table border='0' width='100%'>");
             document.write("      <tr valign='center'>");
             document.write("        <td><img src='img/album_small_difensore.jpg'>");
             document.write("        </td>");
             document.write("        <td id='RuoliPiccoli'><a href='#difensori'>Difensori</a></td>");
             document.write("        <td><img src='img/album_small_centrocampista.jpg'>");
             document.write("        </td>");
             document.write("        <td id='RuoliPiccoli'><a href='#centrocampisti'>Centrocampisti</a></td>");
             document.write("        <td><img src='img/album_small_attaccante.jpg'>");
             document.write("        </td>");
             document.write("        <td id='RuoliPiccoli'><a href='#attaccanti'>Attaccanti</a></td>");
             document.write("        <td><img src='img/album_small_svincolato.jpg'>");
             document.write("        </td>");
             document.write("        <td id='RuoliPiccoli'><a href='#svincolati'>Svincolati</a></td>");
             document.write("        <td><img src='img/album_small_infortunato.jpg'>");
             document.write("        </td>");
             document.write("        <td id='RuoliPiccoli'><a href='#infortunati'>Infortunati</a></td>");
             document.write("      </tr>");
             document.write("    </table>");
             document.write("  </td></tr>");
}

function tagDifensore() {
             document.write("  <tr><td>");
             document.write("    <table border='0' width='100%'>");
             document.write("      <tr valign='center'>");
             document.write("        <td width='100'>");
             document.write("           <img src='img/album_difensore.jpg'>");
             document.write("        </td>");
             document.write("        <td id='RuoliGrandi'><a name='difensori'>Difensori</a></td>");
             document.write("      </tr>");
             document.write("    </table>");
             document.write("    <table border='0' width='100%'>");
             document.write("      <tr valign='center'>");
             document.write("        <td><img src='img/album_small_portiere.jpg'>");
             document.write("        </td>");
             document.write("        <td id='RuoliPiccoli'><a href='#portieri'>Portieri</a></td>");
             document.write("        <td><img src='img/album_small_centrocampista.jpg'>");
             document.write("        </td>");
             document.write("        <td id='RuoliPiccoli'><a href='#centrocampisti'>Centrocampisti</a></td>");
             document.write("        <td><img src='img/album_small_attaccante.jpg'>");
             document.write("        </td>");
             document.write("        <td id='RuoliPiccoli'><a href='#attaccanti'>Attaccanti</a></td>");
             document.write("        <td><img src='img/album_small_svincolato.jpg'>");
             document.write("        </td>");
             document.write("        <td id='RuoliPiccoli'><a href='#svincolati'>Svincolati</a></td>");
             document.write("        <td><img src='img/album_small_infortunato.jpg'>");
             document.write("        </td>");
             document.write("        <td id='RuoliPiccoli'><a href='#infortunati'>Infortunati</a></td>");
             document.write("      </tr>");
             document.write("    </table>");
             document.write("  </td></tr>");
}

function tagCentrocampista() {
             document.write("  <tr><td>");
             document.write("    <table border='0' width='100%'>");
             document.write("      <tr valign='center'>");
             document.write("        <td width='100'>");
             document.write("           <img src='img/album_centrocampista.jpg'>");
             document.write("        </td>");
             document.write("        <td id='RuoliGrandi'><a name='centrocampisti'>Centrocampisti</a></td>");
             document.write("      </tr>");
             document.write("    </table>");
             document.write("    <table border='0' width='100%'>");
             document.write("      <tr valign='center'>");
             document.write("        <td><img src='img/album_small_portiere.jpg'>");
             document.write("        </td>");
             document.write("        <td id='RuoliPiccoli'><a href='#portieri'>Portieri</a></td>");
             document.write("        <td><img src='img/album_small_difensore.jpg'>");
             document.write("        </td>");
             document.write("        <td id='RuoliPiccoli'><a href='#difensori'>Difensori</a></td>");
             document.write("        <td><img src='img/album_small_attaccante.jpg'>");
             document.write("        </td>");
             document.write("        <td id='RuoliPiccoli'><a href='#attaccanti'>Attaccanti</a></td>");
             document.write("        <td><img src='img/album_small_svincolato.jpg'>");
             document.write("        </td>");
             document.write("        <td id='RuoliPiccoli'><a href='#svincolati'>Svincolati</a></td>");
             document.write("        <td><img src='img/album_small_infortunato.jpg'>");
             document.write("        </td>");
             document.write("        <td id='RuoliPiccoli'><a href='#infortunati'>Infortunati</a></td>");
             document.write("      </tr>");
             document.write("    </table>");
             document.write("  </td></tr>");
}

function tagAttaccante() {
             document.write("  <tr><td>");
             document.write("    <table border='0' width='100%'>");
             document.write("      <tr valign='center'>");
             document.write("        <td width='100'>");
             document.write("           <img src='img/album_attaccante.jpg'>");
             document.write("        </td>");
             document.write("        <td id='RuoliGrandi'><a name='attaccanti'>Attaccanti</a></td>");
             document.write("      </tr>");
             document.write("    </table>");
             document.write("    <table border='0' width='100%'>");
             document.write("      <tr valign='center'>");
             document.write("        <td><img src='img/album_small_portiere.jpg'>");
             document.write("        </td>");
             document.write("        <td id='RuoliPiccoli'><a href='#portieri'>Portieri</a></td>");
             document.write("        <td><img src='img/album_small_difensore.jpg'>");
             document.write("        </td>");
             document.write("        <td id='RuoliPiccoli'><a href='#difensori'>Difensori</a></td>");
             document.write("        <td><img src='img/album_small_centrocampista.jpg'>");
             document.write("        </td>");
             document.write("        <td id='RuoliPiccoli'><a href='#centrocampisti'>Centrocampisti</a></td>");
             document.write("        <td><img src='img/album_small_svincolato.jpg'>");
             document.write("        </td>");
             document.write("        <td id='RuoliPiccoli'><a href='#svincolati'>Svincolati</a></td>");
             document.write("        <td><img src='img/album_small_infortunato.jpg'>");
             document.write("        </td>");
             document.write("        <td id='RuoliPiccoli'><a href='#infortunati'>Infortunati</a></td>");
             document.write("      </tr>");
             document.write("    </table>");
             document.write("  </td></tr>");
}

function tagSvincolato() {
             document.write("  <tr><td>");
             document.write("    <table border='0' width='100%'>");
             document.write("      <tr valign='center'>");
             document.write("        <td width='100'>");
             document.write("           <img src='img/album_svincolato.jpg'>");
             document.write("        </td>");
             document.write("        <td id='RuoliGrandi'><a name='svincolati'>Svincolati</a></td>");
             document.write("      </tr>");
             document.write("    </table>");
             document.write("    <table border='0' width='100%'>");
             document.write("      <tr valign='center'>");
             document.write("        <td><img src='img/album_small_portiere.jpg'>");
             document.write("        </td>");
             document.write("        <td id='RuoliPiccoli'><a href='#portieri'>Portieri</a></td>");
             document.write("        <td><img src='img/album_small_difensore.jpg'>");
             document.write("        </td>");
             document.write("        <td id='RuoliPiccoli'><a href='#difensori'>Difensori</a></td>");
             document.write("        <td><img src='img/album_small_centrocampista.jpg'>");
             document.write("        </td>");
             document.write("        <td id='RuoliPiccoli'><a href='#centrocampisti'>Centrocampisti</a></td>");
             document.write("        <td><img src='img/album_small_attaccante.jpg'>");
             document.write("        </td>");
             document.write("        <td id='RuoliPiccoli'><a href='#attaccanti'>Attaccanti</a></td>");
             document.write("        <td><img src='img/album_small_infortunato.jpg'>");
             document.write("        </td>");
             document.write("        <td id='RuoliPiccoli'><a href='#infortunati'>Infortunati</a></td>");
             document.write("      </tr>");
             document.write("    </table>");
             document.write("  </td></tr>");
}

function tagInfortunato() {
             document.write("  <tr><td>");
             document.write("    <table border='0' width='100%'>");
             document.write("      <tr valign='center'>");
             document.write("        <td width='100'>");
             document.write("           <img src='img/album_infortunato.jpg'>");
             document.write("        </td>");
             document.write("        <td id='RuoliGrandi'><a name='infortunati'>Infortunati</a></td>");
             document.write("      </tr>");
             document.write("    </table>");
             document.write("    <table border='0' width='100%'>");
             document.write("      <tr valign='center'>");
             document.write("        <td><img src='img/album_small_portiere.jpg'>");
             document.write("        </td>");
             document.write("        <td id='RuoliPiccoli'><a href='#portieri'>Portieri</a></td>");
             document.write("        <td><img src='img/album_small_difensore.jpg'>");
             document.write("        </td>");
             document.write("        <td id='RuoliPiccoli'><a href='#difensori'>Difensori</a></td>");
             document.write("        <td><img src='img/album_small_centrocampista.jpg'>");
             document.write("        </td>");
             document.write("        <td id='RuoliPiccoli'><a href='#centrocampisti'>Centrocampisti</a></td>");
             document.write("        <td><img src='img/album_small_attaccante.jpg'>");
             document.write("        </td>");
             document.write("        <td id='RuoliPiccoli'><a href='#attaccanti'>Attaccanti</a></td>");
             document.write("        <td><img src='img/album_small_svincolato.jpg'>");
             document.write("        </td>");
             document.write("        <td id='RuoliPiccoli'><a href='#svincolati'>Svincolati</a></td>");
             document.write("      </tr>");
             document.write("    </table>");
             document.write("  </td></tr>");
}


function ordinaAlbum(a, b) {
        var c
        if ((a!=null) && (b!=null)) {
           //if (a.IDSquadra>b.IDSquadra) {
           //   return 1;
           //}
           //else {
           //if (a.IDSquadra<b.IDSquadra) {
           //  return -1;
           //}
           //else {
           //if (a.NomeGiocatore>b.NomeGiocatore) {
           //  return 1;
           //}
           //else {
           //if (a.NomeGiocatore<b.NomeGiocatore) {
           //  return -1;
           //}
           //else {
           if (a.IDGiocatore>b.IDGiocatore) {
             return 1;
           }
           else {
           if (a.IDGiocatore<b.IDGiocatore) {
             return -1;
           }
           else {
           if (a.Stagione<b.Stagione) {
             return 1;
           }
           else {
           if (a.Stagione>b.Stagione) {
             return -1;
           }
           else {
           if (a.PrimaGiornataInSquadra<b.PrimaGiornataInSquadra) {
             return 1;
           }
           else {
           if (a.PrimaGiornataInSquadra>b.PrimaGiornataInSquadra) {
             return -1;
           }
           else {
             return 0;
           }
           }
           }
           }
           }
           }
        }
        else {
                return -(a == null) + (b == null)
        }
}
