function solve (arr, method) {
    let sorting = {'asc':acsOrder,
                    'desc':descOrder};
    function acsOrder(a,b) {
        return a-b;
    }
    function descOrder(a,b) {
        return b-a;

    }
    return arr.sort(sorting[method]);

}
console.log(solve([14, 7, 17, 6, 8], 'asc'));
console.log(solve([14, 7, 17, 6, 8], 'desc'));