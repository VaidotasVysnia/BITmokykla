function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log('-----ARRAY Praktika--------');

var namas = ['PirmasA', 'AntrasA', 'TreciasA', 4, 'PENKTASA'];

for (var index = 0; index < namas.length; index++ ){
    console.log('Aukstas - ', namas[index]);
};

// namas.splice(2, 2);
console.log(namas);
console.log(namas.splice(2, 2));
console.log('-----1--------');
var arr = [];
// var arr2d = []

for (var index = 0; index < 30; index++) {
    arr.push(rand(5, 25));
    // arr2d.push(rand(5, 25) - index)
}
console.log('Masyvas', arr.slice());

console.log('-----2a--------');

var count = 0;
for (index = 0; index < arr.length; index++) {
   if (arr[index] > 10){
    //    count = ++count; 
       count++;
   }
}
console.log(count);
console.log('-----2b--------');
// Raskite didžiausią masyvo reikšmę ir jos indeksą;
var big = 0;
var bigvisos = [];
var poriniuSuma = 0;
for (index = 0; index < arr.length; index++) {
    if (arr[index] > big){
        big = arr[index];
       bigvisos = [];
    }

    // if(arr[index] === did) {
    //     bigvisos.push(did);
    // }
    if (arr[index]%2 == 0){
        poriniuSuma = poriniuSuma + arr[index];
    }   
 }
 console.log('paskutinis big = ',big);
 console.log('big visos = ', bigvisos);

 console.log('"Bigo vieta= ', arr.indexOf(big));

 console.log('-----2c--------');
//  Suskaičiuokite visų porinių indeksų reikšmių sumą;
console.log('Poriniu suma = ', poriniuSuma);
console.log('-----2d--------');
// Sukurkite naują masyvą, kurio reikšmės yra 1uždavinio masyvo reikšmes
// minus tos reikšmės indeksas;
var arr2d = []
console.log(arr2d);

for (index = 0; index < arr.length; index++) {
    arr2d.push(arr[index] - index);
    
}
console.log(arr2d);
console.log('-----2e--------');
// Papildykite masyvą papildomais 10 elementų su reikšmėmis nuo 5 iki
// 25, kad bendras masyvas padidėtų iki indekso 39;
var arr2d
for (let i = 0; i < 10; i++) {
  
    arr2d = arr.push(rand(5, 25));
};
arr2d = arr; 
console.log(arr);
console.log(arr2d);
console.log('-----2f--------');
// Iš masyvo elementų sukurkite du naujus masyvus. Vienas turi būti
// sudarytas iš neporinių indekso reikšmių, o kitas iš porinių;

var poriniai = [];
var neporiniai = [];
for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2 ==0 ) {
        poriniai.push(arr[i]);
    } else {
        neporiniai.push(arr[i]);
    }
    
}
console.log('poriniu masyvas -> ', poriniai);
console.log('neporiniu masyvas -> ', neporiniai);
console.log('-----2g--------');
// Pirminio masyvo elementus suporiniais indeksais padarykite lygius0
// jeigu jie didesni už 15;

for (let i = 0; i < poriniai.length; i++) {
    if (i % 2 ==0 && poriniai[i] > 15) {
        poriniai[i] = 0
    }
    
}
console.log(poriniai);
console.log('-----2h--------');
console.log('NEPADARIAU');
// Suraskite pirmą(mažiausią) indeksą, kurio elemento reikšmė didesnė
// už 10;
i = 0;
do {
    console.log(arr[i]);
    i++;
} while (arr[i] > 10);

console.log(arr[i]);
console.log('-----2i--------');
// Naudodami funkciją splice() iš masyvo ištrinkite visus
// elementus turinčius porinį indeksą;
console.log('arejus', arr);


for (let i = 0; i < arr.length; i++) {
    
        arr. splice(i, 1); 
}
console.log('kas antras', arr);
console.log('-------------3------------');
// Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, 
// o ilgis 200. Suskaičiuokite kiek yra kiekvienos raidės.

const abcd = ['A', 'B', 'C', 'D' ]

const masyvas3 = [];
for (let i = 0; i < 200; i++){
    masyvas3.push(abcd[rand(0, 3)]);
}
console.log('masyvas3 = ', masyvas3);
console.log('-------------4------------');
console.log('NEPADARIAU - 10 pamoka / 45 min');
const abcd3 = ['A', 'B', 'C', 'D' ];

const mas1 = [];
const mas2 = [];
const mas3 = [];
// const masyvai = [];

// for (let i = 0; i < 200; i++){
//     mas1.push(abcd[rand(0, 3)]);
//     mas2.push(abcd[rand(0, 3)]);
//     mas3.push(abcd[rand(0, 3)]);

// };
// console.log('mas1 = ', mas1);
// console.log('mas2 = ', mas2);
// console.log('mas3 = ', mas3);

// masyvai.push(mas1, mas2, mas3);
// console.log('didysis masyvas = ', masyvai);
// Protingesne versija//
masyvai = [[], [], [], []];
for (let j = 0; j< 3; j++){
    for (let i = 0; i<200; i++){
    masyvai[j].push(abcd[rand(0, 3)])
    }
}
console.log('didysis masyvas = ', masyvai);

const triraidis = [];
const uniValue = [];

for (let index = 0; index < 200; index++) {
    triraidis.push(masyvai[0][index]+masyvai[1][index]+masyvai[2][index]);
}
console.log('triraidis', triraidis);

for(i = 0; i< triraidis.length; i++) {

    if(uniValue.indexOf(triraidis[1] ===-1)){

uniValue.push (triraidis[i])
    }
    else {

    }
}
console.log(uniValue);
console.log('-------------5------------');
console.log('NEPADARIAU - 10 pamoka / 1:00 min');
const mas51 = [];
const mas52 = [];

for (let i = 0; i< 100; i++) {
    
 mas51.push(rand(100, 999));
 mas52.push(rand(100, 999));
}
console.log(mas51);
console.log(mas52);
console.log('-------------6/7/8/9------------');
console.log('NEPADARIAU - 10 pamoka / 1:16 min');

