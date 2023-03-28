var express = require('express');
var router = express.Router();
var destinationsCtrl = require('../controllers/destinations');

router.get('/wishlist', destinationsCtrl.showList);

router.post('/wishlist', destinationsCtrl.create);

module.exports = router;

