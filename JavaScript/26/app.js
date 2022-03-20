const tekstas = 'Sukurtas tekstas';              //tekstas js faile
const bodis = document.querySelector('body');

const textN = document.createTextNode(tekstas); // DOM dalis
const element = document.createElement('h1');    // DOM dalis
element.appendChild(textN);
bodis.appendChild(element);

console.log(tekstas);
console.log(typeof tekstas);
console.log('-----------');
console.log(textN);
console.log(typeof textN);
console.log('-----------');
console.log(element);
console.log(typeof element);

const button = document.querySelector('#go');    //pagal tago varda
const iA = document.querySelector('[name=pirmas]'); // pagal name
const iB = document.querySelector('#antras');       //pagal ID

button.addEventListener('click', ()=>{
    //1.
    const text1 = iA.value
    console.log(text1);
    //.2
    const textN = document.createTextNode(iB.value); // DOM dalis
    const element = document.createElement('h1');    // DOM dalis
    element.appendChild(textN);
    bodis.appendChild(element);
});

////////////////////////////////////////////////////////////////////////
const go3 = document.querySelector('#go3');

go3.addEventListener('click', ()=> {
    //1. 
    const textx3 = iA.value
    for (let i = 0; i < 3; i++) {
        console.log(textx3);       
    }
    //2.
    for (let i = 0; i < 3; i++) {
        const textN = document.createTextNode(iB.value); // DOM dalis
        const element = document.createElement('h1');    // DOM dalis
        element.appendChild(textN);
        bodis.appendChild(element);      
    }

})