const argv = require('./yargs/yargs');
const place = require('./place/place');
const weather = require('./weather/weather');


let address = encodeURI(argv.address);




const getInfo = async address=>{

      try{

            let coords = await place.getCoordinates(address);
      
            let temp = await weather.getWeather(coords.lat, coords.lon);
      
            return `El clima de ${ coords.address } es de ${temp} grados Celcius`; 

      }catch(e){
           return `No se pudo determinar el clima de ${ address }`
      }
            

}

      getInfo(address)
      .then(console.log)
      .catch(console.log);