const router = require("express").Router();
const fs = require("fs");

router.get("/:userID/accounts", (req, res) => {
  const userID = req.params.userID;

  res.send(data.users[userID].accounts);
}); // returns all accounts for a specific user

router.get("/:userID/:accountID/transactions", (req, res) => {
  const userID = req.params.userID;
  const accountID = req.params.accountID;

  let rawdata = fs.readFileSync("./data/data.json");
  let returnData =
    JSON.parse(rawdata).users[userID].accounts[accountID].transactions;

  res.send(JSON.stringify(returnData));
}); // returns all transactions for a specific account number

router.get("/:userID/:accountID/transactions/category/:catName", (req, res) => {
  const userID = req.params.userID;
  const accountID = req.params.accountID;
  const catName = req.params.catName;

  let rawdata = fs.readFileSync("./data/data.json");
  let data = JSON.parse(rawdata).users[userID].accounts[accountID].transactions;

  let dataByCat = [];

  data.forEach((transaction) => {
    if (transaction.category == catName) {
      dataByCat.push(transaction);
    }
  });

  let resData = JSON.stringify(dataByCat);
  res.send(resData);
}); // returns all transactions for a specific category

router.get("/:userID/:accountID/transactions/location/:locName", (req, res) => {
  const userID = req.params.userID;
  const accountID = req.params.accountID;
  const locName = req.params.locName;

  let rawdata = fs.readFileSync("./data/data.json");
  let data = JSON.parse(rawdata).users[userID].accounts[accountID].transactions;

  let dataByLoc = [];

  data.forEach((transaction) => {
    if (transaction.location == locName) {
      dataByLoc.push(transaction);
    }
  });

  let resData = JSON.stringify(dataByLoc);
  res.send(resData);
}); // returns all transactions for a specific location

router.get("/:userID/info", (req, res) => {
  const userID = req.params.userID;

  let rawdata = fs.readFileSync("./data/data.json");
  let data = JSON.parse(rawdata).users[userID];

  let returnData = {
    userID: data.userID,
    userFirstName: data.userFirstName,
    userLastName: data.userLastName,
    userEmail: data.userEmail,
    userDOB: data.userDOB,
    annualIncome: data.annualIncome,
    monthlySpendGoal: data.monthlySpendGoal,
  };

  res.send(JSON.stringify(returnData));
}); // returns metadata about a specific user

router.get("/:userID/all", (req, res) => {
  const userID = req.params.userID;

  let rawdata = fs.readFileSync("./data/data.json");
  let returnData = JSON.parse(rawdata).users[userID];
  res.send(JSON.stringify(returnData));
}); // returns info about a specific user

router.get("/all", (req, res) => {
  let rawdata = fs.readFileSync("./data/data.json");
  let returnData = JSON.parse(rawdata);
  res.send(JSON.stringify(returnData));
}); // returns all users

module.exports = router;
