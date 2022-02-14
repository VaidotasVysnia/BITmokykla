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