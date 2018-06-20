function printLetters (sent) {
    for (let i = 0; i < sent.length; i++) {
        console.log(`str[${i}] -> ${sent[i]}`);
    }
}


printLetters('Hello, World!');