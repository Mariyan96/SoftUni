function addOrRemove(input) {
    let result = [];
    let count = 1;
    for (let index of input) {
        if(index==='add'){
            result.push(count);

        }
        else if(index==='remove'){
            result.pop();
        }
        count++;
    }
    if(result.length===0){
        console.log("Empty");
    }
    else{
        console.log(result.join('\n'));
    }
}


addOrRemove(['add','add','add','add']);
addOrRemove(['add','add','remove','add','add']);