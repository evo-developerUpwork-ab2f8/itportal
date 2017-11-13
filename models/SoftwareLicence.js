const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const licenceSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name Must Be Provided']
  },
  manufacturer: {
    type: String,
    required: [true, 'Manufacturer Must Be Provided']
  },
  version: {
    type: String,
    required: [true, 'Version Must Be Provided']
  }
});

module.exports = mongoose.model('softwarelicence', licenceSchema);
