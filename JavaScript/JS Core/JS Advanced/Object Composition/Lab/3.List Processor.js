function solve(array) {
    let result = [];
    let processor = (function () {
        function add(str) {
            result.push(str);
        }

        function remove(str) {
            result = result.filter(x => x !== str);
        }

        function print() {
            console.log(result.join(', '));
        }

        return {add, remove, print}
    })();
    for (const line of array) {
        let [command,item]=line.split(' ');
        processor[command](item);
    }
}

solve(['add hello', 'add again', 'remove hello', 'add again', 'print']);