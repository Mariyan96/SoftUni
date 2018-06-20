function catalogue(arrayInput) {
    let products = new Map();
    for (let line of arrayInput) {
        let [product,price] = line.split(' : ');
        products.set(product,+price);
    }
    let keys = Array.from(products.keys()).sort();
    let letter='';
    for (let i = 0; i < keys.length; i++) {
        if(letter!==keys[i][0]) {
            letter=keys[i][0];
            console.log(letter);
        }
        console.log(`  ${keys[i]}: ${products.get(keys[i])}`)
    }

}






catalogue(['Appricot : 20.4'
          ,'Fridge : 1500'
          ,'TV : 1499'
          ,'Deodorant : 10'
          ,'Boiler : 300'
          ,'Apple : 1.25'
          ,'Anti-Bug Spray : 15'
          ,'T-Shirt : 10']);