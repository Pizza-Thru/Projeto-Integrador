module.exports = class avaliation {
    static async avaliar(req, res){}

    static async feedback(req, res) {
      const avaliacao = {
        note: req.body.star__nota,
        comment: req.body.feedback__comentario,
      };
  
      await avaliacao.create(avaliacao);
  
      res.redirect("/feedback");
    }
  };