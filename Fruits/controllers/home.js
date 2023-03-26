const Destination = require('../models/destination');
const User = require('../models/user');

async function index(req, res) {
        const destinations = await Destination.find({});
        res.render('home', { title: 'Fruits & Bytes', destinations });
      }

  module.exports = {
    index
  }