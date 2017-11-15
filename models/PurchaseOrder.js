const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const orderItemsSchema = require('./OrderItems');

const poSchema = new Schema({
  company: {
    type: String
  },
  department: {
    type: String
  },
  purchase_order_number: {
    type: String
  },
  supplier: {
    type: String
  },
  supplier_address: {
    type: String
  },
  supplier_reference: {
    type: String
  },
  supplier_contact: {
    type: String
  },
  order_items: [orderItemsSchema],
  page_total: {
    type: Number
  },
  postage_packaging: {
    type: Number
  },
  sub_total: {
    type: Number
  },
  vat: {
    type: Number
  },
  total: {
    type: Number
  },
  additional_notes: {
    type: String
  },
  employee_signature_date: {
    type: String
  },
  line_manage_signature_date: {
    type: String
  },
  managing_director_signature_date: {
    type: String
  },
  nominal_code: {
    type: String
  }
});

module.exports = mongoose.model('po', poSchema);
