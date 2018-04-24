function solve(numbers)
{
    let result =[];
    for (let number of numbers)
    {
        result.push(number);
    }
    result = result.reverse();

    console.log(result.join("\n"));
}