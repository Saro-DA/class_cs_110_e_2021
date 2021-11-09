

const person = {
    firstName: "Armen",
    lastName: "Armenian",
    yearOfBirth: 2000,
    age: function () {
        return 2021 - this.yearOfBirth;
    }
}

person.yearOfBirth = 1999;

console.log(person.firstName);
console.log(person.lastName);
console.log(person.yearOfBirth);
console.log(person.age());