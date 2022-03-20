function arrToObj (x){
const obj = {};
    for (let i = 0; i < x.length; i++) {

        let id = 'a'+(i+1);
        console.log(id);
        obj[id] = x[i];
    }
    return obj
}
/////////////////////////
function objToArr (x){
const arr = [];
for (const key in x) {
    arr.push(x[key])
        
    }
    return arr
}
//////////////////////////////////////

// Uzduotis: areju paversti i objekta ir paskui atversti atgal i areju
const ar1 = [55, 32, 78, 1110, 3, 2347, 32, 9]; // => {a1: 55, a2: 32, a3: 78,.......}
const ar2 = [65, 324, 905, 32];
const arr3 = [5, 8, 9, 22]
const json = '[{"id":1,"title":"Gro\u017ein\u0117 literat\u016bra"},{"id":2,"title":"Populiarioji psichologija"},{"id":3,"title":"Literat\u016bra vaikams ir jaunimui"},{"id":4,"title":"Pom\u0117giai"},{"id":5,"title":"\u0160eima, sveikata"},{"id":6,"title":"Literat\u016bra u\u017esienio kalbomis"},{"id":7,"title":"Dalykin\u0117 literat\u016bra"},{"id":8,"title":"Vadov\u0117liai, pratybos ir knygos mokslams"}]';
//1
let obj1 = arrToObj(ar1);
let obj2 = arrToObj(ar2)
console.log(obj1);
console.log(obj2);
//2
let newArr1 = objToArr(obj1)
let newArr2 = objToArr(obj2)
console.log(newArr1);
console.log(newArr2);
//3 sukurti 2 masyvus. Vienas reiksmes padaugintos is 2, kitas reiksmes pakeltos kvadratu
const arr3x2 = [];
const arr3xi = [];
arr3.forEach( (e)=>{
    arr3x2.push(e*2)
    arr3xi.push(e*e)
})

const arr3map = arr3.map( e => e*2) // cia ne nuoroda i sena masyva o masyvo kopija 
console.log('arr3map= ', arr3map);
console.log(arr3);
console.log(arr3x2);
console.log(arr3xi);

//5  (is JSON padaryti sarasa su 'li' elementais, kuriuose yra knygu kategorijos. 
// Ir padaryti, kad sarasas butu isrusiuotas pagal title abeceles tvarka)

// console.log(json);

window.addEventListener('DOMContentLoaded', () => {
const obj5 = JSON.parse(json)
console.log(obj5);

obj5.sort((a, b) =>{
    if (a.title > b.title) {
        return 1
    }
    if (a.title < b.title) {
        return -1
    }
    else{
        return 0
    }

    console.log(obj5);

})
const ul = document.querySelector('ul')

for (let i = 0; i < obj5.length; i++) {
    const li = document.createElement('li')
    const text = document.createTextNode(obj5[i].title)
    li.appendChild(text)
    ul.appendChild(li)
}

})




// const textN = document.createTextNode(iB.value); // DOM dalis
//         const element = document.createElement('h1');    // DOM dalis
//         element.appendChild(textN);
//         bodis.appendChild(element);   