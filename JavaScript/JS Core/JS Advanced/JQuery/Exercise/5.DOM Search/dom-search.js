function domSearch(container, caseSensitive) {
    $('#content').attr('class', 'items-control');
    let controlDiv = $('<div class="add-controls">');
    controlDiv.appendTo(container);
    controlDiv
        .append('<label>Enter text:<input></label>')
        .append('<a class="button" style="display:inline-block;">Add</a>')

    let searchDiv = $('<div class="search-controls">');
    searchDiv.appendTo(container);
    searchDiv
        .append('<label>Search:<input></label>');

    $('.search-controls label input').on('change', filter);
    let resultDiv = $('<div class="result-controls">');
    resultDiv.append('<ul class="items-list">')
    $('.items-list').append('<li class="list-item">');

    resultDiv.appendTo(container)
    let button = $('.button');
    button.on('click', addingItems);

    function addingItems() {
        let text = $('.add-controls label > input');
        if (text.val() !== '') {
            let item = $('<li class="list-item">');
            item.append('<a class="button">X</a>')
                .append(`<strong>${text.val()}</strong>`);
            text.val('');
            item.appendTo($('.items-list'))
            let btn = $('.list-item .button');
            btn.on('click', function () {
                $(this).parent().remove();
            })
        }
    }

    function filter() {
        let searchedText = $(".search-controls input").val();
        let text;
        $(".result-controls ul li").each((i, e) => {
            if (caseSensitive) {
                text = e.textContent;
            } else {
                searchedText = searchedText.toUpperCase();
                text = e.textContent.toUpperCase();
            }

            if (text.indexOf(searchedText) === -1) {
                $(e).css("display", "none");
            } else {
                $(e).css("display", "block");
            }
        });
    }
}