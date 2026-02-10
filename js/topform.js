function TFS(idFsq,idCF,idMvFm,idAff,idVmin,idMod,idPanc) {
	this.idFsq = idFsq
	this.idCF = idCF
	this.idMvFm = idMvFm
	this.idAff = idAff
	this.idVmin = idVmin
	this.idMod = idMod
	this.idPanc = idPanc
}

function DefaultSave() {
		arrS= new Object()
		arrS= arrSettings;
		if (arrS.length>0){
		for (i=1;i<=arrS.length;i++){
		if (arrS[i]==undefined){
       		if (cVmin == null || cVmin==""){cVmin = 50;}
		if (cMod == null || cMod=="") {cMod = "Auto";}
		if (cAff == null || cAff=="") {cAff = 50;}
		if (cMvFm == null || cMvFm=="") {cMvFm = "5050";}
		if (cCF == null || cCF=="") {cCF = 20;}
		if (cPanc == null || cPanc=="") {cPanc = 0;}
		break;
		}
		if (arrS[i].idFsq==cFsq){
       		if (cVmin == null || cVmin==""){cVmin = arrS[i].idVmin;}
		if (cMod == null || cMod=="") {cMod = arrS[i].idMod;}
		if (cAff == null || cAff=="") {cAff = arrS[i].idAff;}
		if (cMvFm == null || cMvFm=="") {cMvFm = arrS[i].idMvFm;}
		if (cCF == null || cCF=="") {cCF = arrS[i].idCF;}
		if (cPanc == null || cPanc=="") {cPanc = arrS[i].idPanc;}
		break;
		} 
		}
		}else{
		cVmin = 50;
		cMod = "Auto";
		cAff = 50;
		cMvFm = "5050";
		cCF = 20;
		cPanc = 0;
		}

}

function vediTesto(nome)
{
var el=document.getElementById(nome);
if(!el)return true;
if(el.style.display=="none"){
el.style.display="block"
} else {
el.style.display="none"
}
return true;
}
function port(ruolo, nome, valore)
{
this.ruolo = ruolo;
this.nome = nome;
this.valore = valore;
}

function cent(ruolo, nome, valore)
{
this.ruolo = ruolo;
this.nome = nome;
this.valore = valore;
}

function dife(ruolo, nome, valore)
{
this.ruolo = ruolo;
this.nome = nome;
this.valore = valore;
}

function atta(ruolo, nome, valore)
{
this.ruolo = ruolo;
this.nome = nome;
this.valore = valore;
}

function Percent(CodiceGiocatore) {
	for (j = 1; j < arrGiocatoriA.length; j++) {
		if (arrGiocatoriA[j].ID == CodiceGiocatore) {
		CodeOk = arrGiocatoriA[j].Codice
		break;
		}
	}

	for (k = 0; k < arrPuffinPercento.length; k++) {
		var pc = arrPuffinPercento[k]
		check = 0;
			if (pc.Giocatore == CodeOk) {
			    check = pc.Percentuale;
				return check;
				break;
				} 
			}
if (check==0) return 0;
}

function GeneraTabellaFormazioneCPU()
{
var por,porv,porr,dif,difv,difr,cen,cenv,cenr,att,attv,attr,trasf
var contap=0
var contad=0
var contac=0
var contaa=0
portieri = new Array(); 
difensori = new Array(); 
centrocampisti = new Array(); 
attaccanti = new Array(); 

	var g;
	for (g=0; g < arrInvioFormazione.length; g++) {
		var gg = arrInvioFormazione[g];
		if (gg.IDSquadra != cFsq) continue;


		//arrRosa.push(g);

		var dati=gg.Dati.split("%");


mvt=0;
fmt=0;		
mvu=0;
fmu=0;
		

		// Ruolo
if (ruoli[gg.Ruolo]=="P"){

		var nomeAvversaria = "---";
		var inTrasferta = false;
		if (gg.IDSquadraDiA < incontraInA.length) {
			var avversaria = incontraInA[gg.IDSquadraDiA][cGio];
			inTrasferta = avversaria >= 100;
			nomeAvversaria = eval("xa" + (avversaria % 100));
		}
if (dati[0]=="---" || dati[0]=="sv/ng"){
dati[0]=0
}
if (dati[2]=="---" || dati[2]=="sv/ng"){
dati[2]=0
}
if (dati[4]=="---" || dati[4]=="sv/ng"){
dati[4]=0
}
if (dati[6]=="---" || dati[6]=="sv/ng"){
dati[6]=0
}
var dati0=parseFloat(dati[0])
var dati2=parseFloat(dati[2])
var dati4=parseFloat(dati[4])
var dati6=parseFloat(dati[6])
var rappMv=parseInt(cMvFm.charAt(0)+cMvFm.charAt(1))
var rappFm=parseInt(cMvFm.charAt(2)+cMvFm.charAt(3))
inTrasferta ? CasaFuori=1 : CasaFuori=1+cCF/100
		porr=ruoli[gg.Ruolo]
		por=eval(gg.Nome)

		
		if (Percent(gg.NomeCode)==0){
		porv=-999
		} else if (Percent(gg.NomeCode) < cVmin && Percent(gg.NomeCode) > 0 && gg.Affidabilita == 0){
		porv= dati0*CasaFuori*rappMv+dati2*CasaFuori*rappFm
		} else if (Percent(gg.NomeCode) < cVmin && Percent(gg.NomeCode) > 0 && gg.Affidabilita < cAff && gg.Affidabilita > 0){
		porv= 100+dati0*CasaFuori*rappMv+dati2*CasaFuori*rappFm
		} else if (Percent(gg.NomeCode) < cVmin && Percent(gg.NomeCode) > 0 && gg.Affidabilita >= cAff ){
		porv= 100+dati0*CasaFuori*rappMv+dati2*CasaFuori*rappFm
		} else if (gg.Affidabilita < cAff && gg.Affidabilita > 0 && Percent(gg.NomeCode) >= cVmin){
		porv= 100+dati0*CasaFuori*rappMv+dati2*CasaFuori*rappFm
		} else if (gg.Affidabilita >= cAff && Percent(gg.NomeCode) >= cVmin){
		porv= 10000+dati0*CasaFuori*rappMv+dati2*CasaFuori*rappFm
		}
		portieri[contap]=new port(porr,por,porv)
		contap++;
}


if (ruoli[gg.Ruolo]=="D"){

		var nomeAvversaria = "---";
		var inTrasferta = false;
		if (gg.IDSquadraDiA < incontraInA.length) {
			var avversaria = incontraInA[gg.IDSquadraDiA][cGio];
			inTrasferta = avversaria >= 100;
			nomeAvversaria = eval("xa" + (avversaria % 100));
		}
		
if (dati[0]=="---" || dati[0]=="sv/ng"){
dati[0]=0
}
if (dati[2]=="---" || dati[2]=="sv/ng"){
dati[2]=0
}
if (dati[4]=="---" || dati[4]=="sv/ng"){
dati[4]=0
}
if (dati[6]=="---" || dati[6]=="sv/ng"){
dati[6]=0
}
var dati0=parseFloat(dati[0])
var dati2=parseFloat(dati[2])
var dati4=parseFloat(dati[4])
var dati6=parseFloat(dati[6])
var rappMv=parseInt(cMvFm.charAt(0)+cMvFm.charAt(1))
var rappFm=parseInt(cMvFm.charAt(2)+cMvFm.charAt(3))
inTrasferta ? CasaFuori=1 : CasaFuori=1+cCF/100

		difr=ruoli[gg.Ruolo]
		dif=eval(gg.Nome)



		if (Percent(gg.NomeCode)==0 || gg.Affidabilita==0){
		difv=-999
		} else if (Percent(gg.NomeCode) < cVmin && Percent(gg.NomeCode) > 0 && gg.Affidabilita < cAff && gg.Affidabilita > 0){
		difv=100+dati0*CasaFuori*rappMv+dati2*CasaFuori*rappFm
		} else if (Percent(gg.NomeCode) < cVmin && Percent(gg.NomeCode) > 0 && gg.Affidabilita >= cAff ){
		difv=100+dati0*CasaFuori*rappMv+dati2*CasaFuori*rappFm
		} else if (gg.Affidabilita < cAff && gg.Affidabilita > 0 && Percent(gg.NomeCode) >= cVmin){
		difv=100+dati0*CasaFuori*rappMv+dati2*CasaFuori*rappFm
		} else if (gg.Affidabilita >= cAff && Percent(gg.NomeCode) >= cVmin){
		difv=10000+dati0*CasaFuori*rappMv+dati2*CasaFuori*rappFm
		}
		difensori[contad]= new dife(difr, dif, difv)
		contad++;

}


if (ruoli[gg.Ruolo]=="C"){

		var nomeAvversaria = "---";
		var inTrasferta = false;
		if (gg.IDSquadraDiA < incontraInA.length) {
			var avversaria = incontraInA[gg.IDSquadraDiA][cGio];
			inTrasferta = avversaria >= 100;
			nomeAvversaria = eval("xa" + (avversaria % 100));
		}

if (dati[0]=="---" || dati[0]=="sv/ng"){
dati[0]=0
}
if (dati[2]=="---" || dati[2]=="sv/ng"){
dati[2]=0
}
if (dati[4]=="---" || dati[4]=="sv/ng"){
dati[4]=0
}
if (dati[6]=="---" || dati[6]=="sv/ng"){
dati[6]=0
}

var dati0=parseFloat(dati[0])
var dati2=parseFloat(dati[2])
var dati4=parseFloat(dati[4])
var dati6=parseFloat(dati[6])
var rappMv=parseInt(cMvFm.charAt(0)+cMvFm.charAt(1))
var rappFm=parseInt(cMvFm.charAt(2)+cMvFm.charAt(3))
inTrasferta ? CasaFuori=1 : CasaFuori=1+cCF/100
		cenr=ruoli[gg.Ruolo]
		cen=eval(gg.Nome)
		
		if (Percent(gg.NomeCode)==0 || gg.Affidabilita==0){
		cenv=-999
		} else if (Percent(gg.NomeCode) < cVmin && Percent(gg.NomeCode) > 0 && gg.Affidabilita < cAff && gg.Affidabilita > 0){
		cenv=100+dati0*CasaFuori*rappMv+dati2*CasaFuori*rappFm
		} else if (Percent(gg.NomeCode) < cVmin && Percent(gg.NomeCode) > 0 && gg.Affidabilita >= cAff ){
		cenv=100+dati0*CasaFuori*rappMv+dati2*CasaFuori*rappFm
		} else if (gg.Affidabilita < cAff && gg.Affidabilita > 0 && Percent(gg.NomeCode) >= cVmin){
		cenv=100+dati0*CasaFuori*rappMv+dati2*CasaFuori*rappFm
		} else if (gg.Affidabilita >= cAff && Percent(gg.NomeCode) >= cVmin){
		cenv=10000+dati0*CasaFuori*rappMv+dati2*CasaFuori*rappFm
		}
		centrocampisti[contac]= new cent(cenr,cen,cenv)
		contac++;
}


if (ruoli[gg.Ruolo]=="A"){

		var nomeAvversaria = "---";
		var inTrasferta = false;
		if (gg.IDSquadraDiA < incontraInA.length) {
			var avversaria = incontraInA[gg.IDSquadraDiA][cGio];
			inTrasferta = avversaria >= 100;
			nomeAvversaria = eval("xa" + (avversaria % 100));
		}

if (dati[0]=="---" || dati[0]=="sv/ng"){
dati[0]=0
}
if (dati[2]=="---" || dati[2]=="sv/ng"){
dati[2]=0
}
if (dati[4]=="---" || dati[4]=="sv/ng"){
dati[4]=0
}
if (dati[6]=="---" || dati[6]=="sv/ng"){
dati[6]=0
}
var dati0=parseFloat(dati[0])
var dati2=parseFloat(dati[2])
var dati4=parseFloat(dati[4])
var dati6=parseFloat(dati[6])
var rappMv=parseInt(cMvFm.charAt(0)+cMvFm.charAt(1))
var rappFm=parseInt(cMvFm.charAt(2)+cMvFm.charAt(3))
inTrasferta ? CasaFuori=1 : CasaFuori=1+cCF/100
		attr=ruoli[gg.Ruolo]
		att=eval(gg.Nome)
		
		if (Percent(gg.NomeCode)==0 || gg.Affidabilita==0){
		attv=-999
		} else if (Percent(gg.NomeCode) < cVmin && Percent(gg.NomeCode) > 0 && gg.Affidabilita < cAff && gg.Affidabilita > 0){
		attv=100+dati0*CasaFuori*rappMv+dati2*CasaFuori*rappFm
		} else if (Percent(gg.NomeCode) < cVmin && Percent(gg.NomeCode) > 0 && gg.Affidabilita >= cAff ){
		attv=100+dati0*CasaFuori*rappMv+dati2*CasaFuori*rappFm
		} else if (gg.Affidabilita < cAff && gg.Affidabilita > 0 && Percent(gg.NomeCode) >= cVmin){
		attv=100+dati0*CasaFuori*rappMv+dati2*CasaFuori*rappFm
		} else if (gg.Affidabilita >= cAff && Percent(gg.NomeCode) >= cVmin){
		attv=10000+dati0*CasaFuori*rappMv+dati2*CasaFuori*rappFm
		}
		attaccanti[contaa]= new atta(attr,att,attv)
		contaa++;
}


}




portieri.sort(function(a,b){return b.valore - a.valore;});

difensori.sort(function(a,b){return b.valore - a.valore;});

centrocampisti.sort(function(a,b){return b.valore - a.valore;});

attaccanti.sort(function(a,b){return b.valore - a.valore;});


parzform=0
topmod=0
topform=0
var modamm = new Object()
var w
modamm = moduliAmmessi
if(cMod=="Auto"){
for (w=0;w<modamm.length;w++) {

for (i=0; i<modamm[w][1]; i++) {
parzform=parzform+portieri[i].valore;
}
for (i=0; i<modamm[w][2]; i++) {
parzform=parzform+difensori[i].valore;
}
for (i=0; i<modamm[w][3]; i++) {
parzform=parzform+centrocampisti[i].valore;
}
for (i=0; i<modamm[w][4]; i++) {
parzform=parzform+attaccanti[i].valore;
}

if (parzform>topform){
topform=parzform;
topmod=w;
parzform=0
}
parzform=0
}
}else{
topmod=cMod;
}



for (i=0; i<modamm[topmod][1]; i++) {
for (g = 0; g < arrInvioFormazione.length; g++) {
var gg = arrInvioFormazione[g];
if (portieri[i].nome==eval(gg.Nome) && portieri[i].ruolo == ruoli[gg.Ruolo] && cFsq==gg.IDSquadra){
ClickGiocatoreRosa(g)
}
}
}

for (i=0; i<modamm[topmod][2]; i++) {
for (g = 0; g < arrInvioFormazione.length; g++) {
var gg = arrInvioFormazione[g]
if (difensori[i].nome == eval(gg.Nome) && difensori[i].ruolo == ruoli[gg.Ruolo] && cFsq==gg.IDSquadra) {
ClickGiocatoreRosa(g)
}
}
}
for (i=0; i<modamm[topmod][3]; i++) {
for (g = 0; g < arrInvioFormazione.length; g++) {
var gg = arrInvioFormazione[g]
if (centrocampisti[i].nome == eval(gg.Nome) && centrocampisti[i].ruolo == ruoli[gg.Ruolo] && cFsq==gg.IDSquadra) {
ClickGiocatoreRosa(g)
}
}
}
for (i=0; i<modamm[topmod][4]; i++) {
for (g = 0; g < arrInvioFormazione.length; g++) {
var gg = arrInvioFormazione[g]
if (attaccanti[i].nome == eval(gg.Nome) && attaccanti[i].ruolo == ruoli[gg.Ruolo] && cFsq==gg.IDSquadra) {
ClickGiocatoreRosa(g)
}
}
}

if (cPanc==1){
for (g = 0; g < arrInvioFormazione.length; g++) {
var gg = arrInvioFormazione[g];
if (portieri[1].nome==eval(gg.Nome) && portieri[1].ruolo == ruoli[gg.Ruolo] && cFsq==gg.IDSquadra){
ClickGiocatoreRosa(g)
}
}

for (i=1; i<=2; i++) {
for (g = 0; g < arrInvioFormazione.length; g++) {
var cnt=modamm[topmod][2]+i
var gg = arrInvioFormazione[g]
if (difensori[cnt-1].nome == eval(gg.Nome) && difensori[cnt-1].ruolo == ruoli[gg.Ruolo] && cFsq==gg.IDSquadra) {
ClickGiocatoreRosa(g)
}
}
}
for (i=1; i<=2; i++) {
var cnt=modamm[topmod][3]+i
for (g = 0; g < arrInvioFormazione.length; g++) {
var gg = arrInvioFormazione[g]
if (centrocampisti[cnt-1].nome == eval(gg.Nome) && centrocampisti[cnt-1].ruolo == ruoli[gg.Ruolo] && cFsq==gg.IDSquadra) {
ClickGiocatoreRosa(g)
}
}
}
for (i=1; i<=2; i++) {
var cnt=modamm[topmod][4]+i
for (g = 0; g < arrInvioFormazione.length; g++) {
var gg = arrInvioFormazione[g]
if (attaccanti[cnt-1].nome == eval(gg.Nome) && attaccanti[cnt-1].ruolo == ruoli[gg.Ruolo] && cFsq==gg.IDSquadra) {
ClickGiocatoreRosa(g)
}
}
}

}

}

function TopFormSettings() {


document.write ("<div id='tabform' style='background-color:#e2e2e2;bottom:50%;left:50%;width:500px;height:230px;margin:-115px 0 0 -250px;display:none;position:absolute;text-align:left;z-index:5;'>")
document.write("<form name='frmTopform' id='frmTopform' action='invform.php' method='get'>")
document.write("<input type='hidden' name='Fsq' id='Fsq' value='"+cFsq+"'>")
document.write("<input type='hidden' name='Gio' id='Gio' value='"+cGio+"'>")

document.write ('<div id="tabcont1" class="tabpanel">')
document.write ('<ul id="tabcont1-nav" class="tabnav">')
document.write ('<li><a href="#tab1"><span>Casa/Fuori</span></a></li>')
document.write ('<li><a href="#tab2"><span>MV/FM</span></a></li>')
document.write ('<li><a href="#tab3"><span>Affidabilit&agrave</span></a></li>')
document.write ('<li><a href="#tab4"><span>Disponibilit&agrave</span></a></li>')
document.write ('<li><a href="#tab5"><span>Modulo</span></a></li>')
document.write ('<li><a href="#tab6"><span>Panchina</span></a></li>')
document.write ('</ul>')
document.write ('<div id="tab1" class="tab">')

document.write("<br><nobr><p>&nbsp;&nbsp;Per i giocatori che giocano in casa incrementa la Media Voto/Fantamedia del:&nbsp;<select name='CF' id='idCF' >")
document.write("<option value='1'>0%</option>")
for (i=1;i<=20;i++) {
var opt=i*5;
	document.write("<option value='" +opt+ "'")
	if (opt == cCF) document.write(" selected")
	document.write(">" + opt + "%</option>")
}
document.write("</select></p></nobr><br>")

document.write('<div>*valore predefinito "0%"</div><br>')

document.write ('</div>')

document.write ('<div id="tab2" class="tab">')

document.write("<br><nobr><p>&nbsp;&nbsp;Rapporto Media Voto/Fantamedia:&nbsp;<select name='MvFm' id='idMvFm' >")

for (i=0;i<9;i++) {
x = new Array();
x[0]="1090";
x[1]="2080";
x[2]="3070";
x[3]="4060";
x[4]="5050";
x[5]="6040";
x[6]="7030";
x[7]="8020";
x[8]="9010";
var y=1+i+"0"
var z=9-i+"0"
	document.write("<option value='"+x[i]+"'")
	if (y+z == cMvFm) document.write(" selected")
	document.write(">" +y+"/"+z+"</option>")
}
document.write("</select></p></nobr><br>")
document.write('<div>*valore predefinito "50/50"</div><br>')

document.write ('</div>')

document.write ('<div id="tab3" class="tab">')
document.write("<br><nobr><p>&nbsp;&nbsp;Escludi giocatori con affidabilit&agrave minore di:&nbsp;<select name='Aff' id='idAff'>")
for (i=0;i<=10;i++) {
var opt=i*10;
	document.write("<option value='" +opt+ "'")
	if (opt == cAff) document.write(" selected")
	document.write(">" + opt + "%</option>")
}
document.write("</select></p></nobr><br>")
document.write('<div>*valore predefinito "50%"</div><br>')

document.write ('</div>')

document.write ('<div id="tab4" class="tab">')

document.write("<br><nobr><p>&nbsp;&nbsp;Escludi giocatori con disponibilit&agrave minore di:&nbsp;<select name='Vmin' id='idVmin'>")
for (i=0;i<=10;i++) {
var opt=i*10;
	document.write("<option value='" +opt+ "'")
	if (opt == cVmin) document.write(" selected")
	document.write(">" + opt + "%</option>")
}
document.write("</select></p></nobr><br>")
document.write('<div>*valore predefinito "50%"</div><br>')

document.write ('</div>')

document.write ('<div id="tab5" class="tab">')

document.write("<br><nobr><p>&nbsp;&nbsp;Scegli il modulo con cui vuoi giocare:&nbsp;<select name='Mod' id='idMod' >")
var modamm = new Object()
var w
modamm = moduliAmmessi
document.write("<option value='Auto'>- Top -</option>")
for (w=0;w<modamm.length;w++) {
	document.write("<option value='" +w+"'")
	if (w == cMod) document.write(" selected")
	document.write(">"+modamm[w][2]+"-"+modamm[w][3]+"-"+modamm[w][4]+"</option>")
}
document.write("</select></p></nobr><br>")
document.write('<div>*valore predefinito "Top"</div><br>')
document.write ('</div>')

document.write ('<div id="tab6" class="tab">')

document.write("<br><nobr><p>&nbsp;&nbsp;Vuoi visualizzare anche la panchina:&nbsp;<select name='Panc' id='idPanc'>")
x = new Array();
x[0]="No";
x[1]="Si";
for (w=0;w<2;w++) {
	document.write("<option value='" +w+"'")
	if (w == cPanc) document.write(" selected")
	document.write(">"+x[w]+"</option>")
}
document.write("</select></p></nobr><br>")


document.write('<div>*valore predefinito No</div><br>')
document.write ('</div>')



document.write ('</div>')


var tabber=new Yetii('tabcont1');
tabber.init();




document.write("<div style='width:100%;text-align:center'>")
document.write("<table align=center><tr><td valign=bottom><input name='Invia' type='submit' style='color:#000000;font-family: Verdana, Arial, Helvetica, sans-serif;font-size: 7pt;' id='Invia' value='   OK   '>")
document.write("</td><td valign=bottom>&nbsp;<input type='button' style='color:#000000;font-family: Verdana, Arial, Helvetica, sans-serif;font-size: 7pt;' onclick='return vediTesto(\"tabform\");' value=' ANNULLA '>")
document.write("</td><td valign=bottom>&nbsp;<input type='button' style='color:#000000;font-family: Verdana, Arial, Helvetica, sans-serif;font-size: 7pt;' onclick='writeValues();' value='SALVA IMPOSTAZIONI'>")
document.write("</td><td valign=bottom>&nbsp;Password per salvare<br><input type='password' id='idpassword' name='password' style='width:140px'>")
document.write("</td></tr></table></div>")
document.write("</form>")
document.write ("</div>&nbsp;<a href='javascript:void(0)' onclick='return vediTesto(\"tabform\");'><img src='img/settings.gif' height='20px' border='0' style='text-align:bottom'></a>")

}

 
function writeValues(){
var topopt='TopFormSettings.php?Fsq='+cFsq+'&CF='+document.getElementById("idCF").value+'&MvFm='+document.getElementById("idMvFm").value+'&Aff='+document.getElementById("idAff").value+'&Vmin='+document.getElementById("idVmin").value+'&Mod='+document.getElementById("idMod").value+'&Panc='+document.getElementById("idPanc").value;
	var psw = document.getElementById("idpassword").value;
	var crypted = Javacrypt.crypt("jd", psw);

	if (crypted[0] != passwords[cFsq]) {
		alert("Impossibile salvare le impostazioni: password non valida");
	} else{
window.open(topopt,'Salva_Impostazioni','resizable=no,location=no,menubar=no,scrollbars=no,status=no,toolbar=no,fullscreen=no,dependent=no,width=500,height=200,left=50,top=400');
}
}


/*
Yetii - Yetii - Yet (E)Another Tab Interface Implementation
http://www.kminek.pl/lab/yetii/
(c) 2007 Grzegorz Wojcik
It is up to You to leave or remove this copyright notice
---
Slightly modified for IE5.x support by Alessandro Fulciniti - http://www.html.it
*/

function Yetii(obj,active){
    
    this.active = (active) ? active : 1,
    this.timeout = null,
    this.tabclass = 'tab',
    this.activeclass = 'active',
    
    this.getTabs = function(){
 
        var retnode = [];
        var elem = document.getElementById(obj).childNodes;     //modified for IE 5.x support
        for (var i = 0; i < elem.length; i++) {
        if (elem[i].className==this.tabclass) retnode[retnode.length]=elem[i];
        }
    
        return retnode;
    
    },
        
    this.links = document.getElementById(obj+'-nav').getElementsByTagName('a'),
    this.tabs = this.getTabs();
    
    this.show = function(number){
        
        for (var i = 0; i < this.tabs.length; i++) {
        this.tabs[i].style.display = ((i+1)==number) ? 'block' : 'none';
        this.links[i].className = ((i+1)==number) ? this.activeclass : '';
        }
    
    },
    
    this.rotate = function(interval){
    
        this.show(this.active);
        this.active++;
    
        if(this.active > this.tabs.length) this.active = 1;
    
        var self = this;
        this.timeout = setTimeout(function(){self.rotate(interval);}, interval*1000);
    
    },
    
    this.init = function(interval){
    
        this.show(this.active);
        
        var self = this; 
        for (var i = 0; i < this.links.length; i++) {
        this.links[i].customindex = i+1;
        this.links[i].onclick = function(){ if (self.timeout) clearTimeout(self.timeout); self.show(this.customindex); return false; };
        } 
        
        if (interval) this.rotate(interval);
            
    };

};

function GeneraUser(ww)
{
	var user = new Array();

		user.push(cFsq + ',"' + cVmin + '","' + cMod + '",'+cAff+','+cMvFm+','+cCF+','+cPanc);

	return user.join("|");
}

