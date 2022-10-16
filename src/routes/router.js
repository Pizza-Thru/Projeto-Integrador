const express = require("express");
const router = express.Router();
const views = require("../controller/ControllerView");
const { user, bank, product, product_variation } = require("../models/models");
const form = require("../controller/ControllerForm");

router.get("/", views.home);

router.get("/finalizarCompra", views.finalizarCompra);

router.get("/realizePedido", views.realizePedido);

router.get("/sejaFranqueado", views.sejaFranqueado);

router.post("/sejaFranqueado", form.sejaFranqueado);

router.get("/cadastroProduto", views.cadastroProduto);

router.get("/meu-pedido", views.meuPedidoView);

router.get("/pedido-realizado", views.pedRealizadoView);

router.get("/admin/ordem-do-pedido", views.admOrderView);

router.post("/admin/criar-produto", form.admCreate);

router.get("/cardapio", views.cardapioView);

router.get("/cadastroUsuario", views.cadastroUsuario);

router.get('/acessoUsuario', views.acessoUsuario);

router.get('/feedback', views.feedback);

router.post('/feedback/avaliacao' , form.feedbackAvaliacao);

//router.get('/admin/salvar-produto', form.salvarProduto) VERIFICAR : Gabriel

router.get('/consultaOrdemPedido', views.consultaOrdemPedido) 

router.get('/recuperarSenha', views.recuperarSenha) 

router.get('/statusPedido', views.statusPedido) 

module.exports = router;
