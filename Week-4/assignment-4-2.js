const Person = function() {};

Person.prototype.initialize = function(name, age) {
    this.name = name;
    this.age = age;
};

const Teacher = function() {};

Object.setPrototypeOf(Teacher.prototype, Person.prototype);

Teacher.prototype.teach = function(subject) {
    return `${this.name} of age ${this.age} is now teaching ${subject}`;
}

const him = new Teacher();

him.initialize("Adam", 45);
console.log(him.teach("Inheritance"));
