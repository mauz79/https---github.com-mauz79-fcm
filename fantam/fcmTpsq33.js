function Tp(Nome,Totgiocate,Gen_V,Gen_N,Gen_P,Gf,Gs,Casa_V,Casa_N,Casa_P,Fuori_V,Fuori_N,Fuori_P) {
this.Nome = Nome
this.Totgiocate = Totgiocate
this.Gen_V = Gen_V
this.Gen_N = Gen_N
this.Gen_P = Gen_P
this.Gf = Gf
this.Gs = Gs
this.Casa_V = Casa_V
this.Casa_N = Casa_N
this.Casa_P = Casa_P
this.Fuori_V = Fuori_V
this.Fuori_N = Fuori_N
this.Fuori_P = Fuori_P
}

function Tp_bis(TotPartite,BlackBeast,BB_mp,EasyRider,ER_mp) {
this.TotPartite = TotPartite
this.BlackBeast = BlackBeast
this.BB_mp = BB_mp
this.EasyRider = EasyRider
this.ER_mp = ER_mp
}

var arrSquadra33=new Array()
a = arrSquadra33
a[1]=new Tp("A-Lazie",7,1,2,4,6,9,1,1,1,0,1,3)
a[2]=new Tp("Herta Mpone",7,1,2,4,4,9,1,1,2,0,1,2)
a[3]=new Tp("F.C. Spiaze",7,2,3,2,10,9,2,1,1,0,2,1)
a[4]=new Tp("Urbe Tevere",7,4,1,2,13,8,2,1,1,2,0,1)
a[5]=new Tp("City Blinders",7,4,2,1,9,7,3,0,0,1,2,1)
a[6]=new Tp("__________TOTALE",35,12,10,13,42,42,"-","-","-","-","-","-")

var arrSquadra33bis=new Array()
a = arrSquadra33bis
a[1]=new Tp_bis(35,"A-Lazie/Herta Mpone",.71,"City Blinders",2)
