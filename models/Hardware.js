const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hardwareSchema = new Schema({
  company: {
    type: String
  },
  asset_tag: {
    type: String
  },
  model: {
    type: String
  },
  status: {
    type: String
  },
  checkout_to_user: {
    type: String
  },
  checkout_to_asset: {
    type: String
  },
  checkout_to_location: {
    type: String
  },
  serial: {
    type: String
  },
  asset_name: {
    type: String
  },
  purchase_date: {
    type: Date
  },
  supplier: {
    type: String
  },
  order_number: {
    type: Number
  },
  purchase_cost: {
    type: Number
  },
  warranty: {
    type: Number
  },
  notes: {
    type: String
  },
  default_location: {
    type: String
  },
  requestable: {
    type: Boolean
  },
  img: {
    type: String
  }
});

module.exports = mongoose.model('hardware', hardwareSchema);
