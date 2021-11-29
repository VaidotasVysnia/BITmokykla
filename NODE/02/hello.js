// var ksk = 3;
// var sk;

// sk = ksk++ - ++ksk - --ksk - --ksk + ksk--;
// //   3      -5     -   4    -   3   + 3  = -6
// console.log(sk);


// console.log("--------MASYVAI-----------");

// var m =  [1, 2, 3, 4];

// console.log(m);

// // m[2] = 22;

// console.log(m[0]);

// console.log(m.length);
// console.log("--------MASYVAI-----------");

// var i = 0;
// var j = 0;
// var vid;

// // if (i<=m.length){
// //     j= m[i]+j;
// //     i++
// // }
// // else (console.log(j));
// do {

// } while (condition);

// // else (console.log(j/m.lenght));
// // do {
// // j =  m[i]+ j;
// //     i++;
// // } while (i <= m.length);
// // console.log(j)

// // console.log(j);
// // console.log(i);
// // var ats = j / m.length;
// // console.log(m);
// //  console.log(ats);

// let masina = {
//     pavadinimas: "ford",
//     greitis: 0,
//     kelias: 0,
//     gazas: function(kiek) {
//         this.greitis += kiek;
//     },
//     stabdis: function(kiek) {
//         this.greitis -= kiek;
//     },
//     vaziuojam: function() {
//         this.kelias  += this.greitis;
//     },
// }

// console.log(masina);

// function Obuolys() {
//     this.dydis = 10;
//     this.spalva = "zalias";
//     this.nokstam = function() {
//     if (this.dydis < 150) {
//     this.dydis += Math.trunc(Math.random() * 80 + 20);
//     } else {
//     if (this.spalva == "zalias") {
//     this.spalva = "geltonas";
//     } else if (this.spalva == "geltonas") {
//     this.spalva = "raudonas";
//     }
//     }
//     };
//     this.arPrinokes = function() {
//     if (this.dydis >= 150 && this.spalva == "raudonas") {
//     return true;
//     } else {
//     return false;
//     }
//     };
//     }
//     let o1 = new Obuolys();
//     let o2 = new Obuolys();
//     while (!o1.arPrinokes()) {
//     o1.nokstam();
//     console.log(o1);
//     }
//     console.log("Valgom", o1);
//     console.log("O sitas dar neprinokes", o2);

// ieskom kintamojo savo scope
// {
//     let a = 10;
//     console.log(a);
// }

// // ieskom kintamojo isoriniame scope
// {
//     let b = 15;
//     {
//         let a = 10;
//         console.log(a + b);
//     }
// }

// // ieskom kintamojo leksiskai teviniame scope
// {
//     let c = 10;
//     function test() {
//         let b = 15;
//         {
//             let a = 10;
//             console.log(a + b + c);
//         }
//     }
//     test();
// }

// // ieskom kintamojo tarp 'global' (nasyklese 'window') savybiu
// global.d = 12;
// {
//     let c = 10;
//     function test() {
//         let b = 15;
//         {
//             let a = 10;
//             console.log(a + b + c + d);
//         }
//     }
//     test();
// }

// class Butas {
//     constructor(nr, plotas) {
//     this.nr = nr;
//     this.plotas = plotas;
//     }
//     }
//     class Namas {
//     constructor(aukstai, laiptines, spalva = "pilkas") {
//     this.aukstai = aukstai;
//     this.laiptines = laiptines;
//     this.spalva = spalva;
//     this.butai = [];
//     for(let i = 1; i <= aukstai * laiptines * 3; i++) {
//     this.butai.push(new Butas(i, Math.trunc(Math.random() * 100 + 20)))
//     }
//     }
//     }
//     let n1 = new Namas(5, 3);
//     let n2 = new Namas(9, 2);
//     let n3 = new Namas(5, 5, "zalias");
//     let n4 = new Namas(7, 2, "raudonas");
//     console.log(n1);
//     console.log(n2);
//     console.log(n3);
//     console.log(n4)
function Obuolys() {
    this.dydis = 10;
    this.spalva = "zalias";
}
Obuolys.prototype.nokstam = function () {
    if (this.dydis < 150) {
        this.dydis += Math.trunc(Math.random() * 80 + 20);
    } else {
        if (this.spalva == "zalias") {
            this.spalva = "geltonas";
        } else if (this.spalva == "geltonas") {
            this.spalva = "raudonas";
        }
    }
};
Obuolys.prototype.arPrinokes = function () {
    if (this.dydis >= 150 && this.spalva == "raudonas") {
        return true;
    } else {
        return false;
    }
};
let o1 = new Obuolys();
let o2 = new Obuolys();
console.log(o1);
console.log(o2);
while (!o1.arPrinokes()) {
    o1.nokstam();
    console.log(o1);
}
console.log("Valgom", o1);
console.log("O sitas dar neprinokes", o2);

console.log(o2.arPrinokes());
o2.arPrinokes = function () {
    console.log("sitas visada prinokes");
    return true;
}
console.log(o2.arPrinokes());
console.log(o1.arPrinokes());