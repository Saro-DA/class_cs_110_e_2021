
let simpleVariable1 = 10;

let simpleVariable2 = simpleVariable1;

simpleVariable1++;

console.log(simpleVariable2);

let complexVariable1 = [10];
let complexVariable2 = complexVariable1;

complexVariable1[0]++;
console.log(complexVariable2);

function incrementVariable(variable) {
    variable++;
}

let simpleVariable3 = 20;

incrementVariable(simpleVariable3);

console.log(simpleVariable3);

let complexVariable3 = [20];

function incrementArray(arr) {
    arr[0]++;
}

incrementArray(complexVariable3);

console.log(complexVariable3);