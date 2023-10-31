const Stack = require('../implementation/Stack')

class Queue {
    constructor() {
        this.s1 = new Stack()
        this.s2 = new Stack()
    }
  
    enQueue(x) {
        this.s1.push(x);
    }
    
    deQueue(){
        if(this.s1.isEmpty() && this.s2.isEmpty())
            return "Queue is empty :("
        if(this.s2.isEmpty()){
            while(this.s1.size != 0){
                this.s2.push(this.s1.pop())
            }
        }
        let x = this.s2.pop();
        return x
    }
};
  
// Driver code
let q = new Queue;
q.enQueue(1);
q.enQueue(2);
q.enQueue(3);
  
console.log(q.deQueue());
console.log(q.deQueue());
console.log(q.deQueue());
