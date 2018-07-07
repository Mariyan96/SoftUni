// append(str) – add str to the end of the internal string
// removeStart(n) – remove the first n characters from the string, n is an integer
// removeEnd(n) – remove the last n characters from the string, n is an integer
// print – output the stored string to the console
function solve(arr){
    let processor = (function () {
        let result ='';
        return function (line) {
            let [command,item]=line.split(' ');
            switch (command){
                case "append":
                    result+=item;
                    break;
                case 'removeStart':
                    result=result.substring(+item,result.length);
                    break;
                case "removeEnd":
                    result=result.substring(0,result.length-item);

                    break;
                case 'print':
                    console.log(result);
                    break;
            }
        }
    }());
    for (let arrElement of arr) {
        processor(arrElement);
    }
}
solve(['append hello',
    'append again',
    'removeStart 3',
    'removeEnd 4',
    'print']);
