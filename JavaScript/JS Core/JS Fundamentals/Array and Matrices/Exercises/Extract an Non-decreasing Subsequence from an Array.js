function extractNonDecreasing(numbers) {
    let big=-Infinity;
    numbers.forEach(e=>{if(e>big){
        big=e;
        console.log(e);}});
}




extractNonDecreasing([1,3,8,4,10,12,3,2,24]);
extractNonDecreasing([1,2,3,4]);