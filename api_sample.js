const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json()); //req.body에 담는다

app.get('/', function(req, res) {
  res.send('Hello World');
});
app.get('/getPerson', function(req, res) {
  res.json({
    // name: 'ken',
    // age: 34
    ...req.query
  });
});

app.post('/addPerson', function(req, res) {
  const queryName = req.query.name;
  const bodyName = req.body.name;
  const name = req.body.name;
  res.json({
    queryName,
    bodyName
  });
});
app.listen(8080);