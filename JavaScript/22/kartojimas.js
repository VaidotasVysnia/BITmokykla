const ab = ['a','b','b','a','a','a','a','b','a','a','b','a','a',];
const ab1 = [];
const ab2 = [];
console.log('--1--');
for (let i = 0; i < ab.length; i++) {
    console.log(ab[i]);    
}
console.log('--1--');
ab.forEach( ab => console.log(ab));
console.log('--2--');
for (let i = 0; i < ab.length; i++) {
    ab1.push(i); 
}
console.log(ab1);
console.log('--2--');
ab.forEach( (e, i) => ab2.push(i));
console.log(ab2);
console.log('--3--');
for (let i = 0; i < ab.length; i++) {
    if (ab[i] === 'a') {
        console.log(ab[i]);
    } 
}
console.log('--3--');
ab.forEach( d => {
    if(d ==='a'){
        console.log(d);
    }
} 
)
console.log('--4--');
for (let i = 0; i < ab.length; i++) {
    if (ab[i] === 'b') {
        console.log(i);
    } 
}
console.log('--4--');
ab.forEach( (e, i) => {
    if (e === 'b') {
        console.log(i);
    } 
})
////////////////////////// namu darbai ///////////////////////////
// 1. naudojamas ciklas for. Atskirai padaryti console.log
// kiekvienai masyvo reikšmei + kelintas kartas
// 2. naudojamas ciklas for. Atskirai padaryti console.log
// kiekvienam masyvo indeksui
// 3. naudojamas ciklas for. Atskirai padaryti console.log
// kiekvienai "a" masyvo reikšmei
// 4. naudojamas ciklas for. Atskirai padaryti console.log
// kiekvienam masyvo indeksui, kurio reikšmė yra "b"
console.log('--1--');
const li = document.querySelectorAll('li')
for (let i = 0; i < li.length; i++) {
    console.log(li[i].innerText);
    
}
console.log('--5--');
document.querySelectorAll('li').forEach( (a)=> console.log(a.innerText));

console.log('--2--');
for (let i = 0; i < li.length; i++) {
    console.log(i);
    
}
console.log('--6--');

document.querySelectorAll('li').forEach( (a,i)=> console.log(i));

console.log('--3--');

for (let i = 0; i < li.length; i++) {
    if (li[i].innerText === 'A') {
        console.log(li[i].innerText);
    }
    
}

console.log('--7--');

li.forEach(  value =>  {if (value.innerText === 'A') {
        console.log(value.innerText);
}}
)
console.log('--4--');

for (let i = 0; i < li.length; i++) {
    if (li[i].innerText === 'B') {
        console.log(i);
        
    }
    
}

console.log('--8--');

li.forEach( (e, i) => {
    if (e.innerText === 'B') {
        console.log(i);
        
    }
})

// console.log("----------------Vardine------------------");

// for (let i = 0; i < ab.length; i++) {
//     if ( f1(ab, i) ) {
//         console.log(i);
//     }
// }

// console.log("----------------Anonimine fn------------------");

// for (let i = 0; i < ab.length; i++) {
//     if ( an1(ab, i) ) {
//         console.log(i);
//     }
// }

// console.log("----------------Anonimine =>------------------");

// for (let i = 0; i < ab.length; i++) {
//     if ( an2(ab, i) ) {
//         console.log(i);
//     }
// }
