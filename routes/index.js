const articulosRouters = require('./articulos')
const clientesRouters = require('./clientes')
const ventaRouters = require('./venta')
const personalizadosRouters = require('./personalizados')

function routerApi (app){
  app.use('/articulos', articulosRouters)
  app.use('/clientes', clientesRouters)
  app.use('/venta', ventaRouters)
  app.use('/personalizados', personalizadosRouters)
}

module.exports = routerApi
