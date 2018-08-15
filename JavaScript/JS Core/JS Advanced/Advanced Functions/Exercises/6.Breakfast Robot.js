let manager = (function () {
    let inStock = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };
    let recipes = {
        apple: {carbohydrate: 1, flavour: 2},
        coke: {carbohydrate: 10, flavour: 20},
        burger: {carbohydrate: 5, fat: 7, flavour: 3},
        omelet: {protein: 5, fat: 1, flavour: 1},
        cheverme: {protein: 10, carbohydrate: 10, fat: 10, flavour: 10}
    };
    return function (line) {
        let [command, item, quantity] = line.split(' ');
        quantity = Number(quantity);
        if (command === 'restock') {
            inStock[item] += quantity;
            return 'Success'
        } else if (command === 'report') {
            return Object.keys(inStock).map(x => x = `${x}=${inStock[x]}`).join(' ');
        } else if (command === 'prepare') {
            let neededIngr = Object.keys(recipes[item]);
            for (let current of neededIngr) {
                if (inStock[current] < (recipes[item][current]) * quantity) {
                    return `Error: not enough ${current} in stock`
                }
            }
            for (let current of neededIngr) {
                inStock[current] = inStock[current] - recipes[item][current] * quantity;
                return 'Success';
            }
        }
    }
})();
console.log(manager('prepare cheverme 1'));
console.log(manager('restock protein 10'));
console.log(manager('prepare cheverme 1'));
console.log(manager('restock carbohydrate 10'));
console.log(manager('prepare cheverme 1'));
console.log(manager('restock fat 10'));
console.log(manager('prepare cheverme 1'));
console.log(manager('restock flavour 10'));
console.log(manager('prepare cheverme 1'));
console.log(manager('report'));