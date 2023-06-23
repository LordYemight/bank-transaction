const mongoose = require ('../models/db');

const balanceSchema = new mongoose.Schema({
  accountNr: { type: String, unique: true },
  balance: Number,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Balance', balanceSchema);