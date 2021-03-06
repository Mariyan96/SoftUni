function solve(name, age, weight, height) {
    let BMI = Math.round(weight / (Math.pow(height / 100, 2)));
    let status;
    if (BMI < 18.5) {
        status = 'underweight'
    }
    else if (BMI < 25 && BMI >= 18.5) {
        status = 'normal'
    }
    else if (BMI >= 25 && BMI < 30) {
        status = 'overweight'
    }
    else if (BMI >= 30) {
        status = 'obese'
    }
    let person = {
        name: name,
        personalInfo: {
            age: age,
            weight: weight,
            height: height,
        },
        BMI: BMI,
        status: status
    };
    if (status === 'obese')
        person.recommendation = 'admission required';
    return person;
}

solve('Peter', 29, 75, 182);
solve('Honey Boo Boo', 9, 57, 137);