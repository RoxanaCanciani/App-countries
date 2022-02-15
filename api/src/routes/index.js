const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

//Requiero axios para hacer peticiones http
const axios = require('axios');

//Me traigo las tablas de la base de datos
const {Country,Activity}= require('../db.js')

//requiero operadores de sequelize que necesito para hacer las consultas
const {Op}= require('sequelize')

const{getAllApi,getBdInfo}= require('./getAll.js')
const json= require('body-parser')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

//Me traigo los datos de la API




    


router.get('/countries', async (req,res)=>{
  const {name}=req.query;
    

   if(!name){
       
       try {
           let country = await Country.findAll({include: {model: Activity}});
           // si no tengo datos en la DB creo los registros
           
              if (!country.length) {
                    country = await getAllApi();
                };
              return res.json(country)
         } catch (error) {
                res.status(404).send('Country not found.');
            }
    }else{
        try {
            let country = await Country.findAll({
                where: {
                    name: {
                        [Op.iLike]: '%' + name + '%' 
                        //compara parte del nombre ignorando mayúsculas y minúsculas
                    }
                }, include: {model: Activity}
              });
             return res.json(country);
         }
            catch(error) { res.status(404).send('Country not found.');
            }
    }
})

// router.get ('/countries', async (req, res)=>{
//     //let name = req.query.name;
//     await getAllApi();
//     try {
//         let country = await Country.findAll();
//         // si no tengo datos en la DB creo los registros
//         if (!country.length) {
//             country = await getAllApi();
//         };
//         return res.json(country)
//     } catch (error) {
//             res.status(404).send('Country not found.');
//         }

//     })
router.get('/activity', async (req,res)=>{
    const {name}=req.query;
      

    if(!name){
        
        try {
            let activity = await Activity.findAll({include: {model: Country}});
            
            // si no tengo datos en la DB creo los registros
               if (!activity.length) {
                     activity = await getBdInfo();
                     
                 };
                 
               return res.json(activity)
            } catch (error) {
                   res.status(404).send('Activity not found.');
               }
       }else{
           try {
               let activity = await Activity.findAll({
                   where: {
                       name: {
                           [Op.iLike]: '%' + name + '%' 
                           //compara parte del nombre ignorando mayúsculas y minúsculas
                       }
                   }, include: {model: Country}
                 });
                return res.json(activity);
            }
               catch(error) { res.status(404).send('Activity not found.');
               }
       }
   }
)
            
          
            
   




 
//----------------------------------------------------

  router.get('/countries/:id', async (req,res)=>{
    const {id}=req.params;
    
    try{
        const infoDb= await Country?.findByPk(id, { include: { model: Activity } })
        return res.json(infoDb)
    }
    catch (error){
        console.log(error)
        res.json(error)
    }
  })

 router.post('/activity', async (req,res)=>{
    let 
    { name,
      difficulty,
      duration, 
      season,
      country,
    }
    =req.body;
  let newActivity= await Activity.create({
      name,
      difficulty,
      duration,
      season
  })
  let countryActivity = await Country.findAll({ //busca todos lo que esta en la tabla country en donde name coincida con el country que paso por body
    where:{ name:country } })
    newActivity.addCountry(countryActivity)//agrega el pais a la actividad que estoy creando
    res.status(200).send('Activity successfully created')  
})
   



    









module.exports = router;
