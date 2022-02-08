const CREATED = 'created';
const PROGRESS = 'progress';
const DONE = 'done';

class ToDoList {

    static list = new Map();

    constructor(type){
        this.type = type;
        this.constructor.list.set(this.type, this);
    }

    getUid() {
        const min = 100000000
        const max = 999999999;
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

}



const l1 = new ToDoList(CREATED);
const l2 = new ToDoList(PROGRESS);
const l3 = new ToDoList(DONE);




console.log(ToDoList.list);

console.log(ToDoList.list.get(CREATED).getUid());


console.log(l1.getUid());
console.log(l1.getUid());
console.log(l1.getUid());

//26:30

const arajus = [1, 2, 3, 4]
arajus.splice(1,1)
console.log(arajus);