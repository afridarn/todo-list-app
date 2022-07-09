const router = require('express').Router();
const Todo = require('../models/Todo');

router.post('/todo', (req, res) => {
  // const todo = req.body.todo; 
  const { todo } = req.body;
  const newTodo = new Todo({ todo })
  newTodo.save()
    .then(() => {
      console.log("Succesfully Added!");
      return res.redirect("/");
    })
    .catch(err => console.log(err));
});

router.get('/todo/:_id', (req, res) => {
  const { _id } = req.params;
  Todo.deleteOne({ _id })
    .then(() => {
      console.log("Deleted");
      return res.redirect("/");
    })
    .catch(err => console.log(err));
});

router.post('/todo/:_id', async (req, res) => {
  const { _id } = req.params;
  const changed = req.body.todo;

  let lama = await Todo.findOne({ _id })
  lama.todo = changed;
  lama.save()
    .then(() => {
      console.log("Updated");
      return res.redirect("/");
    })
    .catch(err => console.log(err));
});


module.exports = router;
// module.exports = { router };