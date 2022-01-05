function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log('-------------Loops---------------');
console.log('Pries');


//while
//do while
//for

//---------------------------------------------
console.log('-----while-----');
var cycle = 1;

while ( cycle < 4 ) 
{
    console.log('cikle', cycle);
    cycle++;
}
console.log('Po');
//---------------------------------------------
console.log('-----do while-----');

var cycle2 = 1;

do{
    console.log('cikle', cycle2);
    cycle2++
} while (cycle2 <= 4);
//---------------------------------------------
console.log('-----for-----');

for (var cycle3 = 1; cycle3 <=4; cycle3++){
    console.log('cikle', cycle3);
}
//---------------------------------------------
console.log('-----Metom moneta-----');

var h = 0;
var coin;

do{
    coin = rand(0, 1) ? 'H' : 'D';
    if (coin == 'H'){
        h++;
    }
    console.log('cikle,', h);
} while (h <3);
//---------------------------------------------
console.log('-----CIklas cikle-----');

for (var cycle3 = 1; cycle3 <= 5; cycle3++){
    console.log('DIDELIS', cycle3);
    for (var cycle4 = 1; cycle4 <= 4; cycle4++){
        console.log('mazas', cycle4);
        for (var cycle5 = 1; cycle5 <=3; cycle5++){
            console.log('mini', cycle5);
        }
    }
}
//---------------------------------------------
console.log('-----Uzdavinys-----');
//---------------------------------------------
console.log('--A.--');
//Sugeneruoti 21 atsitiktini skaiciu nuo 10 iki 99 ir suli pinti juos i viena stringa.
//skaicius atskirti kableliais, po paskutinio kablelio nera


var ats = '';

for (var i = 1; i <= 21; i++){
   if (i !==1) {
       ats += ',';
   }
    ats += rand(10, 99)
}
console.log(ats);

console.log('--B.--');
// //kol ju suma nebus didesne nei 250

var ats = '';
var suma = 0;
var sk = 0


do { 
 
    ats +=',';
    suma += rand(1, 99)
    ats += suma;
    // console.log(ats);

} while (suma < 250);
console.log(ats);
console.log(suma);

console.log('--C.--');
// // skaiciai mazesni nei 30 turi buti surasyti i atskita eilute


console.log('----------------------------');
//Sugeneruoti 21 atsitiktini skaiciu nuo 10 iki 99 ir suli pinti juos i viena stringa.
//skaicius atskirti kableliais, po paskutinio kablelio nera

var atsak = '';

for (let a = 0; a < 21; a++) {

if (a !==0 ) {
    atsak += ','
}


    atsak += rand (10, 99)
}
console.log(atsak);
// //kol ju suma nebus didesne nei 250


let atsakymas = '';
let suma6 = 0;
let skaicius6 = 0;
let iki30 = '';
let virs30 = '';


do {
    if (atsakymas != '') {
        atsakymas +=', ';
    }
    skaicius6 = rand (1, 50);
    suma6 += skaicius6;
    atsakymas += skaicius6;
    if (skaicius6 <= 30) {
        if (iki30 != '') {
            iki30 +=', ';
        }
        iki30 += skaicius6;
    }
    else {
        if (virs30 != '') {
            virs30 +=', ';
        }
        virs30 += skaicius6;
    }
} while (suma6 < 250);
console.log(atsakymas);
console.log(suma6);
console.log(iki30);
console.log(virs30);