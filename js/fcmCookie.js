
function getCookie(nomeCampo) {
	var aux = nomeCampo + "="
	var a_l = aux.length
	var c_l = document.cookie.length
	for (i=0;i<c_l;i++) {
		var j = i + a_l
		if (document.cookie.substring(i,j)==aux) return getCookieVal(j)
	}
	return null
}

function getCookieVal(inizio) {
	var fine = document.cookie.indexOf ("&",inizio)
	if (fine==-1) fine = document.cookie.length
	return unescape(document.cookie.substring(inizio,fine))
}

function setCookie (argomenti) {
	var numero_argomenti = argomenti.length
	var aux = ""
	var r = -1
	for (i=1;i<numero_argomenti;i++)
	{
	if (argomenti[i]=="expires")
		r = i
	else
		aux += argomenti[i] + "=" + escape(argomenti[i+1]) + "&"
	}
	if (r!=-1)
		aux += "; " + argomenti[r] + "=" + argomenti[r+1].toGMTString()
	document.cookie = aux
}

function removeCookie()
{
	var morteCookie = new Date()
	morteCookie.setMonth(morteCookie.getMonth()-1)
	document.cookie = 'Prova=Delete; expires='+morteCookie.toGMTString()
}