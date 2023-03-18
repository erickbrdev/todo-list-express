const express = require("express");

const router = express.Router();

const Checklist = require("../models/checklist");

router.get("/", async (_req, res) => {
  try {
    const checklists = await Checklist.find({});
    return res
      .status(200)
      .render("checklists/index", { checklists: checklists });
  } catch (err) {
    return res
      .status(500)
      .render("pages/error", { err: "Erro ao exibir as listas de tarefas" });
  }
});

router.get("/new", async (req, res) => {
  try {
    const checklist = new Checklist();
    return res.status(200).render("checklists/new", { checklist: checklist });
  } catch (err) {
    return res
      .status(500)
      .render("pages/error", { err: "Erro ao carregar formulário" });
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const checklist = await Checklist.findById(id);
    return res.status(200).render("checklists/show", { checklist: checklist });
  } catch (err) {
    return res
      .status(422)
      .render("pages/error", { err: "Erro ao exibir lista de tarefa" });
  }
});

router.post("/", async (req, res) => {
  const { name } = req.body.checklist;
  const checklist = new Checklist({ name });

  try {
    await checklist.save();
    return res.redirect("/checklists");
  } catch (err) {
    return res
      .status(422)
      .render('checklists/new', { checklists: {...checklist, err}});
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
