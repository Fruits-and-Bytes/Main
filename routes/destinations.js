var express = require('express');
var router = express.Router();
var destinationsCtrl = require('../controllers/destinations');
const ensureLoggedIn = require('../config/ensureLoggedIn');

router.get('/wishlist', ensureLoggedIn, destinationsCtrl.showList);

router.post('/', destinationsCtrl.createDestination);


router.post('/wishlist', destinationsCtrl.create);

router.put('/:id/show', ensureLoggedIn, destinationsCtrl.update);

router.delete('/wishlist/:name', destinationsCtrl.delete);

router.get('/new', ensureLoggedIn, destinationsCtrl.new);

module.exports = router;