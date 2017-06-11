module.exports = function(router) {

  /* GET about page. */
  router.get('/sobre', function(req, res) {
    res.render('about', { title: 'Example Store - Conheça nossa história!' });
  });
};
