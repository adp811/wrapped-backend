const router = require("express").Router();
const fs = require("fs");

router.get("/:userID/add/:catName", (req, res) => {
  const userID = req.params.userID;
  const catName = req.params.catName;

  let rawdata = fs.readFileSync("./data/data.json");
  let data = JSON.parse(rawdata);

  data.users[userID].categories.push(catName);

  let modifiedData = JSON.stringify(data);
  fs.writeFileSync("./data/data.json", modifiedData);

  res.send("Added category");
});

router.get("/:userID/modify/:transID/:catName", (req, res) => {
  const userID = req.params.userID;
  const transID = req.params.transID;
  const catName = req.params.catName;

  let rawdata = fs.readFileSync("./data/data.json");
  let data = JSON.parse(rawdata);

  data.users[userID].accounts[0].transactions[transID].category = catName;

  let modifiedData = JSON.stringify(data);
  fs.writeFileSync("./data/data.json", modifiedData);

  res.send("Modified Category");
});

module.exports = router;
