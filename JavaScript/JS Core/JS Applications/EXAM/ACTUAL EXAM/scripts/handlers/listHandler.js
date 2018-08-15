handlers.viewAllCars =async function (ctx) {
    ctx.cars= await carFunc.listAllCarsSorted();
    ctx.username = sessionStorage.getItem('username');
    ctx.isUser=true;
    ctx.cars.forEach(car=>{
        if(sessionStorage.getItem('userId')===car._acl.creator){
            car.isAuth=true;
        }
    });
    ctx.loadPartials({
        navigation:'./templates/common/navigation.hbs',
        footer:'./templates/common/footer.hbs',
        carForm:'./templates/forms/carForm.hbs'
    }).then(function () {
        this.partial('./templates/listing/carListing.hbs')
    })
};
handlers.viewCreateListingPage=function (ctx) {
    ctx.loadPartials({
        navigation:'./templates/common/navigation.hbs',
        footer:'./templates/common/footer.hbs',
    }).then(function () {
        this.partial('./templates/listing/createListing.hbs')
    })
};
handlers.createListing =function (ctx) {
    const title = ctx.params.title;
    const description = ctx.params.description;
    const brand = ctx.params.brand;
    const model = ctx.params.model;
    const year = ctx.params.year;
    const imageUrl = ctx.params.imageUrl;
    const fuel = ctx.params.fuelType;
    const price = ctx.params.price;
    const seller = sessionStorage.getItem('username');
    let imageRegex=/^http+/;
    if(title.length>30){
        notify.showError('The title length must not exceed 33 characters');
    }else if(description.length>450){
        notify.showError('The description length must not exceed 450 characters ');
    }else if(description.length<30){
        notify.showError('The description length must be at least 30 characters ');
    }else if(brand.length>11){
        notify.showError('Brand length must not exceed 11 characters');
    }else if(model.length>11){
        notify.showError('Model length must not exceed 11 characters');
    }else if(fuel.length>11){
        notify.showError('Fuel Type length must not exceed 11 characters');
    }else if(year.length<4){
        notify.showError('The year must be only 4 chars long!');
    }else if(+price>1000000){
        notify.showError('The maximum price is 1000000$');
    }else if(!imageRegex.test(imageUrl)){
        notify.showError('Link image url should start with “http”');
    }else if(title===''||description===''||brand===''||model===''||fuel===''||price===''||year===''||imageUrl===''){
        notify.showError('Cannot Submit with empty input field');
    }else{
        carFunc.createCarListing(seller,title,description,brand,model,year,imageUrl,fuel,price).then(function () {
            ctx.redirect('#/carListing');
            notify.showInfo('Car Listing Created');
        })
    }
}
handlers.viewDetails=function (ctx) {
    const carId = ctx.params.id;
    carFunc.getCarById(carId).then(function (data) {
        ctx.carId=data._id;
        ctx.title=data.title;
        ctx.description=data.description;
        ctx.price=data.price;
        ctx.imageUrl=data.imageUrl;
        ctx.fuel=data.fuel;
        ctx.brand=data.brand;
        ctx.model=data.model;
        ctx.year=data.year;
        ctx.isAuth = sessionStorage.getItem('userId')===data._acl.creator;
        ctx.loadPartials({
            navigation:'./templates/common/navigation.hbs',
            footer:'./templates/common/footer.hbs',
        }).then(function () {
            this.partial('./templates/listing/listingDetails.hbs')
        })
    })

}
handlers.viewEditPage=function (ctx) {

    let carId= ctx.params.id;
    carFunc.getCarById(carId).then(function (data) {
        console.log(data);
        ctx.title=data.title;
        ctx.description=data.description;
        ctx.price=data.price;
        ctx.imageUrl=data.imageUrl;
        ctx.fuel=data.fuel;
        ctx.brand=data.brand;
        ctx.model=data.model;
        ctx.year=data.year;
        ctx.carId=carId;
        ctx.loadPartials({
            navigation:'./templates/common/navigation.hbs',
            footer:'./templates/common/footer.hbs',
        }).then(function () {
            this.partial('./templates/listing/editListing.hbs')
        })
    })
}
handlers.editCarListing=function (ctx) {
    let carId = ctx.params.carId;
    const title = ctx.params.title;
    const description = ctx.params.description;
    const brand = ctx.params.brand;
    const model = ctx.params.model;
    const year = ctx.params.year;
    const imageUrl = ctx.params.imageUrl;
    const fuel = ctx.params.fuelType;
    const price = ctx.params.price;
    const seller=sessionStorage.getItem('username');
    let imageRegex=/^http+/;


    if(title.length>30){
        notify.showError('The title length must not exceed 33 characters');
    }else if(description.length>450){
        notify.showError('The description length must not exceed 450 characters ');
    }else if(description.length<30){
        notify.showError('The description length must be at least 30 characters ');
    }else if(brand.length>11){
        notify.showError('Brand length must not exceed 11 characters');
    }else if(model.length>11){
        notify.showError('Model length must not exceed 11 characters');
    }else if(fuel.length>11){
        notify.showError('Fuel Type length must not exceed 11 characters');
    }else if(year.length>4){
        notify.showError('The year must be only 4 chars long!');
    }else if(+price>1000000){
        notify.showError('The maximum price is 1000000$');
    }else if(!imageRegex.test(imageUrl)){
        notify.showError('Link image url should start with http');
    }else if(title===''||description===''||brand===''||model===''||fuel===''||price===''||year===''||imageUrl===''){
        notify.showError('Cannot Submit with empty input field');
    }else {
        carFunc.editCarListing(carId,seller,title,description,brand,model,year,imageUrl,fuel,price).then(function () {
            ctx.redirect('#/carListing');
            notify.showInfo('Car List Edited');
        })
    }
}
handlers.deleteCarListing=function (ctx) {
    let carId=ctx.params.id;
    carFunc.deleteCarListing(carId).then(function () {
        notify.showInfo('Car List Deleted');
        ctx.redirect('#/carListing')
    })
}
handlers.viewMyListings= async function (ctx) {
    ctx.cars= await carFunc.myCarsListing(sessionStorage.getItem('username'));
    ctx.username = sessionStorage.getItem('username');
    console.log(ctx.cars);
    ctx.isUser=true;
    ctx.cars.forEach(car=>{
        if(sessionStorage.getItem('userId')===car._acl.creator){
            car.isAuth=true;
        }
    });
    ctx.loadPartials({
        navigation:'./templates/common/navigation.hbs',
        footer:'./templates/common/footer.hbs'
    }).then(function () {
        this.partial('./templates/listing/myListings.hbs')
    })
}