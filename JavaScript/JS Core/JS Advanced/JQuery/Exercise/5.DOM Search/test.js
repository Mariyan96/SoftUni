function domSearch(selector, caseSensitive) {
    $(selector).addClass('items-control')
        .append($('<div class="add-controls">')
            .append($('<label>Enter text: </label>')
                .append($('<input>')))
            .append($('<a class="button" style="display:inline-block">Add</a>')));


    $(selector).append($('<div class="search-control">')
        .append($('<label>Search </label>').append('<input>')));
    $('.search-control label input').on('change', filter);
    let resultItems = ($('<div class="result-control">')
        .append($('<ul class="items-list">')));
    resultItems.appendTo(selector);
    function filter() {
        let searchedText = $('.search-control input').val();
        let text;
        $('.list-item').each((i,e)=>{
            text = e.textContent;
            if (!caseSensitive) {
                searchedText = searchedText.toUpperCase();
                text = e.textContent.toUpperCase();
            }
            if (text.indexOf(searchedText) === -1) {
                $(e).css("display", "none");
            } else {
                $(e).css("display", "block");
            }
        })

    }

    let addBtn = $('.button');
    addBtn.on('click', function () {
        let text = $('.add-controls input');
        $('.items-list').append($('<li class="list-item">')
            .append($(`<a class="button">X</a>`))
            .append($(`<strong>${text.val()}</strong>`)));
        $('.result-control .button').on('click', function () {
            $(this).parent().remove();
        });
        text.val('');
    });

}