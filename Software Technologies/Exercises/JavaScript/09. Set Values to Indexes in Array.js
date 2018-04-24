function solve(inputlines)
{
    let lenght = Number(inputlines[0]);
    let matrix = [];
    for (var i = 0; i < lenght; i++)
    {
        matrix[i]=0;

    }
    for (var i = 1; i < inputlines.length; i++)
    {
        let info = inputlines[i].split(" - ").filter(x=>x!='');
        let index = Number(info[0]);
        let value = Number(info[1]);

        matrix[index]=value;

    }
    console.log(matrix.join('\n'));

}