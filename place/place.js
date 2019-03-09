const axios = require('axios');

const getCoordinates = async ( place )=>{

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${place} `,
        headers: {'X-RapidAPI-Key':'12bb7e38b9msh4fc86bd87f8c946p1eac92jsneef487cd0379'}
      });
      
      const res = await instance.get();

      if(res.data.Results.length === 0){
            throw new Error(`No results found: ${place} `);
      }

      const data = res.data.Results[0];
      const address = data.name;
      const lat = data.lat;
      const lon = data.lon;

      return {
          address,
          lat,
          lon
      }


}


module.exports = {getCoordinates}