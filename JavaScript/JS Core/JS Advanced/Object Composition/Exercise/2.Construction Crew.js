function solve(person){
    if(!person.handsShaking){
        return person;
    }else{
        let neededAlcohol =person.weight*person.experience*0.1;
        person.bloodAlcoholLevel+=neededAlcohol;
        person.handsShaking=false;
        return person;

    }
}
console.log(solve({ weight: 80,
    experience: 1,
    bloodAlcoholLevel: 0,
    handsShaking: true }))