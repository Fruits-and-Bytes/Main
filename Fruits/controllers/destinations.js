const Destination = require('../models/destination');
const User = require('../models/user');

function showList(req, res) {
    res.render('wishlist', {title: 'My Wishlist'});
};

async function create(req, res) { 
    const id = req.query.id;
<<<<<<< HEAD
    const destination = await Destination.find({_id: `${id}`});
    if (req.user) {
        req.user.wishlist.push(destination);
=======
    if (req.user) {
        req.user.wishlist.push(id);
>>>>>>> f853eca137a6d1a88e68904354714208e9737f88
        await req.user.save();
        res.redirect('/wishlist');
    } else {
        res.redirect('/auth/google');
    }
};

async function deleteDestination(req, res) {
    const destId = req.body.destId;
    const destination = await req.user.wishlist.findById(destId);
    console.log('THIS IS DEST IDDDDDDD', destination);
}

module.exports = {
    showList,
    create,
    delete: deleteDestination,
};