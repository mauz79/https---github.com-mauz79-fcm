import os

def write_file(filename, content):
    try:
        with open(filename, 'w', encoding='latin-1') as f: # Usa latin-1 per compatibilità con FCM vecchio
            f.write(content)
        print(f"[OK] Creato file: {filename}")
    except Exception as e:
        print(f"[ERRORE] Impossibile creare {filename}: {e}")

# ==============================================================================
# MENU DI NAVIGAZIONE COMUNE (Stile Maelstrom)
# ==============================================================================
NAV_MENU = """
<div class="nav-menu">
    <a href="confronti.htm">CONFRONTI</a> |
    <a href="ranking.htm">RANKING</a> |
    <a href="almanacco.htm">ALMANACCO</a> |
    <a href="album.htm">ALBUM</a> |
    <a href="topcosti.htm">TOP COSTI</a> |
    <a href="topFlopStorico.htm">TOP & FLOP</a>
</div>
"""

# ==============================================================================
# HEADER COMUNE (CSS e JS Base)
# ==============================================================================
COMMON_HEAD = """
    <link href="fcmmael.css" rel="stylesheet" type="text/css">
    
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
    <script src="js/fcmTabelle.js" type="text/javascript"></script>
    <script src="js/DataA.js" type="text/javascript"></script>

    <style>
        body { font-family: Verdana, Arial; font-size: 11px; margin: 0; padding: 10px; background-color: #fff; }
        
        .nav-menu { 
            background-color: #eee; border: 1px solid #000080; padding: 6px; 
            text-align: center; margin-bottom: 15px; font-weight: bold;
        }
        .nav-menu a { 
            text-decoration: none; color: #000080; margin: 0 5px; 
        }
        .nav-menu a:hover { color: red; text-decoration: underline; }

        .section-box { 
            border: 1px solid #000080; margin-bottom: 15px; 
        }
        .section-title {
            background-color: #2323B3; color: #fff; padding: 5px; 
            font-weight: bold; font-size: 12px;
        }
        .section-content {
            padding: 10px; overflow-x: auto;
        }
        
        /* Stile Tabelle FCM Maelstrom */
        table.ClassEl { width: 100%; border-collapse: collapse; border: 1px solid #000080; }
        .riga-blu-cx td, .riga-blu-cx th { background-color: #2323B3; color: #fff; font-weight: bold; text-align: center; }
        .riga-orange-cx td { background-color: #FF9900; color: #000080; font-weight: bold; }
        .riga-pari td { background-color: #EFEFEF; }
        .riga-dispari td { background-color: #FFFFFF; }
    </style>
"""

# ==============================================================================
# 1. CONFRONTI.HTM
# ==============================================================================
html_confronti = f"""<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
    <title>Confronti Storici</title>
    {COMMON_HEAD}
    <script src="persjs/fcmConfrontiFunzioni.js" type="text/javascript"></script>
    <script src="persjs/fcmConfrontiDati.js" type="text/javascript"></script>
    
    <script type="text/javascript">
        // Funzione Custom per Palmares Verticale (salva spazio)
        function GeneraPalmaresVerticale(selFsq) {{
            var html = "<table width='100%' cellpadding='2' cellspacing='0'>";
            var wins = [];
            for(var k=0; k<arrPalmares.length; k++) wins[k] = 0;
            
            for(var p=1; p<arrAdOPosizioni.length; p++) {{
                if(arrAdOPosizioni[p].idSquadra == selFsq && arrAdOPosizioni[p].posizione == 1) {{
                    var compID = arrAdOPosizioni[p].idCompetizione;
                    for(var j=1; j<arrPalmares.length; j++) {{
                        if(arrPalmares[j].Competizione == compID) {{ wins[j]++; break; }}
                    }}
                }}
            }}
            
            var found = false;
            for(var i=1; i<arrPalmares.length; i++) {{
                if(wins[i] > 0) {{
                    found = true;
                    html += "<tr><td width='25'><img src='img/" + arrPalmares[i].Icona + "'></td>";
                    html += "<td><b style='color:#b00;'>" + wins[i] + "</b> x " + arrPalmares[i].Label + "</td></tr>";
                }}
            }}
            if(!found) html += "<tr><td colspan='2'><i>Nessun titolo</i></td></tr>";
            html += "</table>";
            document.write(html);
        }}
    </script>
</head>
<body>
<script>
    var cFsq = JSQueryString("Fsq"); var cComp = JSQueryString("Comp"); var cStadio = JSQueryString("Stadio");
    var cFsq2 = JSQueryString("Fsq2"); var cComp2 = JSQueryString("Comp2"); var cStadio2 = JSQueryString("Stadio2");
    var cTipo = JSQueryString("Tipo"); var cVisu = JSQueryString("Visu"); var cTVisu = JSQueryString("TVisu");
    
    // Default sicuri
    try {{ if (!cFsq) cFsq = arrAdOFantasquadre[1].IDf; }} catch(e) {{ cFsq=1; }}
    if (!cComp) cComp=1; if (!cStadio) cStadio="T";
    if (!cFsq2) cFsq2="0"; if (!cComp2) cComp2="0"; if (!cStadio2) cStadio2="T";
    if (!cTipo) cTipo="000"; if (!cVisu) cVisu="5"; if (!cTVisu) cTVisu="S";
</script>

<h2 style="color:#2323B3; border-bottom:2px solid #FF9900;">STATISTICHE STORICHE</h2>

{NAV_MENU}

<div style="background:#ddd; border:1px solid #999; padding:5px; margin-bottom:15px; text-align:center;">
    <b>SQUADRA PRINCIPALE:</b><br>
    <script>GeneraIntestazioneFantasquadreC(cFsq,cComp,cStadio,cFsq2,cComp2,cStadio2,cTipo,cVisu,cTVisu,0,0,"T");</script>
</div>

<table width="100%" border="0" cellspacing="0" cellpadding="0">
<tr valign="top">
    <td width="30%" style="padding-right:10px;">
        <div class="section-box">
            <div class="section-title">PALMARES</div>
            <div class="section-content">
                <script>GeneraPalmaresVerticale(cFsq);</script>
            </div>
        </div>
    </td>
    <td width="70%">
        <div class="section-box">
            <div class="section-title">BILANCIO PROSSIMO TURNO</div>
            <div class="section-content">
                <script>
                    try {{ GeneraBilancioPT(); }} 
                    catch(e) {{ document.write("<i>Nessuna partita in programma o dati storici non disponibili.</i>"); }}
                </script>
            </div>
        </div>
    </td>
</tr>
</table>

<div class="section-box">
    <div class="section-title">CONFRONTI DIRETTI</div>
    <div class="section-content">
        <script>try {{ GeneraConfronti(cFsq,cComp,cStadio); }} catch(e) {{ document.write(e); }}</script>
    </div>
</div>

<div class="section-box">
    <div class="section-title">ELENCO INCONTRI</div>
    <div class="section-content">
        <script>
            GeneraIntestazioneFantasquadreC2(cFsq,cComp,cStadio,cFsq2,cComp2,cStadio2,cTipo,cVisu,cTVisu,0,0,"T");
            document.write("<br>");
            if (cFsq2 != "0") {{
                try {{ GeneraIncontri(cFsq,cFsq2,cComp2,cStadio2); }} catch(e) {{}}
            }} else {{
                document.write("<i>Seleziona un avversario dal menu qui sopra e clicca VAI.</i>");
            }}
        </script>
    </div>
</div>

<div class="section-box">
    <div class="section-title">RECORD & CURIOSIT&Agrave;</div>
    <div class="section-content">
        <script>
            GeneraIntestazioneRecord(cFsq,cComp,cStadio,cFsq2,cComp2,cStadio2,cTipo,cVisu,cTVisu,0,0,"T");
            document.write("<br>");
            if (cTipo != "000" && cTipo != "015") {{
                try {{ GeneraRecord(cTipo,cVisu,cTVisu,0,0,"T"); }} catch(e) {{}}
            }} else if (cTipo == "000") {{
                document.write("<i>Seleziona un tipo di record e clicca VAI.</i>");
            }}
        </script>
    </div>
</div>

<script>try {{ Stato("Confronti"); }} catch(e) {{}}</script>
</body>
</html>
"""

# ==============================================================================
# 2. RANKING.HTM
# ==============================================================================
html_ranking = f"""<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
    <title>Ranking Storico</title>
    {COMMON_HEAD}
    <script src="persjs/fcmRankingFunzioni.js" type="text/javascript"></script>
    <script src="persjs/fcmRankingDati.js" type="text/javascript"></script>
</head>
<body>
<script>
    var cMin = JSQueryString("Min"); var cAtt = JSQueryString("Att");
    if (!cMin) cMin="N"; if (!cAtt) cAtt="N";
</script>

<h2 style="color:#2323B3; border-bottom:2px solid #FF9900;">RANKING DI LEGA</h2>
{NAV_MENU}

<div class="section-box">
    <div class="section-content" style="background:#EFEFEF; text-align:center;">
        <script>GeneraIntestazioneRanking(cMin, cAtt);</script>
    </div>
</div>

<div class="section-box">
    <div class="section-title">CLASSIFICA GENERALE (Ultime 5 Stagioni)</div>
    <div class="section-content">
        <script>
            try {{ GeneraRanking(cMin, cAtt); }} 
            catch(e) {{ document.write("Nessun dato disponibile."); }}
        </script>
    </div>
</div>
<script>try {{ Stato("Ranking"); }} catch(e) {{}}</script>
</body></html>
"""

# ==============================================================================
# 3. ALMANACCO.HTM
# ==============================================================================
html_almanacco = f"""<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
    <title>Almanacco Storico</title>
    {COMMON_HEAD}
    <script src="persjs/fcmAlmanaccoFunzioni.js" type="text/javascript"></script>
    <script src="persjs/fcmAlmanaccoDati.js" type="text/javascript"></script>
</head>
<body>
<script>
    var cFsq = JSQueryString("Fsq");
    if (!cFsq) cFsq = "0";
</script>

<h2 style="color:#2323B3; border-bottom:2px solid #FF9900;">ALMANACCO STORICO</h2>
{NAV_MENU}

<div class="section-box">
    <div class="section-content" style="background:#EFEFEF; text-align:center;">
        <script>GeneraIntestazioneAlmanacco(cFsq);</script>
    </div>
</div>

<div class="section-box">
    <div class="section-title">RECORD SQUADRA</div>
    <div class="section-content">
        <script>
            try {{ GeneraAlmanacco(cFsq); }} 
            catch(e) {{ document.write("Seleziona una squadra per visualizzare i dettagli."); }}
        </script>
    </div>
</div>
<script>try {{ Stato("Almanacco"); }} catch(e) {{}}</script>
</body></html>
"""

# ==============================================================================
# 4. ALBUM.HTM
# ==============================================================================
html_album = f"""<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
    <title>Album Storico</title>
    {COMMON_HEAD}
    <script src="persjs/fcmAlbumFunzioni.js" type="text/javascript"></script>
    <script src="persjs/fcmAlbumDati.js" type="text/javascript"></script>
</head>
<body>
<script>
    var cFsq = JSQueryString("Fsq"); var cRuolo = JSQueryString("Ruolo"); var cStagione = JSQueryString("Stagione");
    try {{
        if (!cFsq) {{
            for (i=1; i<arrAdOFantasquadre.length; i++) {{
                if (arrAdOFantasquadre[i].idAttuale != 0 ) {{ cFsq = arrAdOFantasquadre[i].IDf; break; }}
            }}
        }}
    }} catch(e) {{ cFsq=1; }}
    if (!cRuolo) cRuolo="Tutti"; if (!cStagione) cStagione="Tutte";
</script>

<h2 style="color:#2323B3; border-bottom:2px solid #FF9900;">ALBUM FIGURINE</h2>
{NAV_MENU}

<div class="section-box">
    <div class="section-content" style="background:#EFEFEF; text-align:center;">
        <script>GeneraIntestazioneAlbum(cFsq, cRuolo, cStagione);</script>
    </div>
</div>

<div class="section-box">
    <div class="section-title">GIOCATORI</div>
    <div class="section-content" style="text-align:center;">
        <script>
            try {{ GeneraAlbum(cFsq, cRuolo, cStagione); }} 
            catch(e) {{ document.write("Nessun dato disponibile."); }}
        </script>
    </div>
</div>
<script>try {{ Stato("Album"); }} catch(e) {{}}</script>
</body></html>
"""

# Scrittura su disco
write_file("confronti.htm", html_confronti)
write_file("ranking.htm", html_ranking)
write_file("almanacco.htm", html_almanacco)
write_file("album.htm", html_album)

print("\n--- OPERAZIONE COMPLETATA CON SUCCESSO ---")
print("I file sono stati creati. Ora apri il sito e testa 'confronti.htm'.")