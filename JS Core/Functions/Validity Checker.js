function solve(array) {
    let x1=array[0],y1=array[1];
    let x2=array[2],y2=array[3];
    if(isValid(x1,y1,0,0)) {
        console.log(`{${x1}, ${y1}} to {${0}, ${0}} is valid`)
    }
    else{
        console.log(`{${x1}, ${y1}} to {${0}, ${0}} is invalid`)
    }
    if(isValid(x2,y2,0,0)) {
        console.log(`{${x2}, ${y2}} to {${0}, ${0}} is valid`)
    }
    else{
        console.log(`{${x2}, ${y2}} to {${0}, ${0}} is invalid`)
    }
    if(isValid(x1,y1,x2,y2)) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`)
    }
    else{
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`)
    }


    function isValid(x1,y1,x,y) {
        let dist=Math.sqrt((Math.pow(Math.abs(x1-x),2))+(Math.pow(Math.abs(y1-y),2)));
        return Number.isInteger(dist)?true:false;
    }
}
solve([3, 0, 0, 4]);