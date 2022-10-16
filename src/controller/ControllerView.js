// create a new controller to render the view
module.exports = class views {
  static async meuPedidoView(req, res) {
    res.render("meuPedido", {layout:"main"});
  }
  static async pedRealizadoView(req, res) {
    res.render("pedidoRealizado", {layout:"main"});
  }
  static async admOrderView(req, res) {
    res.render("adminOrder", {layout:"mainAdm"});
  }
  static async admCreateView(req, res) {
    res.render("adminCreate", {layout:"mainAdm"});
  }
  static async home(req, res) {
    res.render("home", {layout:"main"});
  }
  static async finalizarCompra(req, res) {
    res.render("finalizarCompra", {layout:"main"});
  }
  static async realizePedido(req, res) {
    res.render("realizePedido", {layout:"main"});
  }
  static async sejaFranqueado(req, res) {
    res.render("sejaFranqueado", {layout:"main"});
  }
  static async cadastroProduto(req, res) {
    res.render("cadastroProduto", {layout:"mainAdm"});
  }
  static async cardapioView(req, res) {
    res.render("cardapio", {layout:"main"});
  }
  static async cadastro(req, res) {
    res.render("cadastro", {layout:"main"});
  }
  /*static async consultaOrdemPedido(req, res) {
    res.render("consultaOrdemPedido", {layout:"main"});
  }
  static async senha(req, res) {
    res.render("senha", {layout:"main"});
  }
  static async statusPedido(req, res) {
    res.render("statusPedido", {layout:"main"});
  }*/
}; 


