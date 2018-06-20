function table(arrayInput) {
    let result =`<table>\n`;
    for (let line of arrayInput) {
        result+=`   <tr>\n`;
        let obj = JSON.parse(line);
        result+=`     <td>${htmlEscape(obj.name)}</td>\n`;
        result+=`     <td>${htmlEscape(obj.position)}</td>\n`;
        result+=`     <td>${+obj.salary}</td>\n`;
        result+=`   <tr>\n`;
    }
    result+=`</table>`;
    console.log(result);

    function htmlEscape(text) {
        let map = {
            '"': '&quot;', '&': '&amp;',
            "'": '&#39;', '<': '&lt;', '>': '&gt;'
        };
        return text.replace(/[\"&'<>]/g, ch => map[ch]);
    }
}




table([`{"name":"Pesho","position":"Promenliva","salary":100000}`,
`{"name":"Teo","position":"Lecturer","salary":1000}`,
`{"name":"Georgi","position":"Lecturer","salary":1000}`]);