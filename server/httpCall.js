const axios = require("axios");



const httpCall = async (reqUrl,reqMathod , next) => {

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${reqUrl}&appid==42b3d2c6ef001747a33ae80bc8b3bd95`;
    const option = {
        "method": reqMathod,
    };

    const response = await axios(url,option)
    if(response){
        next()
        return response 
    }
    return console.error("api not rersponse");
}

module.exports = {httpCall}