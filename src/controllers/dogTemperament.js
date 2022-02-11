require('dotenv').config();
const axios = require('axios')
const { Router} = require('express');
const  {APIKEY } = process.env
const {Temperamentos} = require('../db.js')

exports.verTemperamentos =  (req,res)=>{
    try {
        axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${APIKEY}`)
        .then(async response =>{
            let arrayTemp = response.data.map(dog => {
                return dog.temperament
            }).toString().split(', ').toString().split(',')

            let arraySplit = []
            arrayTemp.map( async element => {
                if(arraySplit.length === 0){
                    arraySplit.push(element)
                }else if(!arraySplit.includes(element) && element !== ""){
                    arraySplit.push(element)
                }
                
            })
            arraySplit.map(async (element) => {
                await Temperamentos.findOrCreate({
                    where:{
                        Nombre: element 
                    }
                })
            })

            let temperamentsDB = await Temperamentos.findAll()

            res.status(200).json(temperamentsDB)
        })
        
    } catch (error) {
        res.status(400).json({status:400, message: error.message})
    }
    
}