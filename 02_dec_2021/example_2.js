

// arr = [5, 5, 5, 5];

// 5 + sum([5, 5, 5])

console.log(sumArray([5, 5, 5, 5, 6]));


function sumArrayHelper(arr, start) {
    if (start === arr.length - 1) return arr[start];

    return arr[start] + sumArrayHelper(arr, start + 1);
}

function sumArray(arr) {
    return sumArrayHelper(arr, 0);
}

