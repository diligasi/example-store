let express = require('express'),
    router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Example Store - Bem vindo a nossa home' })
})

module.exports = router
