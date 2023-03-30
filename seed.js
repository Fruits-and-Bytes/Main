require('dotenv').config();
require('./config/database');

const Destination = require('./models/destination');

//access data
const data = require('./data');

(async function() {
    const d = Destination.deleteMany({});
    // await promises
    let results = await Promise.all([d]);
    console.log(results);
    results = await Promise.all([
        Destination.create(data.destinations)
    ]);
    console.log('Created destinations:', results[0]);
    process.exit();
})();