function solve(input) {
    let arrayInput = input.join(' ').split(' ').filter(x=>x!==' ');
    let starting = "32656 19759 32763".split(' ');
    for (let i = 0; i < arrayInput.length; i++) {
        if(arrayInput[i]===starting[0]&&
        arrayInput[i+1]===starting[1]&&
        arrayInput[i+2]===starting[2]){
            let size = +arrayInput[i + 4];
            let result = arrayInput.slice(i + 6, i + 6 + size);
            let string = "";
            result.forEach(e => string += String.fromCharCode(Number(e)));
            console.log(string);
        }
    }
}




solve(['0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 32656 19759 32763 0',
    '5 0 71 111 115 104 111 0 0 0 0 0 0 0 0 0 32656 19759 32763 0 4 0',
    '75 105 114 111 0 0 0 0 0 0 0 0 0 0 32656 19759 32763 0 8 0 86 101',
    '114 111 110 105 107 97 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0'
]);