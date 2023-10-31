const express = require("express");

const router = express.Router;

//gett all ideas
app.get("/api/ideas", (req, res) => {
  res.json({ success: true, data: ideas });
});

//gett  idea
router.get("/", (req, res) => {
  res.json({ success: true, data: ideas });
});

router.get("/:id", (req, res) => {
  const idea = ideas.find((idea) => idea.id === +req.params.id);

  if (!idea) {
    return res
      .status(404)
      .json({ success: false, error: "Resourse not found" });
  }

  res.json({ success: true, data: idea });
});

//add idea
router.post("/", (req, res) => {
  const idea = {
    id: ideas.length + 1,
    text: req.body.text,
    tag: req.body.tag,
    username: req.body.username,
    date: new Date().toISOString().slice(0, 10),
  };

  ideas.push(idea);

  res.json({ success: true, data: idea });
});

//update idea

router.put("/:id", (req, res) => {
  const idea = ideas.find((idea) => idea.id === +req.params.id);

  if (!idea) {
    return res
      .status(404)
      .json({ success: false, error: "Resourse not found" });
  }

  idea.text = req.body.text || idea.text;
  idea.text = req.body.tag || idea.tag;

  res.json({ success: true, data: idea });
});

//delete idea

router.delete("/:id", (req, res) => {
  const idea = ideas.find((idea) => idea.id === +req.params.id);

  if (!idea) {
    return res
      .status(404)
      .json({ success: false, error: "Resourse not found" });
  }

  const index = ideas.indexOf(idea);
  ideas.splice(index, 1);

  res.json({ success: true, data: {} });
});

module.exports = router;
