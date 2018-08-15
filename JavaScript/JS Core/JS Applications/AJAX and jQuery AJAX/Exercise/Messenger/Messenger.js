function attachEvents() {
    let baseUrl = `https://messenger-fb3c2.firebaseio.com/Messenger`;
    let textArea = $("#messages");
    let author = $("#author");
    let content = $("#content");

    loadMessages();

    $("#submit").click(postNewMessage);
    $("#refresh").click(loadMessages);
    function postNewMessage() {
        if(author.val().trim()!==''&&content.val().trim()!==''){
            let req ={
                method:'POST',
                url:baseUrl+'.json',
                data: JSON.stringify({author:author.val(),content:content.val(),timestamp:Date.now()}),
                success:loadMessages,
                error:handleError
            };
            $.ajax(req);
            author.val('');
            content.val('');
        }
    }
    function loadMessages() {
        let req = {
            method:'GET',
            url:baseUrl+'.json',
            success:displayMsges,
            error:handleError
        };
        $.ajax(req);
    }
    function displayMsges(data) {
        let text='';
        let sortedId =Object.keys(data).sort((a,b)=>sortByDate(a,b,data));
        for (let id of sortedId) {
            text+=`${data[id].author}: ${data[id].content}\n`
        }
        textArea.text(text);
    }
    function handleError(err) {
        console.log(err);
    }
    function sortByDate(a,b,data) {
        let first = data[a].timestamp;
        let second =data[b].timestamp;
        return first-second;
    }
}