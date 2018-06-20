function solve(arrayInput) {
    let validSentences = [];
    let invalidSentences = [];
    let companies = arrayInput[0].split(arrayInput[1]);
    for (let i = 2; i < arrayInput.length; i++) {
        let currentSentence=arrayInput[i].toLowerCase();
        let count=0;
        for (let company of companies) {
            if(currentSentence.includes(company)){
                count++;
            }
        }
        if(count===companies.length){
            validSentences.push(currentSentence);
        }
        else{
            invalidSentences.push(currentSentence);
        }
    }
    if(validSentences.length!==0){
        console.log("ValidSentences");
        for (let i = 0; i < validSentences.length; i++) {
            console.log(`${i+1}. ${validSentences[i]}`)
        }
        if(invalidSentences.length!==0) {
            console.log("==============================")
        }
    }
    if(invalidSentences.length!==0){
        console.log("InvalidSentences");
        for (let i = 0; i < invalidSentences.length; i++) {
            console.log(`${i+1}. ${invalidSentences[i]}`)
        }
    }

}




solve(["bulgariatour@, minkatrans@, koftipochivkaltd",
    "@, ",
    "Mincho e KoftiPochivkaLTD Tip 123  ve MinkaTrans BulgariaTour",
    "dqdo mraz some text but is KoftiPochivkaLTD MinkaTrans",
    "someone continues as no "]);
// solve(["bulgariatour@, minkatrans@, koftipochivkaltd",
//     "@,",
//     "Mincho  e KoftiPockivkaLTD Tip 123  ve MinkaTrans BulgariaTour",
//     "We will koftipochivkaLTD travel e expenses no MinkaTrans mu e BulgariaTour",
//     "dqdo BuLGariaTOUR mraz some text but is KoftiPochivkaLTD minkaTRANS"]
// )