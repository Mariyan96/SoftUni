let add = (function () {
    let sum = 0;

    function result(number) {
        sum += number;
        return result;
    }

    result.toString = function () {
        return sum
    };
    return result
})();

console.log((add(1)(2)(3).toString()));
console.log((add(1)(2)(3).toString()));