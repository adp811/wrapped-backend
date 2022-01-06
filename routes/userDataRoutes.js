const router = require('express').Router();
const data = require('../data/data');
const fs = require('fs');

router.get('/:userID/accounts', (req, res) => {
  const userID = req.params.userID;

  res.send(data.users[userID].accounts);
}); // returns all accounts for a specific user

router.get('/:userID/:accountID/transactions', (req, res) => {
  const userID = req.params.userID;
  const accountID = req.params.accountID;

  res.send(data.users[userID].accounts[accountID].transactions);
}); // returns all transactions for a specific account

router.get('/:userID/all', (req, res) => {
  const userID = req.params.userID;

  res.send(data.users[userID]);
}); // returns info about a specific user

router.get('/all', (req, res) => {
  let rawdata = fs.readFileSync('./data/data.json');
  let returnData = JSON.parse(rawdata);
  res.send(JSON.stringify(returnData));
}); // returns all users

module.exports = router;
