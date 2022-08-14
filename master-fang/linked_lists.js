
 class SingleListNode{
    constructor(val, next){
        this.value = val
        this.next = next
    }   
}

class SingleLinkedList {
   
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }


    print(){
        let current = this.head

        let arr = []
        while(current){
            arr.push(current.value)
            current = current.next
        }
        console.log(arr)
    }

    push(val){
        
        let newNode =  new SingleListNode(val,null)
        if(!this.head)
        this.head =  newNode

        if(!this.tail)
        this.tail = newNode
        else{
        this.tail.next = newNode
        this.tail = newNode
        }
        this.length++
        return newNode
    }

    pop(){
        if(!this.head) return

        if(this.length ===1) {
            let node = this.head
            this.head = null
            this.tail = null
            this.length--
            return node
        }

        let beforeLast = this.head

        // 1->2->3->4->5
        while(beforeLast.next.next){
            beforeLast = beforeLast.next
        }

        const last= beforeLast.next

        this.tail = beforeLast
        this.tail.next = null

        this.length--
        return last

    }

    shift(){

        if (!this.head) return

        let node = this.head
        this.head = this.head.next
        this.length--

        node.next = null

        return node
    }

    unshift(val){

    let node = new SingleListNode(val, this.head)
    this.head = node
    this.length++
    return node

    }

    get(index){
        if (!this.head || index >= this.length ) return

        let current = this.head
        let count = 0

        while(current && count !== index){
            count++
            current = current.next
        }

        return current
    }

    set(index, val){

        const node = this.get(index)
        node.value = val
        return node
    }

    remove(index){

        if (index ===0 ) return this.shift()

        if(index === this.length -1) return this.pop()

        const node = this.get(index-1)
        const removed = node.next
        node.next = removed.next
        removed.next = null
        return removed
    }

    reverse(){

        if(!this.head || !this.head.next) return

        let prev = null
        let current = this.head

        while(current){
            let future = current.next
            current.next = prev
            prev = current
            current = future
        }
        const temp = this.head
        this.head = this.tail
        this.tail = temp
    }
    
    reverse_mn(m, n){

        if(!this.head || !this.head.next) return

        if (m===n) return

        let c = 1
        let nodeBefM= this.head

        while(c < m-1){
            nodeBefM= nodeBefM.next
            c++
        }

        let nodeM
        if(m === 1){
             nodeM = nodeBefM
        }else{
            nodeM = nodeBefM.next
        }

        let prev = nodeM
        let current = nodeM.next
        let future = current.next
        current.next = prev

        let boundry = m === 1 ? n-1 : n-2

        while(c<boundry){
            prev = current
            current = future
            future = future.next
            current.next = prev
            c++
        }

        if(m===1){
            this.head = current
        }else{
            nodeBefM.next = current
        }
        nodeM.next = future
        if (n === this.length){
            this.tail = nodeBefM
        }

    }

    detectCycleNaive(){
        if(!this.head) return

        let record = new Set()

        let current = this.head

        while(current){
            if (record.has(current)){
                return current
            }
            record.add(current)
            current = current.next
        }
    }

    detectCycle(){
        if(!this.head) return

        let tortoise = this.head
        let hare = this.head

        while(hare && hare !== tortoise){
            hare = hare.next?.next
            tortoise = tortoise.next
        }

        if (!hare) return false 

        hare = this.head
        while(tortoise!==hare){
            tortoise = tortoise.next
            hare = hare.next
        }

        return hare

    }

}

let l = new SingleLinkedList()

// l.push(1)
// l.shift()
// l.push(2)
// l.push(4)
// l.push(7)
// l.print()

// // l.pop()
// l.push(3)
// l.remove(1)
// l.unshift(44)
// l.print()

l.push(1)
l.push(2)
let node1 = l.push(3)
l.push(4)
let node2 = l.push(5)
l.push(6)

node2.next =  node1
console.log(l.detectCycleNaive())
// l.reverse()
// l.print()

// l.reverse_mn(1,2)


class DoubleListNode {
    constructor(val, prev=null, next=null, child =null){
        this.val = val
        this.prev = prev
        this.next = next
        this.child = child
    }
}


class DoubleLinkedList {

    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }

    print(){
        if (!this.head) return

        const arr = []
        let current = this.head
        while(current){
            arr.push(current.val)
            current = current.next
        }
        console.log(arr)
    }

    push(val){
        const node = new DoubleListNode(val)
        
        if(!this.head){
            this.head = node
            this.tail = node
        }else{
            const temp = this.tail
            this.tail.next =node
            this.tail = node
            this.tail.prev = temp
        }
        this.length++
        return node
    }

    pop(){

        const last = this.tail
        let newLast = this.tail.prev
        newLast.next = null
        last.prev =null
        this.tail = newLast
        this.length--
        return last
    }

    get(index){
        if(!this.head) return
        let ctr = 0
        let current = this.head
        while(ctr!==index){
            current = current.next
            ctr++
        }
        return current
    }

    addChild(index, node){
        if(!this.head) return

        let father = this.get(index)
        father.child = node
    }

    flatten(){
        if(!this.head) return
    
        let helper = (node)=>{
            if(!node) return
    
            let current = node
            while(current.next){
                let next = current.next
                if (current.child){
                    let temp = helper(current.child)
                    current.next = current.child
                    temp.next = next
                    if(next !== null){
                        next.prev = temp
                    }
                    current.child = null
                }
                current = next
            }
            return current
        }
    
        let current = this.head
        while(current){ 
            let next = current.next
            if (current.child){
              let newNext  = helper(current.child)
              current.next = current.child
              newNext.next = next
              if(current === this.tail){
                this.tail = newNext
              }
              if(next !== null){
                next.prev = newNext
            }
              current.child = null
            }
            current = next
        }
       
    }
    
}

// const dl = new DoubleLinkedList()

// dl.push(1)
// dl.push(2)
// dl.push(3)
// dl.push(4)

// dl.print()
// dl.pop()
// dl.print()

// const dl2 = new DoubleLinkedList()

// let node = dl2.push(5)
// dl2.push(6)
// dl2.push(7)
//  dl2.push(8)

// dl.addChild(3,node)

// dl.flatten()
// dl.print()
