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

var arrSquadra6=new Array()
a = arrSquadra6
a[1]=new Tp("Paris San Gonzen",6,0,3,3,2,5,0,3,0,0,0,3)
a[2]=new Tp("__________TOTALE",39,0,3,3,2,5,"-","-","-","-","-","-")

var arrSquadra6bis=new Array()
a = arrSquadra6bis
a[1]=new Tp_bis(39,"Paris San Gonzen",.5,"Paris San Gonzen",.5)
