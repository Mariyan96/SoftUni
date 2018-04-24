const homeController = require('./../controllers/home');

module.exports = (app) => {
    app.get('/', homeController.indexGet);
};
module.exports = (app) =>
{
    app.get('/',homeController.indexGet);
    app.post('/',homeController.indexPost);
}

