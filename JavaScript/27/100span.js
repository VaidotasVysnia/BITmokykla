// const textN = document.createTextNode(iB.value); // DOM dalis
//         const element = document.createElement('h1');    // DOM dalis
//         element.appendChild(textN);
//         bodis.appendChild(element);   

for (let index = 0; index < 100; index++) {

    const tekstas = document.createTextNode(index+1)
    const spanas = document.createElement('span')
    spanas.appendChild(tekstas);
    document.querySelector('body').appendChild(spanas)
}