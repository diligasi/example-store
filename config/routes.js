let express = require('express'),
    router = express.Router();

/* Home page ============================================================== */
require('../controllers/home')(router);

/* Price page ============================================================= */
require('../controllers/price')(router);

/* Contact page =========================================================== */
require('../controllers/contact')(router);

/* About page ============================================================= */
require('../controllers/about')(router);

module.exports = router;
