console.log('-------------------LOOPS BASIC-------------------');
console.log('-----1.A-----');
var a = 5;
var b = 6;
var c = 7;
var suma;
suma = a+b+c;
console.log(a, b, c);
console.log('suma=', suma);

console.log('-----1.B-----');

var str1 = '';
var str2 = '';

str1 += a;
str1 += b;
str1 += c;

str2 = String(a)+String(b)+String(c);

console.log(str1);
console.log(str2);

console.log('-----1.C-----');

var str3 = '';

str3 = String(a) + String(' ') + String(b) + String(' ')+ String(c);

console.log(str3);

console.log('-----1.D-----');
var str4 = str3 + ' ' + suma;

console.log(str4);
//----------------------------------------------------------------
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
//----------------------------------------------------------------

console.log('-----2.-----');

var sk2 = rand(5, 10);
console.log(sk2);

console.log('-----3.-----');

var str33 = 'Labas';
var i = 0;

// while (i<5 ) {
//     console.log(str33);  <--------- netinkamas ciklas
//     i++;
for (var i=0; i<5; i++) {
    console.log(str33);
    
}
console.log('-----4.-----');
// Pasinaudojus ciklu ir ir console.log atspauzdinkite kintamąjį 
// iš 2 uždavinio 7 kartus;

for (var i=0; i<7; i++) {
    console.log(sk2);
    
}
console.log('-----5.-----');
// Pasinaudojus ciklu ir ir console.log atspauzdinkite kintamąjį 
// iš 2 uždavinio tiek kartų, koks skaičius yra sugeneruotas;

for (var i=0; i<sk2; i++) {
    console.log(sk2);

}
console.log('-----6.-----');
// Pasinaudojus ciklu ir ir console.log atspauzdinkite kintamąjį
//  iš 2 uždavinio tiek kartų, koks skaičius yra sugeneruotas, 
//  bet tik tada jeigu jis didesnis už 7;

if (sk2>=7) {

    for (var i=0; i<sk2; i++) {
        console.log(sk2);
    
    }
    
} else {
    console.log('mazesnis nei 7');
}
console.log('-----7.-----');
// Sukurkite kintamąjį už ciklo ribų. Ciklo viduje generuokite atsitiktinius skaičius funkcija
// rand(), kurie yra iš intervalo 10...20. Ciklą kartokite 5 kartus;
var sk7;
var sk8b = 0;
sk8c = '';
 

for (i = 0; i<5; i++) {
    sk7 = rand(10, 20);
    console.log(sk7);
    sk8b+=sk7;
    sk8c+=' ';
    sk8c+=sk7;


}
console.log('-----7A.-----');
// Ciklo viduje sugeneruotą reikšmę priskirkite kintamajam, kurį sukūrėte užciklo
// ribų ir jį atspauzdinkite;

console.log(sk7);

console.log('-----7B.-----');
// Skaičiuokite cikloviduje generuojamų reikšmiųsumą, ją priskirdami kintamajam,
// kurį sukūrėte už ciklo ribų. Rezultatą atspauzdinkite pasinaudodami console.log
// už ciklo ribų;

console.log(sk8b);

console.log('-----7C.-----');
// Skaičius,generuojamus ciklo viduje dėkite į stringo tipokintamąjįtarpskaičių
// darydami tarpą. Stringo tipo kintamąjį atspazdinkite už ciklo ribų jam pasibaigus;

console.log(sk8c);

console.log('-----7D.-----');
// Skaičius, generuojamus ciklo viduje dėkite į stringo tipo kintamąjį tar pskaičių
// darydami tarpą. Ciklui pasibaigus prie stringo tipo kintamojo pridėkite 
// ciklo viduje generuotų skaičių sumą, paskaičiuotą kaip B dalyje. 
// Stringo tipo kintamąjį atspazdinkite pasinaudodami console.log;

var sk8d;
 sk8d = sk8c + " " + String(sk8b);
 console.log(sk8d);

 console.log('-----8-----');
//  Sukurkite kintamąjį (jeigu reikia kelis kintamuosius) už ciklo ribų. 
//  Sukurkite kintamąjį už ciklo ribų. Ciklo viduje generuokite atsitiktinius skaičius funkcija rand(), 
//  kurie yra iš intervalo 10...25. Ciklą kartokite tol, 
//  kol ciklo viduje bus sugeneruotas skaičius mažesnis nei 12;

var kin81 ;
var i = 0;
var suma = 0;
var didesni = 0;
var i8d = 0;
var i8d2 = 0;
var lyg = 0;
var nelyg = 0;

do {
    a8 = rand(10, 25)
    i = ++i;

if (a8 <= 18) {
    
    suma += a8;
i8d = ++i8d;

} else {
    didesni += a8;
i8d2 = ++i8d2;
}

if (a8%2 === 0) {
    lyg = ++lyg;
} else {
    nelyg = ++nelyg;
}


    console.log(a8);
} while (a8 > 12);

console.log('-----8A-----');
// Ciklo viduje sugeneruotą reikšmę priskirkite kintamajam, kurį sukūrėte už ciklo ribų
//  ir jį atspauzdinkite;


kin81 = a8;
console.log('kin81 = ', kin81);

console.log('-----8B-----');
// Suskaičiuokite kiek iteracijų padarėte ir jų kiekį atspauzdinkite pasinaudodami
// console.log už ciklo ribų jam pasibaigus;
console.log('iteraciju kiekis: ',i);

console.log('-----8C-----');
// Skaičiuokite ciklo viduje generuojamų reikšmių sumą, atmesdami (neskaičiuodami) skaičius, 
// kurie yra didesni nei 18, ją priskirdami kintamajam, kurį sukūrėte už ciklo ribų. 
// Rezultatą atspauzdinkite pasinaudodami console.log už ciklo ribų;

console.log('iki 18 suma = ', suma);
console.log('didesni nei 18 suma = ', didesni);

console.log('-----8D-----');
// Suma ̨skaičiuokite kaip B dalyje,bet papildomai susikurkite kintamąjį, kuriame
// suskaičiuokite kiek reikšmių atmetėte (nesumavote) .Rezultatą su suma ir
// atmestų reikšmių kiekiu atspauzdinkite pasinaudodami console.log už ciklo ribų;

console.log('iteraciju suma = ', i8d);
console.log('atmestu iteraciju suma', i8d2);

console.log('-----8D-----');

// Suskaičiuokite kiek tarp cikle atsitiktinai generuojamų reikšmių yra lyginių ir kiek
// nelyginių skaičių. Rezultatą atspauzdinkite pasinaudodami console.log už ciklo
// ribų jam pasibaigus.

console.log('lyginiai=', lyg);
console.log('nelyginiai=', nelyg);

console.log('-----9-----');
// Ciklo viduje generuokite atsitiktinius skaičius funkcija rand(), kurie yra iš intervalo 5-10.
// Ciklą kartokite tol, kol ciklo viduje bus sugeneruotas skaičius 5;


var kin9;
var i = 0;
var ivid = 0;
var sukimai = 0;
do {
    kin9 = rand(5, 10)
    console.log(kin9);
    i = ++i;
ivid = 0;
    // do {
    //     ivid = ivid++;
    //     sukimai = sukimai++;
    // } while (sukimai < kin9);


} while (kin9 !=5);

console.log('-----9A-----');
// Ciklo viduje paleiskite dar vieną ciklą kurį kartokite tiek kartų,koks skaičius buvo
// sugeneruotas. Paskaičiuokite kiek iteracijų padarė išorinis ciklas 
// ir kiek bendrai iteracijų padarė vidinis ciklas. 
// Rezultatus atspauzdinkite pasinaudodami console.log 
// už ciklo ribų jam pasibaigus;
console.log('iteracijos', i);
console.log('vid. iteracijos', sukimai);
console.log('-----------PADARYTAS APACIOJ-------------------');

console.log('-----9B-----');
// Padarykite taip, kad išorinis ciklas pasibaigtų kai 5 yra sugeneruojamas ne pirmą, 
// bet trečią kartą ir paskaičiuokite iteracijas analogiškai kaip A dalyje;

var kin9;
var i = 0;
for (let index = 0; index < 3; index++) {
    do {
        kin9 = rand(5, 10)
        console.log(kin9);
        i = ++i;
    
    
    } while (kin9 !=5);
    
}
console.log('iteracijos', i);

console.log('-----10-----');
// Kazys ir Petras žaidžiai bingo. Petras per vieną partiją surenka taškų kiekį nuo 10 iki 20, 
// Kazys - surenka taškų kiekį nuo 5 iki 25. Console.log išvesti žaidėjų vardus su taškų kiekiu 
// ir “Partiją laimėjo: laimėtojo vardas”. Taškų kiekį generuokite funkcija rand(). 
// Žaidimą laimi tas, kas greičiau surenka 222 taškus. Partijas kartokite tol, 
// kol kažkuris žaidėjas pirmas surenks 222 arba daugiau taškų.

var kinp = rand(10, 20);
var kink = rand(5, 25);
var sump = 0;
var sumk = 0;

console.log('Kazys', kink);
console.log('Petras', kinp);




do { 
    kinp = rand(10, 20);

    // console.log('Petras', kinp);

   sump +=kinp;
    kink = rand(5, 25);
    // console.log('Kazys', kink);
    sumk +=kink;
    
} while (sump < 222 && sumk < 222);

console.log('Kazio taskai', sumk);
console.log('Petro taskai', sump);

if (sump>sumk) {
    console.log('Laimejo petras');
}
else{
    console.log('Laimejo kazys');
}

console.log('-------------------------------------------------------');

var rand9;
var i = 0;
var ivid = 0;
var sukimai = 0;
do {
    rand9 = rand(5, 10);
    console.log(rand9);
    i = ++i;

ivid = 0;

for (ivid = 0; ivid < rand9; ivid++) {
    console.log('vidinis sukasi');
    // sukimai = sukimai + rand9;
    
}
sukimai = sukimai + rand9;
    // do {
    //     ivid = ivid++;
        
    // } while (ivid < rand9);
    // sukimai = sukimai+ ivid;

} while (rand9 !=5);

console.log('isoriniai ciklai= ', i);
console.log('vidiniai ciklai= ', sukimai);