function rotateArray(input) {

    let numberOfRotations = Number(input.pop())%input.length;
    for (let i = 1; i <= numberOfRotations; i++) {
        let last = input.pop();
        input.unshift(last);
    }
    console.log(input.join(' '));
}
rotateArray(['1','2','3','4','2']);
rotateArray(['Banana','Orange','Coconut','Apple','15']);