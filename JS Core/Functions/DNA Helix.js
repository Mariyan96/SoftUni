function solve(n) {
    let toPrint='ATCGTTAGGG';
    toPrint=toPrint.repeat(Math.ceil(n/2));
    let result=``;
    let count=0;
    let final=0;
    while(true){
        //region first row
        for (let i = 0; i < 6; i++) {
            if(i!==2&&i!==3){
                result+="*";
            }
            else{
                result+=toPrint[count];
                count++;
                removeFirstChar(toPrint);
            }
        }
        final++;
        if(final===n)return console.log(result);
        result+='\n';
        //endregion
        //region second row
        for (let i = 0; i < 6; i++) {
            if(i===0||i===5){
                result+='*';
            }
            if(i===1||i===4){
                result+=toPrint[count];
                count++;
                removeFirstChar(toPrint);
            }
            if(i===2||i===3){
                result+='-';
            }
        }
        final++;
        if(final===n)return console.log(result);
        result+='\n';
        //endregion
        //region third row
        for (let i = 0; i <6; i++) {
            if(i===0||i===5){
                result+=toPrint[count];
                count++;
                removeFirstChar(toPrint);
            }
            else{
                result+='-';
            }
        }
        final++;
        if(final===n)return console.log(result);
        result+='\n';
        //endregion
        //region forth row
        for (let i = 0; i < 6; i++) {
            if(i===0||i===5){
                result+="*";
            }
            if(i===1||i===4){
                result+=toPrint[count];
                count++;
                removeFirstChar(toPrint);
            }
            if(i===2||i===3){
                result+='-';
            }
        }
        final++;
        if(final===n)return console.log(result);
        result+='\n';
        //endregion

    }



    function removeFirstChar (str) {
        str=str.slice(0,1);
        return str;

    }
}
solve(4);