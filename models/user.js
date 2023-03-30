const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// const wishlistSchema = new Schema({
//     destName: 
//         {type: Schema.Types.ObjectId,
//         ref: 'Destination'}
//   }, {
//     timestamps: true
// });

const userSchema = new Schema({
    name: String,
    googleId: {
        type: String,
        required: true
    },
    email: String,
    avatar: String,
    wishlist: [{
        type: Object,
    }]
    }, {
    timestamps: true
});



module.exports = mongoose.model('User', userSchema);