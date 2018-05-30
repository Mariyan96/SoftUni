function lastElements(n, prevElements) {
    let arr = [1];
    for (let i = 1; i < n; i++) {
        let start = Math.max(0, i - prevElements);
        let sum = arr.slice(start,i).reduce((a,b)=>a+b);
        arr.push(sum);
    }
    console.log(arr.join(" "));
}
lastElements(9, 5);