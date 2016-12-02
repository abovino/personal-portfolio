var express = require('express');
var path = require('path');

var app = express();

/*app.use(express.static(path.join(__dirname, '/public')));
app.use(express.static(path.join(__dirname, '/views')));*/

app.set('views', './views');

/*app.use(express.static('public'));
app.use(express.static('views'));*/

app.get('/', function(req, res) {
  res.render('index.html');
});

app.listen(3000, function() {
  console.log("Listening on port 3000 ... ");
});
