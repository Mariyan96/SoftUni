function addSticker() {
    let title=$('input[class=title]');
    let text = $('input[class=content]');

    if(title.val()!==''&&text.val()!==''){
        let stickerList = $('#sticker-list');
        let button =$('<a class="button">x</a>');
        button.on('click',function(){
            $(this).parent().remove()
        });
        stickerList.append($('<li class="note-content">')
            .append(button)
            .append($(`<h2>${title.val()}</h2>`))
            .append($('<hr>'))
            .append($(`<p>${text.val()}</p>`)))
        title.val('');
        text.val('');
    }
}