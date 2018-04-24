function solve(inputlines)
{
    let KVP = {};
    for (var i = 0; i < inputlines.length; i++) {
        let info = inputlines[i].split(" ").filter(x=>x!="");
        let key = info[0];
        let value = info[1];
        if(value==""||value==null)
        {
            if(KVP[key]==undefined)
            {
                console.log("None");
                return;
            }
            console.log(KVP[key]);
            return;
        }
        KVP[key]=value;
    }
}