

const linkas = document.querySelector('a');
const vzLink = 'https://www.vz.lt/';
const cvLink = 'https://www.cv.lt/';


console.log(linkas.getAttribute('href'));
linkas.setAttribute('title', 'Go Go Go');
linkas.removeAttribute('href');

document.querySelector('#cv').addEventListener('click', ()=> linkas.setAttribute('href', cvLink));
document.querySelector('#vz').addEventListener('click', () => linkas.setAttribute('href', vzLink));

////////////////////////////////////////////////////////////////////////////
const slider = document.querySelector('.slider');
console.log(slider);
const radio1 = 'radio1.jpeg';
const radio2 = 'radio2.jpg';
const radio3 = 'radio3.jpeg';

document.querySelector('#r1').addEventListener('click', ()=> slider.setAttribute('src', radio1));
document.querySelector('#r2').addEventListener('click', ()=> slider.setAttribute('src', radio2));
document.querySelector('#r3').addEventListener('click', ()=> slider.setAttribute('src', radio3));

////////////////////////////////////////////////////////////////////////////
const slider22 = document.querySelector('#slider22')
const radio = ['radio1.jpeg', 'radio2.jpg', 'radio3.jpeg'];
console.log(slider2);

// document.querySelectorAll('#radio option').forEach( r => r.addEventListener('change', () => slider2.setAttribute('src', radio[r])))
const radiola = document.querySelectorAll('#radio option');

radijas.addEventListener('change', ()=>{
    console.log(radijas.value);
})

// for (let i = 0; i < radiola.length; i++) {
//     radiola[i].addEventListener('change', slider22.setAttribute('src', radio[i]))
    
// }

////////////////////////////////////////////////////////////////////////////

const h1 = document.querySelector('h1');
const h1input = document.querySelector('[name=h1]');
const h1Do = document.querySelector('#h1');

h1Do.addEventListener('click', ()=> {
    const valueText = h1input.value;
    h1.innerText = valueText;
})
////////////////////////////////////////////////////////////////////////////
const h2 = document.querySelector('#h2')
const html = '<h2>Labas Vakaras</h2>';

h2.addEventListener('click', () => h1.innerHTML = html);
////////////////////////////////////////////////////////////////////////////

const rytas = '<h1>Labas rytas</h1>';
const diena = '<h1>Laba diena</h1>';
const vakaras = '<h1>Labas vakaras</h1>';

