const Destination = require('../models/destination');
const user = require('../models/user');
const User = require('../models/user');

function showList(req, res) {
    res.render('wishlist', {title: 'My Wishlist'});
};

async function create(req, res) { 
    const id = req.query.id;
    const destination = await Destination.findOne({_id: `${id}`});
    if (req.user) {
        req.user.wishlist.push(destination);
        await req.user.save();
        res.redirect('/wishlist');
    } else {
        res.redirect('/auth/google');
    }
};

async function deleteDestination(req, res, next) {
    try {
        const destName = req.params.name;
        req.user.wishlist.forEach(function(d) {
            if(d.name === destName) {
                const index = req.user.wishlist.indexOf(d);
                req.user.wishlist.splice(index, 1);
            }
        });
        await req.user.save();
        res.redirect('/wishlist');
    } catch(err) {
        console.log(err);
        return next(err);
    }
};


module.exports = {
    showList,
    create,
    delete: deleteDestination,
};