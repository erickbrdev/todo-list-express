const express = require("express");

const router = express.Router();

router.get("/", async (_req, res) => {
  return res.render("pages/index");
});

module.exports = router;
