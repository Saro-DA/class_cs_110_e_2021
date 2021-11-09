
const person1 = {
    fName: "Saro",
    lName: "Deravanesian",
    year: 5,
    car: {
        name: "Toyota FJ Cruiser"
    }
}
person1.year = 6

const person2 = {
    fName: "Aram",
    lName: "Hayrapetyan",
    year: 5,
    car: {
        name: "BMW M7"
    }
}

const people = [];

people.push(person1);
people.push(person2);

console.log(person1.car.name);

console.log(people[1].car.name);