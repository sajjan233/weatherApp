const express = require('express')
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser')
const db = 'mongodb://localhost/weatherDB';
const router = require("./router/weather")
const port = 5050;

mongoose.connect(db)
    .then(() => {
        console.log('database connection ');
    })
    .catch((err) => {
        console.log("database connection error", err);
    })


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())


app.use('/', router)
app.listen(port, () => {
    console.log('server run on port ', port);
})

