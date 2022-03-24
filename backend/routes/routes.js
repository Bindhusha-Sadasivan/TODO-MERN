const express = require("express");
const Task = require("../models/models");

const router = express.Router();

// router.get("/checkTodo", async (req, res) => {
//   const task = new Task({
//     todo: "Update the project",
//     isCompleted: false,
//   });

//   await task
//     .save()
//     // .then(() => res.json(task))
//     .then(() => res.send(task))
//     .catch((error) => console.log("Error occures while saving!!!", error));
// });

// router.get("/gettodo", async (req, res) => {
//   const task = await Task.find();
//   res.send(task);
// });

// router.post("/posttodo", async (req, res) => {
//   const task = new Task({
//     todo: req.body.todo,
//     isCompleted: req.body.isCompleted,
//   });
//   await task
//     .save()
//     .then(() => res.send(task))
//     .catch((error) => console.log(error));
// });

router.get("/gettodo", async (req, res) => {
  // const task = await Task.find((err, doc) => {
  //   if (err) console.log(err);
  //   res.send(doc);
  const task = await Task.find();
  res.send(task);
});

router.post("/posttodo", async (req, res) => {
  const task = new Task(req.body);
  await task.save((err, doc) => {
    if (err) console.log(err);
    res.send(task);
  });
});

router.put("/:id", async (req, res) => {
  await Task.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true },
    (err, doc) => {
      if (err) console.log(err);
      res.send(doc);
    }
  );
});

router.delete("/:id", async (req, res) => {
  await Task.findByIdAndDelete(req.params.id, (err, doc) => {
    if (err) console.log(err);
    res.send(doc);
  });
});

module.exports = router;
