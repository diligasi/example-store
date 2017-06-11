module.exports = function(router) {

  /* GET contact page. */
  router.get('/contato', function(req, res) {
    res.render('contact', { title: 'Example Store - Fale conosco!' });
  });
};
