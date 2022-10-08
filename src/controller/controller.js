const product = require ('../models/models');


module.exports = class Form{
    static async finalizarcompra (req, res){
        
    };
};

// create a new controller to render the view
module.exports = class views{
    static async meuPedidoView (req, res){
        res.render('meuPedido')};
    static async pedRealizadoView (req, res){
        res.render('pedidoRealizado')};
    static async admOrderView (req, res){
            res.render('adminOrder')};
    static async admCreateView (req, res){
            res.render('adminCreate')};
    };


    module.exports = class admin{

        static async admCreate (req, res){
            const product = {
                produto : req.body.name_prod,
                categoria : req.body.category_prod,
                descrição : req.body.description_prod,
                estoque : req.body.stock_prod,
                fotos : req.body.image_prod,
                preco : req.body.price_prod,
            }
    
            await product.create(product);
            
            res.redirect('');
        };

    };
    
