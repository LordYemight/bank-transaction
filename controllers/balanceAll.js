const Balance = require("../validation/balanceVal")

// Getting all accounts and their balance
const balanceAll = async (req, res) => {
  try {
    const balances = await Balance.find({}, { _id: 0, accountNr: 1, balance: 1 });

    res.json({ balances });
  } catch (error) {
    console.error('Error retrieving balances:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = balanceAll;