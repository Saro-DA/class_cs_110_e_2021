const reader = require('readline-sync');

module.exports = {
    inputArrayFromUser: function () {
        const numbers = [];

        let value = +reader.question("Please enter a number (anything else to stop): ");

        while (value && !Number.isNaN(value)) {
            numbers.push(value);
            value = +reader.question("Please enter a number (anything else to stop): ");
        }

        return numbers;
    },

    findMax: function (arr) {
        if (arr.length === 0) return;

        let max = arr[0];

        for (let i = 1; i < arr.length; i++) {
            if (max < arr[i]) {
                max = arr[i];
            }
        }

        return max;
    },

    findMaxIndex: function (arr) {

        if (arr.length === 0) return;

        let max = arr[0];
        let index = 0;

        for (let i = 1; i < arr.length; i++) {
            if (max < arr[i]) {
                max = arr[i];
                index = i;
            }
        }

        return index;
    },

    returnEvenNumbers: function (arr) {
        const result = [];

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] % 2 === 0) {
                result.push(arr[i]);
            }
        }

        return result;
    },

    copyArray: function (arr) {
        const newArray = [];

        for (let i = 0; i < arr.length; i++) {
            newArray.push(arr[i]);
        }

        return newArray;
    },

    sortArray: function (arr) {
        for (let i = 0; i < arr.length - 1; i++) {
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[i] < arr[j]) {
                    const temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
            }
        }
    },

    returnNewSortedArray: function (arr) {
        const newArray = this.copyArray(arr);
        this.sortArray(newArray);
        return newArray;
    }
}


