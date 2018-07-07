function solve(array){
    let processor = (function () {
        let result={};
        function create(arr) {
            let name=arr[0];
            if(arr.length===1){
                result[name]={};
            }
            else{
                let inheritName=arr[2];
                result[name]=Object.create(result[inheritName   ])
            }
        }
        function set(arr) {
            let name=arr[0];
            let key=arr[1];
            let value = arr[2];
            result[name][key]=value;
        }
        function print(arr) {
            let obj=result[arr[0]];
            let toPrint = [];
            for (let objKey in obj) {
                toPrint.push(objKey+':'+obj[objKey]);
            }
            console.log(toPrint.join(', '));
        }
        return {create,set,print}
    }());
    for (let line of array) {
        let currentLine = line.split(' ');
        let command = currentLine.shift();
        processor[command](currentLine);
    }

}
solve(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2']
);