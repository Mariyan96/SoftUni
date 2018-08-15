const BASE_URL = 'https://baas.kinvey.com/';
const APP_KEY='kid_rJ20NEC4Q';
const APP_SECRET ='99e08c5a52e54564adf08defaf42d02a';
const AUTH_HEADER = {'Authorization': 'Basic '+btoa(APP_KEY+':'+APP_SECRET)};
function startApp(){
    showView('home');
    (function attachEvents() {
        $('#ads > table > tbody >tr').append($('<th>Actions</th>'));
        //region AJAX
        $(document).on({
            ajaxStart:function () {
                $('#loadingBox').show();
            },
            ajaxStop:function () {
                $('#loadingBox').hide();
            }
        });
        //endregion
        //region links
        $('#linkHome').show();
        $('#linkHome').on('click',function () {
            showView('home')
        })
        $('#linkRegister').on('click',function () {
            showView('register')
        })
        $('#linkLogin').on('click',function () {
            showView('login')
        })
        $('#linkListAds').on('click',function () {
            showView('viewAds');
            listAds();
        })
        $('#linkCreateAd').on('click',function () {
            showView('createAd')
        })
        $('#linkLogout').on('click',function () {
            logoutUser();
        });
        //endregion
        //region buttons
        $('#buttonRegisterUser').on('click',registerUser)
        $('#buttonLoginUser').on('click',loginUser)
        $('#buttonCreateAd').on('click',addAd);
        $('#buttonReturn').on('click',function () {
            listAds();
            showView('viewAds');
        })
        //endregion
    })()
    checkIfUserIsLog();
}
//region ads
function addAd() {
    let title = $('#formCreateAd > div:nth-child(2) > input[type="text"]').val();
    let descr=$('#formCreateAd > div:nth-child(4) > textarea').val();
    let date=$('#formCreateAd > div:nth-child(6) > input[type="date"]').val();
    let price = $('#formCreateAd > div:nth-child(8) > input[type="number"]').val();
    let imageURL =$('#formCreateAd > div:nth-child(10) > input[type="text"]').val();
    let publisher = localStorage.getItem('userName');
    $.ajax({
        method:'POST',
        url:BASE_URL+'appdata/'+APP_KEY+'/ads',
        headers:{Authorization: 'Kinvey '+ localStorage.getItem('authToken')},
        data:{title,descr,date,price,publisher,imageURL}
    }).then(function () {
        $('#formCreateAd > div:nth-child(2) > input[type="text"]').val('');
        $('#formCreateAd > div:nth-child(4) > textarea').val('');
        $('#formCreateAd > div:nth-child(6) > input[type="date"]').val(new Date());
        $('#formCreateAd > div:nth-child(8) > input[type="number"]').val('');
        $('#formCreateAd > div:nth-child(10) > input[type="text"]').val('');
        listAds();
        showView('viewAds');
        showMsg('Ad created successfully');
    }).catch(handleAjaxError)
}
function listAds() {
    $.ajax({
        method:'GET',
        url:BASE_URL+'appdata/'+APP_KEY+'/ads/',
        headers:{Authorization: 'Kinvey '+ localStorage.getItem('authToken')}
    }).then(function (ads) {
        $('#ads > table > tbody tr').each((index,el)=>{
            if(index>0){
                el.remove();
            }
        })
        let table =$('#ads > table > tbody');
        for (let ad of ads) {
            let tr =$(`<tr><td>${ad.title}</td>`+`
                       <td>${ad.publisher}</td>`+ `
                       <td>${ad.descr}</td>`+`
                       <td>${Number(ad.price)}</td>`+`
                       <td>${ad.date}</td></tr>`)
            let td;
            let aDetails=$('<a href="#">[Details]</a>');
            aDetails.on('click',function () {
                viewDetails(ad)
            });
            if(localStorage.getItem('userId')===ad._acl.creator){
                let aDel = $('<a href="#">[Delete]</a>');
                aDel.on('click',function () {
                    deleteAd(ad)
                })
                let aEdit = $('<a href="#">[Edit]</a>');
                aEdit.on('click',function () {
                    editAd(ad)
                });
                td = $('<td>');
                td.append(aDel).append(aEdit);
            }else{
                td = $("<td>");
            }
            tr.append(td);
            td.append(aDetails);
            table.append(tr);
        }
    }).catch(handleAjaxError);
}
function deleteAd(ad) {
    $.ajax({
        method:'DELETE',
        url:BASE_URL+'appdata/'+APP_KEY+'/ads/'+ad._id,
        headers:{Authorization: 'Kinvey '+localStorage.getItem('authToken')}
    }).then(function () {
        listAds();
        showView('viewAds');
        showMsg('Ad Deleted')
    }).catch(handleAjaxError);

}
function editAd(adToEdit) {
    showView('editAd');
    $('#formEditAd > div:nth-child(4) > input[type="text"]').val(adToEdit.title);
    $('#formEditAd > div:nth-child(6) > textarea').val(adToEdit.descr);
    $('#formEditAd > div:nth-child(8) > input[type="date"]').val(adToEdit.date);
    $('#formEditAd > div:nth-child(10) > input[type="number"]').val(Number(adToEdit.price));
    $('#formEditAd > div:nth-child(12) > input[type="text"]').val(adToEdit.imageURL);
    $('#buttonEditAd').on('click',function () {
        submitEdit(adToEdit)
    })
}
function submitEdit(adToEdit) {
   let title=$('#formEditAd > div:nth-child(4) > input[type="text"]').val();
   let descr=$('#formEditAd > div:nth-child(6) > textarea').val();
   let date =$('#formEditAd > div:nth-child(8) > input[type="date"]').val();
   let price=$('#formEditAd > div:nth-child(10) > input[type="number"]').val();
   let imageURL =$('#formEditAd > div:nth-child(12) > input[type="text"]').val()
   let publisher = localStorage.getItem('userName')
   $.ajax({
       method:'PUT',
       url:BASE_URL+'appdata/'+APP_KEY+'/ads/'+adToEdit._id,
       headers: {Authorization: 'Kinvey '+localStorage.getItem('authToken')},
       data:{title,descr,date,price,publisher,imageURL}
   }).then(function () {
       listAds();
       showMsg('Ad edited successfully');
       showView('viewAds')
   }).catch(handleAjaxError)

}
function viewDetails(ad) {
    showView('details');
    $('#viewDetails').empty();
    let advertInfo =$('<div>').append(
        $(`<img src='${ad.imageURL}' height="150" width="auto">`),
        $('<br>'),
        $('<h2>').text('Title:'),
        $('<label>').text(ad.title),
        $('<h2>').text('Description:'),
        $('<label>').text(ad.descr),
        $('<h2>').text('Publisher:'),
        $('<label>').text(ad.publisher),
        $('<h2>').text('Date:'),
        $('<label>').text(ad.date),
    )
    $('#viewDetails').append(advertInfo);
}
//endregion
//region user settings
function registerUser() {
    let username = $('#formRegister input[type="text"]').val();
    let password= $('#formRegister input[type="password"]').val();
    $.ajax({
        method:'POST',
        url:BASE_URL+'user/'+APP_KEY+'/',
        headers:AUTH_HEADER,
        data:{username,password}
    }).then(function (res) {
        saveAuthToken(res);
        userIn();
        showMsg('Registration successful');
    }).catch(handleAjaxError);
}
function loginUser() {
    let username = $('#formLogin input[type="text"]').val();
    let password= $('#formLogin input[type="password"]').val();
    $.ajax({
        method:'POST',
        url:BASE_URL+'user/'+APP_KEY+'/login',
        headers:AUTH_HEADER,
        data:{username,password}
    }).then(function (res) {
        saveAuthToken(res);
        userIn();
        showMsg('Login successful');
        showView('Home')
    }).catch(handleAjaxError);
}
function logoutUser() {
        $.ajax({
            method:'POST',
            url:BASE_URL+'user/'+APP_KEY+'/_logout',
            headers:{Authorization: 'Kinvey '+localStorage.getItem('authToken')}
        }).then(function () {
            localStorage.removeItem('authToken');
            showMsg('Logout successful');
            userOut();
            showView('Home');
        }).catch(handleAjaxError);
}
function saveAuthToken(userInfo) {
    localStorage.setItem('authToken',userInfo._kmd.authtoken);
    localStorage.setItem('userId',userInfo._id);
    localStorage.setItem('userName',userInfo.username);
}
function checkIfUserIsLog() {
    if(localStorage.getItem('authToken')===null){
        userOut()
    }else{
        userIn()
    }
}
//endregion
//region msg's and other

function userOut() {
    $('.menu-item').hide();
    $('#linkHome').show()
    $('#linkRegister').show()
    $('#linkLogin').show();
}
function userIn() {
    $('.menu-item').hide();
    $('#loggedInUser').text('Welcome, '+localStorage.getItem('userName')).show()
    $('#linkListAds').show();
    $('#linkCreateAd').show();
    $('#linkLogout').show();
    $('#linkHome').show();
}
function handleAjaxError(err) {
    let errBox = $('#errorBox');
    errBox.text(err);
    errBox.show();
    setTimeout(function () {
        $('#errorBox').fadeOut()
    },1000);
}
function showMsg(msg) {
    let infoBox = $('#infoBox');
    infoBox.text(msg);
    infoBox.show();
    setTimeout(function () {
        $('#infoBox').fadeOut()
    },1000);
}
function showView(view){
    $('section').hide();
    switch (view){
        case 'home':
            $('#viewHome').show();
            break;
        case 'login':
            $('#viewLogin').show();
            break;
        case 'register':
            $('#viewRegister').show();
            break;
        case 'viewAds':
            $('#viewAds').show();
            break;
        case 'createAd':
            $('#viewCreateAd').fadeIn();
            break;
        case 'editAd':
            $('#viewEditAd').show();
            break;
        case 'details':
            $('#viewDetails').show();
    }
}

//endregion
