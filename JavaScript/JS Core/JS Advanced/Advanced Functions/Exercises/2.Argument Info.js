function result(){
    let summary={};
    for (let argument of arguments) {
        console.log(`${typeof(argument)}: ${argument}`);
        if(!summary.hasOwnProperty(typeof(argument))){
            summary[typeof(argument)]=0;
        }
        summary[typeof(argument)]++;
    }
    let sortedKeys=Object.keys(summary).sort((a,b)=> summary[b]-summary[a]);
    for (let key of sortedKeys) {
        console.log(`${key} = ${summary[key]}`)
    }
}
result('cat',123, 42, function () { console.log('Hello world!'); });
