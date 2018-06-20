function capitalize(sentence) {
    let arr=sentence.split(' ');
    for (let i = 0; i < arr.length; i++) {
        arr[i]=arr[i][0].toUpperCase()+arr[i].substring(1).toLowerCase();
    }
    console.log(arr.join(' '));
}




capitalize('Capitalize these words');
capitalize('Was that Easy? tRY thIs onE for SiZe!')