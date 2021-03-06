const express = require('express');
const port = process.env.PORT || 3000;
var app = express();

app.get('/', (req, res) => {
  res.status(404).send({
    error: 'Page not found.',
    name: 'Todo App v1.0'
  });
});

app.get('/users', (req, res) => {
  res.send([{
    name: 'Mike',
    age: 27
  }, {
    name: 'Andrew',
    age: 25
  }, {
    name: 'Jen',
    age: 26
  }]);
});
// GET /users
// Give users a name prop and age prop
app.get('/check', (req, res) => {
  res.send([{
    name: 'Niz',
    age: 26
  }, {
    name: 'Nadav',
    age: 26
  }, {
    name: 'Tomer',
    age: 27
  }]);
});
app.listen(port, ()=>{
	console.log(`Server is running on port ${port}`);
});
module.exports.app = app;
