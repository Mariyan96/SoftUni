function captureNum(array) {
    let result = [];
    let regex = /\d+/g;
    let wholeSent=array.join(' ');
    let match=regex.exec(wholeSent);
    while(match){
        result.push(match)
        match=regex.exec(wholeSent);
    }
    console.log(result.join(' '));
}


captureNum(['The300', 'What is that?', 'I think it’s the 3rd movie.', 'Lets watch it at 22:45']);