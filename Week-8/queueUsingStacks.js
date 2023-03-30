class Queue {
    constructor () {
        this.s1 = [];
        this.s2 = [];
    }

    enQueue (x) {
        this.s1.push(x);
    }

    deQueue () {
        if (this.s1.length === 0 && this.s2.length === 0) {
            return 'Queue is empty';
        }

        if (this.s2.length === 0) {
            while (this.s1.length !== 0) {
                this.s2.push(this.s1.pop());
            }
        }

        let result = this.s2.pop();
        return result;
    }
}

let q = new Queue;
q.enQueue(1);
q.enQueue(2);
q.enQueue(3);
  
console.log(q);
console.log(q.deQueue());
console.log(q.deQueue());
q.enQueue(4);
console.log(q.deQueue());