const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Weather = new Schema({
    name: { type: String },
    latitude: { type: Number },
    longitude: { type: Number },
    generationtime_ms: { type: Number },
    utc_offset_seconds: { type: Number },
    timezone: { type: String },
    timezone_abbreviation: { type: String },
    elevation: { type: Number },
    hourly_units: {
        time: { type: String ,require:true},
        temperature_2m: { type: String ,require:true},
        dewpoint_2m: { type: String ,require:true},
        rain: { type: String ,require:true},
        showers: { type: String ,require:true},
        weathercode: { type: String ,require:true},
        cloudcover: { type: String ,require:true},
        windspeed_10m: { type: String,require:true },
        soil_temperature_0cm: { type: String,require:true },
    },
    hourly: {
        time: { type: Array },
        temperature_2m: { type: Array },
        dewpoint_2m: { type: Array },
        rain: { type: Array },
        showers: { type: Array },
        weathercode: { type: Array },
        cloudcover: { type: Array },
        windspeed_10m: { type: Array },
        soil_temperature_0cm: { type: Array }
    }
},
{ timestamps: true }

)

module.exports = mongoose.model('Weather', Weather)