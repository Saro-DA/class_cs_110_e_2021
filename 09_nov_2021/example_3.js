
let names = ["Saro", "Armen", "Lilit", "Gayaneh"];

// for (let i = 0; i < names.length; i++) {
//     console.log(names[i]);
// }

// for (let i in names) { // will iterate over the indices of the array.
//     console.log('Value in index ' + i + " is " + names[i] + ".");
// }

for (let i of names) { // will iterate over the values of each index in the array.
    console.log(i);
}

