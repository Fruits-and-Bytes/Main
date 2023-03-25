const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
    name: String, 
    destImage: String,  
    fruit: String,
    fruitImage: String,
    seSalary: Number,
    attraction: String
});



module.exports = mongoose.model('Destination', destinationSchema);