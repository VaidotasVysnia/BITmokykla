function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log('-----------FUNKCIJOS---------------');

const A = 1;
const B = 3;
const c = 2;

console.log('-----------7----------');
// Paršyti funkcija kuri masyve visas jo reikšmes pakeistų į atsitiktinai sugeneruotus spalvų
// stringus: “red”, “blue” arba “green”. Funkcija turi turėti du argumentus, vienas
// generuojamas masyvas, o kitas funkcija - splvų generatorius. Pademostruoti veikimą;

const arr7 = [1, 2, 3, 4, 5]
const arr7col = ['red', 'green', 'blue']

function generator(a, b) {
    for (let index = 0; index < a.length; index++) {
        colorgen = [];
        colorgen.push(b[rand(0, 2)])
        
    }
    return colorgen
}
console.log(generator(arr7, arr7col));