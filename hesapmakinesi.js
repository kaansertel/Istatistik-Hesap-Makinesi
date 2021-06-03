// Butonlar

function hesap() {
    var veri = document.getElementById("veriler");
    var metin = veri.value;
    var information = [];
    var index = 0;

    hesapla(metin, information, index);
    diziSirala(information);
    var total = aritmetikHesaplama(information);
    document.getElementById("text").innerHTML = "Aritmetik Ortalama: <font color='black'> " + total.toFixed(3) + "</font>!";
    ortalamaSapma(information);
    degisimKatsayisi(information);
    diziCiktisi(information);
    modHesaplama(information);
    medyanHesaplama(information);
    geometrikOrtalama(information);
    harmonikOrtalama(information);
    populasyonStandartSapmaVaryans(information);
    populasyonStandartSapma(information);
    standartSapmaVaryansı(information);
    standartSapma(information);
    veriAcikligi(information);

}
function faktoriyelButon(){
    var f = parseInt(document.getElementById("f").value);
    if (f < 0) {
        document.getElementById("text4").innerHTML = "Lütfen pozitif bir sayi giriniz!";
    } else{
        var sonuc = faktoriyel(f);
        document.getElementById("text4").innerHTML =  f + "! : <font color='red'> " + sonuc + "</font>";
    }
}

function permutasyonButon(){
    document.getElementById("text").innerHTML ="";
    document.getElementById("text2").innerHTML ="";
    document.getElementById("text3").innerHTML ="";
    
    var n = parseInt(document.getElementById("n").value);
    var r = parseInt(document.getElementById("r").value);

    if ( !(n < 0) && !(r < 0)) {
        if ( !(n==0)) {
            if (n < r) {
                document.getElementById("text2").innerHTML ="";
                document.getElementById("text3").innerHTML ="";
                document.getElementById("text").innerHTML = "Lütfen eleman sayısından <font color='red'> (n) </font> küçük bir seçim sayısı <font color='red'> (r) </font> sayısı giriniz !";
        
            }
            if (n >= r) {
                var nDegeri = faktoriyel(n);
                var rDegeri = faktoriyel((n-r));
                var sonuc = nDegeri / rDegeri;
                document.getElementById("text").innerHTML ="";
                document.getElementById("text3").innerHTML ="";
                document.getElementById("text2").innerHTML = "P(" + n + "," + r +"): <font color='red'> " + sonuc + "</font> !";
            }
        }else{
            document.getElementById("text").innerHTML ="";
            document.getElementById("text2").innerHTML ="";
            document.getElementById("text3").innerHTML = "Lütfen <font color='red'> geçerli  </font> bir sayı giriniz !";
        }
    
    } else{
        document.getElementById("text").innerHTML ="";
        document.getElementById("text2").innerHTML ="";
        document.getElementById("text3").innerHTML = "Lütfen <font color='red'> pozitif  </font> bir sayı giriniz !";
    }

}

function kombinasyonButon(){
    document.getElementById("text").innerHTML ="";
    document.getElementById("text2").innerHTML ="";
    document.getElementById("text3").innerHTML ="";

    var n = parseInt(document.getElementById("n").value);
    var r = parseInt(document.getElementById("r").value);
    
    if ( !(n < 0) && !(r < 0)) {
        if ( !(n==0) ) {
            if (n < r) {
                document.getElementById("text2").innerHTML ="";
                document.getElementById("text3").innerHTML ="";
                document.getElementById("text").innerHTML = "Lütfen eleman sayısından <font color='red'> (n) </font> küçük bir seçim sayısı <font color='red'> (r) </font> sayısı giriniz !";
        
            }
            if (n >= r) {
                var nDegeri = faktoriyel(n);
                var deger = faktoriyel(r);
                var rDegeri = faktoriyel((n-r));
                var sonuc = nDegeri / (deger * rDegeri);
                document.getElementById("text").innerHTML ="";
                document.getElementById("text3").innerHTML ="";
                document.getElementById("text2").innerHTML = "C(" + n + "," + r +"): <font color='red'> " + sonuc + "</font> !";
            }
        }else{
            document.getElementById("text").innerHTML ="";
            document.getElementById("text2").innerHTML ="";
            document.getElementById("text3").innerHTML = "Lütfen <font color='red'> geçerli  </font> bir sayı giriniz !";
        }
    
    } else{
        document.getElementById("text").innerHTML ="";
        document.getElementById("text2").innerHTML ="";
        document.getElementById("text3").innerHTML = "Lütfen <font color='red'> pozitif  </font> bir sayı giriniz !";
    }
}

function aritmetikButon(){
    var veri = document.getElementById("veriler");
    var metin = veri.value;
    var information = [];
    var index = 0;

    hesapla(metin, information, index);
    diziSirala(information);
    let total = aritmetikHesaplama(information);
    
    document.getElementById("text").innerHTML = "Aritmetik Ortalama: <font color='black'> " + total + "</font>!";
    
}

function modHesaplamaButon(){
    var veri = document.getElementById("veriler");
    var metin = veri.value;
    var information = [];
    var index = 0;

    hesapla(metin, information, index);
    diziSirala(information);
    modHesaplama(information);
}

function medyanHesaplamaButon(){
    var veri = document.getElementById("veriler");
    var metin = veri.value;
    var information = [];
    var index = 0;

    hesapla(metin, information, index);
    diziSirala(information);
    medyanHesaplama(information);
}

function geometrikOrtalamaButon(){
    var veri = document.getElementById("veriler");
    var metin = veri.value;
    var information = [];
    var index = 0;

    hesapla(metin, information, index);
    diziSirala(information);
    geometrikOrtalama(information);
}

function harmonikOrtalamaButon(){
    var veri = document.getElementById("veriler");
    var metin = veri.value;
    var information = [];
    var index = 0;

    hesapla(metin, information, index);
    diziSirala(information);
    harmonikOrtalama(information);
}

function standartSapmaButon(){
    var veri = document.getElementById("veriler");
    var metin = veri.value;
    var information = [];
    var index = 0;

    hesapla(metin, information, index);
    diziSirala(information);
    standartSapma(information);
}

function standartSapmaVaryansıButon(){
    var veri = document.getElementById("veriler");
    var metin = veri.value;
    var information = [];
    var index = 0;

    hesapla(metin, information, index);
    diziSirala(information);
    standartSapmaVaryansı(information);
}
function populasyonStandartSapmaButon(){
    var veri = document.getElementById("veriler");
    var metin = veri.value;
    var information = [];
    var index = 0;

    hesapla(metin, information, index);
    diziSirala(information);
    populasyonStandartSapma(information);
}

function populasyonStandartSapmaVaryansButon(){
    var veri = document.getElementById("veriler");
    var metin = veri.value;
    var information = [];
    var index = 0;

    hesapla(metin, information, index);
    diziSirala(information);
    populasyonStandartSapmaVaryans(information);
}


function veriAcikligiButon(){
    var veri = document.getElementById("veriler");
    var metin = veri.value;
    var information = [];
    var index = 0;

    hesapla(metin, information, index);
    diziSirala(information);
    veriAcikligi(information);
}

function korelasyonbuton(){
    var xString = document.getElementById("x").value;
    var yString = document.getElementById("y").value;
    korelasyon(xString,yString);
}

function regresyonbuton(){
    var xString = document.getElementById("x").value;
    var yString = document.getElementById("y").value;
    regresyon(xString,yString);
}

function daireselPermutasyonButon(){
    var pf = parseInt(document.getElementById("pf").value);
    if (pf <= 0) {
        document.getElementById("text5").innerHTML = "Lütfen pozitif bir sayi giriniz!";
    } else{
        var sonuc = faktoriyel(pf-1);
        document.getElementById("text5").innerHTML =  pf + " Sayısının dairesel permutasyonu : <font color='red'> " + sonuc + "</font>";
    }
}

function tekrarliKombinasyon(){
    var n = parseInt(document.getElementById("n2").value);
    var r = parseInt(document.getElementById("r2").value);
    
    if ( !(n < 0) && !(r < 0)) {
        if ( !(n==0) ) {
            if (n < r) {

                document.getElementById("text6").innerHTML = "Lütfen eleman sayısından <font color='red'> (n) </font> küçük bir seçim sayısı <font color='red'> (r) </font> sayısı giriniz !";
        
            }
            if (n >= r) {
                var sonuc = faktoriyel(n-1+r) / (faktoriyel(r) * faktoriyel(n-1));
                var degisken = n+r-1;

                document.getElementById("text6").innerHTML = "Tekrarlı Kombinasyon Sonucu: <font color='red'> " + sonuc + "</font> !";
            }
        }else{

            document.getElementById("text6").innerHTML = "Lütfen <font color='red'> geçerli  </font> bir sayı giriniz !";
        }
    
    } else{
        document.getElementById("text6").innerHTML = "Lütfen <font color='red'> pozitif  </font> bir sayı giriniz !";
    }
}


// Fonksiyonlar

function hesapla(metin, information, index) {

    for (let i = 0; i < metin.length; i++) {

        if (metin.charAt(i) == ",") {
            information.push(Number(metin.substring(index, i)));
            index = i + 1;
        }
    }
}

function diziSirala(information) {
    var temp;
    for (let i = 0; i < information.length - 1; i++) {
        for (let j = i + 1; j < information.length; j++) {
            if (information[i] > information[j]) {
                temp = information[i];
                information[i] = information[j];
                information[j] = temp;
            }

        }

    }

}

function aritmetikHesaplama(information){
    var toplam = 0;
    for (let i = 0; i < information.length; i++) {
        toplam += information[i];

        
    }
    
    var sonuc = (toplam / information.length); 
    return sonuc;


}

function modHesaplama(information){
    let mod = 0;
    let modVal = [];
    let tempVal = [];
    let maxVal = 0;
    var tekrar= [];
    var say = 0;
    let referansDeger = -9999999999565675757659;
    modVal.push(referansDeger);
    for (let i = 0; i < information.length; i++) {
        let counter = 0;
        for (let j = 0; j < information.length; j++) {
            if (information[i] == information[j]) {
                counter++;
            }
        }
        if (counter == maxVal && !(counter == 1))  {
            maxVal = counter;
            if (!(modVal[say] == information[i])) {
                modVal.push(information[i]); 
                say++;   
            }   
        }
        if (counter > maxVal && !(counter == 1))  {
            maxVal = counter;
            let uzunluk = (modVal.length - 1); 
            for (let i = 0; i < uzunluk; i++) {
                modVal.pop();
            }
            if (!(modVal[say] == information[i])) {
                modVal.push(information[i]); 
                say++;   
            }   
        }
    }
    // Dizide tekrar eden elemanları silme
    for (let i = 0; i < modVal.length; i++) {
        for (let j = i + 1; j < modVal.length;) {
            if (modVal[j] == modVal[i]) {
                for (let k = j; k < modVal.length; k++) {
                    modVal[k] = modVal[k + 1];
                }
                modVal.length--;
            }else{
                j++;
            }  
        }
        
    }

    for (let k = 0; k < modVal.length; k++) {
        if ( !(modVal[k] == referansDeger)) {
            tekrar.push(String(modVal[k]));
        }
    }
    
    if (maxVal == 0) {
        document.getElementById("text2").innerHTML = "<font color='black'> Tepe değer bulunamadı!!!</font>";

    }else{
        document.getElementById("text2").innerHTML = "Tepe Değer: <font color='black'> " + tekrar + "</font>" + " Frekans: <font color='black'> " + maxVal + "</font>" ;

    }
}

function medyanHesaplama(information){
    let medyan;
    let dizi_uzunlugu = information.length;
    if (dizi_uzunlugu % 2 == 1) {
        let tekSayidaEleman = (dizi_uzunlugu + 1) / 2 ;
        medyan = information[tekSayidaEleman - 1];
        document.getElementById("text3").innerHTML = "Medyan: <font color='black'> " + medyan + "</font>!";

    }
    else {
        let ciftSayidanEleman = dizi_uzunlugu / 2 ;
        medyan = (information[parseInt(ciftSayidanEleman) - 1] + information[parseInt(ciftSayidanEleman)]) / 2;
        document.getElementById("text3").innerHTML = "Medyan: <font color='black'> " + medyan + "</font>!";

    }
}

function geometrikOrtalama(information){
    let geometrikOrt = 1;
    for (let i = 0; i < information.length; i++) {
        geometrikOrt *= information[i];
        
    }
    geometrikOrt = Math.pow(geometrikOrt,(1/information.length));
    if (geometrikOrt > 0) {
        document.getElementById("text4").innerHTML = "Geometrik Ortalama: <font color='black'> " + geometrikOrt.toFixed(3) + "</font>!";
    }else {
        document.getElementById("text4").innerHTML = "Geometrik ort:<font color='black'> hesaplanamadı</font>, kökün içi negatif.";
    }
}

function harmonikOrtalama(information){
    let harmonikOrt = 0.0;
    for (let i = 0; i < information.length; i++) {
        harmonikOrt = harmonikOrt + 1.0 / information[i];
        
    }
    harmonikOrt = information.length / harmonikOrt;
    document.getElementById("text5").innerHTML = "Harmonik Ortalama: <font color='black'> " + harmonikOrt.toFixed(3) + "</font>!";


}
//Popülasyonun standart sapmasının varyansı
function populasyonStandartSapmaVaryans(information){
    let sum = 0.0;
    let sapma = 0.0;
    sum = aritmetikHesaplama(information);

    for (let i = 0; i < information.length; i++) {
        sapma += Math.pow(information[i] - sum,2);
    }
    let stndrtSapma = sapma / information.length;
    document.getElementById("text9").innerHTML = "Popülasyonun varyansı (σ<sup>2</sup>): <font color='black'> " + stndrtSapma.toFixed(3) + "</font>!";
}

function populasyonStandartSapma(information){
    let sum = 0.0;
    let sapma = 0.0;
    sum = aritmetikHesaplama(information);

    for (let i = 0; i < information.length; i++) {
        sapma += Math.pow(information[i] - sum,2);
    }
    let stndrtSapma = Math.sqrt(sapma / information.length);
    document.getElementById("text8").innerHTML = "Popülasyonun standart sapması (σ): <font color='black'> " + stndrtSapma.toFixed(3) + "</font>!";
}

function standartSapmaVaryansı(information){
    let sum = 0.0;
    let sapma = 0.0;
    sum = aritmetikHesaplama(information);

    for (let i = 0; i < information.length; i++) {
        sapma += Math.pow(information[i] - sum,2);
    }
    let stndrtSapma = sapma / (information.length - 1);
    document.getElementById("text7").innerHTML = "Varyansı (s<sup>2</sup>): <font color='black'> " + stndrtSapma.toFixed(3) + "</font>!";

}

function standartSapma(information){
    let sum = 0.0;
    let sapma = 0.0;
    sum = aritmetikHesaplama(information);

    for (let i = 0; i < information.length; i++) {
        sapma += Math.pow(information[i] - sum,2);
    }
    let stndrtSapma = Math.sqrt(sapma / ( information.length - 1) );
    document.getElementById("text6").innerHTML = "Standart Sapması (s): <font color='black'> " + stndrtSapma.toFixed(3) + "</font>!";

}

function veriAcikligi(information){
    let sonDegerIndex = information.length - 1;
    let aciklik = information[sonDegerIndex] - information[0];
    document.getElementById("text10").innerHTML = "Veri Açıklığı: <font color='black'> " + aciklik + "</font>!";
}

function faktoriyel(n){
    var sonuc = 1;
    for (let i = 2; i <= n; i++) {
        sonuc =  sonuc * i;
        
    }
    return sonuc;

}

function korelasyon(x,y){
    var yArray = y.split(',');
    var xArray = x.split(',');

    let XcarpimY = 0, toplam = 0, toplamsayi = 0, toplamsayi2 = 0, carpim = 0, pay = 0,
        sqrtXtoplam = 0, sqrtToplamX = 0, eleman = 0,
        sqrtYtoplam = 0, sqrtToplamY = 0, eleman2 = 0, payda = 0,
        korelasyon = 0, tempSonuc = 0, tempSonuc2 = 0;

    if (xArray.length >= 3 && yArray.length >= 3) {
        if ( (xArray.length == yArray.length)) {
            for (let i = 0; i < xArray.length; i++) {
                XcarpimY = Number(xArray[i]) * Number(yArray[i]);
                toplam += XcarpimY;
                toplamsayi2 += Number(yArray[i]);
                toplamsayi += Number(xArray[i]);
                carpim = (toplamsayi * toplamsayi2) / xArray.length;
                pay = toplam - carpim;
                sqrtXtoplam += Number(xArray[i]) * Number(xArray[i]);
                sqrtToplamX = Math.pow(toplamsayi,2);
                tempSonuc = (sqrtToplamX / xArray.length);
                eleman = (sqrtXtoplam - tempSonuc);
                sqrtYtoplam += Number(yArray[i]) * Number(yArray[i]);
                sqrtToplamY = Math.pow(toplamsayi2,2);
                tempSonuc2 = (sqrtToplamY / yArray.length);
                eleman2 = (sqrtYtoplam - tempSonuc2);
                payda = Math.sqrt(eleman * eleman2);
                korelasyon = (pay / payda);
            } 
            document.getElementById("text").innerHTML = "Korelasyon katsayısı (<font color='red'>r</font>): <font color='red'> " + korelasyon + "</font>!";
    
        } else {
            document.getElementById("text").innerHTML = "<font color='red'> X </font> ve <font color='red'> Y</font>'nin eleman sayısı aynı olmalıdır.";
        }
    } else {
        document.getElementById("text").innerHTML = "En az <font color='red'> 3 </font> eleman girmelisiniz! ";
    }

}

function regresyon(x,y){
    var xArray = x.split(',');
    var yArray = y.split(',');
    
    let carpma = 0, toplam = 0, toplamsayi = 0, toplamsayi2 = 0, pay = 0,
        sqrtX = 0, sqrtXtoplam = 0, sqrtToplamX = 0, eleman = 0,
        payda = 0, pay2 = 0, payda2= 0, eleman2 = 0, step= 0, step2 = 0;


    if (xArray.length >= 2 && yArray.length >= 2) {
        if ((xArray.length == yArray.length)) {
            for (let i = 0; i < xArray.length; i++) {
                toplamsayi2 += Number(yArray[i]);
                sqrtXtoplam  += Number(xArray[i]) * Number(xArray[i]);
                eleman = toplamsayi2 * sqrtXtoplam;
                toplamsayi  += Number(xArray[i]);
                carpma = Number(xArray[i]) * Number(yArray[i]);
                toplam += carpma;
                eleman2 = toplam * toplamsayi;
                pay = eleman - eleman2;
                sqrtToplamX = Math.pow(toplamsayi,2);
                payda = (xArray.length * sqrtXtoplam) - (sqrtToplamX);
                step = (pay / payda);
                pay2 = (xArray.length * toplam) - (toplamsayi * toplamsayi2);
                payda2 = (xArray.length * sqrtXtoplam) - (sqrtToplamX);
                step2 = (pay2 / payda2);
    
            }
            document.getElementById("text").innerHTML = "y = " + step.toFixed(2) + " + (" + step2.toFixed(2) + ") x" ;
        } else {
            document.getElementById("text").innerHTML = "<font color='red'> X </font> ve <font color='red'> Y</font>'nin eleman sayısı aynı olmalıdır.";
        }
    } else {
        document.getElementById("text").innerHTML = "En az <font color='red'> 2 </font> eleman girmelisiniz! ";
    }

}

function ortalamaSapma(information){
    var ortalama = aritmetikHesaplama(information);
    var toplam = 0;
    var sonuc = 0;

    for (let i = 0; i < information.length; i++) {
        toplam += Math.abs((Number(information[i]))- ortalama);
    }
    sonuc = (toplam/information.length).toFixed(3);
    document.getElementById("text11").innerHTML = "Ortalama Sapma: <font color='black'>" + sonuc + "</font>!";
}

function degisimKatsayisi(information){
    let sum = 0.0;
    let sapma = 0.0;
    sum = aritmetikHesaplama(information);

    for (let i = 0; i < information.length; i++) {
        sapma += Math.pow(information[i] - sum,2);
    }
    let stndrtSapma = Math.sqrt(sapma / ( information.length - 1) );
    sonuc = (stndrtSapma / sum * 100 ).toFixed(3);
    document.getElementById("text12").innerHTML = "Degişim Katsayısı: <font color='black'>" + sonuc + "</font>!";
}

function diziCiktisi(information){
    var elemanSayisi = information.length;
    var min = information[0];
    var max = information[elemanSayisi-1];

    document.getElementById("text13").innerHTML = "Eleman Sayısı: <font color='black'>" + elemanSayisi + "  &nbsp </font> Min Değer:<font color='black'> " + min + "  &nbsp </font> Max Değer: <font color='black'>" + max + "</font>";
}