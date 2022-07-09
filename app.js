const express = require('express');
const mongoose = require('mongoose');
const homepage = require('./routes/index');
const dotenv = require('dotenv');
// const { addToDo } = require('./routes/todo');

dotenv.config();
const app = express();

mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set("view engine", "ejs");

app.use(homepage);
app.use(require('./routes/todo'));

app.listen(process.env.PORT || 5000, () => console.log('Server started listening on PORT 3000'));