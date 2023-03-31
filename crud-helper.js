require('dotenv').config();
require('./config/database');
const Destination = require('./models/destination');
const User = require('./models/user');

let destinations = await Destination.find({});