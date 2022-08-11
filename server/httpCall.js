const axios = require("axios");



const httpCall = async (reqUrl) => {
// console.log(reqUrl,reqMathod);
    const url = `https://api.open-meteo.com/v1/forecast?q=${reqUrl}&latitude=29.15&longitude=75.75&hourly=temperature_2m,dewpoint_2m,rain,showers,weathercode,cloudcover,windspeed_10m,soil_temperature_0cm`;
    const option = {
        method: "GET",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
    };

    const response = await axios(url,option)
    if(response){
        return response ;
    }
    return "api not rersponse";
}

module.exports = {httpCall}