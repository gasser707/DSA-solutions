class node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class singleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    if (this.length === 0) {
      this.head = new node(val);
      this.tail = this.head;
      this.length++;
    } else {
      this.tail.next = new node(val);
      this.tail = this.tail.next;
      this.length++;
    }
  }

  pop() {
    if (!this.head) return undefined;

    var current = this.head;
    var newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift() {
    if (!this.head) {
      return undefined;
    }
    let temp = this.head;

    this.head = this.head.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }

    return temp;
  }

  unshift(val) {
    let temp = new node(val);
    if (!this.head) {
      this.head = temp;
      this.tail = temp;
    } else {
      temp.next = this.head;
      this.head = temp;
    }

    this.length++;
    return this;
  }

  get(index) {
    if (index >= this.length || index < 0 || !this.head) {
      return undefined;
    }
    let ctr = 0;
    let temp = this.head;
    while (ctr < index) {
      temp = temp.next;
      ctr++;
    }
    return temp;
  }

  set(index, val) {
    let temp = this.get(index);
    if (temp) {
      temp.val = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    if (index > this.length || index < 0 || !this.head) {
      return undefined;
    }
    if (index === 0) {
      this.unshift(val);
      return;
    }
    if (index === this.length) {
      this.push(val);
      return;
    }
    let ctr = 0;
    let temp = this.head;
    while (ctr < index - 1) {
      ctr++;
      temp = temp.next;
    }
    let value = new node(val);
    let next = temp.next;
    temp.next = value;
    value.next = next;
    this.length++;
  }

  remove(index) {
    if (!this.head || index < 0 || index >= this.length) {
      return undefined;
    }

    if (index === 0) {
      this.shift();

      return;
    }

    if (index === this.length - 1) {
      this.pop();

      return;
    } else {
      let temp = this.get(index - 1);
      let temp2 = this.get(index);
      temp.next = temp2.next;
      this.length--;
      return;
    }
  }

  reverse() {
    if (!this.head) {
      return undefined;
    }


    var previous = null

    var current = this.head

    var future = true

    this.head = this.tail
    this.tail = current



    while (future) {

      future = current.next

      current.next = previous
      previous = current
      current = future


    }


    return this
  }

  showContent() {
    let temp = this.head;
    while (temp) {
      console.log(temp.val);
      temp = temp.next;
    }
  }
}

list = new singleLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push("hi");
