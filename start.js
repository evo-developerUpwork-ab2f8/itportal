const mongoose = require('mongoose');
const database = require('./config/database.js');


// connect to the mongo database

mongoose.connect(database.db.url, {useMongoClient: true});
mongoose.Promise = global.Promise;
mongoose.connection.on('error', (err) => {
  console.error(`Mongodb died → ${err.message}`);
});
console.log('Connected to DB');

require('./models/Ticket.js');
require('./models/Software.js');

const app = require('./app');
app.set('port', process.env.PORT || 7080);
const server = app.listen(app.get('port'), () => {
  console.log(`Express running → PORT ${server.address().port}`);
});