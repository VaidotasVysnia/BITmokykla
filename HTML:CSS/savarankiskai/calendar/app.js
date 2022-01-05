class WorkCalendar {

        constructor(type) {
            this.type = type;
        }
    
    getUid(min, max) {
     min = 100000000;
     max = 9999999;
        return Math.floor(Math.random() * (max - min +1)) + min;
    }


}

const l1 = new WorkCalendar();
const l2 = new WorkCalendar();
const l3 = new WorkCalendar();
