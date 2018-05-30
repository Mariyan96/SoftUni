function negOrPositiveNum(array) {
    let positive=[];
    let negative=[];
    for (let el of array) {
        if(el>=0)positive.push(el);
        else negative.unshift(el);
    }
    for (let obj of negative) {
        console.log(obj);
    }
    for (let obj of positive) {
        console.log(obj);
    }
}


negOrPositiveNum([3, -2, 0, -1]);