function solve(car){
    let newCar = {};
    newCar.model=car.model;
    let engine={};
    engine.power=car.power;
    if(car.power<=90){
        engine.power=90;
        engine.volume=1800;
    }else if(car.power<=120){
        engine.power=120;
        engine.volume=  2400;
    }else{
        engine.power=200;
        engine.volume=3500;
    }
    newCar.engine=engine;
    newCar.carriage={type:car.carriage,color:car.color};
    if(car.wheelsize%2===1){
        newCar.wheels=[car.wheelsize,car.wheelsize,car.wheelsize,car.wheelsize];
    }else{
        let w=Math.floor(car.wheelsize)-1;
        newCar.wheels=[w,w,w,w];
    }
    return newCar;
}
console.log(solve({ model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14 }))
console.log(solve({model: 'Ferrari',
    power: 200,
    color: 'red',
    carriage: 'coupe',
    wheelsize: 21}));