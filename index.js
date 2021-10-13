const routerApi = require('./routes')
const express = require('express')
const app = express()
const { config } = require('./config/index')

const port = config.port

const mongoose = require ('mongoose')
const USER = encodeURIComponent(config.dbUser)
const PASSWORD = encodeURIComponent(config.dbPassword)
const DB_NAME = encodeURIComponent(config.dbName)
const MONGO_URI =  `mongodb+srv://${USER}:${PASSWORD}@${config.dbHost}/${DB_NAME}?retryWrites=true&w=majority`

console.log ('***')
console.log(MONGO_URI)
mongoose.connect(MONGO_URI,
  {useNewUrlParser: true, useUnifiedTopology: true}
  ).then (()=> console.log('La conexion a sido exitosa')).catch(e=>console.log(e))

app.get('/', (req, res)=>{
    res.send('Hi body! Welcome to node and express js')
})


routerApi(app)

app.listen(port, () => {
    console.log(`Listening at http://localhost/:${port}`)
})
