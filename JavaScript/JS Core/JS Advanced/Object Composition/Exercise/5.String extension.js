(function () {
    String.prototype.ensureStart=function (str) {
        if(this.startsWith(str)){
            return this.valueOf()
        }else{
            return str+this.valueOf()
        }
    };

    String.prototype.ensureEnd=function (str) {
        if(this.endsWith(str)){
            return this.valueOf()
        }else{
            return this.valueOf()+str
        }
    };
    String.prototype.isEmpty=function isEmpty() {
        if(this.valueOf()!==''){
            return false;
        }else{
            return true;
        }
    };
    String.prototype.truncate= function truncate(n) {
        if(this.length<n){
            return this.valueOf();
        }else if(this.indexOf(' ')<0){
            if(n<4){

                return '.'.repeat(n);
            }
            return this.substring(0,this.length-n)+'...';
        }else{
            let tokens = this.split(' ');
            let result = tokens[0];
            for (let i = 1; i < tokens.length; i++) {
                if (result.length + tokens[i].length + 4 > n) {
                    return result + '...'
                }
                result += ' ' + tokens[i]
            }
        }
        
    };
    String.format=function format() {
        let args = [...arguments];
        let str=args.shift();
        for (let i = 0; i < str.length; i++) {
            if(str.indexOf(`{${i}}`)!==-1&&args.length>0){
                str=str.replace(`{${i}}`,args.shift())
            }
        }
        return str
    }
}());
let str = 'my string'
str = str.ensureStart('my')
console.log(str);
str = str.ensureStart('hello ')
console.log(str);
str = str.truncate(16)
console.log(str);
str = str.truncate(14)
console.log(str);
str = str.truncate(8)
str = str.truncate(4)
str = str.truncate(2)
console.log(str);
str = String.format('The {0} {1} fox',
    'quick', 'brown');
console.log(str);
str = String.format('jumps {0} {1}',
    'dog');
console.log(str);
