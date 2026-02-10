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

var arrSquadra4=new Array()
a = arrSquadra4
a[1]=new Tp("ISDA i due porri",6,1,3,2,5,7,1,2,0,0,1,2)
a[2]=new Tp("__________TOTALE",40,1,3,2,5,7,"-","-","-","-","-","-")

var arrSquadra4bis=new Array()
a = arrSquadra4bis
a[1]=new Tp_bis(40,"ISDA i due porri",1,"ISDA i due porri",1)
