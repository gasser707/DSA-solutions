class node {
    constructor(val, next) {
        this.val = val;
        this.next = next;
    }
}
class sLinkedList {
    constructor() {
        this.tail = null;
        this.head = null;
        this.size = 0;

    }

    push(val) {
        this.size++;
        let temp = new node(val, null);
        if (this.head) {
            this.tail.next = temp;
            this.tail = temp;
            return;
        }

        this.head = temp;
        this.tail = temp;
    }
    get(index) {
        if (index >= this.size || index < 0) return;
        let counter = 0;
        let current = this.head;
        while (counter !== index) {
            current = current.next;
            counter++;
        }
        return current;
    }
    pop() {
        if (!this.head) return;
        if (this.size === 1) {
            let temp = this.head;
            this.head = null;
            this.tail = null;
            this.size--;
            return temp;
        }
        let newTail = this.get(this.size - 2);
        let temp = this.tail;
        this.tail = newTail;
        this.tail.next = null;
        this.size--;
        return temp;
    }
    shift() {
        if (!this.head) return;
        let temp = this.head;
        if (this.size === 1) {
            this.tail = null;
            this.head = null;
        }
        else
            this.head = temp.next;
        temp.next = null;
        this.size--;
        return temp;
    }
    unshift(val) {
        let temp = new node(val, this.head);
        this.head = temp;
        this.size++;
    }

    set(index, val) {
        let temp = this.get(index);
        if (temp) temp.val = val;
    }

    insert(index, val) {
        if (index === 0) return this.unshift(val);
        let current = this.get(index - 1);
        if (!current) return;
        let temp = new node(val, current.next);
        current.next = temp;
        this.size++;
        return temp;
    }
    remove(index) {
        if (index === 0) return this.shift();
        if (index === this.size - 1) return this.pop();

        let current = this.get(index - 1);
        if (!current) return;
        let temp = current.next;
        current.next = temp.next;
        temp.next = null;
        this.size--;
        return temp;
    }
    reverse() {
        if (this.size === 0 || this.size === 1) return;
        let current = this.head.next;
        let newNext = this.head;
        newNext.next = null;

        let tempo = this.head;
        this.head = this.tail;
        this.tail = tempo;

        while (current) {
            let temp = current.next;
            current.next = newNext;
            newNext = current;
            current = temp;
        }

    }

    print() {
        if (this.size === 0) return;
        let arr=[]
        let current = this.head;
        while (current) {
            arr.push(current.val);
            current = current.next;
        }
        console.log(arr)
    }
}

let list = new sLinkedList();

list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.push('apple');
list.print();

list.reverse();
list.print();

list.unshift(0);
list.print();

list.shift();
list.print();

console.log(list.pop());
list.print();

list.remove(3);
list.print();

list.insert(4, 'mango');
list.print();

list.set(2, 'hi');
list.print();