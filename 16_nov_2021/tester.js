const arrayUtil = require('./arrayUtil.js');

const arr = arrayUtil.inputArrayFromUser();

console.log('User array is: ' + arr);

const max = arrayUtil.findMax(arr);

console.log('Max number is: ' + max);

const index = arrayUtil.findMaxIndex(arr);

console.log('Max number index is: ' + index);

const evens = arrayUtil.returnEvenNumbers(arr);

console.log('Even numbers: ' + evens);

const sortedArray = arrayUtil.returnNewSortedArray(arr);

console.log('Sorted array: ' + sortedArray);

console.log('Original array is: ' + arr);