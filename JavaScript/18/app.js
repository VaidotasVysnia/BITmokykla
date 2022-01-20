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

// b3.classList.add('small');

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

// let counter2a = 0;
// document.querySelectorAll('h2').forEach( ()=> counter2a++  )
// console.log(counter2a);

// console.log(h22a);
/////////////////////////////////////////////////////////////
console.log('--- 2b ---');

let counter2b = 0;

// for (let i = 0; i < h22a.length; i++) {
//     if (!h22a[i].classList.contains('first')) {
//         counter2b++;
//     }
    
// }

h22a.forEach(  (b) => {
    if (!b.classList.contains('first')) {
        counter2b++;
    }
});

console.log(counter2b);
////////////////////////////////////////////////////////////
console.log('--- 2c ---');

// for (let i = 0; i < h22a.length; i++) {
//     h22a[i].style.color = 'blue'
    
// }

h22a.forEach(  (b) =>  b.style.color = 'blue' )
////////////////////////////////////////////////////////////
console.log('--- 2d ---');

// Tagams kurie yra div su klase prices viduje esantiems h2 tagams pridėti klasę
// price-tag;

const div2d = document.querySelector('div.prices');
const h22d = div2d.querySelectorAll('h2');
console.log(div2d);
console.log(h22d);

// for (let i = 0; i < h22d.length; i++) {
    
//         h22d[i].classList.add('price-tag');

// }

div2d.querySelectorAll('h2').forEach( b => b.classList.add('price-tag'))




console.log('--- 2e ---');
// e. Pabraukti visus tagus su klase new;

const visiNew = document.querySelectorAll('.new')

console.log(visiNew);
for (let i = 0; i < visiNew.length; i++) {
visiNew[i].style.textDecoration = 'underline';  
}

// document.querySelectorAll('.new').forEach(  e => e.style.textDecoration = 'underline'    )


console.log('--- 2f ---');
// f. Suskaičiuoti kiek yra gyvūnų kategorijų ir žirafų (jos yra ul tagai);
const visi2f = document.querySelectorAll('ul')
console.log(visi2f);
let counter2f = 0;
for (let i = 0; i < visi2f.length; i++) {
    counter2f++
}
console.log(counter2f);

let counter2f2 = 0;

document.querySelectorAll('ul').forEach(   ()=>    counter2f2++  )

console.log(counter2f2);


console.log('--- 2g ---');
// g. Tagus ul apibraukite rėmeliais ir uždėkite 15px paddingą viršuje ir apačioje ir
// 50px paddingą kairėje ir dešinėje;

for (let i = 0; i < visi2f.length; i++) {
    
    visi2f[i].style.border = '1px solid black';
    visi2f[i].style.padding = '15px 50px 15px 50px';
    
}

// visi2f.forEach( b => {

//     b.style.border = '1px solid black';
//     b.style.padding = '15px 50px 15px 50px';
// })





console.log('--- 2h ---');
// h. Suskaičiuoti kiek yra naujų gyvūnų (su klase new);
const newAnimal = document.querySelectorAll('.new')
let counter2h = 0
for (let i = 0; i < newAnimal.length; i++) {
    counter2h++
}
console.log(counter2h);

let counter2h2 = 0
document.querySelectorAll('.new').forEach( ()=> counter2h2++  )

console.log(counter2h2);

console.log('--- 2i ---');
// i. Suskaičiuoti atskirai kiek yra naujų gyvūnų kiekvienoje kategorijoje;


const newAnimal2i = {};

newAnimal2i.newZirafos = 0;
newAnimal2i.newPlesrunai = 0;
newAnimal2i.newGyvates = 0;
newAnimal2i.newZoliaedziai = 0;

// const Zirafos = document.querySelectorAll('#zirafos li');
const Plesrunai = document.querySelectorAll('#plesrunai li');
const Gyvates = document.querySelectorAll('#gyvates li');
const Zoliaedziai = document.querySelectorAll('#zoliaedziai li');

// for (let i = 0; i < Zirafos.length; i++) {
//     if (Zirafos[i].classList.contains('new')) {
//         newAnimal2i.newZirafos++
//     }
    
// }

document.querySelectorAll('#zirafos li').forEach( a => {
    if (a.classList.contains('new')) {
                newAnimal2i.newZirafos++
            }
})

document.querySelectorAll('#plesrunai li').forEach( a => {
    if (a.classList.contains('new')) {
                newAnimal2i.newPlesrunai++
            }
})

document.querySelectorAll('#gyvates li').forEach( a => {
    if (a.classList.contains('new')) {
                newAnimal2i.newGyvates++
            }
})

document.querySelectorAll('#zoliaedziai li').forEach( a => {
    if (a.classList.contains('new')) {
                newAnimal2i.newZoliaedziai++
            }
})

// for (let i = 0; i < Plesrunai.length; i++) {
//     if (Plesrunai[i].classList.contains('new')) {
//         newAnimal2i.newPlesrunai++
//     }
    
// }
// for (let i = 0; i < Gyvates.length; i++) {
//     if (Gyvates[i].classList.contains('new')) {
//         newAnimal2i.newGyvates++
//     }
    
// }
// for (let i = 0; i < Zoliaedziai.length; i++) {
//     if (Zoliaedziai[i].classList.contains('new')) {
//         newAnimal2i.newZoliaedziai++
//     }
    
// }

console.log(newAnimal2i);

// 3. Elementų events
// a. Padaryti tai ką liepia mygtukai Header1 sekcijoje;
// b. Padaryti, kad paspaudus ant i tago jis pakeistų fonto svorį į bold;
// c. Padaryti, kad paspaudus ant tago su klase prices, backgroundas pasikeistų į
// pilką, o paspaudus dar kartą vėl grįžtu į baltą spalvą;
// d. Padaryti, kad paspaudus ant tago su id contacts, tam tagui būtų pridėta css
// savybė color;
// e. Padaryti taip, kad paspaudus ant padidinti, esančio tage su id contacts, tagui
// su id contacts būtų pridėta css savybė fontSize = 20px;
// f. Padaryti taip, kad paspaudus ant X, esančio tage su id contacts, pridėtos tage su
// id contacts savybės būtų panaikintos
// https://stackoverflow.com/questions/18691655/remove-style-on-element
// g. Padaryti tai ką liepia mygtukai Header2 sekcijoje;

console.log('--- 3a ---');

// const header3a = document.querySelector('#h1-color');

// const click3a = ()=>{
//     header3a.style.backgroundColor = 'green';
// }

// header3a.addEventListener('click', click3a);

const header3a = document.querySelector('#h1-color');
const header3aa = document.querySelector('#h1-font');
header3a.addEventListener('click', ()=> h1.style.backgroundColor = 'green');
header3aa.addEventListener('click', ()=> h1.style.fontSize = '10px');



console.log('--- 3b ---');
// b. Padaryti, kad paspaudus ant i tago jis pakeistų fonto svorį į bold;
const b3 = document.querySelector('i')

b3.addEventListener('click', ()=> b3.style.fontWeight = 'bold');
console.log('--- 3c ---');
// c. Padaryti, kad paspaudus ant tago su klase prices, backgroundas pasikeistų į
// pilką, o paspaudus dar kartą vėl grįžtu į baltą spalvą;

const c3a = document.querySelector('.prices');
const c3 = c3a.querySelectorAll('h2');
console.log(c3);

for (let i = 0; i < c3.length; i++) {
    let l=0;
    
c3[i].addEventListener('click', ()=> {
    if (l%2 !==0) {
        c3[i].style.backgroundColor = 'white';
        l++
        console.log(l);
    } else {
        c3[i].style.backgroundColor = 'gray';
        l++
        console.log(l);
    }
  
})

}

console.log('--- 3d ---');
// d. Padaryti, kad paspaudus ant tago su id contacts, tam tagui būtų pridėta css
// savybė color;

const d3 = document.querySelector('#contacts');
// console.log(d3);
// d3.addEventListener('click', ()=> d3.style.color = 'darkgray')

console.log('--- 3e ---');

// e. Padaryti taip, kad paspaudus ant padidinti, esančio tage su id contacts, tagui
// su id contacts būtų pridėta css savybė fontSize = 20px;

const e3 = d3.querySelector('u')

e3.addEventListener('click', ()=> d3.style.fontSize = "20px");

console.log('--- 3f ---');

// f. Padaryti taip, kad paspaudus ant X, esančio tage su id contacts, pridėtos tage su
// id contacts savybės būtų panaikintos
// https://stackoverflow.com/questions/18691655/remove-style-on-element

const f3 = d3.querySelector('b');
console.log(f3);
console.log(d3);

f3.addEventListener('click', ()=> { d3.removeAttribute("style")
    // d3.style.margin = '';
    // d3.removeAttribute('border');
    // d3.style.padding = '';
}
)
console.log('--- 3g ---');
// g. Padaryti tai ką liepia mygtukai Header2 sekcijoje;
const g31 = document.querySelector('#h1-color-back');
const g32 = document.querySelector('#h1-font-back');

console.log(g31);
console.log(g32);

g31.addEventListener('click', ()=> h1.style.backgroundColor = 'white')
g32.addEventListener('click', ()=> h1.style.fontSize = '32px')


// const header3a = document.querySelector('#h1-color');
// const header3aa = document.querySelector('#h1-font');
// header3a.addEventListener('click', ()=> h1.style.backgroundColor = 'green');
// header3aa.addEventListener('click', ()=> h1.style.fontSize = '10px');

// 4. Elementų grupių events
// a. Padaryti, kad dukartus paspaudus ant naujų gyvūnų jie nusispalvintu raudonai
// https://developer.mozilla.org/en-US/docs/Web/API/Element/dblclick_event
// b. Padaryti, kad paspaudus ant gyvūno jis būtų atvaizduojamas 130% didesniu fonto dydžiu. 
// “PATINKA” tas neturi galioti.
// c. Padaryti, kad paspaudus ant “PATINKA”, atitinkamai sekcijai būtų priskirta klasė like;

console.log('--- 4a ---');

// a. Padaryti, kad dukartus paspaudus ant naujų gyvūnų jie nusispalvintu raudonai

// const a4 = document.querySelectorAll('.new');

// for (let i = 0; i < a4.length; i++) {
//     a4[i].addEventListener('dblclick', ()=>a4[i].style.color = 'red');
    
// }

document.querySelectorAll('.new').forEach( a => {
    a.addEventListener('dblclick', (b)=> b.target.style.color = 'red')
    
});
// a4.forEach(a4.addEventListener('dblclick', ()=>a4[i].style.color = 'red'));

console.log('--- 4b ---');
// b. Padaryti, kad paspaudus ant gyvūno jis būtų atvaizduojamas 130% didesniu fonto dydžiu. 
// “PATINKA” tas neturi galioti.

const b4 = document.querySelectorAll('li');
console.log(b4);
const b42 = {};
for (let i = 0; i < b4.length; i++) {
    if (b4[i].classList.contains('like-button')) {
    }
    else {
        b4[i].addEventListener('click', ()=> b4[i].style.fontSize = 'calc(16px* 2.3)');
    }
}
console.log(b4);
console.log('--- 4c ---');
// c. Padaryti, kad paspaudus ant “PATINKA”, atitinkamai sekcijai būtų priskirta klasė like;


const c4 = document.querySelectorAll('ul')

for (let i = 0; i < c4.length; i++) {
    
    let c42 = c4[i].querySelectorAll('li')

    for (let l = 0; l < c42.length; l++) {
        if (c42[l].classList.contains('like-button')) {
            c42[l].addEventListener('click', ()=> c4[i].classList.add('like'))
            
        }
        
    }
    }

// // 5. Dinaminis elementų kūrimas
// // a. Dinamiškai su JS pridėti naują kainą “Senjorai tik: 1.99 eur”; 
// // b. Dinamiškai su JS Pridėti naują kainą “Senjorų grupė iki 10: 
// tik 5.99 eur” Padaryti, kad pridėtas elementas turėtų klasę new ir ant jo 
// paklikinus jis pasidarytų žalias;
// // c. Dinamiškai su JS kiekvienoje gyvūnų kategorijoje po “PATINKA” 
// pridėkite dar vieną li elementą “NEPATINKA”, 
// kurį paspaudus atitinkamoje sekcijoje būtų nuimta klasė like
// // d. Dinamiškai su JS sukurkite naują mygtukų grupę HEADER 3 
// naudojant analogišką html tagų struktūrą kaip ir 
// HEADER 1 ir HEADER 2. Pirmas mygtukas vadintųsi, 
// “Pabraukti H1 tagą”, o antras “Nepabraukti H1 tagą”. 
// Mygtukai turi daryti tai kas ant jų parašyta
