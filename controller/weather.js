const Weather = require('../modul/weather');
const { httpCall } = require('../server/httpCall');

const insertAndUpdate = async (data, reqCityName) => {
    try {
        data.name = reqCityName
        const apiRes = await Weather.create(data)
        if (apiRes) {
            return apiRes
        }
        return Error
    } catch (err) {
        console.log(err);
    }
}
const weatherData = async (req, res) => {
    try {
        let { cityname } = req.body;
        if (cityname) {
            const weatherReport = await Weather.findOne({ name: cityname });
            if (!weatherReport) {
                const apiRes = await httpCall(cityname);
                if (apiRes) {
                    let data = await insertAndUpdate(apiRes.data, cityname);
                    res.json(data)
                    await weatherData;
                }
                return console.error("api not response");
            }
            let data = await reqData(weatherReport)
            res.json(data)
        }
    } catch (err) {
        console.log(err);
        res.status(404).json({ massege: "weather not require" })
    }
}


const reqData = async (data) => {
    let weatherTime = data.hourly.time
    var index;
    for (var i = 0; i < weatherTime.length; i++) {

        let date = new Date()
        let now = new Date(`${weatherTime[i]}`)
        let n = date.getTime() / 1000
        let old = now.getTime() / 1000;

        if (n > old) {
            index = i
        }

    }
    return {
        latitude: data.latitude,
        longitude: data.longitude,
        temperature: data.hourly.temperature_2m[index],
        dewpoint: data.hourly.dewpoint_2m[index],
        rain: data.hourly.rain[index],
        showers: data.hourly.showers[index],
        weathercode: data.hourly.weathercode[index],
        cloudcover: data.hourly.cloudcover[index],
        windspeed_10m: data.hourly.windspeed_10m[index],
        soil_temperature: data.hourly.soil_temperature_0cm[index],
    }

}

module.exports = {
    weatherData
}
