const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderItemsSchema = new Schema({
  description: {
    type: String
  },
  qty: {
    type: Number
  },
  unit_price: {
    type: Number
  },
  total: {
    type: Number
  }
});

module.exports = orderItemsSchema;
