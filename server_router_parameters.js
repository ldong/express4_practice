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
app.get('/', function(req, res) {
  // res.render('index.ejs', {names: names});
  res.send('yep, this is a route');
});

// takes care of `:name`
app.param('name', function(req, res, next, name) {
  req.name = name[0].toUpperCase() + name.substring(1);
  next();
});

app.get('/name/:name', function(req, res) {
  res.send('Your name is '+req.name);


  /*
   Users.findOne({username: name}, function(err, user){
      req.user = user;
      next();
   });
   */
});


app.listen(3000, function() {
  console.log('listening on port 3000');
});

