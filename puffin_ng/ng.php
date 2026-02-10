<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<title>Puffin NewsGenerator</title>
<meta name="author" content="puffin" />
<link rel="stylesheet" type="text/css" href="PnG.css" />
<script src="../js/fcmVariabili.js" type="text/javascript"></script> 
<script src="../js/fcmSerieADati.js" type="text/javascript"></script>  
<script src="../js/fcmGenerale.js" type="text/javascript"></script>  
<script src="../js/fcmFantasquadreFunzioni.js" type="text/javascript"></script>
<script src="../js/fcmFantasquadreDati.js" type="text/javascript"></script> 
<script src="../js/fcmCompetizioniFunzioni.js" type="text/javascript"></script>
<script src="../js/fcmCompetizioniDati.js" type="text/javascript"></script> 
<script src="../js/fcmCalendarioFunzioni.js" type="text/javascript"></script>
<script src="../js/fcmCalendarioDati.js" type="text/javascript"></script> 
<script src="../js/fcmRisultatiFunzioni.js" type="text/javascript"></script>
<script type="text/javascript">
document.write("<script src='../js/fcmRisultatiDati"+GetUltimaGiornataGiocata()+".js' type='text/javascript'></scr" + "ipt>")	
</script>
<script type="text/javascript">
function aprichiudi( targetId ){
  if (document.getElementById){
    target = document.getElementById( targetId );
      if (target.style.display == "none"){
        target.style.display = "block";
      } else {
        target.style.display = "none";        
      }
   }
 } 
</script>
</head>
<body onLoad="init()">

<div id="loading" style="position:absolute; width:100%; text-align:center; top:90px;"><img src="loader.gif" border=0></div>
<script type="text/javascript"> var ld=(document.all);  var ns4=document.layers; var ns6=document.getElementById&&!document.all; var ie4=document.all;  if (ns4) 	ld=document.loading; else if (ns6) 	ld=document.getElementById("loading").style; else if (ie4) 	ld=document.all.loading.style;  function init() { if(ns4){ld.visibility="hidden";} else if (ns6||ie4) ld.display="none"; } </script>

<script src="../js/fcmPuffinNewsGenerator.js" type="text/javascript"></script>

</body>
</html>
