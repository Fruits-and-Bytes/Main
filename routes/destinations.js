var express = require('express');
var router = express.Router();
var destinationsCtrl = require('../controllers/destinations');

router.get('/wishlist', destinationsCtrl.showList);

router.post('/wishlist', destinationsCtrl.create);

router.put('/:id/show', destinationsCtrl.update);

router.delete('/wishlist/:name', destinationsCtrl.delete);

module.exports = router;