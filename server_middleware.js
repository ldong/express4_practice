var express = require('express'),
    bodyParser = require('body-parser'),
    app = express();

// Thrid Party
app.use(bodyParser.urlencoded({ extended: false }));

// Custom middleware
// will be run on every req/response
app.use(function(req, res, next){
  console.log('This will be run on every request');
  next();
});


// built-in middleware
// will make this directory be public under root -> /
app.use(express.static('./public'));


var names = [];
app.get('/', function(req, res){
  // res.render('index.ejs', {names: names});
  res.send('yep, this is a route');
});


app.listen(3000, function(){
  console.log('listening on port 3000');
});

