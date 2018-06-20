function solve(number) {
    let avg = average(number);
    if(avg>5){
        console.log(number);
    }
    else{
        number=addingNumber(number);
        return solve(number);
    }

    function average(number) {
        let sum=0;
        let counter=0;
        while(number>0){
            counter++;
            sum+=number%10;
            number=Math.floor(number/10);
        }
        return sum/counter;
    }
    function addingNumber(number) {
        number=number +"9";
        return number;
    }
}
solve(101);
solve(5835);