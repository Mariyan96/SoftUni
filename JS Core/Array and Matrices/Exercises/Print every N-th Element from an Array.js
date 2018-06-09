function printEveryN(input) {
    let n = input[input.length-1];
    n=Number(n);
    input.pop();
    for (let i = 0; i < input.length; i+=n) {
        console.log(input[i]);
    }
}


printEveryN(['5','20','31','4','20','2']);