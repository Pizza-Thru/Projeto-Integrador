var mercadopago = require('mercadopago');
mercadopago.configurations.setAccessToken("TEST-3135694526464578-040222-f91f40177f41b05d51570be97d91f72b-209999602");
 
mercadopago.payment.save(req.body)
  .then(function(response) {
    const { status, status_detail, id } = response.body;
    res.status(response.status).json({ status, status_detail, id });
  })
  .catch(function(error) {
    console.error(error);
  });
