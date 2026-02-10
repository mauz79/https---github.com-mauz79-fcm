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

var arrSquadra2=new Array()
a = arrSquadra2
a[1]=new Tp("Milfhunters",6,2,3,1,7,5,2,1,0,0,2,1)
a[2]=new Tp("__________TOTALE",40,2,3,1,7,5,"-","-","-","-","-","-")

var arrSquadra2bis=new Array()
a = arrSquadra2bis
a[1]=new Tp_bis(40,"Milfhunters",1.5,"Milfhunters",1.5)
