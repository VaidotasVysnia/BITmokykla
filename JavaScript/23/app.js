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
})

console.log('--- 2 ---');
// 2. Sukurti select tipo elementą su trim reikšmėm “rytas”, “diena”, “vakaras”. 
// Pasikeitus reikšmėm select elemente, naują reikšmę išvesti į console.log
const diena = document.querySelectorAll('option');
document.querySelector('select').addEventListener('change', (e, i)=> console.log(e.target.value)); 

console.log('--- 3 ---');
// 3. Sukurti tris radio tipo elementus su reikšmėm “rytas”, “diena”, “vakaras”. 
// Pasikeitus reikšmėm radio elemente, naują reikšmę išvesti į console.log
const radio3 = document.querySelectorAll('.uzd3');
for (let i = 0; i < radio3.length; i++) {
radio3[i].addEventListener('change', (e)=> console.log(e.target.value));
};

console.log('--- 4 ---');
// 4. Sukurti vieną checkbox tipo elementą. Pažyminėjus elementą išvesti i console.log pranešimą “pažymėta”, 
// o nuėmus pažymėjimą- “nepažymėta”.
document.querySelector('#r4').addEventListener('change', (e)=> {
   if (e.target.checked === true) {
       console.log('pazymetas');
   } else {
       console.log('nepazymetas');
   }
})

console.log('--- 5 ---');
// 5. Sukurti tris checkbox tipo elementus su reikšmėm “rytas”, “diena”, “vakaras”. 
// Pasikeitus kažkuriai checkbox elemento reikšmei (pažymint arba atžymint checkbox’ą), 
// išvesti į console.log visų pažymėtų checkbox’ų reikšmes.
const ch5 = document.querySelectorAll('.ch51');
console.log(ch5);
// ch5.forEach( (reiksme,i) => reiksme.addEventListener('change', (e)=> {
//     if (e.target.checked === true){
//         console.log(e.target.value);
//     }
// }));
function f5(a) {
    for (let i = 0; i < a.length; i++) {
        if (a[i].target.checked === true) {
            console.log(a[i].target.value);
        }
        
    }
}
let f55 = f5(ch5);
ch5.forEach(
(reiksme)=>reiksme.addEventListener('change', f55))

// function masyvas(x, fill)
// {
//     const mas = [];
//     for (let i = 0; i < x; i++) {
//         mas.push(fill);
//     }
//     return mas 
// }
// let pirmas = masyvas(5, 'Zebrs');
// console.log(pirmas);