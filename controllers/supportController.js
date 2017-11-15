const mongoose = require('mongoose');
const Ticket = mongoose.model('Ticket');

exports.supporthomePage = (req, res) => {
  res.render('support/support');
};

exports.getTickets = async (req, res) => {
  const tickets = await Ticket.find();
  const ticketsAll = await Ticket.count();
  res.render('support/support', {tickets, ticketsAll});
};

exports.createTickets = async (req, res) => {
  const ticket = await new Ticket(req.body).save();
  res.redirect('/');
};

exports.editTickets = async (req, res) => {
  const ticket = await Ticket.findOne({_id: req.params.id});
  console.log(ticket);
};