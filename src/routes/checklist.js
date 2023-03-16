const express = require("express");

const router = express.Router();

const Checklist = require("../models/checklist");

router.get("/", async (_req, res) => {
  try {
    const checklists = await Checklist.find({});
    return res.status(200).json(checklists);
  } catch (err) {
    return res.status(500).json(err.message);
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const checklist = await Checklist.findById(id);
    return res.status(200).json(checklist);
  } catch (err) {
    return res.status(500).json(err.message);
  }
});

router.post("/", async (req, res) => {
  const { name } = req.body;

  try {
    const checklist = await Checklist.create({ name });
    return res.status(201).json(checklist);
  } catch (err) {
    return res.status(422).json(err.message);
  }
});

router.put("/:id", async (req, res) => {
  const { name } = req.body;
  const { id } = req.params;

  try {
    const checklist = await Checklist.findByIdAndUpdate(
      id,
      { name },
      { new: true }
    );
    return res.status(200).json(checklist);
  } catch (err) {
    return res.status(422).json(err.message);
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const checklist = await Checklist.findByIdAndRemove(id);
    return res
      .status(200)
      .json(`Id: ${id}, ${checklist.name} deletado com sucesso `);
  } catch (err) {
    return res.status(422).json(err.message);
  }
});

module.exports = router;
