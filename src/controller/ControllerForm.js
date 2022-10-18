const {product, franqueado, evaluation, bank, order} = require("../models/models")

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
      qnt_slice: req.body.select__pedacos,
      qnt_flavor: req.body.select__sabores,
      flavor_1: req.body.select__sabor1,
      flavor_2: req.body.select__sabor2,
      type_pasta: req.body.select__Espessura_da_Massa,
      type_border: req.body.select__Recheio_da_Borda,
      item_add_1: req.body.select__Adicional_1,
      item_add_2: req.body.select__Adicional_2,
      obs: req.body.Observacao,
      total_order: req.body.Subtotal,
    };
    
    console.log(newOrder);
    await order.create(newOrder);
    res.redirect("/finalizarCompra");
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