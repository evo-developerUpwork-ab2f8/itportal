const mongoose = require('mongoose');
const validator = require('validator');

const TicketSchema = new mongoose.Schema ({
    id: {
        type: Number
    },
    title: {
        type: String,
        trim: true,
        required: 'Please enter a title'
    },
    description: {
        type: String,
        trim: true,
        required: 'Please enter a description'
    },
    category: {
        type: String,
        trim: true,
        require: 'Please select a category'
    },
    name: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, 'Invalid email address'],
        required: 'Please supply an email address'
    },
    status: {
        type: String,
        default: "open"
    }

});

TicketSchema.statics.countAll = function() {
    return Ticket.count();
};

module.exports = mongoose.model('Ticket', TicketSchema);