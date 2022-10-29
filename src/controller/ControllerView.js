const { user, bank, product, admin, order, franch, evaluation } = require("../models/models");
const { where } = require("sequelize");

// create a new controller to render the view
module.exports = class views {
  static async meuPedidoView(req, res) {
    const id = req.params.id;
    const orders = await order.findOne({ where: { id_order: id }, raw: true, });

    res.render("meuPedido", { layout: "main", orders });
  };
  static async pedRealizadoView(req, res) {
    const id = req.params.id;

    const orders = await order.findOne({
      include: [user, product, bank],
      raw: true,
      where: { id_order: id },
    });

    const users = await user.findOne({
      raw: true,
      where: { id_user: orders.user_id }
    });

    const products = await product.findOne({
      raw: true, where: { id_prod: orders.prod_id }
    });
    const banks = await bank.findOne({
      raw: true,
      where: { id_bank: orders.bank_id }
    });

    res.render("pedidoRealizado", { layout: "main", orders, users, products, banks });
  }
  static async admOrderView(req, res) {
    const id = req.params.id;

    const orders = await order.findOne({
      include: [user, product],
      raw: true,
      where: { id_order: id },
    });
    const users = await user.findOne({
      raw: true,
      where: { id_user: orders.user_id }
    });
    const flavors = orders.flavor_2 !== null;
    const item = [{
      item_1: orders.item_add_1 !== null,
      item_2: orders.item_add_2 !== null,
    }]
    res.render("adminOrder", { layout: "mainAdm", orders, users, flavors, item });
  }
  static async admCreateView(req, res) {
    res.render("adminCreate", { layout: "mainAdm" });
  }
  static async home(req, res) {
    res.render("home", { layout: "main" });
  }
  static async finalizarCompra(req, res) {
    res.render("finalizarCompra", { layout: "main" });
  }
  static async realizePedido(req, res) {
    res.render("realizePedido", { layout: "main" });
  }
  static async sejaFranqueado(req, res) {
    res.render("sejaFranqueado", { layout: "main" });
  }
  static async cadastroProduto(req, res) {
    res.render("cadastroProduto", { layout: "mainAdm" });
  }
  static async cardapioView(req, res) {
    res.render("cardapio", { layout: "main" });
  }
  static async cadastroUsuario(req, res) {
    res.render("cadastroUsuario", { layout: "main" });
  }
  static async consultaOrdemPedido(req, res) {
    res.render("consultaOrdemPedido", { layout: "main" });
  }
  static async recuperarSenha(req, res) {
    res.render("recuperarSenha", { layout: "main" });
  }
  static async statusPedido(req, res) {
    res.render("statusPedido", { layout: "main" });
  }
  static async acessoUsuario(req, res) {
    res.render("acessoUsuario", { layout: "main" });
  }
  static async feedback(req, res) {
    res.render("feedback", { layout: "main" });
  }
  static async pagamentocredito(req, res) {
    res.render("pagamentocredito", { layout: "main" });
  }

  static async pagamentodebito(req, res) {
    res.render("pagamentodebito", { layout: "main" });
  }

  static async produtosLista(req, res) {
    const productList = await product.findAll({raw: true})
    res.render("produtosLista", { layout: "mainAdm", productList});
  }

  static async pagamentopix(req, res) {
    res.render("pagamentopix", { layout: "main" });
  }

  static async deletarProduto(req, res) {
    product.destroy({
      where: {'id_prod': req.params.id}
    }).then(() => { 
    res.redirect("/produtosLista")
  }).catch((e)=>{ res.send("Produto não apagado com sucesso!")})
}

  static async editarProdutoView (req, res) {
    res.render("/editarProdutoView", { layout: "mainAdm" })
  }

}

