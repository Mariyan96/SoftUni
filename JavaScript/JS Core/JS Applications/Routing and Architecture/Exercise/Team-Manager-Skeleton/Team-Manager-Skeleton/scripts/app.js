$(() => {
    const app = Sammy('#main', function () {
        this.use('Handlebars','hbs')
        this.get('index.html',displayHome);
        this.get('#/home',displayHome);
        this.get('#/about',function () {
            this.loadPartials({
                header: './templates/common/header.hbs',
                footer:'./templates/common/footer.hbs'
            }).then(function () {
                this.partial('./templates/about/about.hbs')
            })
        });
        function displayHome(ctx) {
            ctx.loggedIn=sessionStorage.getItem('authtoken')!==null;

            ctx.loadPartials({
                header: './templates/common/header.hbs',
                footer:'./templates/common/footer.hbs'
            }).then(function () {
                this.partial('./templates/home/home.hbs')
            })
        }
    });

    app.run();
});