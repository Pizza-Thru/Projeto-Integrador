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
}; 


