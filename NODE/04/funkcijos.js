// function masyvoVidurkis(m) {
//     let v = 0;
//     for (const e of m) {
//         v += e;
//         }
//         v = v / m.length;
//         counter++;
//         return v;
// }
// function masyvoVidurkis(m) {
//     let v = 0;
//     for (const e of m) {
//     v += e;
//     }
//     v = v / m.length;
//     return v;
//     }


// const m1 = [1, 2, 3, 4, 5, 6, 7];
// const m2 = [5, 5, 4, 100];
// const m3 = [20, 40, 54, 105, 87];

// // let v1 = 0
// // for (const e of m1) {
// //     v1 += e;
// //     }
// //     v1 = v1 / m1.length;

// let v1 = masyvoVidurkis(m1);
// let v2 = masyvoVidurkis(m2);
// let v3 = masyvoVidurkis(m3);

// console.log(v1);
// console.log(v2);
// console.log(v3);

// console.log(suma(1, 2));
// console.log(suma);
// let kita = suma;
// console.log(kita(3, 4));
// console.log(kita);
// console.log("-------");
// suma = "jau ne funkcija";
// console.log(suma);
// console.log(kita);
// function suma(a, b) {
// return a + b;
// }

// function calc(veiksmas) {
//     function suma(a, b) {
//     return a + b;
//     }
//     function atimtis(a, b) {
//     return a - b;
//     }
//     function kvadratas(a) {
//     return a * a;
//     }
//     if (veiksmas == "sum") {
//     return suma;
//     } else if (veiksmas == "sub") {
//     return atimtis;
//     } else if (veiksmas == "sqr") {
//     return kvadratas;
//     }
//     }
//     console.log(calc("sqr")(5));
//     console.log(calc("sum")(10, 15));

//     let sum1 = calc('sum');
//     let sum2 = calc('sum');

//     if (sum1 === sum2){
//         console.log('ta pati');
//     } else{
//         console.log('ne ta pati');
//     }


//     function inc(sk) {
//         sk++;
//         console.log(sk);
//         }
//         let a = 2;
//         inc(a);
//         console.log(a);

//         function ipilk(puodukas, kiek = 0) {
//             puodukas.kiekis += kiek;
//             }
//             let p = {
//             spalva: "rudas",
//             turis: 300,
//             kiekis: 0
//             };
//             ipilk(p, 100);
//             console.log(p);

            // function suma(a, b) {
            //     console.log(r);
            //     return a + b;
            //     }
            //     function atimtis(a, b) {
            //     console.log(r);
            //     return a - b;
            //     }
            //     function kvadratas(a) {
            //     console.log(r);
            //     return a * a;
            //     }
            //     function calc(veiksmas, a, b) {
            //     let r = Math.random();
            //     return veiksmas(a, b);
            //     }
            //     console.log(calc(kvadratas, 5));
            //     console.log(calc(suma, 5, 7));

            let puodukas = {
                spalva: "rudas",
                turis: 300,
                kiekis: 80,
                ipilk: function(kiek) {
                this.kiekis += kiek;
                },
                isgerk: function(kiek) {
                this.kiekis -= kiek;
                }
                };
                console.log(puodukas);
                puodukas.ipilk(100);
                console.log(puodukas);


                console.log(global);
let fi = puodukas.ipilk;
fi(101);
console.log(global);
console.log(puodukas);