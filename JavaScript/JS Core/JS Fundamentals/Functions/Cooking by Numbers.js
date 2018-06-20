function solve(array) {
    let number=array[0];
    for (let i = 1; i < array.length; i++) {
        number=cooking(array[i],number);
        console.log(number);
    }
    function cooking(action,number) {
        switch (action) {
            case 'chop':
                return number / 2;
            case 'dice':
                return Math.sqrt(number);
            case 'spice':
                return ++number;
            case 'bake':
                return number*3;
            case 'fillet':
                return number*8/10;
        }
    }

}
solve([9, 'dice', 'spice', 'chop', 'bake', 'fillet']);