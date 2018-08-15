$(() => {
    const app = Sammy('#main',function () {
        this.use('Handlebars','hbs');
        this.get('#/login',function () {
            this.partial('./templates/login.hbs')
        });
        this.post('#/login',function (context) {
            kinveyController.loginUser(
                context.params.username,
                context.params.password)
            this.redirect('#/profile')
        });
        this.get('#/register',function () {
            this.partial('./templates/register.hbs')
        });
        this.post('#/register',function (context) {
                kinveyController.registerUser(context.params.username,
                    context.params.password,
                    context.params.firstName,
                    context.params.lastName,
                    context.params.phone,
                    context.params.email)
                this.redirect('#/profile')
        });
        this.get('#/contacts',async function () {
            this.loadPartials({
                details:'./templates/partials/details.hbs'
            }).then(async function () {
                let contacts =await $.get('./data.json')
                this.contacts=contacts;
                this.partial('./templates/contacts.hbs')
            });
        });
        this.get('#/profile',function () {
            this.partial('./templates/profile.hbs')
            this.firstName=localStorage.getItem('firstName');
            this.lastName=localStorage.getItem('lastName');
            this.email=localStorage.getItem('email');
            this.phone=localStorage.getItem('phone');
        });
        this.put('#/profile',function (context) {
            kinveyController.editUser(
                context.params.firstName,
                context.params.lastName,
                context.params.phone,
                context.params.email);
            this.redirect(get,'#/profile')
        });
    });
    app.run();
});
