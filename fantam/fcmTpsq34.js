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

var arrSquadra34=new Array()
a = arrSquadra34
a[1]=new Tp("A-Lazie",7,1,3,3,6,10,0,2,2,1,1,1)
a[2]=new Tp("Herta Mpone",7,2,3,2,4,2,1,1,2,1,2,0)
a[3]=new Tp("Er Pantera",7,2,3,2,9,10,1,2,0,1,1,2)
a[4]=new Tp("Urbe Tevere",7,1,3,3,3,6,1,2,1,0,1,2)
a[5]=new Tp("City Blinders",7,5,2,0,12,2,3,0,0,2,2,0)
a[6]=new Tp("__________TOTALE",35,11,14,10,34,30,"-","-","-","-","-","-")

var arrSquadra34bis=new Array()
a = arrSquadra34bis
a[1]=new Tp_bis(35,"A-Lazie/Urbe Tevere",.85,"City Blinders",2.42)
