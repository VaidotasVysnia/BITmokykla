function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


console.log('OBJEKTAI - 10 - 1.37');

const obj = {forest: 'Gump', digit2: 555, arr: [5, 8, 9]};

obj.color = 'Black';
obj.savybe1 = 'pirmas';
obj.what = 'Cat';
obj.digit = 888;
obj.abc = {a: 'A', b: 'B', c: 'C'}



console.log(obj);

console.log('color:', obj.color);
console.log('B= ', obj.abc.b);
console.log('Nera = ', obj.abc.zz); //kreipimasis i savybe kurios nera sukuria savybe kurios reiksme undefined

let obj2 = obj;

let A = 5;
let B = 12;

A = B; 
B = 45;

let T;
let C = {A: 5};
let D = {B: 12};
C = D;
T = D
// C.A = 23;

console.log('C:', C, 'D:', D, 'T:', T);

console.log('A:', A, 'B:', B);


let prop = 'what'
console.log(obj.what);
console.log(obj[prop]);


obj.f1 = 'feVienas';
obj.f2 = 'feDu';
obj.f3 = 'feTrys';

const props = 'f' + rand(1, 3);

console.log(obj[props]);

console.log('-----------OBJ-----------');
for ( let i in obj) {
    
    console.log(i, obj[i]);

};

console.log('-------OBJEKTAI IR JU SAVYBES----------');

const ASAV = 'As esu stringas';

const BSAV = new String('As irgi esu stringas');



console.log(ASAV, typeof ASAC, ASAV.length);
console.log(BSAV, typeof BSAV, BSAV.length, BSAV.indexOf('i'));

let V1 = '*** ' + ASAV + ' ***';
let V2 = `*** ${ASAV} ***`;


console.log(V1);
console.log(V2);
////////////////////////////////////////////////////////////////////
console.log('-----------OBJEKTAI (kartojimas)-----------');

const objk = {savybe1: 'igas', savybe2: 'aukstas', savybe3: 'grazus', savybe4: 60, arrk: [1, 2, 3, 4, 5, 6]};

objk.coloras = 'Darkgreen';
objk.vidobj = {a: 1, b: 2, c:3, d: 4, e: 5}

console.log('gilyn i objekta: ', objk.vidobj.c);
console.log('kreipimasis i savybe kurios nera: ', objk.vidobj.bb);

console.log(objk);

for (const i in objk) {
    console.log(i, objk[i]);
        
    }

