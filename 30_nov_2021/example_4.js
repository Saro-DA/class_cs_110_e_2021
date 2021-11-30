

const reader = require('readline-sync');
const data = require('./data.json');

const id = reader.questionInt("Please enter student id: ");

const students = data.students;

let foundStudent;

for (let i = 0; i < students.length; i++) {
    if (students[i].id === id) {
        foundStudent = students[i];
        break;
    }
}

if (!foundStudent) {
    console.log(`No student was found with id ${id}! Error 404!`);
    return;
}

console.log(foundStudent);

