function paliwocena(){
    let ilosc = document.getElementById("Paliwo").value;
    let Paliwo=0
    let rodzaj=document.getElementById("rodzaj")
    if(rodzaj=="Benzyna"){
        cena=ilosc*6.65;
        document.getElementById("zaplata").value=cena1;
    }else{
        cena2=ilosc*7.10
        document.getElementById("zaplata").value=cena2;
    }
}