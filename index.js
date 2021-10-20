const routerApi = require('./routes')
const express = require('express')
const app = express()
const { config } = require('./config/index')
const { checkApiKey } = require('./middleware/auth.handler')
const passport = require('passport')

app.use(passport.initialize)
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

  require('./utils/auth')

app.get('/', (req, res)=>{
    res.send('¡Hola bienvenidos a FanStore!')
})

app.get('/otra-ruta',checkApiKey, (req, res)=>{
  res.send('Hi! This is other route')
})

routerApi(app)
app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
})
