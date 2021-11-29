function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


//while - kai iteraciju skaicius nuo 0 iki begalybes
//do while - kai iteraciju skaicius nuo 1 iki begalybes
// for - kai zinomas tikslus iteraciju (ciklo prasukimo) skaicius



console.log('--------- while -------------');

var cycle1 = 1; 

while (cycle1 <= 5) {
    console.log('Ciklas vyksta', cycle1);
    cycle1++;
}

console.log('--------- do while -------------');

var cycle2 = 1;
do {
    console.log('cikle', cycle2);
    cycle2++;
} while (cycle2 <= 5 );

console.log('--------- do while -------------');

for (var cycle3 = 1; cycle3 <=5; cycle3++){
    console.log('cikle', cycle3);
}

console.log('--------- pasibandymai1 -------------');

var counter = 0;
var h = 0;
var coin;

do {
    coin = rand(0,1) ? 'H' : 'D';
    if (coin == 'H'){
        h++;
    }
    console.log('cikle', ++counter, h);
} while (h < 3 );

console.log('--------- pasibandymai2 -------------');

for (var cycle3 = 1; cycle3 <=5; cycle3++){
    console.log('DIDELIS', cycle3);
    for (var cycle4 = 1; cycle4 <=5; cycle4++){
        console.log('mazas', cycle4);
    }
}

console.log('--------- pasibandymai4 -------------');


var ats = '';

for (var i = 1; i<21; i++){
    if (i !== 1) {
        ats += ',';
    }
    ats += rand (10,29);
   
}
console.log(ats);

console.log('--------- pasibandymai4 / Class -------------');

class Kibiras1 {

static bendrasAkmenuKiekis = 0;

static skaiciuotiVisusAkmenis(kiekis){
    Kibiras1.bendasAkmenuKiekis += kiekis;

}

    constructor() {
        this.akmenuKiekis = 0;
    }

    prideti1Akmeni() {
        this.akmenuKiekis ++;
    }

    pridetiDaugAkmenu(kiekis) {
        this.akmenuKiekis += kiekis;
    }

    kiekPririnktaAkmenu() {
        console.log('Akmenų yra va tiek:', this.akmenuKiekis);
    }
}

const kibiras = new Kibiras1();
const viedras = new Kibiras1();
const kasikas = new Kibiras1();





















console.log('-------------------Sort---------------')

const mas1 = ['cat', 'bird', 'tiger'];

console.log('---1.---');

// mas1.sort((a,b) => {
//     if(a === b) {
//         return 0;
//     }
//     return a < b ? -1 :1;
// });

// console.log(mas1);


// mas1.sort((a,b) => {
//     if(a === b) {
//         return 0;
//     }
//     return a > b ? -1 :1;
// });

// console.log(mas1);

console.log('---2.---');

function sortAsc(data){
    mas1.sort((a,b) => {
        if(a === b) {
            return 0;
        }
        return a > b ? -1 :1;
    });
    return data;
}

console.log(sortAsc(mas1));
