function solve(inputlines) {

    let people = [];
    for (var i = 0; i < inputlines.length; i++)
    {
       let currentInput =inputlines[i].split(" -> ");

       let name = currentInput[0];
       let age = currentInput[1];
       let grade = currentInput[2];
       let obj = {};
       obj['name']=name;
       obj['age']=age;
       obj['grade']=grade;
       people.push(obj);

    }
    for (let person of people)
    {
        console.log(`Name: ${person.name}`);
        console.log(`Age: ${person.age}`);
        console.log(`Grade: ${person.grade}`);
    }
}