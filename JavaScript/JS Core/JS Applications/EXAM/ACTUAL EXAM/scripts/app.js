let handlers = {};
$(()=>{
   const app=Sammy('#container',function () {
       this.use('Handlebars','hbs');
       this.get('#/home',handlers.viewHomePage);
       this.get('index.html',handlers.viewHomePage);
       this.get('#/register',handlers.viewRegisterPage);
       this.post('#/register',handlers.registerUser)
       this.get('#/login',handlers.viewLoginPage)
       this.post('#/login',handlers.loginUser)
       this.get('#/logout',handlers.logoutUser)
       this.get('#/carListing',handlers.viewAllCars);
       this.get('#/createListing',handlers.viewCreateListingPage)
       this.post('#/createListing',handlers.createListing)
       this.get('#/details/:id',handlers.viewDetails);
       this.get('#/edit/:id',handlers.viewEditPage);
       this.post('#/edit',handlers.editCarListing);
       this.get('#/delete/:id',handlers.deleteCarListing)
       this.get('#/myListing',handlers.viewMyListings)
   });
    app.run();
});