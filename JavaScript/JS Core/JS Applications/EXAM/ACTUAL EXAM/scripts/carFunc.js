let carFunc = (()=> {
    function getCarById(carId) {
        const endpoint = `cars/${carId}`;
        return remote.get('appdata',endpoint,'Kinvey');
    }
    function listAllCars() {
        return remote.get('appdata','cars','kinvey');
    }
    function listAllCarsSorted() {
        const endpoint = 'cars?query={}&sort={"_kmd.ect": -1}';
        return remote.get('appdata',endpoint,'Kinvey');
    }
    function editCarListing(carId,seller,title,description,brand,model,year,imageUrl,fuel,price) {
        const endpoint = `cars/${carId}`;
        const data = {seller,title,description,brand,model,fuel,imageUrl,year,price};
        return remote.update('appdata',endpoint,'Kinvey',data)
    }
    function createCarListing(seller,title,description,brand,model,year,imageUrl,fuel,price) {
        let data= {seller,title,description,brand,model,year,imageUrl,fuel,price};
        return remote.post('appdata','cars','Kinvey',data)
    }
    function deleteCarListing(carId) {
        const endpoint = `cars/${carId}`;
        return remote.remove('appdata',endpoint,'Kinvey');
    }
    function myCarsListing(username) {
        const endpoint=`cars?query={"seller":"${username}"}&sort={"_kmd.ect": -1}`
        return remote.get('appdata',endpoint,'Kinvey')
    }
    return {getCarById,
        listAllCars,
        listAllCarsSorted,
        editCarListing,
        createCarListing,
        deleteCarListing,
        myCarsListing
    }
})();