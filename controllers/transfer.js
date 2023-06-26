const transferSchema = require('../validation/transferVal'); 
const Transaction = require('../models/transactionsModel');
const Balance = require('../models/balanceModel')

const transfer = async (req, res) => {
  try {
    // Validate input
    const { error } = transferSchema.validate(req.body);

    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    const { from, to, amount } = req.body;

    // Check if sender has sufficient funds
    const senderBalance = await Balance.findOne({ accountNr: from });
    if (!senderBalance) {
      return res.status(404).json({ error: 'Sender account not found' });
    }
    if (senderBalance.balance < amount) {
      return res.status(400).json({ error: 'Insufficient funds' });
    }

    // Update the sender's balance
    senderBalance.balance -= amount;
    await senderBalance.save();
  
    // Update the receiver's balance
    const receiverBalance = await Balance.findOne({ accountNr: to });
    
    if (!receiverBalance) {
    return res.status(404).json({ error: 'Receiver account not found' });
    }
    
    receiverBalance.balance += amount;
    await receiverBalance.save();
    
    // Helper function to generate a unique transaction reference
    function generateTransactionReference() {
      // Generate a timestamp-based unique reference
      return Date.now().toString(36);
      }
      

    // Create a new transaction record
    const transaction = new Transaction({
      reference: generateTransactionReference(),
      senderAccountNr: from,
      amount,
      receiverAccountNr: to,
      transferDescription: 'Money Transfer'
    });


    // Save the transaction record to the database
    await transaction.save();

    res.status(201).json({ message: 'Transaction successful' });
  } catch (error) {
    console.error('Error transferring funds:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
module.exports = transfer; 