function solve(arr, method) {
    let sorting={asc:ascSorting,
        desc:descSorting};
    sorting[method]();
    function ascSorting() {
        return console.log(arr.sort((a, b) => a - b))
    }
    function descSorting() {
        return console.log(arr.sort((a, b) => b - a))
    }
}

solve([14, 7, 17, 6, 8], 'asc');
solve([14, 7, 17, 6, 8], 'desc');