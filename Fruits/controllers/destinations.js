const Destination = require('../models/destination');
const User = require('../models/user');

function showList(req, res) {
    res.render('wishlist', {title: 'My Wishlist'});
};

async function create(req, res) {  
    if (User?.wishlist.equals(req.user)) {
        User.wishlist.push(req.params.id);
        await User.save();
        res.redirect('/wishlist');    
    }
};

module.exports = {
    showList,
    create
};