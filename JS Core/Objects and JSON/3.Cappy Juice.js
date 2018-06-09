function juice(arrayInput) {
    let juicesAndQuantity = new Map();
    let juicesAndBottles = new Map();
    for (let line of arrayInput) {
        let [fruit,quantity] = line.split(' => ');
        if(!juicesAndQuantity.has(fruit)){
            juicesAndQuantity.set(fruit,0);
        }
        quantity=Number(quantity);
        juicesAndQuantity.set(fruit,quantity+juicesAndQuantity.get(fruit));

        let currentQuantity = juicesAndQuantity.get(fruit);
        if(currentQuantity>=1000){
            let bottlesOfJuice = ~~(currentQuantity/1000);
            let juiceLeft = currentQuantity%1000;
            if(!juicesAndBottles.has(fruit)){
                juicesAndBottles.set(fruit,0);
            }
            juicesAndBottles.set(fruit,juicesAndBottles.get(fruit)+ bottlesOfJuice);

            juicesAndQuantity.set(fruit,juiceLeft);
        }
    }
    for (let [k,v] of juicesAndBottles) {
         console.log(`${k} => ${v}`)
    }
}



juice(['Orange => 2000'
      ,'Peach => 1432'
      ,'Banana => 450'
      ,'Peach => 600'
      ,'Strawberry => 549']);

juice([
    'Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789'
]);