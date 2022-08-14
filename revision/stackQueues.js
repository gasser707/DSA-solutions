class node {
    constructor(val, next) {
        this.val = val;
        this.next = next;
    }
}

class stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(val) {
        this.size++;
        let newNode = new node(val, this.first);
        if (this.size === 1) {
            newNode.next = null;
            this.first = newNode;
            this.last = newNode;
            return;
        }
        this.first = newNode;
    }
    pop() {
        if (this.size === 0) return;
        this.size--;
        let newNode = this.first;
        this.first = this.first.next;
        newNode.next = null;
        return newNode;
    }

    print() {
        let arr = [];
        let current = this.first;
        for (let i = 0; i < this.size; i++) {
            arr.push(current.val);
            current = current.next;
        }
        console.log(arr);
    }
}

class queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(val) {
        this.size++;
        let newNode = new node(val, null);
        if (this.size === 1) {
            this.first = newNode;
            this.last = newNode;
        }
        this.last.next = newNode;
        this.last = newNode;
    }

    dequeue() {
        if (this.size == 0) return;
        let temp = this.first;
        this.first = this.first.next;
        temp.next = null;
        this.size--;
        if (size === 1) this.last = this.first;
        return temp;
    }

    print() {
        let arr = [];
        let current = this.first;
        for (let i = 0; i < this.size; i++) {
            arr.push(current.val);
            current = current.next;
        }
        console.log(arr);
    }
}

let newStack = new stack();

newStack.push(1);
newStack.push(2);
newStack.push(3);
newStack.push(4);
newStack.push('apple');
newStack.print();
newStack.pop();
newStack.pop();
newStack.print();

let newQueue = new queue();

newQueue.enqueue(1);
newQueue.enqueue(2);
newQueue.enqueue(3);
newQueue.enqueue(4);
newQueue.enqueue(5);
newQueue.enqueue('apple');
newQueue.print();
newQueue.dequeue();
newQueue.dequeue();
newQueue.print();



