require('dotenv').config();
const axios = require('axios')
const { Router} = require('express');
const express = require('express')
const  {APIKEY } = process.env
const {Razas, Temperamentos } = require('../db.js')
const controladorDog = require('../controllers/dogsController')
const controladorTemp = require('../controllers/dogTemperament')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/dogs', controladorDog.verDogs)

router.get('/dogs/:idRaza', controladorDog.verDogdRaza)

router.get('/temperament', controladorTemp.verTemperamentos)

router.post('/dog', controladorDog.sendDog)

module.exports = router;
