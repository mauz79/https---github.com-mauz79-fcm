//*Author: Andrea "Maelstrom" Bertolazzi*
function GeneraSeAvessib(){
var i,j,stile,buffer1,buffer2
var media = new Array()
var nomitassodisfiga = new Array()
var calendariokiller = new Array()
var nomicalendario = new Array()
for (i=1;i<tableIncrociTeamsb.length;i++){
		media[i]=0
		nomitassodisfiga[i] = tableIncrociTeamsb[i]
		nomicalendario[i] = tableIncrociTeamsb[i]
		calendariokiller[i] = 0
}
//generazione tasso di sfiga
for (i=1;i<tableIncrociTeamsb.length;i++){
	for (j=1;j<tableIncrociTeamsb.length;j++){
		media[i]=media[i]+tableIncrocib[i][j]
		calendariokiller[i]=calendariokiller[i]+tableIncroci[j][i]
	}
	media[i]=media[i]/(tableIncrociTeamsb.length-1)
	media[i]=tableIncrocib[i][i]-media[i]
	calendariokiller[i]=calendariokiller[i]/(tableIncrociTeamsb.length-1)
}
for (i=1;i<tableIncrociTeamsb.length;i++){
	for (j=i+1;j<tableIncrociTeamsb.length;j++){
		if (media[j]>media[i]){
			buffer1 = media[i]
			media[i] = media[j]
			media[j] = buffer1
			buffer2 = nomitassodisfiga[i]
			nomitassodisfiga[i] = nomitassodisfiga[j]
			nomitassodisfiga[j] = buffer2
		}
		if (calendariokiller[j]>calendariokiller[i]){
			buffer1 = calendariokiller[i]
			calendariokiller[i] = calendariokiller[j]
			calendariokiller[j] = buffer1
			buffer2 = nomicalendario[i]
			nomicalendario[i] = nomicalendario[j]
			nomicalendario[j] = buffer2
		}	
	}
}
//fine generazione tasso di sfiga
//prima intestazione
document.write("<table align=center width=100%' class='ClassTabellaincroci' border='1px solid' bordercolor='#2323B3' cellpadding=3 cellspacing=0 style='border-collapse:collapse'> <tr class='rigaintestazione'><td class='t-xxsBianco'>Squadre</td>")
document.write("<td class='t-xxsBianco' colspan='"+(tableIncrociTeamsb.length-1)+"'>Punti con il calendario di...</td>")
//prima intestazione
//secondaintestazione
document.write("<tr class='rigasquadre'><td class='t-xxsNero' rowspan='3'>Nome</td>")
for (i=1;i<tableIncrociTeamsb.length;i++){
	document.write("<td class='t-xxsNero'>"+tableIncrociTeamsb[i]+"</td>")
}
document.write("</tr><tr class='rigasquadre'></tr><tr class='rigasquadre'></tr>")
for (i=1;i<tableIncrociTeamsb.length;i++){	
	document.write("<tr class='rigaincrocipari'>")
	
	document.write("<td class='cellasquadra'>"+tableIncrociTeamsb[i]+"</td>")
	for (j=1;j<tableIncrociTeamsb.length;j++){
	if (tableIncrocib[i][j] == tableIncrocib[i][i]){
		stile="t-xxsGiallo"
	}else if (tableIncrocib[i][j] < tableIncrocib[i][i]){
		stile="t-xxsRosso"
	}else if (tableIncrocib[i][j] > tableIncrocib[i][i]){
		stile="t-xxsVerde"
	}
	if (i==j){
		stile="t-xxsNero"
	}
	document.write("<td class='"+stile+"'>"+tableIncrocib[i][j]+"</td>")
	}
	document.write("</tr>")
}
	document.write("<tr class='rigaintestazione'><td colspan='"+(tableIncrociTeamsb.length)+"'></td></tr>")	
	j=1
	buffer1=media[1]
	buffer2="Squadra più fortunata nell'assegnazione calendario:"
	while (media[j]==buffer1){
	if(j>1)	{
	buffer2="" 	
	}	
	document.write("<tr class='rigaincrociopari'><td class='cellasquadra' colspan='"+(tableIncrociTeamsb.length/2)+"'>"+buffer2+"</td>")		
	document.write("<td class='t-xxsNero' colspan='"+(tableIncrociTeamsb.length/2+1)+"'>"+nomitassodisfiga[j]+"</td></tr>")
	j++
	}
	j=1
	buffer1=media[tableIncrociTeamsb.length-j]
	buffer2="Squadra più sfortunata nell'assegnazione calendario:"
	while (media[tableIncrociTeamsb.length-j]==buffer1){
	if(j>1)	{
	buffer2="" 	
	}	
	document.write("<tr class='rigaincrociopari'><td class='cellasquadra' colspan='"+(tableIncrociTeamsb.length/2)+"'>"+buffer2+"</td>")	
	document.write("<td class='t-xxsNero' colspan='"+(tableIncrociTeamsb.length/2+1)+"'>"+nomitassodisfiga[tableIncrociTeamsb.length-j]+"</td></tr>")
	j++
	}
	j=1
	buffer1=calendariokiller[1]
	buffer2="Calendario più facile in assoluto"
	while (calendariokiller[j]==buffer1){
	if(j>1)	{
	buffer2="" 	
	}	
	document.write("<tr class='rigaincrociopari'><td class='cellasquadra' colspan='"+(tableIncrociTeamsb.length/2)+"'>"+buffer2+"</td>")		
	document.write("<td class='t-xxsNero' colspan='"+(tableIncrociTeamsb.length/2+1)+"'>"+nomicalendario[j]+"</td></tr>")
	j++
	}
	j=1
	buffer1=calendariokiller[tableIncrociTeamsb.length-j]
	buffer2="Calendario più difficile in assoluto"
	while (calendariokiller[tableIncrociTeamsb.length-j]==buffer1){
	if(j>1)	{
	buffer2="" 	
	}	
	document.write("<tr class='rigaincrociopari'><td class='cellasquadra' colspan='"+(tableIncrociTeamsb.length/2)+"'>"+buffer2+"</td>")	
	document.write("<td class='t-xxsNero' colspan='"+(tableIncrociTeamsb.length/2+1)+"'>"+nomicalendario[tableIncrociTeamsb.length-j]+"</td></tr>")
	j++
	}
	document.write("</table>")
}