const Balance = require("../validation/balanceVal")

 const balance = async (req, res) => {
  try {
    // const { accountNumber } = req.params;
    const balance = await Balance.findOne({ accountNr: req.params.accountNumber });

    if (!balance) {
      return res.status(404).json({ error: 'Account not found' });
    }
    res.json({ balance: balance.balance });
  } catch (error) {
    console.error('Error retrieving balance:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = balance;