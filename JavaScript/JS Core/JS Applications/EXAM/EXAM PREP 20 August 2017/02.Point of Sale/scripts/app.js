let handlers={};
$(()=>{
    const app = Sammy('#container',function () {
        this.use('Handlebars','hbs');
        this.get('#/home',handlers.getWelcomePage);
        this.get('/index.html',handlers.getWelcomePage);
        this.post('#/register',handlers.registerUser);
        this.post('#/login',handlers.loginUser);
        this.get('#/logout',handlers.logoutUser);
        this.get('#/editor',handlers.getEditor);
        this.post('#/create/entry',handlers.createEntry);
        this.post('#/remove/entry',handlers.removeEntry);
        this.post('#/checkout',handlers.checkOut);
        this.get('#/overview',handlers.getMyReceipts);
        this.get('#/receipt/details/:id',handlers.getReceiptDetails);
    });
    app.run();
});