const reader = require('readline-sync');


const input = reader.question('Please tell us your choice: ');

switch (input) {
    case 'apple':
        console.log('You are using iOS.');
        break;
    case 'samsung':
    case 'google':
    case 'xiaomi':
        console.log('You are using Android.');
        break;
    default:
        console.log('An unknown device.');


}