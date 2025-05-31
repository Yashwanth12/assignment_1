const express = require("express");
const router = express.Router();
const Lesson = require("../models/Lesson");

// Get all lessons
router.get("/", async (req, res) => {
  const lessons = await Lesson.find();
  res.json(lessons);
});

// Toggle lesson completion
router.patch("/:id", async (req, res) => {
  const lesson = await Lesson.findById(req.params.id);
  if (!lesson) return res.status(404).send("Not found");
  lesson.completed = !lesson.completed;
  await lesson.save();
  res.json(lesson);
});

module.exports = router;
