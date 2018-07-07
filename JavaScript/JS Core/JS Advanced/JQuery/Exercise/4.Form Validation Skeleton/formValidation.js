function validate() {
    let username = $('#username');
    let email = $('#email');
    let password = $('#password');
    let confirmPass = $('#confirm-password');
    let companyNumber = $('#companyNumber');
    let submitBtn = $('#submit');
    let checkBox=$('#company');
    let isValid;

    checkBox.on('change',function () {
        if(checkBox.is(':checked')){
            $('#companyInfo').css('display','block');
        }else{
            $('#companyInfo').css('display','none');

        }
    });
    submitBtn.on('click', function (event) {
        isValid=true;
        event.preventDefault();
        validateField(username,/^[a-zA-Z0-9]{3,20}$/g);
        validateField(email,/^.*@.*?[\.]+.*$/g);
        if(password.val()===confirmPass.val()){
            validateField(password,/^(\w{5,15})$/g);
            validateField(confirmPass,/^(\w{5,15})$/g);
        }else{
            password.css('border-color','red');
            confirmPass.css('border-color','red');
            isValid=false;

        }
        validateCompanyNumber();
        if(isValid){
            $('#valid').css('display','block')
        }else{
            $('#valid').css('display','none')

        }
    });
    function validateField(field,regex) {
        if(regex.test(field.val())){
            field.css('border-color','')
        }else{
            field.css('border-color','red');
            isValid=false;
        }
    }
    function validateCompanyNumber() {
        if(checkBox.is(':checked')){
            if(companyNumber.val()>=1000&&companyNumber.val()<=9999){
                $('#companyNumber').css('border-color','');
            }else{
                $('#companyNumber').css('border-color','red');
                isValid=false;
            }
        }
    }
}