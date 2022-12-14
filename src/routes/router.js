const express = require("express");
const router = express.Router();
const views = require("../controller/ControllerView");
const form = require("../controller/ControllerForm");
const auth = require("../controller/ControllerAuth");
const checkAuth = require("../helpers/auth").checkAuth;
const checkAuthAdm = require("../helpers/authAdmin").checkAuthAdm;

router.get("/", views.home);

router.get("/finalizarCompra/:id", views.finalizarCompra);

router.get("/realizePedido", checkAuth, views.realizePedido);
router.post("/realizePedido", checkAuth, form.realizePedido);

router.get("/sejaFranqueado", views.sejaFranqueado);

router.post("/sejaFranqueado", form.sejaFranqueado);

router.get("/cadastroProduto", checkAuthAdm, views.cadastroProduto);

router.get("/meu-pedido",checkAuth, views.meuPedidoView);
router.get("/meu-pedido/:id",checkAuth, views.meuPedidoView);

router.get("/pedido-realizado/:id",checkAuth, views.pedRealizadoView);

router.get("/admin/ordem-do-pedido/:id", checkAuthAdm, views.admOrderView);

router.post("/admin/criar-produto", checkAuthAdm, form.admCreate);

router.get("/cadastroUsuario", views.cadastroUsuario);

router.post("/cadastroUsuario", auth.register);

router.get('/admin', views.acessoAdmin);
router.get('/admin/login', views.acessoAdmin);
router.post('/admin/login', auth.adminLogin);

router.get("/registeruser", auth.registerAdmin)
router.post("/registeruser", auth.registerAdmin)

router.get('/login', views.acessoUsuario);
router.post('/login', auth.login);

router.get('/logoutAdmin', auth.logoutAdm); 
router.get('/logout', auth.logout); 

router.get('/feedback',checkAuth, views.feedback);

router.post('/feedback/avaliacao', checkAuth, form.feedbackAvaliacao);
 
router.get('/recuperarSenha', views.recuperarSenha);
router.post('/recuperarEmail', auth.recuperar);

router.post('/statusPagamentos',form.statusPagamento);
router.post('/feedback/avaliacao', checkAuth, form.feedbackAvaliacao);
router.get('/admin/listaPedidos',checkAuthAdm,views.listaPedidos);

router.get('/pagamentocredito/:id', views.pagamentocredito) 

router.post('/pagamentoCredito', form.pagamentoCredito);

router.get('/pagamentopix/:id', views.pagamentopix);

router.post('/pagamentopix', form.PagamentoPix);

router.get('/produtosLista', views.produtosLista);

router.get("/del-produto/:id", views.deletarProduto);
router.get("/del-pedido/:id", views.deletarPedido);

router.get("/editar-produto/:id", views.editarProdutoView);

router.post("/editar-produto/", form.editarProduto);

module.exports = router
