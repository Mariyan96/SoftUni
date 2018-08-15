const BASE_URL = 'https://baas.kinvey.com/';
const APP_KEY = 'kid_HyVT-7XSQ';
const APP_SECRET = '47e61595507347cea0acbddf59970044';
const AUTH_HEADERS = {'Authorization': "Basic " + btoa(APP_KEY + ":" + APP_SECRET)};
const BOOKS_PER_PAGE = 10;

//region User
function logoutUser() {
    $.ajax({
        method: 'POST',
        url: BASE_URL +  'user/' + APP_KEY + '/_logout',
        headers: {Authorization: 'Kinvey ' + localStorage.getItem('authToken')}
    })
    localStorage.clear()
    showHomeView()
    showHideMenuLinks()
    $('#loggedInUser').text("")
    showInfo('Logout successful.')
}
function signInUser(res, message) {
    //1. Save the session
    //2. Show the message if successful
    //3. Hide menus
    saveAuthInSession(res);
    showHideMenuLinks();
    showHomeView();
    showInfo(message);
    $('#loggedInUser').text('Welcome, '+localStorage.getItem('username'));
}
function loginUser() {
    let username = $("#formLogin input[name='username']").val();
    let password = $("#formLogin input[name='passwd']").val();
    $.ajax({
        method:'POST',
        url:BASE_URL+ 'user/'+APP_KEY+'/login',
        headers:AUTH_HEADERS,
        data:{username,password}
    }).then(function (res) {
        signInUser(res,'Login Successful')
    }).catch(handleAjaxError)
}


function registerUser() {
    let username = $("#formRegister input[name='username']").val();
    let password = $("#formRegister input[name='passwd']").val();
    $.ajax({
        method:'POST',
        url:BASE_URL+'user/'+APP_KEY+'/',
        headers: AUTH_HEADERS,
        data:{username,password}
    }).then(function (res) {
        signInUser(res,'Registration successful')
    }).catch(handleAjaxError);
}

function saveAuthInSession(userInfo) {
    localStorage.setItem('authToken',userInfo._kmd.authtoken);
    localStorage.setItem('userId',userInfo._id);
    localStorage.setItem('username',userInfo.username);
}
//endregion

//region Books

function listBooks() {
    $.ajax({
        method:'GET',
        url:BASE_URL+'appdata/'+APP_KEY+'/books',
        headers:{Authorization:'Kinvey '+localStorage.getItem('authToken')}
    }).then(function (res) {
        displayPaginationAndBooks(res.reverse())
    }).catch(handleAjaxError);
}

function createBook()
{
    let title=$('#formCreateBook > div:nth-child(2) > input[type="text"]').val();
    let author=$('#formCreateBook > div:nth-child(4) > input[type="text"]').val();
    let description = $('#formCreateBook > div:nth-child(6) > textarea').val();
    console.log(title);
    console.log(author);
    console.log(description);
    $.ajax({
        method:'POST',
        url:BASE_URL+'appdata/'+APP_KEY+'/books',
        headers:{Authorization:'Kinvey '+localStorage.getItem('authToken')},
        data:{title,author,description}
    }).then(function (res) {
        showInfo('Book Created.')
        listBooks();
    }).catch(handleAjaxError)
}

function deleteBook(book) {
    $.ajax({
        method:'DELETE',
        url:BASE_URL+'appdata/'+APP_KEY+'/books/'+book._id,
        headers:{Authorization:'Kinvey '+localStorage.getItem('authToken')}
    }).then(function () {
        showInfo('Book deleted.')
        listBooks()
    }).catch(handleAjaxError);
}

function loadBookForEdit(book) {
    showView('viewEditBook')
    $('#formEditBook input[name="title"]').val(book.title)
    $('#formEditBook input[name="author"]').val(book.author)
    $('#formEditBook textarea[name="description"]').val(book.description)
    $('#formEditBook input[name="id"]').val(book._id)
}
function editBook() {
    let title=$('#formEditBook input[name="title"]').val()
    let author=$('#formEditBook input[name="author"]').val()
    let description=$('#formEditBook textarea[name="description"]').val()
    let bookId=$('#formEditBook input[name="id"]').val()
    $.ajax({
        method:'PUT',
        url:BASE_URL+'appdata/'+APP_KEY+'/books/'+bookId,
        headers:{Authorization:'Kinvey '+localStorage.getItem('authToken')},
        data:{title,author,description}
    }).then(function () {
        listBooks();
    }).catch(handleAjaxError);
    // PUT -> BASE_URL + 'appdata/' + APP_KEY + '/books/' + book._id
    showInfo('Book edited.')
}

function displayPaginationAndBooks(books) {
    showView('viewBooks')
    let pagination = $('#pagination-demo');
    if(pagination.data("twbs-pagination")){
        pagination.twbsPagination('destroy')
    }
    pagination.twbsPagination({
        totalPages: Math.ceil(books.length / BOOKS_PER_PAGE),
        visiblePages: 5,
        next: 'Next',
        prev: 'Prev',
        onPageClick: function (event, page) {
            // console.log($('#books > table > tbody tr'))
            $('#books > table tr').each((index, element) => {
                console.log(index);
                if (index > 0) {
                    $(element).remove()
                }
            });
            let startBook = (page - 1) * BOOKS_PER_PAGE;
            let endBook = Math.min(startBook + BOOKS_PER_PAGE, books.length);
            $(`a:contains(${page})`).addClass('active');
            for (let i = startBook; i < endBook; i++) {
                let tr =$(`<tr><td>${books[i].title}</td>`+
                               `<td>${books[i].author}</td>`+
                               `<td>${books[i].description}</td>`);
                $('#books>table').append(tr);
                if(books[i]._acl.creator===localStorage.getItem('userId')){
                    let td =$('<td>');
                    let aDel = $('<a href="#">[Delete]</a>').on('click',function () {
                        deleteBook(books[i]);
                    });
                    let aEdit = $('<a href="#">[Edit]</a>').on('click',function () {
                        loadBookForEdit(books[i]);
                    })
                    td.append(aDel).append(aEdit);
                    tr.append(td);
                }
            }
        }
    })
}

//endregion


function handleAjaxError(response) {
    let errorMsg = JSON.stringify(response);
    if (response.readyState === 0)
        errorMsg = "Cannot connect due to network error.";
    if (response.responseJSON && response.responseJSON.description)
        errorMsg = response.responseJSON.description;
    showError(errorMsg)
}