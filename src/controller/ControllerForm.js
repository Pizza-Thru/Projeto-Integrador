
const {product} = require("../models/models")

module.exports = class Form {
  static async finalizarcompra(req, res) {}

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


