function solve(arr,method){
    class Ticket{
        constructor(destination,price,status){
            this.destination=destination;
            this.price=price;
            this.status=status;
        }
    }
    let resultArr=[];
    for (let ticket of arr) {
        let [destination,price,status]=ticket.split('|');
        resultArr.push(new Ticket(destination,Number(price),status))
    }
    return resultArr.sort((a,b)=>sortingByMethod(a,b));
    function sortingByMethod(a,b){
        let first = a[method];
        let second = b[method];
        if(method!=='price') {
          return  first.localeCompare(second);
        }else{
            return first-second;
        }
    }
}
console.log(solve(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'destination'));