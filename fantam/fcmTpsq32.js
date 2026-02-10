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

var arrSquadra32=new Array()
a = arrSquadra32
a[1]=new Tp("A-Lazie",7,1,2,4,2,6,1,1,1,0,1,3)
a[2]=new Tp("Er Pantera",7,4,2,1,9,4,2,1,0,2,1,1)
a[3]=new Tp("F.C. Spiaze",7,2,3,2,2,4,0,2,1,2,1,1)
a[4]=new Tp("Urbe Tevere",7,2,4,1,7,5,2,2,0,0,2,1)
a[5]=new Tp("City Blinders",7,3,2,2,6,4,2,1,1,1,1,1)
a[6]=new Tp("__________TOTALE",35,12,13,10,26,23,"-","-","-","-","-","-")

var arrSquadra32bis=new Array()
a = arrSquadra32bis
a[1]=new Tp_bis(35,"A-Lazie",.71,"Er Pantera",2)
