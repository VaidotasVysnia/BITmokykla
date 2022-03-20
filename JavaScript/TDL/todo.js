const darbas = document.querySelector('input');
console.log(darbas);

document.querySelector("#button1").addEventListener('click', ()=>{
    const textN = document.createTextNode(darbas.value);
    const element = document.createElement('li');
    element.appendChild(textN);
    document.querySelector('#ul1').appendChild(element);
    darbas.value = '';
})



