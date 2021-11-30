const data = require('./complex_data.json');


function printIds(obj) {
    console.log(obj.id);

    const keys = Object.keys(obj);
    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        if (typeof obj[key] === 'object') {
            printIds(obj[key]);
        }
    }
}

printIds(data);