class Person{
    constructor(firstName,lastName,age,email){
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
        this.email=email;
    }
    toString(){
        let result;
        result = this.firstName+' '+this.lastName+' ';
        result+=`(age: ${this.age}, email: ${this.email})`;
        return result
    }
}

let person = new Person('Maria', 'Petrova', 22, 'mp@yahoo.com');
console.log(person.toString());
