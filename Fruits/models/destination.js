const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
    name: String, 
    destinationImage: String,  
    fruit: String,
    fruitImage: String,
    seSalary: Number,
    attraction: String,
    attractionImage: String
});



module.exports = mongoose.model('Destination', destinationSchema);