class CheckingAccount{
    constructor(clientId,email,firstName,lastName){
        this.clientId=clientId;
        this.email=email;
        this.firstName=firstName;
        this.lastName=lastName;
    }
    get clientId(){
        return this._clientId;
    }
    get email(){
        return this._email;
    }
    get firstName(){
        return this._firstName;
    }
    get lastName(){
        return this._lastName;
    }
    set clientId(id){
        let pattern=/^[0-9]{6}$/g;
        if(pattern.test(id)){
            this._clientId=id;
        }else{
            throw new TypeError('Client ID must be a 6-digit number');
        }
    }
    set email(email){
        let pattern =/^[a-zA-Z0-9]+\@[a-zA-Z\.]+$/g;
        if(pattern.test(email)){
            this._email=email;
        }else{
            throw new TypeError('Invalid e-mail');
        }
    }
    set firstName(firstName){
        let pattern=/^[a-zA-Z]{3,20}$/g;
        if(firstName.length<3||firstName.length>20){
            throw new TypeError(`First name must be between 3 and 20 characters long `)
        }else if(!pattern.test(firstName)){
            throw new TypeError(`First name must contain only Latin characters`)
        }else{
            this._firstName=firstName;
        }
    }
    set lastName(lastName){
        let pattern=/^[a-zA-Z]{3,20}$/g;
        if(lastName.length<3||lastName.length>20){
            throw new TypeError(`Last name must be between 3 and 20 characters long`)
        }else if(!pattern.test(lastName)){
            throw new TypeError(`Last name must contain only Latin characters`)
        }else{
            this._firstName=lastName;
        }
    }
}



let acc = new CheckingAccount('1314', 'ivan@some.com', 'Ivan', 'Petrov');
//TypeError: Client ID must be a 6-digit number;
