function solve(inputlines)
{
    let matrix = [];
    for (var i = 0; i < inputlines.length; i++) {
        let info = inputlines[i].split(" ").filter(x=>x!="");
        let com = info[0];
        let value = info[1];
        if(com=="add")
        {
            matrix.push(value);
        }
        else if(com=="remove")
        {
            matrix.splice(value,1);
        }

    }
    console.log(matrix.join('\n'));
}