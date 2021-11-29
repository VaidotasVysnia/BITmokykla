function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log('-----------------07----------------');

for (let i = 0; i < 5; i++) {

if (i === 3){
    break;
}

console.log(i);    
}

console.log('-----------------');

for (let i = 0; i < 5; i++) {

    if (i === 3){
        continue;
    }
    
    console.log(i);    
    }

    console.log('-----------------');
//  'senelis' yra leiblo vardas ir mes breikinam pagal leibla
    senelis: for (let z = 0; z < 5; z++) { 
    tevas: for (let j = 0; j < 5; j++) {
    for (let i = 0; i < 5; i++) {

        if (i === 3){
            break senelis;
        }
        
        console.log(j, i, z);    
        }
    }
}

console.log('-------sprendimas su BREAK---------');



var kin1;

do {
    kin1 = rand (10, 25)
    console.log(kin1);


    if (kin1 == 25) {
        break
    }
} while (kin1 < 26);
console.log('-------SWICH---------');

var a = rand(2, 10)

console.log('a= ', a);
if (a === 6) {
    console.log('A===6'); 
}
else if (a === 8) {
    console.log('A===8'); 
}
else if (a === 10) {
    console.log('A===10'); 
}
else {
    console.log('nei 6, nei 8, nei 10')
}
console.log('-------SWICH---------');




switch (a) {
    case 6: console.log('A===6');  
    break;
    case 8: console.log('A===8');  
    break;
    case 10: console.log('A===10');  
    break;
    default: console.log('nei 6, nei 8, nei 10')
    break;
}

console.log('-------SWICH Omniva---------');

var pack = 'S';
tt: do{
    switch (pack) {
        case 'S' : console.log('galima deti i S');
    if (rand(0,1)) {
        continue;
    }
    case 'M' : console.log('galima deti i M');
    if (rand(0,1)) {
        continue;
    }
    case 'L' : console.log('galima deti i L');
    if (rand(0,1)) {
        continue;
    }
    default: console.log('galima deti i XL');
    if(rand(0,1)) {
        console.log('nera vietos');
        break tt;
    }
    }
}while (true);