class List {
    constructor() {
        this.collection = [];
        this.size = 0;
    }
    add(num) {
        this.collection.push(num);
        this.sort();
        this.size++;
    }

    remove(index) {
        if (index < this.size && index >=0) {
            this.collection.splice(index,1);
            this.sort();
            this.size--;
        }else{
            throw new Error("index was outside the bounds of the collection");
        }
    }

    get(index) {
        if (index < this.size && index >= 0) {
            this.sort();
            return this.collection[index];
        }else{
            throw new Error("index was outside the bounds of the collection");
        }
    }
    sort() {
        this.collection = this.collection.sort((a, b) => a - b);
    }
};

let arr = new List ();
arr.add(100);
arr.add(22);
arr.remove(0);
// arr.remove(0);
console.log(arr);
console.log(arr.get(0));
// arr.remove(0);
// console.log(arr.size);
