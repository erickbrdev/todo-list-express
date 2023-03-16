const express = require("express");

const router = express.Router();

const Checklist = require("../models/checklist");

router.get("/", (req, res) => {
  res.send();
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  res.send(`ID: ${id}`);
});

router.post("/", async (req, res) => {
  let { name } = req.body;

  try {
    let checklist = await Checklist.create({ name });
    res.status(201).json(checklist);
  } catch (err) {
    res.status(422).json(err.message);
  }
});

router.put("/:id", (req, res) => {
  res.send(`ID: ${req.params.id}`);
});

router.delete("/:id", (req, res) => {
  res.send(`ID: ${req.params.id}`);
});

module.exports = router;
