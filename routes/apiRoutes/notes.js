const router = require("express").Router();
const { validateNote, createNewNote } = require("../../lib/notes");
const { notes } = require("../../data/notes");
const fs = require("fs");

router.get("/notes", (req, res) => {
  let results = notes;
  res.json(results);
});

router.post("/notes", (req, res) => {
  // set id based on what the next index of the array will be and add it to the database
  req.body.id = notes.length.toString();

  if (!validateNote(req.body)) {
    res.status(400).send("The note is not properly formatted.");
  } else {
    const note = createNewNote(req.body, notes);
    res.json(note);
  }
});

router.delete("/notes/:id", function (req, res) {
  let id = req.params.id;
  // verify that id matches and splice it from the data set
  if (notes[id].id == id) {
    notes.splice(id, 1);
  } else {
    res.status(400).send("Note ID not found!");
  }
  // reformat IDs
  for (let i = 0; i < notes.length; i++) {
    notes[i].id = i.toString();
  }
  res.json(true);
});

module.exports = router;
