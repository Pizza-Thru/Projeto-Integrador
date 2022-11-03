const express = require("express");
const router = express.Router();
const views = require("../controller/ControllerView");
const form = require("../controller/ControllerForm");
const auth = require("../controller/ControllerAuth");
const checkAuth = require("../helpers/auth").checkAuth;

router.get("/", views.home);

router.get("/finalizarCompra/:id", views.finalizarCompra);

router.get("/realizePedido", views.realizePedido);
router.post("/realizePedido", checkAuth, form.realizePedido);

router.get("/sejaFranqueado", views.sejaFranqueado);

router.post("/sejaFranqueado", form.sejaFranqueado);

router.get("/cadastroProduto", views.cadastroProduto);

router.get("/meu-pedido/:id",checkAuth, views.meuPedidoView);

router.get("/pedido-realizado/:id",checkAuth, views.pedRealizadoView);

router.get("/admin/ordem-do-pedido/:id", views.admOrderView);

router.post("/admin/criar-produto", form.admCreate);

router.get("/cardapio", views.cardapioView); //sem css

router.get("/cadastroUsuario", views.cadastroUsuario);

router.post("/cadastroUsuario", auth.register);

router.get('/login', views.acessoUsuario);
router.post('/login', auth.login);
router.get('/logout', auth.logout); 

router.get('/feedback', views.feedback);

router.post('/feedback/avaliacao' , form.feedbackAvaliacao);

router.get('/consultaOrdemPedido', views.consultaOrdemPedido) 

router.get('/recuperarSenha', views.recuperarSenha) 

router.get('/statusPedido', views.statusPedido) 

router.get('/pagamentocredito', views.pagamentocredito) //falta css

router.post('/pagamentocredito', form.finalizarcompraCredito);

router.get('/pagamentodebito', views.pagamentodebito); //falta css

router.post('/pagamentodebito', form.finalizarcompraDebito);

router.get('/pagamentopix', views.pagamentopix); //falta css

router.get('/produtosLista', views.produtosLista);

router.get("/del-produto/:id", views.deletarProduto);

router.get("/editarProdutoView", views.editarProdutoView);


router.get("/admin/editar-produto", form.editarProduto )

module.exports = router
