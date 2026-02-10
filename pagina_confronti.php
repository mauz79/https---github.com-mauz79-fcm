<head>
    <script src="js/fcmVariabili.js" type="text/javascript"></script>
    <script src="js/fcmLegaDati.js" type="text/javascript"></script>
    <script src="js/fcmGenerale.js" type="text/javascript"></script>
    <script src="js/fcmUtils.js" type="text/javascript"></script>
    <script src="js/fcmSerieAFunzioni.js" type="text/javascript"></script>
    <script src="js/fcmSerieADati.js" type="text/javascript"></script>
    <script src="js/fcmFantasquadreFunzioni.js" type="text/javascript"></script>
    <script src="js/fcmFantasquadreDati.js" type="text/javascript"></script>
    <script src="js/fcmAlboDOroFunzioni.js" type="text/javascript"></script>
    <script src="js/fcmAlboDOroDati.js" type="text/javascript"></script>
    <script src="js/fcmCompetizioniFunzioni.js" type="text/javascript"></script>
    <script src="js/fcmCompetizioniDati.js" type="text/javascript"></script>
    <script src="js/fcmCalendarioFunzioni.js" type="text/javascript"></script>
    <script src="js/fcmCalendarioDati.js" type="text/javascript"></script>
    
    <script src="persjs/fcmConfrontiMauzFunzioni.js" type="text/javascript"></script>
    <script src="persjs/fcmConfrontiDati.js" type="text/javascript"></script>
    
    <script src="js/fcmTabelle.js" type="text/javascript"></script>
    <script src="js/DataA.js" type="text/javascript"></script>

    <style>
        .nav-menu { background-color: #f4f4f4; padding: 10px; border-bottom: 2px solid #2323B3; text-align: center; margin-bottom: 20px; }
        .nav-menu a { text-decoration: none; color: #333; font-weight: bold; margin: 0 10px; padding: 5px 15px; border: 1px solid #ccc; background: #fff; border-radius: 5px; font-size: 12px; }
        .nav-menu a:hover { background-color: #2323B3; color: #fff; }
        
        .section-container { margin-bottom: 20px; border: 1px solid #ccc; background-color: #fff; }
        .section-header { padding: 8px; cursor: pointer; background-color: #eee; border-bottom: 1px solid #ddd; font-weight: bold; color: #2323B3; }
        .section-header:hover { background-color: #e0e0e0; }
        .section-content { padding: 15px; }
        
        /* Stile specifico per il Bilancio per metterlo in evidenza */
        .bilancio-header { background-color: #dcedc8; color: #006400; border-bottom: 1px solid #a5d6a7; }
    </style>
</head>

<body>

    <div class="nav-menu">
        <a href="pagina_confronti.php">CONFRONTI</a>
        <a href="pagina_ranking.php">RANKING</a>
        <a href="pagina_almanacco.php">ALMANACCO</a>
        <a href="pagina_album.php">ALBUM</a>
        <a href="pagina_mercato.php">MERCATO</a>
    </div>

    <script language="javascript" type="text/javascript">
        var cFsq = JSQueryString("Fsq"); 
        var cComp = JSQueryString("Comp"); 
        var cStadio = JSQueryString("Stadio");
        var cFsq2 = JSQueryString("Fsq2"); 
        var cComp2 = JSQueryString("Comp2"); 
        var cStadio2 = JSQueryString("Stadio2");
        var cTipo = JSQueryString("Tipo"); 
        var cVisu = JSQueryString("Visu"); 
        var cTVisu = JSQueryString("TVisu");
        var cFsq3 = JSQueryString("Fsq3"); 
        var cComp3 = JSQueryString("Comp3"); 
        var cStadio3 = JSQueryString("Stadio3");

        // Default
        if (cFsq == null||cFsq=="") cFsq=arrAdOFantasquadre[1].IDf;
        if (cComp == null||cComp=="") cComp=arrAdOCompetizioni[1].IDc;
        if (cStadio == null||cStadio=="") cStadio="T";
        if (cFsq2 == null||cFsq2=="") cFsq2="0";
        if (cComp2 == null||cComp2=="") cComp2="0";
        if (cStadio2 == null||cStadio2=="") cStadio2="T";
        if (cTipo == null||cTipo=="") cTipo="000";
        if (cVisu == null||cVisu=="") cVisu="5";
        if (cTVisu == null||cTVisu=="") cTVisu="S";
        if (cFsq3 == null||cFsq3=="") cFsq3="0";
        if (cComp3 == null||cComp3=="") cComp3="0";
        if (cStadio3 == null||cStadio3=="") cStadio3="T";
    </script>

    <div class="section-container">
        <div class="section-header bilancio-header" onclick="invertiDisplayLayer('layBilancio');">
            &#9660; BILANCIO PROSSIMO TURNO (Clicca per aprire/chiudere)
        </div>
        <div id="layBilancio" class="section-content" style="display:none;">
            <script>GeneraBilancioPT();</script>
        </div>
    </div>

    <div class="section-container">
        <div class="section-header">PALMARES</div>
        <div class="section-content">
            <script>GeneraPalmares(cFsq);</script>
        </div>
    </div>

    <div class="section-container">
        <div class="section-header" onclick="invertiDisplayLayer('layConfronti');">
            &#9658; CONFRONTI DIRETTI & STATISTICHE (Clicca per aprire)
        </div>
        <div id="layConfronti" class="section-content" style="display:none;">
            <script>
                GeneraIntestazioneFantasquadreC(cFsq,cComp,cStadio,cFsq2,cComp2,cStadio2,cTipo,cVisu,cTVisu,cFsq3,cComp3,cStadio3);
                GeneraConfronti(cFsq,cComp,cStadio);
            </script>
        </div>
    </div>

    <div class="section-container">
        <div class="section-header" onclick="invertiDisplayLayer('layIncontri'); cFsq2='0';">
            &#9658; ELENCO INCONTRI (Clicca per aprire)
        </div>
        <div id="layIncontri" class="section-content" style="display:none;">
            <script>
                GeneraIntestazioneFantasquadreC2(cFsq,cComp,cStadio,cFsq2,cComp2,cStadio2,cTipo,cVisu,cTVisu,cFsq3,cComp3,cStadio3);
                if (cFsq2 != "0") {
                    GeneraIncontri(cFsq,cFsq2,cComp2,cStadio2);
                }
            </script>
        </div>
    </div>

    <div class="section-container">
        <div class="section-header" onclick="invertiDisplayLayer('layRecord'); cTipo='000';">
            &#9658; RECORD & CURIOSIT&Agrave; (Clicca per aprire)
        </div>
        <div id="layRecord" class="section-content" style="display:none;">
            <script>
                GeneraIntestazioneRecord(cFsq,cComp,cStadio,cFsq2,cComp2,cStadio2,cTipo,cVisu,cTVisu,cFsq3,cComp3,cStadio3);
                if (cTipo != "000" && cTipo != "015") { // 015 è il bilancio, già mostrato sopra
                    GeneraRecord(cTipo,cVisu,cTVisu,cFsq3,cComp3,cStadio3);
                }
            </script>
        </div>
    </div>

    <script type="text/javascript">
        // Apertura intelligente: se l'utente ha selezionato qualcosa (es. un record), apriamo quel div specifico
        if (cTipo != "000" && cTipo != "015") {
            document.getElementById('layRecord').style.display = 'block';
        }
        if (cFsq2 != "0") {
            document.getElementById('layIncontri').style.display = 'block';
        }
    </script>

</body>