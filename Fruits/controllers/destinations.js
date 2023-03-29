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
        let destination = await req.user.wishlist;
        let deletedDestination;
        for(let i = 0; i < destination.length; i++) {
            for(let j = 0; j < destination[i].length; j++) {
                if(destination[i][j].name == destName) {
                    deletedDestination = destination[i][j]; 
                    break;
                }
            }
            if(deleteDestination) {
                break;
            }
        }
        console.log('this is dest', deletedDestination);
        if (!destination) throw new Error('Destination not found');
        destination.forEach(function(d) {
            const index = d.indexOf(deletedDestination);
            console.log('this is the index', index);
            d.splice(index, 1);
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