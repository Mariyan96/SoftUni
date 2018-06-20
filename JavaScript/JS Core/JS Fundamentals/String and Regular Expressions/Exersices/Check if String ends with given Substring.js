function checkIfEnds(sentence,wordToCheck) {
    if(sentence.indexOf(wordToCheck)===sentence.length-wordToCheck.length){
        console.log('true')
    }
    else console.log('false')
}





checkIfEnds('This sentence ends with fun?','fun?');