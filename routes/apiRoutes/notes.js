const router = require("express").Router();
const {} = require('../../lib/notes');
const { notes } = require("../../data/notes")

router.get("/notes", (req, res) => {
  let results = notes;
  if (req.query) {
    console.log("query")
  }
  res.json(results);
})

module.exports = router;