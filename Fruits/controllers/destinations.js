const Destination = require('../models/destination');
const User = require('../models/user');

function showList(req, res) {
    res.render('wishlist', {title: 'My Wishlist'});
};

async function create(req, res) { 
    const id = req.query.id;
    const destination = await Destination.find({_id: `${id}`});
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
        const destName = await req.params.name;
        console.log(destName);
        const destination = await req.user.wishlist.find((dest) => dest.name === destName);
        console.log('this is dest', destination);
        if (!destination) throw new Error('Destination not found');
        req.user.wishlist.remove(destination);
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