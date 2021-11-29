function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log('------------1.A---------------');

var a1 = 7;
var a2 = 16;
var a3 = 22;

var ats1a = a1 + a2 +a3;
console.log(a1, a2, a3);
console.log('Ats 1.A= ',ats1a);

console.log('------------1.B---------------');
var string = '';
string = String(a1) + String(a2) + String(a3);
console.log('Ats 1.B=   ', string);
console.log('------------1.C---------------');
string = String(a1) + String(' ') + String(a2) + String(' ') + String(a3);
console.log('Ats 1.B= ', string);
console.log('------------1.D---------------');

string = String(a1) + ' ' + String(a2) + ' ' + String(a3)+ String(' suma=') +ats1a;

console.log('Ats 1.B= ', string);
console.log('------------2.---------------');
var b2 = rand(5, 25);
console.log(b2);






