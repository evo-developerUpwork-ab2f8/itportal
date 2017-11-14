const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const supplierSchema = new Schema({
  name: {
    type: String
  },
  address: {
    type: String
  },
  city: {
    type: String
  },
  state: {
    type: String
  },
  country: {
    type: String
  },
  zip: {
    type: String
  },
  contact_name: {
    type: String
  },
  phone: {
    type: String
  },
  fax: {
    type: String
  },
  email: {
    type: String
  },
  url: {
    type: String
  },
  notes: {
    type: String
  },
  img: {
    type: String
  }
});

module.exports = mongoose.model('supplier', supplierSchema);
