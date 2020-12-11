const router = require("express").Router();
const {validateNote, createNewNote} = require('../../lib/notes');
const { notes } = require("../../data/notes")

router.get("/notes", (req, res) => {
  let results = notes;
  if (req.query) {
    console.log("query")
  }
  res.json(results);
})

router.post("/notes", (req,res) => {
  if(!validateNote(req.body)) {
    res.status(400).send("The note is not properly formatted.")
  } else {
    const note = createNewNote(req.body, notes);
    res.json(note)
  }
})

module.exports = router;