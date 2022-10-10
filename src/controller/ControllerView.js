// create a new controller to render the view
module.exports = class views {
  static async meuPedidoView(req, res) {
    res.render("meuPedido");
  }
  static async pedRealizadoView(req, res) {
    res.render("pedidoRealizado");
  }
  static async admOrderView(req, res) {
    res.render("adminOrder");
  }
  static async admCreateView(req, res) {
    res.render("adminCreate");
  }
  static async home(req, res) {
    res.render("home");
  }
  static async finalizarCompra(req, res) {
    res.render("finalizarCompra");
  }
  static async realizePedido(req, res) {
    res.render("realizePedido");
  }
  static async sejaFranqueado(req, res) {
    res.render("sejaFranqueado");
  }
  static async cadastroProduto(req, res) {
    res.render("cadastroProduto");
  }
  static async cardapioView(req, res) {
    res.render("cardapio");
  }
  static async cadastro(req, res) {
    res.render("cadastro");
  }
}; 


