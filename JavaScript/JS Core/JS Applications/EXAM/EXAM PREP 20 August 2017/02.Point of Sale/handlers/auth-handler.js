handlers.getWelcomePage =function (ctx) {
    ctx.loadPartials({
        login:'./templates/forms/login.hbs',
        register:'./templates/forms/register.hbs',
        footer:'./templates/common/footer.hbs',
    }).then(function () {
        this.partial('./templates/welcome.hbs');
    })
};
handlers.registerUser=function (ctx) {
    const username=ctx.params.username;
    const password=ctx.params.password;
    const passwordRepeat=ctx.params.passwordRepeat;
    if(username.length<5){
        notify.showError('Username should be at least 5 characters');
        return;
    }
    if(password===''||passwordRepeat===''){
        notify.showError('Passwords can`t be empty');
        return;
    }
    if(password!==passwordRepeat){
        notify.showError('Passwords should match');
        return;
    }

    auth.register(username,password).then(function (data) {
        auth.saveTokens(data);
        notify.showInfo('Registration Successful');
        ctx.redirect('#/editor');
    }).catch(function (err) {
        console.log(err);
    });
};
handlers.loginUser = function (ctx) {
    const username = ctx.params.username;
    const password = ctx.params.password;
    if(username.length<5){
        notify.showError('Username should be at least 5 characters');
        return;
    }
    if(password===''){
        notify.showError('Password can`t be empty');
        return;
    }
    auth.login(username,password).then(function (data) {
        auth.saveTokens(data);
        notify.showInfo('Login Successful');
        ctx.redirect('#/editor')
    }).catch(function (err) {
        console.log(err);
    })
};
handlers.logoutUser=function(ctx){
    auth.logout().then(function () {
        sessionStorage.clear();
        notify.showInfo('Logout Successful');
        ctx.redirect('#/home');
    })
}