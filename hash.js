class hash {
    constructor(size = 53) {
        this.map = new Array(size);
    }

    _hash(key) {
        let total = 0;
        let prime = 31;

        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = ((total * prime) + value) % this.map.length;
        }

        return total;
    }

    set(key, value) {
        let index = this._hash(key);
        if (!this.map[index]) {
            this.map[index] = [];

        }

        for (let x of this.map[index]) {
            if (x[0] === key) {
                x[1] = value;
                return;
            }

        }
        this.map[index].push([key, value]);
    }

    get(key) {
        let index = this._hash(key);

        if (!this.map[index]) {
            return;
        }

        for (let x of this.map[index]) {
            if (x[0] === key) {
                return x[1];
            }
        }

    }

    keys() {
        let array = [];
        for (let x of this.map) {
            if (x) {

                for (let y of x)
                    array.push(y[0]);
            }
        }
        return array;
    }
    
    values() {
        let array = [];
        for (let x of this.map) {
            if (x) {
                for (let y of x)
                    array.push(y[1]);
            }
        }
        return array;
    }
}

let h = new hash(13);
h.set("g", 1);
h.set("d", 2);
h.set("salmon", 3);