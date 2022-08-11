const express = require('express')
const router = express.Router();
const {weatherData} = require('../controller/weather')
router.get('/weather',weatherData)



module.exports = router;