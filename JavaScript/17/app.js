function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


console.log('---------06/11---------');
// <!-- Nuspalvinti zaliai a taga, raudonai H1-->
const linkA = document.querySelector('a')
console.log(linkA);
linkA.style.color = 'green';

const h1a = document.querySelector('h1')
h1a.style.color = 'red';

// <!-- Su JS padaryti taip, 
// kad paspaudus ant Link, Labas pakeistu splva i melyna -->

const klikasb = (funb) => {linkA.style.color = 'blue'; funb.preventDefault();}
linkA.addEventListener('click', klikasb);

// <!-- Su JS padaryti kad paspaudus ant bet kokio divo 
// jis pranyktu (display: none)-->

const divc = document.querySelectorAll('div');
console.log(divc);

for (let index = 0; index < divc.length; index++) {
    
    

//    const klikasc = ()  =>divc[index].style.display = 'none';
   const klikasc = ()  =>divc[index].remove();


   divc[index].addEventListener('click', klikasc)
}

// <!-- D -->
// <!-- Su JS padaryti kad paspaudus ant bet kokio divo jis butu istrintas 
// (google js element remove)-->


// <!-- E -->
// <!-- Su JS padaryti kad paspaudus ant Dukros jis butu istrinti 
// (google js element remove) ir Tevas ir Dukra-->

const itevase = document.querySelector('i');
const spandukrae = itevase.querySelector('span')

const klikase = ()=> {
    itevase.remove();
}
 

spandukrae.addEventListener('click', klikase)

const newDukra = document.createElement('span');

const nameOfDukra = document.createTextNode('Dukra 2');
newDukra.appendChild(nameOfDukra);

 const oldDukra = document.querySelector('span');
 const tevas = document.querySelector('i');

tevas.insertBefore(newDukra, oldDukra);

// <!-- F -->
// <!-- i kiekviena h2 taga prideti span su tekstu "patys sugalvokit" -->
// <!-- F1 -->
// <!-- i kiekviena h2 taga prideti span su tekstu "1" toliau "2" -->

const h2f = document.querySelectorAll('h2');




for (let i = 0; i < h2f.length; i++) {
    const newspanf = document.createElement('span');
    const spantext = document.createTextNode(i+1);

    newspanf.appendChild(spantext)

    h2f[i].appendChild(newspanf) 
}
