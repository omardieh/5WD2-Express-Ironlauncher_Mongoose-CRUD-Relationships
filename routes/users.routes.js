const express = require("express");
const router = express.Router();

/* GET users page */
router.get("/", (req, res) => {
  res.send("Welcome to the users route");
});

router.get("/:id", (req, res) => {
  res.send(req.params);
});

module.exports = router;
