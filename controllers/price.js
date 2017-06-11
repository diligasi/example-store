module.exports = function(router) {

  /* GET price page. */
  router.get('/preco', function(req, res) {
    res.render('price', { title: 'Example Store - Preços imbatíveis!' });
  });
};
