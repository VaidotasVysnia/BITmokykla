console.log("-----------ARRAY------------");

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


var komoda  = ['obuolys', 'suo', NaN, 'gyvate', 58,'plastikines geles'];

console.log(komoda);
console.log(typeof komoda);
console.log(komoda[2]);

// komoda[2]++;
console.log(komoda);
komoda[1] = 'anakonda';
console.log(komoda);

var trysKintamieji = [rand(1, 10), rand(1, 10), rand(1, 10), komoda];
console.log(trysKintamieji);

console.log('masyvo ilgis', komoda.length);
console.log('masyvo paskutinis stalcius:', komoda[komoda.length - 1]);
 
for (var index = 0; index < komoda.length; index++){
    console.log('stalcius Nr.', + index, komoda[index]);
}
console.log('--------------------------------');

var namas = ['PirmasA', 'AntrasA', 'TreciasA', 'KetvirtasA'];
namas[4] = 'stogas';
/--------------------------------------------------//
namas.push('dangus'); //prideda elementa i gala
namas.unshift('cokolis'); //prideda elementa i prieko
namas.shift(); // istraukia elementa is priekio
namas.pop(); // isima elementa is pabaigos
/--------------------------------------------------//


console.log();
console.log('push', namas.push('kosmosas'));

for (var index = 0; index <namas.length; index++){
    console.log('Aukstai:', index, namas[index]);
}

/--------------------------------------------//
console.log('-------------------------');

var tuscias = [];

for (var index = 0; index < 10; index++) {
  console.log(tuscias.push(rand(1, 10)));
}
console.log('pilnas= ', tuscias);

console.log(namas.indexOf('stogas')); //suranda kelintas yra tas elementas

console.log(namas);

namas.splice(3, 1); //nuo trecio elemento istrina viena elementa

console.log(namas);

var sk = [55, 33, 45, 67, 33, 87, 22, 33, 100];

var trinti;

console.log(sk);

while((trinti = sk.indexOf(33)) >= 0 ) {
    sk.splice(trinti, 1);
    
};
console.log(sk);
