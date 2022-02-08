const slider = document.querySelector('img')

console.log(slider);


const radio1 = 'radio1.jpeg';
const radio2 = 'radio2.jpg';
const radio3 = 'radio3.jpeg';

const rr1 = document.querySelector('#rr1');
const rr2 = document.querySelector('#rr2');
const rr3 = document.querySelector('#rr3');

console.log(rr1);

document.querySelector('#rr1').addEventListener('click', ()=> {
    console.log('rrrrrrrr1');
});

document.querySelector('#rr2').addEventListener('click', ()=> slider.setAttribute('src', radio2));
document.querySelector('#rr3').addEventListener('click', ()=>  slider.setAttribute('src', radio3));


