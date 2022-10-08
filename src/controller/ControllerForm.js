module.exports = class Form {
  static async finalizarcompra(req, res) {}

  static async admCreate(req, res) {
    const product = {
      produto: req.body.name_prod,
      categoria: req.body.category_prod,
      descrição: req.body.description_prod,
      estoque: req.body.stock_prod,
      fotos: req.body.image_prod,
      preço: req.body.price_prod,
    };

    await product.create(product);

    res.redirect("");
  }
};