let solution =(function solve() {
    function sum(arr1, arr2) {
        let a = arr1.reduce((a, b) => a + b);
        let b = arr2.reduce((a, b) => a + b);
        return [a, b]
    }

    function multiply(arr, a) {
        return arr.map(x => x = x * a);
    }

    function math(arr) {
        return Math.sqrt(arr.map(x => x = x ** 2).reduce((a, b) => a + b));
    }

    function MultiAndSum(arr1, arr2) {
        let a = arr1.reduce((a, b) => a * b);
        let b = arr2.reduce((a, b) => a * b);
        return a + b;
    }

    function crossSum(arr1, arr2) {
        return arr1[0]*arr2[1]-arr1[1]*arr2[0];
    }
    return {
        add: sum,
        multiply: multiply,
        length: math,
        dot: MultiAndSum,
        cross: crossSum
    };

}());
console.log(solution.add([1, 1], [1, 0]))
console.log(solution.multiply([3.5, -2], 2))
console.log(solution.length([3, -4]))
console.log(solution.dot([1, 0], [0, -1]))
console.log(solution.cross([3, 7], [1, 0]))