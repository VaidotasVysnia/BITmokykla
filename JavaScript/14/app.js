const logHi = function() {
    console.log(this.valueOf());
}

String.prototype.labas = logHi;


const kate = new String('dvi kates');
const suo = new String('du sunys');
const pele = new String('daaug peliu')

console.log(kate);
console.log(kate.indexOf('at'));


kate.labas();
suo.labas();
pele.labas();
// logHi();
// logHi();
// logHi();

// stringas turi moketi i konsole isvesti pasiskaiciaves kiek turi a raidziu

const countA = function() {
    let skaicius = 0
    for (let index = 0; index < this.length; index++) {
            if (this[index] === 'a') {
                skaicius++
            }        
    }
    return skaicius
}

String.prototype.counterA = countA;

 
v = '';
console.log(kate.counterA());
console.log(suo.counterA());
console.log(pele.counterA());



const vidurkis = (...arg) => {
    let counter = 0;
    for (let index = 0; index < arg.length; index++) {
        counter += arg[index]
        
    }
    let vidurk = counter / arg.length;
    console.log(arg);
    console.log(vidurk);
}
const arr = [5, 55, 45, 34, 95]

vidurkis(...arr);

