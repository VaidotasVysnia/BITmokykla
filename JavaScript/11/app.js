function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log('-------OBJEKTAI IR JU SAVYBES----------');

const A = 'As esu stringas';

const B = new String('As irgi esu stringas');



console.log(A, typeof A, A.length);
console.log(B, typeof B, B.length, B.indexOf('i'));

let V1 = '*** ' + A + ' ***';
let V2 = `*** ${A} ***`;


console.log(V1);
console.log(V2);

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
console.log(typeofa);