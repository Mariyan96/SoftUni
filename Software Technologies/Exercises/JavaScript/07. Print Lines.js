function solve(args)
{
    let result =[];
    for (let line of args)
    {
        if(line=="Stop")
        {
            console.log(result.join("\n"));
            return;
        }
        else{
            result.push(line);
        }
    }
}