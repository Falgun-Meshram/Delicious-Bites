const mongoose = require('mongoose');

// import environmental variables from our variables.env file
require('dotenv').config({ path: '.env' });

// Connect to our Database and handle any bad connections
mongoose.connect(process.env.DATABASE);
mongoose.Promise = global.Promise; // Tell Mongoose to use ES6 promises
mongoose.connection.on('error', (err) => {
  console.error(`🙅 🚫 🙅 🚫 🙅 🚫 🙅 🚫 → ${err.message}`);
});

// READY?! Let's go!

// import all of our models
require('./models/Store');
require('./models/User');
require('./models/Review');

// Start our app!
const app = require('./app');
const port = process.argv ? parseInt(process.argv[2]) : null;
app.set('port', port || 7779);
const server = app.listen(app.get('port'), () => {
  console.log(`Express running → PORT ${server.address().port}`)
});

// const app2 = require('./app');
// app2.set('port', 7777);
// const server2 = app2.listen(app2.get('port'), () => {
//   console.log(`Express running → PORT ${server2.address().port}`);
// }).catch(console.log('aglfhaldfjhadslhydalfjdhflahjsdfljdfahd'))
