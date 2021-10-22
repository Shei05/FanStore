const express = require('express')
const articulosRouters = require('./articulos')
const clientesRouters = require('./clientes')
const ventaRouters = require('./venta')
const personalizadosRouters = require('./personalizados')
const authRouters = require('./auth')

function routerApi (app){
  app.use(express.json())
  app.use('/auth', authRouters)
  app.use('/articulos', articulosRouters)
  app.use('/clientes', clientesRouters)
  app.use('/venta', ventaRouters)
  app.use('/personalizados', personalizadosRouters)
}

module.exports = routerApi
