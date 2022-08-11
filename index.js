const express = require('express')
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser')
const db = 'mongodb://localhost/weatherDB';
const port = 5050;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
mongoose.connect(db)
    .then(() => {
        console.log('database connection ');
    })
    .catch((err) => {
        console.log("database connection error", err);
    })




const allRoutes = require("./router/weather")
app.use('/api', allRoutes)



app.listen(port, () => {
    console.log('server run on port ', port);
})

