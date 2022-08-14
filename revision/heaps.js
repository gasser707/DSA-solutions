class BHeap {
    constructor() {
        this.heap = [];
    }

    swap(index1, index2) {
        let temp = this.heap[index1];
        this.heap[index1] = this.heap[index2];
        this.heap[index2] = temp;
    }

    insert(val) {
        this.heap.push(val);
        let index = this.heap.length - 1;
        let parentIndex = Math.floor((index - 1) / 2);
        while (this.heap[index] > this.heap[parentIndex]) {
            this.swap(index, parentIndex);
            index = parentIndex;
            if (index === 0) break;
            parentIndex = Math.floor((parentIndex - 1) / 2);
        }
    }
    extract() {
        let max = this.heap[0];
        this.swap(0, this.heap.length - 1);
        this.heap.pop();
        if(this.heap.length===0) return max
        let index = 0;
        let childIndex1 = (index * 2) + 1;
        let childIndex2 = (index * 2) + 2;
        let big = this.heap[childIndex1] > this.heap[childIndex2] ? childIndex1 : childIndex2;
        while (this.heap[index] < this.heap[big]) {
            this.swap(index, big);
            index = big;
            if (index === this.heap.length - 1) break;
            childIndex1 = (index * 2) + 1;
            childIndex2 = (index * 2) + 2;
            big = this.heap[childIndex1] > this.heap[childIndex2] ? childIndex1 : childIndex2;
        }
        return max;
    }
}
let h = new BHeap();

// h.heap = [41, 39, 33, 18, 27, 12];
// h.insert(55);
// h.insert(1);
// h.insert(45);
// h.insert(199);
// h.extract()
// console.log(h);

// h.insert(41);
// h.insert(39);
// h.insert(33);
// h.insert(18);
// h.insert(27);
// h.insert(12);
// h.insert(55);
// console.log(h);
// h.extract();
// console.log(h);

class node {
    constructor(p, val) {
        this.val = val;
        this.p = p;
    }
}
class PQ {
    constructor() {
        this.heap = [];
    }

    swap(index1, index2) {
        let temp = this.heap[index1];
        this.heap[index1] = this.heap[index2];
        this.heap[index2] = temp;
    }

    insert(p, val) {
        this.heap.push(new node(p, val));
        if (this.heap.length === 1) return;
        let index = this.heap.length - 1;
        let parentIndex = Math.floor((index - 1) / 2);
        while (this.heap[index].p < this.heap[parentIndex].p) {
            this.swap(index, parentIndex);
            index = parentIndex;
            if (index === 0) break;
            parentIndex = Math.floor((parentIndex - 1) / 2);
        }
    }
    extract() {
        let min = this.heap[0];
        this.swap(0, this.heap.length - 1);
        this.heap.pop();
        if(this.heap.length===0) return min
        let index = 0;
        let childIndex1 = ((index * 2) + 1) >= this.heap.length ? index : (index * 2) + 1;;
        let childIndex2 = ((index * 2) + 2) >= this.heap.length ? index : (index * 2) + 2;
        let small = this.heap[childIndex1].p < this.heap[childIndex2].p ? childIndex1 : childIndex2;
        while (this.heap[index].p > this.heap[small].p) {
            this.swap(index, small);
            index = small;
            if (index === this.heap.length - 1) break;
            childIndex1 = ((index * 2) + 1) >= this.heap.length ? index : (index * 2) + 1;
            childIndex2 = ((index * 2) + 2) >= this.heap.length ? index : (index * 2) + 2;
            small = this.heap[childIndex1].p < this.heap[childIndex2].p ? childIndex1 : childIndex2;
        }
        return min;
    }
}

let er = new PQ();

er.insert(5, 'common cold');
er.insert(1, 'gunshot');
er.insert(4, 'high fever');
er.insert(2, 'broken leg');
er.insert(3, 'glass in foot');
console.log(er);

console.log(er.extract());
console.log(er.extract());
console.log(er.extract());
console.log(er.extract());
console.log(er.extract());
console.log(er.extract());



