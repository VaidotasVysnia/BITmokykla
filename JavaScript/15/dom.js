function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const h1 = document.querySelectorAll('h1');

h1.forEach( b => b.style.color = 'green');
// console.log(h1);



// const ul = document.querySelector('ul');

// const li = document.querySelectorAll('li')

// console.log(li);



// for (let index = 0; index < li.length; index++) {
   
   
//    li[index].style.fontSize = rand(10, 40) + 'px';
    

// }

// li.forEach( b => b.style.fontSize = rand(10, 40) + 'px')

const klases = ['one', 'two', 'three']
const color = ['yellow', 'green', 'red'];
const ul = document.querySelectorAll('ul');

console.log(ul);

for (let index = 0; index < ul.length; index++) {
    const li = ul[index].querySelectorAll('li');
   
    
    for (let j = 0; j < li.length; j++) {
        li[j].style.color = color[index%3];
        li[j].style.fontSize = rand(10, 40) + 'px';
        li[j].classList.add(klases[j])
    }
}
