const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send();
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  res.send(`ID: ${id}`);
});

router.post("/", (req, res) => {
  console.log(req.body);
  res.status(201).json(req.body);
});

router.put("/:id", (req, res) => {
  res.send(`ID: ${ req.params. id }`)
})

router.delete("/:id", (req, res) => {
  res.send(`ID: ${ req.params. id }`)
})

module.exports = router;
