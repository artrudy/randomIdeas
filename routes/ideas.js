const express = require("express");
const router = express.Router();
const Idea = require("../models/Idea");

// const ideas = [
//   {
//     id: 1,
//     text: "Positive NewsLetter, a newsletter that only shares positive, uplifting news",
//     tag: "Technology",
//     username: "Tonystark",
//     date: "2022-01-02",
//   },
//   {
//     id: 2,
//     text: "Milk cartons that turn a different color the older that your milk is getting",
//     tag: "Inventions",
//     username: "SteveRogers",
//     date: "2022-01-02",
//   },
// ];

//gett all ideas
router.get("/", async (req, res) => {
  try {
    const ideas = await Idea.find();
    res.json({ success: true, data: ideas });
  } catch (error) {
    res.status(500).json({ success: false, error: "Something went wrong" });
  }
});

//get a single idea
router.get("/:id", async (req, res) => {
  try {
    const idea = await Idea.findById(req.params.id);
    res.json({ success: true, data: idea });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: "Something went wrong" });
  }
});

//add idea
router.post("/", async (req, res) => {
  const idea = new Idea({
    // id: ideas.length + 1,
    text: req.body.text,
    tag: req.body.tag,
    username: req.body.username,
    // date: new Date().toISOString().slice(0, 10),
  });

  try {
    const savedIdea = await idea.save();
    res.json({ success: true, data: savedIdea });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: "Something went wrong" });
  }
});

//update idea

router.put("/:id", async (req, res) => {
  try {
    const updatedIdea = await Idea.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          text: req.body.text,
          tag: req.body.tag,
        },
      },
      { new: true }
    );
    res.json({ success: true, data: updatedIdea });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: "Something went wrong" });
  }
});

//delete idea

router.delete("/:id", async (req, res) => {
  try {
    await Idea.findByIdAndDelete(req.params.id);
    res.json({ success: true, data: {} });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: "Something went wrong" });
  }
});

module.exports = router;
