var gelen = document.querySelector("input");
var goster = document.querySelector("p");

var sayi, harf, donustur;
var liste=[];

function sifredegistir(){

    for(var i=0; i<10; i++){
        sayi= (Math.random()*91);
        goster.innerHTML=sayi;

       // liste[i]=sayi;
       if(sayi <65){
        sayi=Math.round(Math.random()*25+65);
        harf = String.fromCharCode(sayi);

       }
        harf = String.fromCharCode(sayi);

        liste[i]= harf;

        goster.innerHTML=liste;
    }

    donustur= liste.join("");
    goster.innerHTML= donustur;

}



function kontrolet(){
    var kontrol= gelen.value;

    if(kontrol == donustur){
        alert("sifre dogru...");
    }else{
        alert("sifre yanlıs...");
        sifredegistir();
    }
}

sifredegistir();