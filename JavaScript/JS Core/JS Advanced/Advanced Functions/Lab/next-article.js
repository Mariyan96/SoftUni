function getArticleGenerator(articlesArray) {
    return function () {
        if(articlesArray.length>0){
            let currentArticle = articlesArray.shift();
            $("#content").append($(`<article>${currentArticle}</article>`))
        }
    }
}