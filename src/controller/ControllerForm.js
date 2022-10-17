const {product, franqueado, evaluation, bank} = require("../models/models")

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

  static async realizePedido(req, res) {
    const newOrder = {
      qnt_slice: req.body.qnt__slice,
      flavor_1: req.body.sabor__1,
      flavor_2: req.body.sabor__2,
      type_pasta: req.body.tipo__massa,
      type_border: req.body.tipo__borda,
      item_add_1: req.body.item__adicionais__1,
      item_add_2: req.body.item__adicionais__2,
      obs: req.body.obs__pedido,
      status_order: req.body.status__pedido,
      total_order: req.body.total__pedido,
    };
    
    await order.create(newOrder);
    res.redirect("/realizePedido");
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

    static async feedbackAvaliacao(req, res) {

      const newAvaliacao = {
        note: req.body.star__nota,
        comment: req.body.feedback__comentario,
      };
      await evaluation.create(newAvaliacao);
  
      res.redirect("/feedback");
    }

    static async finalizarcompraCredito (req, res) {
      const newCardCredit = {
        card_number : req.body.numero__cartao__credito,
        account_holder : req.body.nome__cartao__credito,
        CVC : req.body.cvv__cartao__credito
      }
        console.log(newCardCredit);
      const saveCard = req.body.salvar__cartao__credito
      
        console.log(saveCard)
      if (saveCard = true) {
        await bank.create(newCardCredit);
        res.redirect("/pedidoRealizado");
            } else {
        res.redirect("/pedidoRealizado");
  
            } 
      
      }
      static async finalizarcompraDebito(req, res) {
        const newCardDebit = {
          card_number : req.body.numero__cartao,
          account_holder : req.body.nome__cartao,
          CVC : req.body.cvv__cartao
        }
          console.log(newCardDebit);
        const saveCard = req.body.salvar__cartao
        
          console.log(saveCard)
        if (saveCard = true) {
          await bank.create(newCardDebit);
          res.redirect("/pedidoRealizado");
              } else {
          res.redirect("/pedidoRealizado");
    
              } 
      
      }
};