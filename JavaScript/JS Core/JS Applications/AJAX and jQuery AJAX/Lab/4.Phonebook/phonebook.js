const BASE_URL ='https://phonebook-16cf9.firebaseio.com/Phonebook';
const TABLE = $("#phonebook")
const PERSON=$('#person')
const PHONE =$('#phone');
$("#btnLoad").on('click',function () {
    $.ajax({
        method:'GET',
        url:BASE_URL+'.json'
    }).then(appendContacts)
        .catch(handleError);
});
$("#btnCreate") .on('click',function () {
    let name =PERSON.val();
    let number=PHONE.val();
    if(number.trim()!==''&&name.trim()!==''){
        $.ajax({
            method:'POST',
            url:BASE_URL+'.json',
            data:JSON.stringify({name,number})
        }).then(function () {
            $('#btnLoad').click();
            PERSON.val('');
            PHONE.val('');
        }).catch(handleError)
    }
})
function appendContacts(contacts) {
    TABLE.empty();
    let keys = Object.keys(contacts);
    keys.sort((a,b)=>contacts[a].name.localeCompare(contacts[b].name));
    for (let key in contacts) {
        let li = $(`<li>`);
        li.text(`${contacts[key].name}: ${contacts[key].number}`);
        let a=$("<a href='#'>[Delete]</a>");
        a.on('click',function () {
            $(this).parent().remove();
            $.ajax({
                method:'DELETE',
                url:BASE_URL+'/'+key+'.json'
            })
        });
        li.append(a);
        TABLE.append(li)
    }
}
function handleError(err) {

}