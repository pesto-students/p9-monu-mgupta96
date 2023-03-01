//! FUNCTION INHERITENCE

Person = function(){}
Teacher = function(){}
Person.prototype.initialize = function(name, age){
    this.name = name;
    this.age = age;
}
p = new Person();
console.log(Person, p) // [λ: Person] Person {}
console.log(typeof Teacher)// function


// Inheriting Teacher class from Person
Object.setPrototypeOf(Teacher.prototype, Person.prototype);
// Adding teach() in teacher class
Teacher.prototype.teach = function(subject){
    console.log(`${this.name} is now teaching ${subject}`);
}

console.log(Object.getPrototypeOf(Teacher)); // [λ]

him = new Teacher();
console.log(him); // Teacher{}
him.initialize("Adam", 45);
console.log(him); // Teacher { name: 'Adam', age: 45 }
him.teach("inheritence"); // Adam is now teaching inheritence 