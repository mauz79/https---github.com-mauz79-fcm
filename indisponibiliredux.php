<?php
// Maelstrom IndisponibiliRedux 1.0
// By Andrea "Maelstrom" Bertolazzi 
						$htmlindisponibili = file_get_contents ("http://www.fantacalcio.kataweb.it/stat/index.php?page=indisponibili");
					        $posini = strpos($htmlindisponibili,"	<table class=");
						$posfin = strpos($htmlindisponibili,"<div id=\"contB\">");
                                                $lung = ($posfin - 17) - $posini;
						$htmltagliato = substr($htmlindisponibili,$posini,$lung);
						$htmlcorretto = str_replace("class=\"table expanded tablesorter\"","class=\"ClassEl\" bgcolor=\"#FFFFFF\" width=\"100%\"",$htmltagliato); 
						$htmlfinale = str_replace("Ã","&agrave;",$htmlcorretto);
						$htmlfinale = str_replace(" <tr>
              <th class=\"a-left\">Giocatore</th>
"," <tr class=\"riga-blu-cx\">
              <th class=\"riga-blu-cx\">Giocatore</th>",$htmlfinale);
			  $htmlfinale = str_replace("<th class=\"a-left\">Motivo Indisponibi","<th class=\"riga-blu-cx\">Motivo Indisponibi",$htmlfinale);
			  $htmlfinale = str_replace("<th class=\"a-left\">Torna in","<th class=\"riga-blu-cx\">Torna in",$htmlfinale);
			            $htmlfinale = str_replace("<a href","<a class=\"newscel2\" target=_\"blank\" href",$htmlfinale);

						
						$pari="class=\"riga-indisponibili-pari\"";
						$dispari="class=\"riga-indisponibili-dispari\"";
						$pattern="/class=\"a-left\"/";
						$intestazione=explode("<tbody>",$htmlfinale);
						$intestazione[1] = str_replace("<tbody>","",$intestazione[1]);
						$intestazione[1] = str_replace("</tbody>","",$intestazione[1]);
						$intestazione[1] = str_replace("</table>","",$intestazione[1]);
 						$indisponibili=explode("<tr>",$intestazione[1]);
						$output="indisponibilijs/indisponibili.js";
						$scrivi_file=fopen($output,w);
						fwrite($scrivi_file,"var arrIndisponibiliA=new Array()\r\na=arrIndisponibiliA\r\n");

						
						for ($k=1;$k<count($indisponibili);$k=$k+1) {
								$buffer=explode("=\"boxy\">",$indisponibili[$k]);
								$buffer[1]=str_replace("</td>","",$buffer[1]);
								$buffer[1]=str_replace("</a>","",$buffer[1]);
								$buffer[1]=str_replace("</n>","",$buffer[1]);
								$buffer[1]=str_replace("</r>","",$buffer[1]);
								$buffer[1]=str_replace("</tr>","",$buffer[1]);
								$buffer[1]=trim(str_replace("<td class=\"a-left\">","divisore",$buffer[1]));
								$buffer[1]=str_replace(array("\n","\r"),"",$buffer[1]);
								$buffer2=explode("divisore",$buffer[1]);
								$buffer2[0]=trim($buffer2[0]);
								$buffer2[1]=trim($buffer2[1]);
								$buffer2[2]=trim($buffer2[2]);
								fwrite($scrivi_file, "a[".$k."]=new IndisponibileA(\"".$buffer2[0]."\",\"".$buffer2[1]."\",\"".$buffer2[2]."\")\r\n");			
						}
						fclose($scrivi_file);
?>
					