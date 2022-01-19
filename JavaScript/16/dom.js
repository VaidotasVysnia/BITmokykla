function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const cont = document.querySelector('.container');
console.log(cont);

const dv = cont.querySelectorAll('div');
console.log(dv);

for (let i = 0; i < dv.length; i++) {
    if (i%2 === 0) {
        dv[i].style.backgroundColor = 'darkorange';
        dv[i].style.height = '30px';
        dv[i].style.width = '30px';
        dv[i].style.transition = 'all 2s';


    } 
    else {
        dv[i].classList.add('class1');  
    }
    
}