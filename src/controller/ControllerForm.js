const {product, franqueado, evaluation, bank, order, user} = require("../models/models")
const mercadopago = require ("mercadopago");
const { json, FLOAT } = require("sequelize" );
mercadopago.configurations.setAccessToken ("TEST-3135694526464578-040222-f91f40177f41b05d51570be97d91f72b-209999602");
mercadopago.configure({
  access_token: 'TEST-3135694526464578-040222-f91f40177f41b05d51570be97d91f72b-209999602'
});
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
      const idUser= req.session.userid;
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
      user_id: req.session.userid,
      status_order: "Pedido em aberto",
    };
    
    console.log(newOrder);
    await order.create(newOrder);
    res.redirect(`/finalizarCompra/${idUser}`);
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
    res.redirect("/produtosLista");
    
  }

    static async feedbackAvaliacao(req, res) {
      const userName  = await user.findOne({
        raw:true,
        id_user:req.session.userid
        
      });
      const newAvaliacao = {
        name_feed:userName.user_name,
        note: req.body.star__nota,
        comment: req.body.feedback__comentario,
        user_id: req.session.userid,
      };
      await evaluation.create(newAvaliacao);
  
      res.redirect("/feedback");
    }

      static async editarProduto (req, res) { 
        const editProduct = {
          id_prod: req.body.id_prod,
          name_prod: req.body.name_prod,
          category_prod: req.body.category_prod,
          description_prod: req.body.description_prod,  
          stock_prod: req.body.stock_prod,
          price_prod: req.body.price_prod,
        };
    
        await product.update(editProduct);
        res.redirect("/produtosLista");
      }
    
      static async PagamentoPix (req, res){
        var payment_data = {
          transaction_amount: Number(req.body.transaction_amount),
          description: req.body.description,
          payment_method_id: 'pix',
                payer: {
                      email: req.body.email,
                      first_name: req.body.payerFirstName,
                      last_name: req.body.payerLastName,
                            identification: {
                                            type: req.body.identificationType,
                                            number: req.body.identificationNumber
                                            } 
                        },
        };
        mercadopago.payment.create(payment_data).then ((data) => {
        let linkPagamento = data.body.point_of_interaction.transaction_data.ticket_url
        res.redirect(linkPagamento);
        });
        
}
      static async pagamentoCredito (req, res){
       
        var payment_data = {
          transaction_amount: Number(req.body.transactionAmount),
          token: req.body.token,
          installments: Number(req.body.installments),
          payment_method_id: req.body.paymentMethodId,
          payer: {
            email: req.body.email,
          }
        };

        mercadopago.payment.create(payment_data).then((data) =>{
            res.redirect(301, "/statusPedido");
          })
    

      }

      
      static async statusPagamento (req,res){
          const status = req.body.statusDoPagamento;
          const num = req.body.numeroPedido;
          console.log(num,status)
          
          await order.update({status_order:status},{
            where:{
              id_order:num
            }
          })
          res.redirect("/admin/listaPedidos")
      }
      

      static async cardapio(req, res) {
        const idUser= req.session.userid;
        const prices = req.body.sliceprice
        const price = parseInt(prices)

        const newOrder = {
        qnt_slice: req.body.qnt_slice,
        qnt_flavor: "1",
        flavor_1: req.body.name_prod,
        flavor_2: "null",
        type_pasta: "Tradicional",
        type_border: "Sem Recheio",
        item_add_1: null,
        item_add_2: null,
        obs: null,
        total_order:parseInt(req.body.sliceprice),
        user_id: req.session.userid,
        status_order: "Pedido em aberto",
        prod_id: req.body.id_prod,
        
      };

      await order.create(newOrder);
      res.redirect(`/finalizarCompra/${idUser}`);
    }



}
