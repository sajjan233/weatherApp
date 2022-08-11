const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Weather = new Schema({
    name: { type: String },
    latitude: { type: Number },
    longitude: { type: Number },
    rain: {
        '1h': {type: Number }
    },
    temp: { type: Number },
    windSpeed: { type: Number },
    maxTemp: { type: Number },
    minTemp: { type: Number },


})

module.exports = mongoose.model('Weather', Weather)