
<style type='text/css'>
body {
	margin-left: 0px;
	margin-top: 0px;
}
</style>
<div align="center">
<script src='../js/fcmUtils.js' type='text/javascript'></script>

<script language="javascript" type="text/javascript">
var sq = JSQueryString("sq")
var width = JSQueryString("l")
var height = JSQueryString("altezza")


//valori predefiniti, che andrebbero bene...
//larghezza=600
//altezza formazioni Gazzetta=243
//altezza frame fantagazzetta=466
//spostamento in altro frame fantagazzetta=126
document.write("<table align='center'width='"+width+"' border='0' cellspacing='0' cellpadding='0'><tr><td>")
document.write("<object data='http://www.gazzetta.it/ssi/swf/campetto_oriz.swf' type='application/x-shockwave-flash' width='"+width+"' height='243' id='probabili_formazioni'><param name='quality' value='high'/><param name='wmode' value='transparent'/><param name='allowScriptAccess' value='always'/><param name='flashvars' value='xmlPath=http://www.gazzetta.it/ssi/2011/boxes/calcio/squadre/"+sq+"/formazione/formazione.xml'/><param name='movie' value='http://www.gazzetta.it/ssi/swf/campetto_oriz.swf'/></object>") 

document.write("</td></tr></table>") 
document.write("<div style='position: absolute; left: 0px; top: 126px;  z-index:-1;'><iframe frameborder='0'  scrolling='no' allowtransparency='yes' name='Fantagazzetta' height='466' width='"+width+"' src='http://m.fantagazzetta.com/probabili2.asp?s="+sq+"'></iframe></div>") 


 </script></div>