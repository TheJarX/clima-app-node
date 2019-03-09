const axios = require('axios');

const getWeather = async( lat, lng )=>{

    const weatherUrl =  `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=89c04ace2e9ac57356dd0d5a6803c7a7&units=metric`
    const res = await axios.get(weatherUrl);
   
           return res.data.main.temp;

}


module.exports = { 
    getWeather 
}
