const BASE_URL='https://baas.kinvey.com/';
const APP_KEY='kid_SkjM02tSQ';
const APP_SECRET = '46df82a7adae414e90f2f0d81ccdf03c';
const AUTH_HEADER = {'Authorization': 'Basic '+btoa(APP_KEY+':'+APP_SECRET)};
let kinveyController = (function () {
    function registerUser(username,password,firstName,lastName,phone,email) {
        $.ajax({
            method:'POST',
            url:BASE_URL+'user/'+APP_KEY+'/',
            headers:AUTH_HEADER,
            data:{username,password,firstName,lastName,phone,email}
        }).then(function (res) {
            saveAuthItems(res);
            console.log(res);
        }).catch(handleAjaxError)
    }
    function loginUser(username,password) {
        $.ajax({
            method:'POST',
            url:BASE_URL+'user/'+APP_KEY+'/login',
            headers:AUTH_HEADER,
            data:{username,password}
        }).then(function (res) {
            saveAuthItems(res)
        }).catch(handleAjaxError)
    }
    function editUser(firstName,lastName,phone,email) {
        $.ajax({
            method:'PUT',
            url:BASE_URL+'user/'+APP_KEY+'/'+localStorage.getItem('userId'),
            headers:{'Authorization': 'Kinvey '+localStorage.getItem('authToken')},
            data:{firstName,lastName,phone,email}
        }).then(function (res) {
            saveAuthItems(res);
        }).catch(handleAjaxError);
    }
    function saveAuthItems(data) {
        localStorage.setItem('authToken',data._kmd.authtoken);
        localStorage.setItem('firstName',data.firstName);
        localStorage.setItem('lastName',data.lastName);
        localStorage.setItem('phone',data.phone);
        localStorage.setItem('email',data.email);
        localStorage.setItem('userId',data._id);
    }
    function handleAjaxError(err) {
        console.log(err);
    }
    return {registerUser,loginUser,editUser}
})();
;