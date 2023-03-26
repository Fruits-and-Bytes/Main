require('dotenv').config();
require('./config/database');
const Destination = require('./models/destination');
const User = require('./models/user');

let destinations = await Destination.find({});

console.log(destinations);

// crud-helper.js

// Used to perform CRUD external to the application

// To use (don't type the $'s):
//   1. Open a Node REPL in Terminal:
//         $ node

//   2. Load this crud-helper.js module
//         $ .load crud-helper.js

//   3. When done CRUDing, exit the REPL with:
//         $ .exit (or ctrl-D, or ctrl-C twice)

// If any changes are made to the models, 
// exit the REPL and reload this module


// use for wishlist or other variables we want to manipulate later