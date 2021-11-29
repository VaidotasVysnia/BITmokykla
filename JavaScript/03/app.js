function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log('---------------03---------------');

var animal;

if (rand(0, 1) === 0 ){
    animal = 'Dramblys'
}
else {
    animal = 'Zirafa'
}
console.log(animal);

var animal2 = rand(0, 1) ===0 ? 'Dramblys' : 'Asilas';

console.log(animal2);

var bird;


// var now = (typeof bird === 'undefined') ? 'zylute' : bird;
var now = bird ?? 'zylute';

console.log('now',  now);

console.log(!1);

// ARBA ||
// IR   &&
console.log('true || true', true || true);
console.log('false || true', false || true);
console.log('true || false', true || false); 
console.log('false || false', false || false);

console.log('true && true', true && true);
console.log('false && true', false && true);
console.log('true && false', true && false); 
console.log('false && false', false && false);

var a1 = 0;
var a2 = 3;
var a3 = 18;

var end = a1 || a2 || a3;
var end2 = a1 && a2 && a3;
var end3 = a1 ?? a2 ?? a3;

console.log(end);
console.log(end2);
console.log(end3);


var zz = null;
var bb = null;

var count = zz ?? 100 + bb?? 5;
console.log(count);