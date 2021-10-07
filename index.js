const routerApi = require('./routes')
const express = require ('express')
const app = express()
const port = 3000

app.get('/',(req, res ) =>{
  res.send('¡Hola bienvenidos a FanStore!')
})

routerApi(app)

app.listen(port, () =>{
  console.log(`Listening at http://localhost:${port}`)
})

