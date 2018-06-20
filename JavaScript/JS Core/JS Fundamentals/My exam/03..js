function solve(arrayInput) {
    let regex = /[A-Z][a-zA-Z]*[A-Z]/;
    let startingIndex =arrayInput[0];
    let endIndex = arrayInput[1];
    let wordToReplace = arrayInput[2];
    let sentenceToSearch = arrayInput[3];
    let result =regex.exec(sentenceToSearch);
    let word = result[0];
    let resultWord='';
    for (let i = 0; i < word.length; i++) {
        if(i>=startingIndex&&i<=endIndex){
            resultWord+=wordToReplace;
            i=endIndex;
        }
        else{
            resultWord+=word[i];
        }
    }
    //region changing last char
    let lastChar = resultWord.slice(-1);
    lastChar=lastChar.toLowerCase();
    resultWord=resultWord.slice(0,resultWord.length-1);
    resultWord+=lastChar;
    resultWord[resultWord.length-1]=lastChar;
    //endregion
    let regexForNumbers = /\d{3}\.?(\d*)?/;
    let numbers=[];
    while(sentenceToSearch.match(regexForNumbers)) {
        let allNumbers = sentenceToSearch.match(regexForNumbers);
        sentenceToSearch = sentenceToSearch.slice(allNumbers.index + allNumbers[0].length);
        let currentNumber = allNumbers[0];
        currentNumber=Number(currentNumber);
        currentNumber=Math.ceil(currentNumber);
        numbers.push(currentNumber);
    }

    let city ='';
    for (let i = 0; i < numbers.length; i++) {
        city+=String.fromCharCode(Number(numbers[i]))
    }
    let firstCharOfCity = city.slice(0,1).toUpperCase();
    city = city.slice(1,city.length);
    let newcity=firstCharOfCity+city;
    console.log(`${resultWord} => ${newcity}`);
}



solve(["3", "5", "gar",
    "114 sDfia 1, riDl10 confin$4%#ed117 likewise it humanity aTe114.223432 BultoriA - Varnd railLery101 an unpacked as he"]);
solve(["1", "4","lovenia", "SerbA 67 – sDf1d17ia aTe 1, 108 confin$4%#ed likewise it humanity  Bulg35aria - VarnA railLery1a0s1 111 an unpacked as 109 he"])