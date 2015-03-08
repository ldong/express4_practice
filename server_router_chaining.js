var express = require('express'),
    bodyParser = require('body-parser'),
    app = express();

// Thrid Party
app.use(bodyParser.urlencoded( { extended: false }));

// Custom middleware
// will be run on every req/response
app.use(function(req, res, next) {
  console.log('This will be run on every request');
  next();
});


// built-in middleware
// will make this directory be public under root -> /
app.use( express.static('./public'));


var names = [];
app.route('/').
  get(function(req, res) {
    res.send('This is sent from get method');
  })
  .post(function(req, res){
    res.send('This is sent from post method');
  });

app.listen(3000, function() {
    console.log('listening on port 3000');
  });

