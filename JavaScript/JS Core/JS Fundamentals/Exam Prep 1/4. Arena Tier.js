function arenaTier(arrayInput){
    let gladiators={};
    for (let  i = 0; i < arrayInput.length; i++) {
        if(arrayInput[i]==="Ave Cesar") {
            break;
        }
        if(arrayInput[i].includes(" -> ")) {
            let [gladiator, technique, points] = arrayInput[i].split(' -> ').filter(x=>x!=='');
            points=Number(points);
            if(!gladiators.hasOwnProperty(gladiator)){
                gladiators[gladiator]={};
            }
            if(!gladiators[gladiator].hasOwnProperty(technique)){
                gladiators[gladiator][technique]=0;
            }
            let currentGladiatorPoints = gladiators[gladiator][technique];
            if(currentGladiatorPoints<points){
                gladiators[gladiator][technique]=points;

            }
        }
        else {
            let [gladiator1,vs,glariator2] = arrayInput[i].split(' ').filter(x=>x!=='');
            if(gladiators.hasOwnProperty(gladiator1)&&
            gladiators.hasOwnProperty(glariator2)){
                compareTechniques(gladiator1,glariator2,gladiators);
            }
        }

    }
    let sortedGladiatorKeys = [...Object.keys(gladiators)].sort().sort((a,b)=>sortTotalSkill(a,b,gladiators));
    for (let gladiator of sortedGladiatorKeys) {
        console.log(`${gladiator}: ${[...Object.values(gladiators[gladiator])].reduce((a,b) => a + b)} skill`);
        let sortedTech = [...Object.keys(gladiators[gladiator])].sort().sort((a,b)=>sortTechniques(a,b,gladiators,gladiator));
        for (let tech of sortedTech) {
            console.log(`- ${tech} <!> ${gladiators[gladiator][tech]}`)
        }
    }
    function sortTechniques(first,second,gladiators,gladiator) {
        let firstPoints = gladiators[gladiator][first];
        let secondPoints = gladiators[gladiator][second];
        return secondPoints-firstPoints;
    }
    
    function compareTechniques(gladiator1,gladiator2,gladiators) {
        for (let tech of Object.keys(gladiators[gladiator1])) {
            if(gladiators[gladiator2].hasOwnProperty(tech)){
                if(gladiators[gladiator1[tech]]>gladiators[gladiator2][tech]){
                    delete gladiators[gladiator2];
                }
                else{
                    delete gladiators[gladiator1];
                }
            }
            
        }
    }
    function sortTotalSkill(first,second,gladiators)
    {
        let firstTotalSkill = [...Object.values(gladiators[first])].reduce((a,b)=>a+b);
        let secondTotalSkill=[...Object.values(gladiators[second])].reduce((a,b)=>a+b)
        return secondTotalSkill-firstTotalSkill;
    }
}






arenaTier([
    'Pesho -> BattleCry -> 400',
    'Gosho -> PowerPunch -> 300',
    'Stamat -> Duck -> 200',
    'Stamat -> Tiger -> 250',
    'Ave Cesar'
]);