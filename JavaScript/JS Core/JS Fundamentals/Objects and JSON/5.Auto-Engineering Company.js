function autoCompany(arrayInput) {
    let carBrands = new Map();
    for (let line of arrayInput) {
        let [brand,model,quantity] = line.split(" | ");
        quantity=Number(quantity);
        if(!carBrands.has(brand)){
            carBrands.set(brand,new Map());
        }
        if(!carBrands.get(brand).has(model)){
            carBrands.get(brand).set(model,0)
        }
        carBrands.get(brand).set(model,carBrands.get(brand).get(model)+quantity);
    }
    for (let [brand,modelAndQuantity] of carBrands) {
        console.log(brand);
        for (let [model,quantity] of modelAndQuantity) {
            console.log(`###${model} -> ${quantity}`)
        }
    }

}




autoCompany([
    'Audi | Q7 | 1000',
    'Audi | Q7 | 1',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'BMW | X6 | 11',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10'
]);