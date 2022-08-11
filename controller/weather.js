const Weather = require('../modul/weather')

const weatherData = async (req, res) => {
    let result = await Weather.find({}, { __v: 0 })
    res.send(result)
}

module.exports = {
    weatherData
}
