const express = require('express')
const router = express.Router()
const fetch = require('node-fetch')
const Weather = require('../modul/weather')
const { weatherData } = require('../collection/weather')
const schedule = require('node-schedule')

router.post('/', async (req, res) => {
    let bodyValue = req.body.name;


    try {
        // let value = ""
        // for (const bodyValue of arr) {
        //     value = bodyValue.stateName;
        // }
        let findValue = await Weather.find({ name: bodyValue })
        if (findValue < 1) {


            const url = `https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=42b3d2c6ef001747a33ae80bc8b3bd95`;
            const option = {
                "method": "POST",
                data: {
                    task:"sdfdfdfdsfdsf"
                  }
            };

            const response = await fetch(url, option)
                .then(res => res.json())
                .catch(err => {
                    console.log(err, 'some error');
                })

            // axios({
            //     method: 'post',
            //     url: '/https://0ec3-45-249-87-74.ngrok.io/task',
            //     data: {
            //       task:"sdfdfdfdsfdsf"
            //     }
            //   });

            // const result = await Weather.create({
            //     name: response.name,
            //     latitude: response.coord.lat,
            //     longitude: response.coord.lon,
            //     rain: response.rain,
            //     temp: response.main.temp,
            //     windSpeed: response.wind.speed,
            //     minTemp: response.main.temp_min,
            //     maxTemp: response.main.temp_max
            // })
            // res.send(result)

        }
        else {
            console.log("two");

            let data = await Weather.find({ name: bodyValue })
            res.json(data)
        }


    } catch (err) { console.log(err); }
});


router.get('/', weatherData)

module.exports = router




            // "latitude": 29.1667,
            // "longitude": 75.7167,

            // "latitude": 29.1667,
            // "longitude": 75.7167,