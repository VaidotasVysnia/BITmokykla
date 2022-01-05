function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
































// console.log('----------------NR1------------------');

// var kin1 = rand(0, 4);
// var kin2 = rand(0, 4);

// console.log(kin1);
// console.log(kin2);

// if (kin1 < kin2 || kin1 != 0){
//     ats = kin2/kin1;
//     console.log('Ats= ', ats);
// }
// else if (kin1 > kin2 || kin2 !=0){
//     ats = kin1/kin2;
//     console.log('Ats= ', ats);
// }
// else {
//     console.log('Kintamieji lyguss');
// }

// console.log('----------------NR2------------------');
// //Naudokite funkcija rand(). Sukurkite tris kintamuosius ir 
// //naudodamiesi funkcija rand() jiems priskirkite atsitiktines reikšmes nuo 0 iki 25. 
// //Raskite ir su console.log() 
// //atspausdinkite kintąmąjį turintį vidurinę reikšmę.

// var kin1 = rand(0, 25);
// var kin2 = rand(0, 25);
// var kin3 = rand(0, 25);
// console.log(kin1, kin2, kin3);

// if (kin1 > kin2 && kin1 > kin3) {
//      console.log('didziausia reiksme = ', kin1)}

// else if(kin2 > kin1 && kin2 >kin3) {
//     console.log('didziausia reiksme = ', kin2)}
// else {
//     console.log('didziausia reiksme = ', kin3)
// };

// console.log('----------------NR3------------------');

// // Įvedami skaičiai -a, b, c –kraštinių ilgiai, trys kintamieji 
// // (naudokite rand() funkcija nuo 1 iki 10). 
// // Parašykite skriptą, kuris nustatytų, 
// // ar galima sudaryti trikampį ir atsakymą atspausdintų naudojant console.log().

// var a = rand(1, 10);
// var b = rand(1, 10);
// var c = rand(1, 10);
// console.log(a, b, c);

// if (a+b >c && a+c >b && b+c >a){
//     console.log('galima sudaryti trikampi');
// }
// else{
//     console.log('negalima sudaryti trikampio');
// };

// console.log('----------------NR4------------------');
// // Sukurkiteke keturis kintamuosius ir rand()funkcija sugeneruokite 
// // jiems reikšmes nuo 0 iki 2. Suskaičiuokite kiek yra nulių, vienetų ir dvejetų. 
// // Rezultatus atspauzdinkite su console.log()

// var k1 = rand(0, 2);
// var k2 = rand(0, 2);
// var k3 = rand(0, 2);
// var k4 = rand(0, 2);
// var nuliai = 0;
// var vienetai = 0;
// var dvejetai = 0;
// console.log(k1, k2, k3, k4);

// if (k1 === 0 ){
//     nuliai = 1;
// }
// else if (k1 === 1 ){
//     vienetai = 1
// }
// else if (k1 === 2){
//     dvejetai = 1
// };
// // --------------------------------------
// if (k2 === 0 ){
//     nuliai+=1
// }
// else if (k2 === 1 ){
//     vienetai+=1
// }
// else{
//     dvejetai+=1
// };
// // -----------------------------------
// if (k3 === 0 ){
//     nuliai+=1
// }
// else if (k3 === 1 ){
//     vienetai+=1
// }
// else if (k3 === 2){
//     dvejetai+=1
// };
// //--------------------------------
// if (k4 === 0 ){
//     nuliai+=1
// }
// else if (k4 === 1 ){
//     vienetai+=1
// }
// else if (k4 === 2){
//     dvejetai+=1
// };

// console.log('nuliai=', nuliai);
// console.log('vienetai=', vienetai);
// console.log('dvejetai=', dvejetai);

// console.log('----------------NR5------------------');
// // Naudokite funkcija rand(). Atspausdinkite 3 skaičius naudodami console.log() nuo -10 iki 10. 
// // Prie skaičių mažesnių už 0 iš abiejų pusių atspauzdinkite “+” simbolius, didesnių už 0 iš abiejų pusių
// // atspauzdinkite “-” simbolius, o prie 0 “*” simbolius

// var sk1 = rand(-10, 10);
// var sk2 = rand(-10, 10);
// var sk3 = rand(-10, 10);
// console.log(sk1, sk2, sk3);

// if (sk1 < 0){
//     console.log('+',sk1,'+');
// }
// else if (sk1 > 0){
//     console.log('-', sk1, '-');
// }
// else {
//     console.log('*', sk1, '*');
// }
// // -------------------------------
// if (sk2 < 0){
//     console.log('+',sk2,'+');
// }
// else if (sk2 > 0){
//     console.log('-', sk2, '-');
// }
// else {
//     console.log('*', sk2, '*');
// }
// // --------------------------------
// if (sk3 < 0){
//     console.log('+',sk3,'+');
// }
// else if (sk3 > 0){
//     console.log('-', sk3, '-');
// }
// else {
//     console.log('*', sk3, '*');
// }

// console.log('----------------NR6------------------');
// // Įmonė parduoda žvakes po 1EUR. Perkant daugiau kaip už 1000EUR
// // taikoma 3 % nuolaida, daugiau kaip už 2000 EUR - 4 % nuolaida. 
// // Parašykite skriptą, kuri skaičiuos žvakių kainą ir atspausdintų atsakymą su console.log() 
// // kiek žvakių ir kokia kaina perkama. 
// // Žvakių kiekį generuokite rand() funkcija nuo 5 iki 3000.

// var kna = 1;
// var uzs = rand(5, 3000);

//  if (uzs < 1001){
//      console.log('perkamas kiekis=', uzs);
//      console.log('vieneto kaina = ', kna, 'eur');
//  }
//  else if (uzs >1000 && uzs < 2001){
//     kna= kna*0.97
//      console.log('perkamas kiekis= ', uzs);
//      console.log('vieneto kaina=', kna, 'eur');
//  }
//  else {
//     kna= kna*0.96
//     console.log('perkamas kiekis= ', uzs);
//     console.log('vieneto kaina=', kna, 'eur');
//  }

//  console.log('----------------NR7------------------');
// //  Naudokite funkcija rand(). Sukurkite tris kintamuosius su atsitiktinėm reikšmėm nuo 0 iki 100. 
// //  Paskaičiuokite jų aritmetinį vidurkį. Ir aritmetinį vidurkį atmetus tas reikšmes, 
// //  kurios yra mažesnės nei 10 arba didesnės nei 90. Abu vidurkius atspausdinkite su console.log()

// var knt1 = rand(0, 100);
// var knt2 = rand(0, 100);
// var knt3 = rand(0, 100);



// var daliklis = 3;
// var vidurkis;

// console.log(knt1, knt2, knt3);
// vidurkis = (knt1 + knt2 + knt3)/daliklis;

// console.log('vidurkis', vidurkis);

// if (knt1 < 10 || knt1 >90){
//     knt1 = 0;
//     daliklis = daliklis - 1;
// };
// if (knt2 < 10 || knt2 >90){
//     knt2 = 0;
//     daliklis = daliklis - 1;
// };
// if (knt3 < 10 || knt3 >90){
//     knt3 = 0;
//     daliklis = daliklis - 1;
// }
// vidurkis = (knt1 + knt2 + knt3)/daliklis;



// console.log('vidurkis', vidurkis);

















































