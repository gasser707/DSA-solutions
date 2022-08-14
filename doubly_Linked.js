class node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class doubly_Linked {
    constructor() {
        this.head = null;

        this.tail = null;

        this.length = 0;
    }

    push(val) {
        if (!this.head) {
            let temp = new Node(val);
            this.head = temp;
            this.tail = temp;

            this.length++;
            return this;
        }

        let temp = new Node(val);

        this.tail.next = temp;

        temp.prev = this.tail;

        this.tail = temp;

        this.length++;

        return this;
    }

    pop() {
        if (!this.head) {
            return undefined;
        }

        let temp = this.tail;

        let newtail = this.tail.prev;

        if (!newtail) {
            this.length--;
            this.head = null;
            this.tail = null;
            return temp;
        }

        newtail.next = null;

        this.tail = newtail;

        this.length--;

        temp.prev = null;

        return temp;
    }



    shift() {
        if (!this.head) {
            return undefined;
        }

        let temp = this.head;

        let newHead = this.head.next;

        this.length--;

        temp.next = null;


        if (newHead) {
            this.head = newHead;

            newHead.prev = null


        } else {
            this.head = null
            this.tail = null

        }

        return temp;



    }

    unshift(val) {

        let temp = new Node(val)
        this.length++

        if (!this.head) {

            this.head = temp
            this.tail = temp

            return this
        }

        let oldHead = this.head

        oldHead.prev = temp

        temp.next = oldHead
        this.head = temp

    }

    get(index) {
        if (!this.head || index < 0 || index >= this.length) {
            return undefined
        }

        let temp

        let ctr

        if (index <= this.length / 2) {
            temp = this.head

            ctr = 0

            while (ctr < index) {
                temp = temp.next
                ctr++

            }


        } else {
            temp = this.tail
            ctr = this.length - 1

            while (ctr !== index) {
                temp = temp.prev
                ctr--
            }


        }

        return temp



    }


    set(index,val){

        let temp =this.get(index)

        if(temp){
            temp.val=val
            return true
        }   

        return false

    }


    insert(index,val){

        if(index ===0){
            this.unshift(val)
            return
        }

        if(index===this.length){
            this.push(val)
            return
        }


        let temp = this.get(index-1)

        let temp2 = this.get(index)

        if(!temp || !temp2){
            return false
        }

        let newNode = new Node(val)

        temp.next=newNode

        newNode.prev =temp

        newNode.next=temp2

        temp2.prev=newNode

    }

    remove(index){

        if(index==0){
            this.shift()
            return
        }

        if(index===this.length-1){
            this.pop()
            return
        }

        let temp= this.get(index-1)

        let temp2 = this.get (index)

        let temp3 = this.get(index+1)

        temp.next= temp3

        temp2.next=null
        temp2.prev=null

        temp3.prev= temp

        this.length--

    }

    reverse(){

        let current = this.tail

        this.tail = this.head

        this.head = current

      

        while(current){

            let temp = current.next
            
            current.next = current.prev

            current.prev = temp

            current = current.next

        }

        


    }



    showContent() {
        let temp = this.head;

        while (temp) {
            console.log(temp.val);

            temp = temp.next;
        }
    }
}

list = new doubly_Linked();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push("hi");
