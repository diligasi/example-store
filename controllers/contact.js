module.exports = function(router) {

  /* GET price page. */
  router.get('/contato', function(req, res) {
    res.render('contact', { title: 'Example Store - Fale conosco!' });
  });
};
