

const mongoose = require('mongoose')
const Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost:27017/ToDoApp")

const ToDoSchema = new Schema({
  name: String,
  completed: Boolean,
  note: String,
  updated_at: { type: Date, default: Date.now }
})

const ToDo = mongoose.model('ToDo',ToDoSchema)

var todo = new ToDo({name: 'NodeJS-Test', completed: false, note: 'Getting there...'});
// Save it to database
todo.save(function(err){
  if(err)
    console.log(err);
  else
    console.log(todo);
});

// Find all data in the Todo collection
ToDo.find(function (err, todos) {
    if (err) return console.error(err);
    console.log(todos)
  });