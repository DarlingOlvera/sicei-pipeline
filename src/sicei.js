//Archivo principal de la aplicacion

/* const express = require('express')
const app = express()
const getUsers = require('./getUsers')
const port = 8081

app.get('/alumnos', (req, resp) => {
  
    const alumnos = getUsers()

    resp.json(alumnos)
})

app.listen(port,() =>{
    console.log(`app initialized! on port: ${port}`);
} ) */

const express = require('express')
const getUsers = require('./getUsers')
const app = express()

const port = 8081

//Service


app.get('/alumnos', (req, resp) => {
  
    const alumnos = getUsers()

    resp.json(alumnos)
})

module.exports = { app, port };