const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send("Hello from CS 110 E (awesome) section!");
})

app.get('/students', function (req, res) {
    res.json([{
        id: 1,
        name: "Armen"
    }, {
        id: 2,
        name: "Grigor"
    }
    ]);
})


const port = 3000;
app.listen(port, function () {
    console.log(`Application is running on port ${port}!`);
});