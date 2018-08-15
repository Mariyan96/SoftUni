function solve() {
    class Person{
        constructor(name,email){
            this.name=name;
            this.email=email;
        }
    }
    class Teacher extends Person{
        constructor(name,email,subject){
            super(name,email);
            this.subject=subject;
        }
    }
    return {Person:Person,Teacher:Teacher};
}
// let teacher1 = new Teacher("Prakash",'prakash@yahoo.com','Maths')
// console.log(teacher1);
