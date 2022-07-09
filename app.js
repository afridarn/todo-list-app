const express = require('express');
const mongoose = require('mongoose');
const homepage = require('./routes/index');
// const { addToDo } = require('./routes/todo');


const app = express();

mongoose.connect("mongodb+srv://afridarn:afridacantikbanget@cluster0.y2gna.mongodb.net/todo_app?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set("view engine", "ejs");

app.use(homepage);
app.use(require('./routes/todo'));

app.listen(3000, () => console.log('Server started listening on PORT 3000'));