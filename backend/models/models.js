const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/TodoList", () =>
    console.log("Connected to Database Successfully...")
  )
  .catch((error) => console.log("Error occured!!!", error));

const taskSchema = mongoose.Schema({
  todo: String,
  isCompleted: Boolean,
});

const Task = mongoose.model("Todo", taskSchema);

module.exports = Task;
