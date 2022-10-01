const express = require('express')
const router = express.Router()

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

module.exports = router