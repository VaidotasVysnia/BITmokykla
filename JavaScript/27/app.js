localStorage.setItem('cat', 'miau miau')
localStorage.setItem('dog', 'au au au')

localStorage.removeItem('dog')

console.log(localStorage.getItem('cat'));
console.log(localStorage.getItem('cat'));

localStorage.clear() // isvalo visa spintele
//1
for (let i = 1; i <= 100; i++) {
    localStorage.setItem('dog'+i, 'au au au au') 
}
//2
const kates = [];

for (let i = 0; i < 100; i++) {
    kates.push('cat')   
}
localStorage.setItem('kates', JSON.stringify(kates))
console.log(JSON.parse(localStorage.getItem('kates')));