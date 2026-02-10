function Tpr(Nome,Totgiocate,Gen_V,Gen_N,Gen_P,Gf,Gs,Casa_V,Casa_N,Casa_P,Fuori_V,Fuori_N,Fuori_P) {
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

function Tpr_bis(TotPartite,BlackBeast,BB_mp,EasyRider,ER_mp) {
this.TotPartite = TotPartite
this.BlackBeast = BlackBeast
this.BB_mp = BB_mp
this.EasyRider = EasyRider
this.ER_mp = ER_mp
}

var arrPresidente21=new Array()
a = arrPresidente21
a[1]=new Tpr("Luca Di Simone",6,2,3,1,7,5,2,1,0,0,2,1)
a[2]=new Tpr("__________TOTALE",42,2,3,1,7,5,"-","-","-","-","-","-")

var arrPresidente21bis=new Array()
a = arrPresidente21bis
a[1]=new Tpr_bis(42,"Luca Di Simone",1.5,"Luca Di Simone",1.5)
