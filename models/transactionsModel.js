const mongoose = require('./db');


const transactionSchema = new mongoose.Schema({
  reference: { type: String, unique: true },
  senderAccountNr: String,
  amount: Number,
  receiverAccountNr: String,
  transferDescription: String,
  createdAt: { type: Date, default: Date.now }
});


module.exports = mongoose.model('Transaction', transactionSchema);

