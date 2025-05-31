const mongoose = require("mongoose");

const lessonSchema = new mongoose.Schema({
  title: String,
  completed: { type: Boolean, default: false },
});

module.exports = mongoose.model("Lesson", lessonSchema);
