
const {product, franqueado} = require("../models/models")

module.exports = class Form {
  static async sejaFranqueado(req, res) {

    const newFranqueado = {
      franqueado_name: req.body.franqueado_name,
      franqueado_email: req.body.franqueado_email,
      franqueado_state: req.body.franqueado_state,
      franqueado_city: req.body.franqueado_city,
      franqueado_invest: req.body.franqueado_invest,
      franqueado_findUs: req.body.franqueado_findUs,
    };

    await franqueado.create(newFranqueado);
    res.redirect("/sejaFranqueado");
  }

  static async admCreate(req, res) {
    
    
    const newProduct = {
      name_prod: req.body.name_prod,
      category_prod: req.body.category_prod,
      description_prod: req.body.description_prod,  
      stock_prod: req.body.stock_prod,
      image_prod: req.body.image_prod,
      price_prod: req.body.price_prod,
    };

    await product.create(newProduct);
    res.redirect("/cadastroProduto");
    
  }


  static async salvarProduto(req, res) {
    res.sendFile("cadastroProduto", {layout:"mainAdm"});
  }
};


