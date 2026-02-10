var ImgScudo = "&nbsp;<img border=\"0\" src=\"img/scudo.png\" />"
var ImgCoppa = "&nbsp;<img border=\"0\" src=\"img/coppa.png\" />"
var ImgSupCoppa = "&nbsp;<img border=\"0\" src=\"img/supercoppa.png\" />"


function Scudo(NomeDaTestare){
	if (NomeDaTestare == WinCamp && NomeDaTestare == WinCopp && NomeDaTestare == WinSupe) {
	var Scudetto = NomeDaTestare+ImgScudo+ImgCoppa+ImgSupCoppa;
	return Scudetto;
	} else if (NomeDaTestare == WinCamp && NomeDaTestare == WinCopp) {
	var Scudetto = NomeDaTestare+ImgScudo+ImgCoppa;
	return Scudetto;
	} else if (NomeDaTestare == WinCamp && NomeDaTestare == WinSupe) {
	var Scudetto = NomeDaTestare+ImgScudo+ImgSupCoppa;
	return Scudetto;
	} else if (NomeDaTestare == WinCopp && NomeDaTestare == WinSupe) {
	var Scudetto = NomeDaTestare+ImgCoppa+ImgSupCoppa;
	return Scudetto;
	} else if  (NomeDaTestare == WinCamp) {
	var Scudetto = NomeDaTestare+ImgScudo;
	return Scudetto;
	} else if  (NomeDaTestare == WinCopp) {
	var Scudetto = NomeDaTestare+ImgCoppa;
	return Scudetto;
	} else if  (NomeDaTestare == WinSupe) {
	var Scudetto = NomeDaTestare+ImgSupCoppa;
	return Scudetto;
	} else {
	var Scudetto = NomeDaTestare;
	return Scudetto;
	}
}

