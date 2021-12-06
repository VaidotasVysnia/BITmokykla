function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log("--------------- 1 --------------");

for (let a = 0; a < 5; a++) {
    console.log("Labas");
    
}
console.log("--------------- 2 --------------");

for (let a = 0; a < 6; a++) {
    console.log(a);
}
console.log("--------------- 3 --------------");
var a3 = 0;

for (let a = 0; a < 5; a++) {
    console.log(a3);
    a3 = a3 + 10;
    
}

console.log("--------------- 4 --------------");
var a4 = 49;

for (let a = 0; a < 5; a++) {
    console.log(a4);
    a4 = a4 + 1;
    
}
console.log("--------------- 5 --------------");

var a5 = 4;

for (let a = 0; a < 5; a++) {
    console.log(a5);
    a5 = a5 - 1;
    
}

console.log("--------------- 6 --------------");
var a6 = 0;

for (let a = 0; a < 5; a++) {
    console.log(a6);
    a6 = a6 + 2;
    
}
console.log("--------------- 7 --------------");

for (let a = 0; a < 5; a++) {
    var a7 = rand(0 , 10);
    console.log(a7);
    
}
console.log("--------------- 8 --------------");
do {
    var a8 = rand(1,10)
    console.log(a8);
} while (a8 != 5);
console.log("--------------- 9 --------------");
var b9 = 0;
do {
    var a9 = rand(1,10)
    console.log(a9);
    b9 = b9 + a9;
    // a9 = a9 + a9;
} while (b9 < 20);
console.log("--------------- 10 --------------");
let b10 = 0;
let a10 = 0;
do {
    a10 = rand(0,10)
    b10++
    console.log(a10)
} while (a10 != 5 && a10 != 7);
console.log('prasukimai:', b10);

console.log("--------------- 11 --------------");
let nr1 = 0
ciklas1 = 0
 
do{
    nr1 = rand (0, 10)
    ciklas1 ++
    console.log(nr1)

}while( nr1 !=5 && nr1 !=7 )
console.log( 'prasisuku:',  ciklas1);