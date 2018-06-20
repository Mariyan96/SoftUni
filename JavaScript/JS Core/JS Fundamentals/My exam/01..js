function solve(array) {
    let specialized=0;
    let clumsy=0;
    let sumOfGold=0;
    let specializedProfessions=["Programming","Hardware maintenance","Cooking","Translating","Designing"];
    for (let i = 0; i < specializedProfessions.length; i++) {
        specializedProfessions[i]=specializedProfessions[i].toLowerCase();
    }
    let clumsyProfessions = ["Singing","Accounting","Teaching","Exam-Making","Acting","Writing","Lecturing","Modeling","Nursing"];
    for (let i = 0; i < clumsyProfessions.length; i++) {
        clumsyProfessions[i]=clumsyProfessions[i].toLowerCase();
    }
    for (let i = 0; i < array.length; i++) {
        if(array[i]===""){
            continue;
        }
        if(array[i]===null){
            continue;
        }
        if(array[i]===undefined){
            continue;
        }
        if(array[i]===' '){
            continue;
        }
        let[profession,gold]=array[i].split(' : ').filter(x=>x!=="").filter(a=>a!==" ");
        gold=Number(gold);
        profession=profession.toLowerCase();
        if(specializedProfessions.includes(profession)){
            if(gold<200){
                continue;
            }
            gold*=0.8;
            specialized++;
            if(specialized%2===0){
                gold+=200;
            }
        }
        else if(clumsyProfessions.includes(profession)){
            clumsy++;
            if(clumsy%2===0){
                gold*=0.95;
            }
            else if(clumsy%3===0){
                gold*=0.9;
            }
        }
        sumOfGold+=gold;
    }
    if(sumOfGold>1000){
        console.log(`Final sum: ${sumOfGold.toFixed(2)}`);
        let result =sumOfGold-1000;
        result.toFixed(2);
        console.log(`Mariyka earned ${result.toFixed(2)} gold more.`)
    }
    else{
        console.log(`Final sum: ${sumOfGold.toFixed(2)}`);
        let result =1000-sumOfGold;
        console.log(`Mariyka need to earn ${result.toFixed(2)} gold more to continue in the next task.`);
    }
}



solve(["Driving : 200.53","Driving : 0.54"]);
// solve(["Programming : 500", "Driving : 243", "Singing : 100", "Cooking : 199"]);
// solve(["Programming : 500", "Driving : 243.55", "Acting : 200", "Singing : 100", "Cooking : 199", "Hardware maintenance : 800", "Gardening : 700", "Programming : 500"]);
// solve(["Programming : 300", "Cooking : 75","Hardware maintenance : 50"]);