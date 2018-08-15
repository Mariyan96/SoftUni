handlers.viewHomePage = function (ctx) {
    ctx.isUser=sessionStorage.getItem('authToken')!==null;
    ctx.username =sessionStorage.getItem('username');
    ctx.loadPartials({
        footer:'./templates/common/footer.hbs',
        navigation:'./templates/common/navigation.hbs'
    }).then(function () {
        this.partial('./templates/home.hbs')
    })
};
handlers.viewRegisterPage = function (ctx) {
    ctx.loadPartials({
        footer:'./templates/common/footer.hbs',
        navigation:'./templates/common/navigation.hbs'
    }).then(function () {
        this.partial('./templates/forms/register.hbs')
    })
};
handlers.registerUser = function (ctx) {
    ctx.isUser=sessionStorage.getItem('authToken')!==null;
    const username = ctx.params.username;
    const password = ctx.params.password;
    const passwordRepeat = ctx.params.repeatPass;
    if(!/[a-zA-Z]{3,}/.test(username)){
        notify.showError('Username should be at least 3 symbols!');
    }else if(!/[a-zA-Z0-9]{3,}/.test(password)){
        notify.showError('Password should contain at least 6 chars or numbers!');
    }else if(password!==passwordRepeat){
        notify.showError('Password should match!');
    }else{
        auth.register(username,password).then(function (data) {
            auth.saveTokens(data);
            ctx.redirect('#/carListing');
            notify.showInfo('Registration Successful');
        });
    }
};
handlers.viewLoginPage=function (ctx) {
    ctx.loadPartials({
        footer:'./templates/common/footer.hbs',
        navigation:'./templates/common/navigation.hbs'
    }).then(function () {
        this.partial('./templates/forms/login.hbs')
    })
}
handlers.loginUser = function (ctx) {
    ctx.isUser=sessionStorage.getItem('authToken')!==null;
    const username = ctx.params.username;
    const password = ctx.params.password;
    if(!/[a-zA-Z]{3,}/.test(username)){
        notify.showError('Username should be at least 3 symbols!');
    }else if(!/[a-zA-Z0-9]{3,}/.test(password)) {
        notify.showError('Password should contain at least 6 chars or numbers!');
    }else{
        auth.login(username,password).then(function (data) {
            auth.saveTokens(data);
            notify.showInfo('Login Successful');
            ctx.redirect('#/carListing');
        }).catch(function (err) {
            notify.handleError(err)
        })
    }
};
handlers.logoutUser=function (ctx) {
    ctx.isUser=sessionStorage.getItem('authToken')!==null;
    auth.logout().then(function () {
        sessionStorage.clear();
        ctx.redirect('#/home');
        notify.showInfo('Logout Successful');
    })
}
