const { user, bank, product, admin, order, franch, evaluation } = require("../models/models");
const { where } = require("sequelize");

// create a new controller to render the view
module.exports = class views {
  static async meuPedidoView(req, res) {
    const idUser= req.session.userid;
    const id = req.params.id;
    const orders = await order.findOne({ where: { id_order: id }, raw: true, });

    res.render("meuPedido", { layout: "main", orders, idUser });
  };
  static async pedRealizadoView(req, res) {
    const id = req.params.id;

    const orders = await order.findOne({
      include: [user, product, bank],
      raw: true,
      where: { id_order: id, user_id:req.session.userid},
    });

    const users = await user.findOne({
      raw: true,
      where: { id_user: orders.user_id }
    });

    const products = await product.findOne({
      raw: true, where: { id_prod: orders.prod_id }
    });

    res.render("pedidoRealizado", { layout: "main", orders, users, products });
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
    const id = req.params.id;

    const orders = await order.findOne({
      include: [user, product, bank],
      raw: true,
      where: { id_order: id, user_id:req.session.userid },
    });

    const users = await user.findOne({
      raw: true,
      where: { id_user: req.session.userid }
    });

    const products = await product.findAll({
      raw: true,});
    /*const banks = await bank.findOne({
      raw: true,
      where: { id_bank: orders.bank_id }
    });*/

    res.render("finalizarCompra", { layout: "main", orders, users, products });

  }
  static async realizePedido(req, res) {
    const products = await product.findAll({raw: true});
    res.render("realizePedido", { layout: "main" , products});
  }
  static async sejaFranqueado(req, res) {
    res.render("sejaFranqueado", { layout: "main" });
  }
  static async cadastroProduto(req, res) {
    res.render("cadastroProduto", { layout: "mainAdm" });
  }
  static async cadastroUsuario(req, res) {
    res.render("cadastroUsuario", { layout: "main" });
  }
  static async recuperarSenha(req, res) {
    res.render("recuperarSenha", { layout: "main" });
  }
  static async listaPedidos(req, res) {

    const listaPedidos = await order.findAll({
      raw:true,
    })
    res.render("listaPedidos", { layout: "mainAdm",listaPedidos});
  }
  static async acessoUsuario(req, res) {
    res.render("acessoUsuario", { layout: "main" });
  }

  static async acessoAdmin(req, res) {
    res.render("acessoAdmin", { layout: "mainAdm" });
  }
  static async feedback(req, res) {
    const listFeed = await evaluation.findAll(

      {
        raw: true,
        limit:4,
        order:[
          ['createdAt','DESC',]
        ],
        

    });
    res.render("feedback", { layout: "main",listFeed });
  }
  
  static async pagamentocredito(req, res) {
    res.render("pagamentocredito", { layout: "main" });
  }

  static async produtosLista(req, res) {
    const productList = await product.findAll({raw: true})
    res.render("produtosLista", { layout: "mainAdm", productList});
  }

  static async pagamentopix(req, res) {
    const id = req.params.id;
    const pagamentopix = await order.findOne({ where: { id_order: id },
      raw:true,
    })
    res.render("pagamentopix", { layout: "main", pagamentopix });
  }

  static async deletarProduto(req, res) {
    product.destroy({
      where: {'id_prod': req.params.id}
    }).then(() => { 
    res.redirect("/produtosLista")
  }).catch((e)=>{ res.send("Produto não apagado com sucesso!")})
}

  static async editarProdutoView (req, res) {
    const id = req.params.id;
    const products = await product.findOne({ where: { id_prod: id }, raw: true, });
    res.render("editarProduto", { layout: "mainAdm", products })
  }

  static async deletarPedido(req, res) {
    order.destroy({
      where: {'id_order': req.params.id}
    }).then(() => { 
    res.redirect("/admin/listaPedidos")
  }).catch((e)=>{ res.send("Falha ao apagar pedido!")})
}
}
