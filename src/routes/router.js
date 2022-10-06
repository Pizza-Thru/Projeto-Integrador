const express = require('express')
const router = express.Router()

const views = require('../controller/controller')

router.get('/', (req,res) => {
    res.render('home')
})

router.get('/finalizarCompra', (req,res) => {
    res.render('finalizarCompra')
})

router.get('/realizePedido', (req,res) => {
    res.render('realizePedido')
})

router.get('/sejaFranqueado', (req,res) => {
    res.render('sejaFranqueado')
})

router.get('/cadastroProduto', (req,res) => {
    res.render('cadastroProduto')
})

// include the controller on the router

router.get('/meu-pedido', views.meuPedidoView )

router.get('/pedido-realizado', views.pedRealizadoView )

router.get('/admin/ordem-do-pedido', views.admOrderView)


module.exports = router