const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const capitalReqSchema = new Schema({
  company: {
    type: String
  },
  department: {
    type: String
  },
  description_of_goods: {
    type: String
  },
  supplier: {
    type: String
  },
  price_excl_vat: {
    type: Number
  },
  project: {
    type: String
  },
  reason_for_purchase: {
    type: String
  },
  div_manager_sign: {
    type: String
  },
  div_manager_sign_date: {
    type: Date
  },
  finance_dir_sign: {
    type: String
  },
  finance_dir_sign_date: {
    type: Date
  },
  managing_dir_sign: {
    type: String
  },
  managing_dir_sign_date: {
    type: Date
  },
  order_number: {
    type: Number
  },
  sage_n_code: {
    type: String
  }
});

module.exports = mongoose.model('capex', capitalReqSchema);
