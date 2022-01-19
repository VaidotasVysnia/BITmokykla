

const black = document.querySelector('.black');

console.log(black);

const goClick = event => console.log('pele padare click');

black.addEventListener('click', goClick);

/////////////////////////////////////////////


const circle = document.querySelector('.circle');


let clickNr = 0
const klikas = () =>
{
    
    if (clickNr % 2 === 0) {
        circle.style.backgroundColor = 'green';
       clickNr++
    } else {
        circle.style.backgroundColor = 'brown';
        clickNr++
    }
}

circle.addEventListener('click', klikas);

// const klikas = function()
// {
//     if (clickNr % 2 === 0) {
//         circle.style.backgroundColor = 'green';
//     }
//     else {
//         circle.style.backgroundColor = 'blue';
//     } 
//     clickNr++
// }



