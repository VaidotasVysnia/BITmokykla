const words = ['Labas Rytas', 'Laba Diena', 'Labas Vakaras'];
const h1 = document.querySelector('h1');
const color = ['yellow', 'green', 'red'];


document.querySelector('#case-1').addEventListener('change', (select) => h1.innerText = select.target.value);

document.querySelector('#case-2').addEventListener('change', (select) => h1.innerText = words[select.target.value]);

document.querySelector('#case-3').addEventListener('change', (select) => h1.style.backgroundColor = color[select.target.value]);

document.querySelector('button').addEventListener('click', () => {h1.innerText = "Hello";
h1.style.backgroundColor = 'white';}
)


// fetch ir JSON pasimokyti

const bbs = document.querySelector('#bbs');


fetch('http://127.0.0.1:5500/21/labas.txt')
.then(responce => responce.text())
.then( data => bbs.addEventListener('click', () => h1.innerHTML = data));



// fetch('https://www.vz.lt/')
// .then(responce => responce.text())
// .then( data => bbs.addEventListener('click', () => h1.innerHTML = data));

fetch('https://picsum.photos/')
.then(responce => responce.json(i))
.then(console.log(i))