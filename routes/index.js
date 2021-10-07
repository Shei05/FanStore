const articulosRouters = require('./articulos')
//const devolucionesRouters = require('./devoluciones')
//const clientesRouters = require ('/clientes')


function routerApi (app){
  app.use('/articulos', articulosRouters)
}

module.exports = routerApi
