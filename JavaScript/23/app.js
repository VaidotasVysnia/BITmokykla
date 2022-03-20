// 1. Sukurti text tipo input elementą ir mygtuką. Paspaudus mygtuką input elemente esantį tekstą išvesti į console.log
// 2. Sukurti select tipo elementą su trim reikšmėm “rytas”, “diena”, “vakaras”. Pasikeitus reikšmėm select elemente, naują reikšmę išvesti į console.log
// 3. Sukurti tris radio tipo elementus su reikšmėm “rytas”, “diena”, “vakaras”. Pasikeitus reikšmėm radio elemente, naują reikšmę išvesti į console.log
// 4. Sukurti vieną checkbox tipo elementą. Pažyminėjus elementą išvesti i console.log pranešimą “pažymėta”, o nuėmus pažymėjimą- “nepažymėta”
// 5. Sukurti tris checkbox tipo elementus su reikšmėm “rytas”, “diena”, “vakaras”. Pasikeitus kažkuriai checkbox elemento reikšmei (pažymint arba atžymint checkbox’ą), išvesti į console.log visų pažymėtų checkbox’ų reikšmes.
// 6. Sukurti elementą h1. Pakartoti 1-5 uždavinius rezultato tekstą įkeliant į tą sukurtą elementą.
// 7. Pakartoti 1-5 uždavinius rezultatus atvaizduojant DOM’e dinamiškai sukurtuose elementuose h3
// 8. Pakartoti 1-5 uždavinius. Kiekvienam uždaviniui sukurti naują tuščią masyvą (arba vieną objektą su 5 masyvais viduje). Kiekvieną pasikeitimo reikšmę įrašyti į masyvą kaip naują elementą (5 uždavinio atveju įrašyti masyvą su pažymėtom reikšmėm) ir į console.log išvesti tą masyvą.
// 9. Padaryti mygtuką “GO”, kurį paspaudus, naudojant masyvus, gautus 8 uždavinyje, dinamiškai, iš tų masyvų duomenų, būtų sukurta daug h3 tagų kaip tai buvo padaryta 7 uždavinyje (vienas įrašas masyve, atinka vieną naują h3 tagą).
// 10. Padaryti mygtuką “Reset”, kuris ištrintų duomenis iš visų masyvų.
// 11. Padaryti mygtuką “Clear”, kuris ištrintų visus h3 tagus iš DOM’o.
// 12. Padaryti mygtuką “GO JSON”, kurį paspaudus, 9 uždavinio masyvus būtų sudėti į
// sukurtą naują objektą. Tą objektą paversti JSON stringu ir užsaugoti susikurtam kintamąjame. Kintamąjį išvesti i console.log Nuskaityti JSON stringą iš kintamojo, paversti jį objektu ir iš jo informacijos suformuoti h3 tagus kaip 9 uždavinyje.

console.log('--- 1 ---');
// 1. Sukurti text tipo input elementą ir mygtuką. Paspaudus mygtuką input elemente esantį tekstą išvesti į console.log
document.querySelector('button').addEventListener('click', ()=> {  
    console.log(document.querySelector('input').value);  
    h1.innerText = document.querySelector('input').value
    newh3.innerText = h1.innerText
    obj8.ar1.push(h1.innerText)
})

console.log('--- 2 ---');
// 2. Sukurti select tipo elementą su trim reikšmėm “rytas”, “diena”, “vakaras”. 
// Pasikeitus reikšmėm select elemente, naują reikšmę išvesti į console.log
const diena = document.querySelectorAll('option');
document.querySelector('select').addEventListener('change', (e, i)=> {console.log(e.target.value)  
    h1.innerText = e.target.value;
    newh3.innerText = h1.innerText;
    obj8.ar2.push(h1.innerText)
}); 

console.log('--- 3 ---');
// 3. Sukurti tris radio tipo elementus su reikšmėm “rytas”, “diena”, “vakaras”. 
// Pasikeitus reikšmėm radio elemente, naują reikšmę išvesti į console.log
const radio3 = document.querySelectorAll('.uzd3');
for (let i = 0; i < radio3.length; i++) {
radio3[i].addEventListener('change', (e)=> {console.log(e.target.value)
    h1.innerText = e.target.value;
    newh3.innerText = h1.innerText;
    // console.log(h1.innerText);
    obj8.ar3.push(h1.innerText)
});
};

console.log('--- 4 ---');
// 4. Sukurti vieną checkbox tipo elementą. Pažyminėjus elementą išvesti i console.log pranešimą “pažymėta”, 
// o nuėmus pažymėjimą- “nepažymėta”.
document.querySelector('#r4').addEventListener('change', (e)=> {
    h1.innerText = e.target.value
   if (e.target.checked === true) {
       console.log('pazymetas');
       h1.innerText = 'pazymetas';
       newh3.innerText = h1.innerText
       obj8.ar4.push(h1.innerText)
   } else {
       console.log('nepazymetas');
       h1.innerText = 'nepazymetas';
       newh3.innerText = h1.innerText
       obj8.ar4.push(h1.innerText)

   }
})

console.log('--- 5 ---');
// 5. Sukurti tris checkbox tipo elementus su reikšmėm “rytas”, “diena”, “vakaras”. 
// Pasikeitus kažkuriai checkbox elemento reikšmei (pažymint arba atžymint checkbox’ą), 
// išvesti į console.log visų pažymėtų checkbox’ų reikšmes.
const ch5 = document.querySelectorAll('.ch51');
ch5.forEach( (reiksme) => reiksme.addEventListener('change', (e)=> {
console.log('---------');
let h15 = '';
ch5.forEach( (ch55)=> {
        if (ch55.checked) {
            console.log(ch55.value);
            h15   += ch55.value + " "           
        }
    })
    h1.innerText = h15;
    newh3.innerText = h1.innerText;
    obj8.ar5.push(newh3.innerText) 
}));

console.log('--- 6 ---');
// 6. Sukurti elementą h1. Pakartoti 1-5 uždavinius rezultato tekstą įkeliant į tą sukurtą elementą.
let h1 = document.querySelector('h1');
h1.style.textTransform =  'uppercase';

console.log('--- 7 ---');
// 7. Pakartoti 1-5 uždavinius rezultatus atvaizduojant DOM’e dinamiškai sukurtuose elementuose h3
const newh3 = document.createElement('h3')
const _7 = document.querySelector('#_7');
_7.appendChild(newh3)

console.log('--- 8 ---');
// 8. Pakartoti 1-5 uždavinius. Kiekvienam uždaviniui sukurti naują tuščią masyvą 
// (arba vieną objektą su 5 masyvais viduje). Kiekvieną pasikeitimo reikšmę įrašyti į masyvą kaip naują elementą 
// (5 uždavinio atveju įrašyti masyvą su pažymėtom reikšmėm) ir į console.log išvesti tą masyvą.

const obj8 = {};
obj8.ar1 = [];
obj8.ar2 = [];
obj8.ar3 = [];
obj8.ar4 = [];
obj8.ar5 = [];
// console.log(obj8);

console.log('--- 9 ---');
// 9. Padaryti mygtuką “GO”, kurį paspaudus, naudojant masyvus, gautus 8 uždavinyje, dinamiškai, iš tų masyvų duomenų, 
// būtų sukurta daug h3 tagų kaip tai buvo padaryta 7 uždavinyje (vienas įrašas masyve, atinka vieną naują h3 tagą).
const go9 = document.querySelector('#_91');

go9.addEventListener('click', ()=>
obj8.ar1.forEach( (e)=> {
    let h3 = document.createElement('h3')
    h3.innerText = e
    document.querySelector("#_9").appendChild(h3)
}))

go9.addEventListener('click', ()=>
obj8.ar2.forEach( (e)=> {
    let h3 = document.createElement('h3')
    h3.innerText = e
    document.querySelector("#_9").appendChild(h3)
}))

go9.addEventListener('click', ()=>
obj8.ar3.forEach( (e)=> {
    let h3 = document.createElement('h3')
    h3.innerText = e
    document.querySelector("#_9").appendChild(h3)
}))

go9.addEventListener('click', ()=>
obj8.ar4.forEach( (e)=> {
    let h3 = document.createElement('h3')
    h3.innerText = e
    document.querySelector("#_9").appendChild(h3)
}))

go9.addEventListener('click', ()=>
obj8.ar5.forEach( (e)=> {
    let h3 = document.createElement('h3')
    h3.innerText = e
    document.querySelector("#_9").appendChild(h3)

}))

console.log('--- 10 ---');
// 10. Padaryti mygtuką “Reset”, kuris ištrintų duomenis iš visų masyvų.

const reset = document.querySelector("#_10");

reset.addEventListener('click', ()=> {
obj8.ar1 = [];
obj8.ar2 = [];
obj8.ar3 = [];
obj8.ar4 = [];
obj8.ar5 = [];
console.log(obj8);
})

console.log('--- 11 ---');
// 11. Padaryti mygtuką “Clear”, kuris ištrintų visus h3 tagus iš DOM’o.
const clear = document.querySelector("#_11");
clear.addEventListener('click', ()=> {
    let h3 = document.querySelectorAll('h3')
    h3.forEach((e)=> e.remove())
})

console.log('--- 12 ---');
// 12. Padaryti mygtuką “GO JSON”, kurį paspaudus, 9 uždavinio masyvus būtų sudėti į sukurtą naują objektą. 
// Tą objektą paversti JSON stringu ir užsaugoti susikurtam kintamąjame. 
// Kintamąjį išvesti i console.log Nuskaityti JSON stringą iš kintamojo, 
// paversti jį objektu ir iš jo informacijos suformuoti h3 tagus kaip 9 uždavinyje.

const goJson = document.querySelector("#_12")

goJson.addEventListener('click', ()=> {
    //1 sukisam i obj
    //2 sustringifajinam
    let obj8str = JSON.stringify(obj8)
    //3 isvedam i konsole
    console.log(obj8str);
    //4 atverciam atgal objektu
    let obj8obj = JSON.parse(obj8str)
    console.log(obj8obj);
    //5 sukuriam h3 tagus is isparsinto objekto
    for (const prop in obj8obj){
    console.log(prop);
    obj8obj[prop].forEach((e)=> {
        console.log(e);

        const textN = document.createTextNode(e);
        const element = document.createElement('h3');
        element.appendChild(textN);
        document.querySelector('#sp12').appendChild(element);
    })
}
}) 