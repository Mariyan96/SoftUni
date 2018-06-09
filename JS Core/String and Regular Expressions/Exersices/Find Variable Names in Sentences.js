function findVar(sentence) {
    let regex = /\b_[a-zA-Z0-9]+\b/g;
    let matches =sentence.match(regex);
    let result=[];
    for (let match of matches) {
        match  = match.substring(1,);
        result.push(match);
    }
    console.log(result.join(','));

}



findVar('The _id and _age variables are both integers.');
findVar('Calculate the _area of the _perfectRectangle object.');