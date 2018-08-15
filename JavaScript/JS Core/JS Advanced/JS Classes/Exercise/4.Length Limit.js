class Stringer {
    constructor(string, length) {
        this.innerString = string;
        this.innerLength = length;
    }
    get innerLength(){
        return this._innerLength;
    }
    set innerLength(n){
        if(n<0){
            this._innerLength=0;
        }else{
            this._innerLength=n;
        }
    }
    increase(n){
        this.innerLength=+n;
    }
    decrease(n){
        this.innerLength-=n;
    }
    toString() {
        if (this.innerString.length <= this.innerLength) {
            return this.innerString;
        }
        if (this.innerLength === 0) {
            return "...";
        }
        return this.innerString.substr(0, this.innerLength) + "...";
    }
}
let test = new Stringer("Test", 5);
console.log(test.toString()); //Test

test.decrease(3);
console.log(test.toString()); //Te...

test.decrease(5);
console.log(test.toString()); //...

test.increase(4);
console.log(test.toString()); //Test
