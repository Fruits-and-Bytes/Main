const Destination = require('../models/destination');
const User = require('../models/user');

async function index(req, res) {
  const destinations = await Destination.find({});
  res.render('home', { title: 'Fruits & Bytes', destinations });
}

async function show(req, res) {
  const destination = await Destination.findById(req.params.id);
  console.log(destination);
  res.render('show', { title: destination.name, destination })
}


module.exports = {
  index,
  show,
}  