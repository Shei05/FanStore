const articulosRouters = require('./articulos')
const clientesRouters = require('./clientes')

function routerApi (app){
  app.use('/articulos', articulosRouters)
  app.use('/clientes', clientesRouters)

}

module.exports = routerApi
