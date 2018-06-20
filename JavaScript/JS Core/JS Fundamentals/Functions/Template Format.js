function solve (array) {
    let result='';
    result+=`<?xml version="1.0" encoding="UTF-8"?>
<quiz>`;
    for (let i = 0; i < array.length-1; i+=2) {
        let question = array[i];
        let answer = array[i+1];
        result+=(qA(question,answer));

    }
    result+=(`\n</quiz>`);
    console.log(result);

    function qA(question,answer) {
        return `
  <question>
    ${question}
  </question>
  <answer>
    ${answer}
  </answer>`
    }
}