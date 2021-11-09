
const obj = {
    "name": "Gevorg",
    age: 20
}

obj["year"] = 1;

// delete obj["year"]; This will remove the key from the object.

console.log(obj.name);
console.log(obj["name"]);

console.log(obj.age);
console.log(obj["age"]);

console.log(obj);

function returnValueInObject(obj, key) {
    // return obj.key Is not valid.
    return obj[key];
}

console.log(returnValueInObject(obj, "year"));

console.log(Object.keys(obj));
console.log(Object.values(obj));

printAllKeyValuePairs(obj);

function printAllKeyValuePairs(obj) {
    console.log("Using 'in': ");
    for (let key in obj) {
        console.log("key is: " + key);
        console.log("value is: " + obj[key]);
    }
}