const Balance = require("../models/balanceModel")
const createAccountSchema = require("../validation/createAccountVal");

  // Enable user to create an account stored in the balance table
  const createAccount = async (req, res) => {
    try {
      // Validate input
      const { error } = createAccountSchema.validate(req.body);
  
      if (error) {
        return res.status(400).json({ error: error.details[0].message });
      }
  
      // Generate a unique 10-digit account number
      const generateRandomNumber = () => {
        let randomNumber = ""
        for (let i = 0; i < 10; i++) {
          randomNumber += Math.floor(Math.random() * 10);  
        }
        return randomNumber;
       }
       const accountNumber = generateRandomNumber();
  
  
      // Create a new balance record
      const balance = new Balance({
        accountNr: accountNumber,
        balance: req.body.amount
      });
  
      // Save the balance record to the database
      await balance.save();
  
      res.status(201).json({ accountNumber });
    } catch (error) {
      console.error('Error creating account:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };

  module.exports = createAccount;