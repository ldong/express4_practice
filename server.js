var express = require('express'),
    bodyParser = require('body-parser'),
    app = express();

app.use(bodyParser.urlencoded({ extended: false }));

var names = ['John Doe', 'Lin Dong', 'Jane Doe'];

app.get('/', function(req, res){
  // res.send('<h1>hello world</h1>');
  // res.render('index.jade', {
  //   title: 'title from server.js'
  // })
  // res.render('index.ejs', {
  //   title: 'title from server.js'
  // })

  res.render('index.ejs', {names: names});
});


app.post('/', function(req, res){
  names.push(req.body.name);
  res.redirect('/');
});

app.listen(3000, function(){
  console.log('listening on port 3000');
});
