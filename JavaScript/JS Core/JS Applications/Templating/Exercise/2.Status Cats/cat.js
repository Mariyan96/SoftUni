(function () {
    class Cat {
        constructor(id, statusCode, statusMessage, imageLocation) {
            this.id = id;
            this.statusCode = statusCode;
            this.statusMessage = statusMessage;
            this.imageLocation = imageLocation;
        }
    }

    let cats = [
        new Cat('100', 100, 'Continue', '100'),
        new Cat('200', 200, 'Ok', '200'),
        new Cat('400', 400, 'Bad request', '400'),
        new Cat('404', 404, 'Not Found', '404'),
    ];

    window.cats = cats;
})()