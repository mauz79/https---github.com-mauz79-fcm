				if (MiniClaF=="si") {
				ClaF ='no'
				ProT ='no'
				UltI ='no'
		 				document.write("<table class='menu' cellspacing='0' cellpadding='2'><tr><img src='img/abstract.gif' border='0' style='margin-bottom: 3px'><td bgcolor='#FFFFFF' style='padding-bottom: 5px'>");
											
				//ESEMPIO SINTASSI													
        //document.write("<A HREF='"+href);
        //document.write("' onMouseOut='mout(\"link"+no);
        //document.write("\")' onMouseOver='mover(\"link");
        //document.write(no+"\")' ID='link"+no+"'>"+text);
        //document.write("<\/A>");
				// FINE ESEMPIO SINTASSI	
				
				document.write("<a class='newscel3'");
				document.write("' onMouseOver='showToolTip(\"link1");
				document.write("\")' onMouseOut='hideToolTip(\"link1");
				document.write("\")' href='javascript:void(0);'>Classifica</a><br>");
						
			  document.write("<a class='newscel3'");
				document.write("' onMouseOver='showToolTip(\"link2");
				document.write("\")' onMouseOut='hideToolTip(\"link2");
				document.write("\")' href='javascript:void(0);'>Ultimo turno</a><br>");
				
        document.write("<a class='newscel3'");
				document.write("' onMouseOver='showToolTip(\"link3");
				document.write("\")' onMouseOut='hideToolTip(\"link3");
				document.write("\")' href='javascript:void(0);'>Prossimo turno</a><br>");

				document.write("</td></tr></table><br>");

}

if (ClaF=="si") {
document.write("<scr" + "ipt language='JavaScript' type='text/javascript' src='menujs/classifica.js'></scr" + "ipt>");
			 }


if (UltI=="si") {
document.write("<scr" + "ipt language='JavaScript' type='text/javascript' src='menujs/ulti.js'></scr" + "ipt>");
			 }

if (ProT=="si") {
document.write("<scr" + "ipt language='JavaScript' type='text/javascript' src='menujs/prot.js'></scr" + "ipt>");
			 }