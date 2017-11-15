const mongoose = require('mongoose');
const Ticket = mongoose.model('Ticket');

exports.dashPage = async (req, res) => {
  let page = 1;
  const tickets = await Ticket.find();
  const ticketsAll = await Ticket.count();
  res.render('index', {tickets, ticketsAll, page});
};

exports.requestPage = (req, res) => {
  res.render('request');
};

exports.adminPage = (req, res) => {
  res.render('admin/index');
};