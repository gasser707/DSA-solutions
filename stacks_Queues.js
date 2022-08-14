class node {

    constructor(val) {
        this.val = val

        this.next = null
    }


}

class stack {
    constructor() {
        this.first = null

        this.last = null

        this.size = 0
    }


    push(val) {

        let temp = new node(val)
        this.size++

        if (!this.first) {
            this.first = temp
            this.last = temp
        } else {
            let temp2 = this.first

            this.first = temp

            temp.next = temp2
        }

        return this.size


    }

    pop() {
        if (!this.first) {
            return undefined
        }

        if (this.first === this.last) {
            this.last = null
        }
        let temp = this.first
        this.first = temp.next
        this.size--

        temp.next = null
        return temp

    }


}

mystack = new stack()

mystack.push(1)
mystack.push(2)
mystack.push(3)



class queue {
    constructor() {
        this.first = null
        this.last = null
        this.size = null
    }

    add(val){

        let temp = new node(val)
        this.size++

        if(!this.first){

            this.first = temp
            this.last = temp

        }else{
           this.last.next= temp
           this.last= temp

        }
        return this.size


    }


    remove(){

        if(!this.first){

            return undefined

        }

        if(this.first===this.last){
            this.last=null
        }

        let temp = this.first

        this.first= temp.next

        temp.next=null

        this.size --

        return temp


    }

    showContent() {
        let temp = this.first;

        while (temp) {
            console.log(temp.val);

            temp = temp.next;
        }
    }


}


q = new queue()

q.add(1)
q.add(2)
q.add(3)
q.add(4)