const express = require('express');
const router = express.Router();
const createAccount = require('../controllers/create-account')
const balance = require('../controllers/balance')
const balanceAll = require('../controllers/balanceAll')
const transfer = require ('../controllers/transfer')

  router.post('/create-account', createAccount);

  router.get('/balance/:accountNumber', balance);

  router.get('/balance', balanceAll)

  router.post('/transfer', transfer);




module.exports = router;