const express = require("express");
const router = express.Router();
const Idea = require("../models/Idea");

const ideas = [
  {
    id: 1,
    text: "Positive NewsLetter, a newsletter that only shares positive, uplifting news",
    tag: "Technology",
    username: "Tonystark",
    date: "2022-01-02",
  },
  {
    id: 2,
    text: "Milk cartons that turn a different color the older that your milk is getting",
    tag: "Inventions",
    username: "SteveRogers",
    date: "2022-01-02",
  },
];

//gett all ideas
router.get("/api/ideas", (req, res) => {
  res.json({ success: true, data: ideas });
});

//get all idea
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
