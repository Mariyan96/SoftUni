function solve(args)
{
    [x,y,z] = args.map(Number);
    let count = 0;
    if(x==0||y==0||z==0)
    {
        console.log("Negative");
        return  ;
    }

    [x,y,z].forEach(e=>{
        if(e<0){
            count++;
        }
        }
    );
    if(count%2==0){
        console.log("Positive");
    }
    else
    {
        console.log("Negative");
    }

}