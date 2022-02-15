const {Country,Activity}= require('../db.js')
const axios = require('axios');
const{json}= require('body-parser')

const getAllApi = async () => {
    const api= await axios.get('https://restcountries.com/v3/all');
    const apiInfo= api.data.map(el=>{
        
        return {
            id:el.cca3,
            name:el.name.common,
            flag:el.flags[0],
            continent:el.region,
            capital: el.region,
            subregion:el.region,
            area:el.area,
            population:el.population,
           
            
           
            
        }
    })
    console.log("me traigo todo lo de la api",apiInfo)
    return apiInfo;
}
// const data = async () => {
//     const countries = await axios.get("https://restcountries.com/v3/all");
//     return  countries;
// }

// const getAllApi = async () => {

//   //guardo todo lo de la API
//   const ApiCountry = await data();
//   const ApiCountryData = ApiCountry.data;
  
//  // guardo la info de breeds en la tabla Breed
//   let apiInfo = ApiCountryData.map(async (d) => {
//     (!d.capital)? d.capital = d.name.common : d.capital;
//     (!d.subregion)? d.subregion = d.name.common : d.subregion;
//     await Country.findOrCreate({
//       where: {
//           id: d.cca3,
//           name: d.name.common,
//           flag: d.flags[0],
//           continent: d.continents[0],
//           capital: d.capital[0],
//           subregion: d.subregion,
//           area: d.area,
//           population: d.population
//        }
//       });    
//   });  
//   return apiInfo;
// }


const getBdInfo= async()=>{
    
    return await Activity.findAll({
        include:{
            model:Country,
            attributes:['name'],
            througth:{
                attributes:[],
            },
        },
    });
    

}







  module.exports= {getAllApi,getBdInfo}