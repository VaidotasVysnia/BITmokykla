console.log("-----------ARRAY------------");

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


var komoda  = ['obuolys', 'suo', NaN, 'gyvate', 58,'plastikines geles'];

console.log(komoda);
console.log(typeof komoda);
console.log(komoda[2]);

// komoda[2]++;
console.log(komoda);
komoda[1] = 'anakonda';
console.log(komoda);

var trysKintamieji = [rand(1, 10), rand(1, 10), rand(1, 10), komoda];
console.log(trysKintamieji);

console.log('masyvo ilgis', komoda.length);
console.log('masyvo paskutinis stalcius:', komoda[komoda.length - 1]);
 
for (var index = 0; index < komoda.length; index++){
    console.log('stalcius Nr.', + index, komoda[index]);
}
console.log('--------------------------------');

var namas = ['PirmasA', 'AntrasA', 'TreciasA', 'KetvirtasA'];
namas[4] = 'stogas';
/--------------------------------------------------//
namas.push('dangus'); //prideda elementa i gala
namas.unshift('cokolis'); //prideda elementa i prieko
namas.shift(); // istraukia elementa is priekio
namas.pop(); // isima elementa is pabaigos
/--------------------------------------------------//


console.log();
console.log('push', namas.push('kosmosas'));

for (var index = 0; index <namas.length; index++){
    console.log('Aukstai:', index, namas[index]);
}

/--------------------------------------------//
console.log('-------------------------');

var tuscias = [];

for (var index = 0; index < 10; index++) {
  console.log(tuscias.push(rand(1, 10)));
}
console.log('pilnas= ', tuscias);

console.log(namas.indexOf('stogas')); //suranda kelintas yra tas elementas

console.log(namas);

namas.splice(3, 1); //nuo trecio elemento istrina viena elementa

console.log(namas);

var sk = [55, 33, 45, 67, 33, 87, 22, 33, 100];

var trinti;

console.log(sk);

while((trinti = sk.indexOf(33)) >= 0 ) {
    sk.splice(trinti, 1);
    
};
console.log(sk);

console.log('---------------------------------');

var namas = ['Garazas', 'ParmasA', 'AntrasA', 3, 'KatvirtasA', 'PenktasA'];

var trecasA = ['butas301', 'butas302', 'butas303'];

namas [3]  = trecasA;

for (let index = 0; index < namas.length; index++) {
    console.log(namas[index]);
    
}

console.log(namas.push());
var tuscarr = [];

for (let index = 0; index < 10; index++) {
    tuscarr.push(rand(1, 10));
    
}
console.log(tuscarr);

console.log('------------ Array uzdaviniai---------------------');
console.log('-- 1 --');
var uzd1 = [];

for (let index = 0; index < 30; index++) {
    uzd1.push(rand(5, 25))
    
}
console.log(uzd1);
// //////////////////////////////////////////////////////////////
console.log('-- 2a --');

var uzd2a = 0;

for (let index = 0; index < uzd1.length; index++) {
    if (uzd1[index] >10) {
        uzd2a++
    }
    
}
console.log('didesni uz 10:', uzd2a);
// //////////////////////////////////////////////////////////////
console.log('-- 2b --');

var uzd2b = 0;

for (let index = 0; index < uzd1.length; index++) {
    if (uzd2b < uzd1[index]) {
        uzd2b = uzd1[index]
    }
}
console.log(uzd2b);
// //////////////////////////////////////////////////////////////
console.log('-- 2c --');
var uzd2csuma = 0
var uzd2ccount = 0
for (let index = 0; index < uzd1.length; index++) {
    if (uzd1[index]%2 == 0) {
        uzd2csuma += uzd1[index];
        
    }
    
}
console.log(uzd2csuma);
// //////////////////////////////////////////////////////////////
console.log('-- 2d --');

var arr2d = [];

for (let index = 0; index < uzd1.length; index++) {
    arr2d.push(uzd1[index] - index)
    
}
console.log(arr2d);

// //////////////////////////////////////////////////////////////
console.log('-- 2e --');


for (let index = 0; index < 10; index++) {
    uzd1.push(rand(5, 25));
    
}
console.log(uzd1);
console.log(uzd1.length);

// //////////////////////////////////////////////////////////////
console.log('-- 2f --');

// Iš masyvo elementų sukurkite du naujus masyvus. Vienas turi būti
// sudarytas iš neporinių indekso reikšmių, o kitas iš porinių;

var arr2f1 = [];
var arr2f2 = [];

for (let index = 0; index < uzd1.length; index++) {
    if (uzd1[index]%2 == 0) {
        arr2f2.push(uzd1[index])
    } else {
        arr2f1.push(uzd1[index])
    };
    
}
console.log('Neporiniai: ', arr2f1);
console.log('Poriniai: ', arr2f2);

// //////////////////////////////////////////////////////////////
console.log('-- 2g --');

// Pirminiomasyvoelementussuporiniaisindeksaispadarykitelygius0
// jeigu jie didesni už 15;

for (let index = 0; index < arr2f2.length; index++) {
    if (arr2f2[index] > 15) {
        arr2f2[index] = 0;
    }
    
}
console.log(arr2f2);

// Suraskite pirmą (mažiausią) indeksą, kurio elemento reikšmė didesnė
// už 10;


var raides =[];
for (let index = 0; index < 100; index++) {
    raides.push(rand(1, 4))

    if (raides[index] == 1 ) {
        raides[index] = 'A'
    } else if (raides[index] == 2 ) {
        raides[index] = 'B'
    } else if (raides[index] == 3 ) {
        raides[index] = 'D'
    }
    else {
        raides[index] = 'E'
    }
}

console.log(raides);