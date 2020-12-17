const express = require("express");


const router = express.Router();

// Home page
router.get("/", (req, res) => {
  res.render("movie");
});


module.exports = router;