// 1. Atskiri elementai
// a. Tamsiai žaliai nuspalvinti h1 tagą;
// b. Tagui i pridėti klasę small;
// c. Iš tago h1 pašalinti klasę main;
// d. Tik tam h2 tagui, kuris iškart eina po h1 tagui pridėti klasę first ir pašalinti
// klasę main;
// e. Pirmam span tagui, kuris yra h2 viduje sumažinti fonto dydį iki 10px ir nudažyti
// pilkai

console.log('--- 1a ---');

const h1 = document.querySelector('h1')
h1.style.color = 'darkgreen';

console.log('--- 1b ---');

h1.classList.add('small');

console.log('--- 1c ---');

h1.classList.remove('main');

console.log('--- 1d ---');

const h2 = document.querySelector('h2');

h2.classList.remove('main');
h2.classList.add('first');

console.log('--- 1e ---');

const span = document.querySelector('span')
span.style.fontSize = '10px';
span.style.color = 'gray';

// 2. Elemetų grupės (nodeList) skaičiavimus išvest į consolę
// a. Suskaičiuoti kiek yra h2 tagų;
// b. Suskaičiuoti kiek yra h2 tagų, kurie neturi klasės first
// c. Visus h2 tagus nuspalvinti šviesiai mėlynai
// d. Tagams kurie yra div su klase prices viduje esantiems h2 tagams pridėti klasę
// price-tag;
// e. Pabraukti visus tagus su klase new;
// f. Suskaičiuoti kiek yra gyvūnų kategorijų ir žirafų (jos yra ul tagai);
// g. Tagus ul apibraukite rėmeliais ir uždėkite 15px paddingą viršuje ir apačioje ir
// 50px paddingą kairėje ir dešinėje;
// h. Suskaičiuoti kiek yra naujų gyvūnų (su klase new);
// i. Suskaičiuoti atskirai kiek yra naujų gyvūnų kiekvienoje kategorijoje;

console.log('--- 2a ---');

const h22a = document.querySelectorAll('h2');

console.log(h22a.length);

console.log(h22a);
/////////////////////////////////////////////////////////////
console.log('--- 2b ---');

let counter2b = 0;

for (let i = 0; i < h22a.length; i++) {
    if (!h22a[i].classList.contains('first')) {
        counter2b++;
    }
    
}

console.log(counter2b);
////////////////////////////////////////////////////////////
console.log('--- 2c ---');

for (let i = 0; i < h22a.length; i++) {
    h22a[i].style.color = 'blue'
    
}
////////////////////////////////////////////////////////////
console.log('--- 2d ---');

// Tagams kurie yra div su klase prices viduje esantiems h2 tagams pridėti klasę
// price-tag;

const div2d = document.querySelector('div.prices');
const h22d = div2d.querySelectorAll('h2');
console.log(div2d);
console.log(h22d);

for (let i = 0; i < h22d.length; i++) {
    
        h22d[i].classList.add('price-tag');

}

console.log('--- 2e ---');
// e. Pabraukti visus tagus su klase new;

const visiNew = document.querySelectorAll('.new')


console.log(visiNew);
for (let i = 0; i < visiNew.length; i++) {

visiNew[i].style.textDecoration = 'underline';  
}
console.log('--- 2f ---');
// f. Suskaičiuoti kiek yra gyvūnų kategorijų ir žirafų (jos yra ul tagai);
const visi2f = document.querySelectorAll('li')
console.log(visi2f);
let counter2f = 0;
for (let i = 0; i < visi2f.length; i++) {
    counter2f++
}
console.log(counter2f);

console.log('--- 2g ---');
// g. Tagus ul apibraukite rėmeliais ir uždėkite 15px paddingą viršuje ir apačioje ir
// 50px paddingą kairėje ir dešinėje;

for (let i = 0; i < visi2f.length; i++) {
    
    visi2f[i].style.border = '1px solid black';
    visi2f[i].style.padding = '15px 50px 15px 50px';
    
}
console.log('--- 2h ---');
// h. Suskaičiuoti kiek yra naujų gyvūnų (su klase new);
const newAnimal = document.querySelectorAll('.new')
let counter2h = 0
for (let i = 0; i < newAnimal.length; i++) {
    counter2h++
}
console.log(counter2h);
console.log('--- 2i ---');
// i. Suskaičiuoti atskirai kiek yra naujų gyvūnų kiekvienoje kategorijoje;
const allAnimals

const newAnimal = {};

for (let i = 0; i < array.length; i++) {
    
    
}