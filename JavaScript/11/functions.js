function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



console.log('-------FUNKCIJOS----------');


function masyvas(x, fill)
{
    const mas = [];
    for (let i = 0; i < x; i++) {
        mas.push(fill);
    }
    return mas 
}

let pirmas = masyvas(5, 'Zebrs');
console.log(pirmas);

let antras = masyvas(12, 'Bebrs');
console.log(antras);

let trecias = masyvas(50, 'Zirafa');
console.log(trecias);



a = null
console.log(typeof a);



function fnkc(v, w){

    let arr = [];

    for (let index = 0; index < v; index++) {
         arr.push(w);
    }
    return arr
}
 
console.log(fnkc(5, 'BB'));
console.log(fnkc(15, 'CC'));
console.log(fnkc(105, 'DD'));

console.log('-------FUNKCIJOS UZDAVINIAI----------');
console.log('-----------1----------');

// Parašyti dvi funkcijas be parametrų red() ir green(). 
// Funkcijos turi grąžinti atitinkamus stringus “red” ir “green”. 
// Pademostruoti veikimą;

function red(){
     let raudonas = 'red';
     return raudonas
}
function green(){
    let zalias = 'green'
    return zalias
}
console.log(red());
console.log(green());


// Parašyti funkciją color(what). 
// Funkcija turi grąžinti splvą, priklausomai nuo argumento:
// jeiguwhat==1-stringą“white”,jeiguwhat==2-stringą“black”, 
// kitais atvejais - “no color”. Pademostruoti veikimą;

console.log('-----------2----------');

// 2. Parašyti funkciją color(what). 
// Funkcija turi grąžinti splvą, priklausomai nuo argumento:
// jeiguwhat==1-stringą“white”,jeiguwhat==2-stringą“black”, 
// kitais atvejais - “no color”. Pademostruoti veikimą;

function color(what){

    let ats2;
    if (what ==1) {
        ats2 = 'white';
    } else if (what ==2){ 
        ats2 = 'black'
    }
    else {
        ats2 = 'no color'
    }
    return ats2 
}

console.log(color(rand(1, 3)));


console.log('-----------3----------');

// 3. Parašykite dvi funkcijas sum(a, b) ir diff(a, b). 
// Pirma finkcija turi suskaičiuoti sumą (a+b), 
// o kita skirtumą (a-b) su argumentais a, b ir grąžinti rezultatą. 
// Pademostruoti veikimą;

function sum(a3 = 0, b3 = 0) {
    let ats3 = a3 +b3;
    return ats3;
}

function diff(a3 = 0, b3 = 0) {
    let ats3 = a3 - b3;
    return ats3
}
let a3;
let b3;
console.log('suma:', sum(a3, b3));
console.log('skirtumas:', diff(a3, b3));

console.log('-----------4----------');

// Papildyti prieš tai buvusį uždavinį, 
// kad a ir b parametrai turėtų default argumentus lygius 0. 
// Pademostruoti veikimą;

console.log('-----------5----------');


// Sukurkite masyvą ab [‘A’, ‘B’], masyvą cd [‘C’, ‘D’] ir masyvą fe [‘F’, ‘E’] . 
// Masyvai nėra funkcijos viduje. 
// Parašykite funkciją changeArray(array), kur sukeistų vietomis perduodamo masyvo reikšmes. 
// Pademostruoti veikimą;

let ab = ['A', 'B'];
let cd = ['C', 'D'];
let fe = ['F', 'E'];

function changeArray(v) {
    
    let masyvas = [];
    masyvas.push(v[1], v[0])
    return masyvas
}
console.log(changeArray(ab), changeArray(cd), changeArray(fe));
console.log('-----------6----------');
// Sukurti objektą car1 {make: ’volvo’} ir car2 {make: ’mb’}. 
// Objektai nėra funkcijos viduje. 
// Sukurti funkciją changeMake(car, make), 
// kuri keistų perduodamo objekto car savybę į perduodamo make argumento reikšmę. 
// Pvz iškvietus funkciją su argumentais changeMake(car1,’ZaZ’) car1 objekte savybė pasikeistų į ‘ZaZ’.
// Pademostruoti veikimą;

let car1 = {make: 'volvo'};
let car2 = {make: 'mb'};


function changeMake(car, make) {
car  = {make: make};

    return car
}
let modifikuota = changeMake(car1, 'ZAZ');
console.log(changeMake(car2, 'bmw'));
console.log('modifikuota', modifikuota);

console.log('-----------7----------');

// Paršyti funkcija kuri masyve visas jo reikšmes pakeistų į atsitiktinai sugeneruotus spalvų
// stringus: “red”, “blue” arba “green”. Funkcija turi turėti du argumentus, vienas
// generuojamas masyvas, o kitas funkcija - splvų generatorius. Pademostruoti veikimą.

const arr6 = ['red', 'blue', 'green']

function colorgen(pav, l){
    pav = [];
    for (let index = 0; index < l; index++) {
        pav.push(arr6[rand(0, arr6.length - 1)]);
        
    }
    return pav
}
let generator = []
console.log(colorgen(generator, 28));



console.log('-----------8----------');
// Yra masyvas [8, 9, 7, 6, 12, 48, 0, 6] Išrūšiuoti masyvą nuo didžiausio iki mažiausio
// naudojant sort ir atskirą rūšiavimo funkciją. Pademostruoti veikimą;

// let arr8 = [8, 9, 7, 6, 12, 48, 0, 6];

// function sort