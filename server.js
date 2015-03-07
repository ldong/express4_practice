var express = require('express'),
    bodyParser = require('body-parser'),
    app = express();

app.set('env', 'development'); // process.env.NODE_ENV = production
app.enable('trust proxy');  // reverse proxy
app.set('jsonp callback name', 'cb');
app.set('json replacer', function(attr, val){
  if(attr === 'passwordHash'){
    return undefined;
  }
  return val.toUpperCase();
});

app.enable('case senstive routing'); //  /hello /Hello  will be different
app.enable('strict routing');        //  /hello /hello/ will be different

app.enable('view cache');            // template will be stored temporarily

app.set('view engine', 'ejs');       // dont have put extension

app.set('views', 'views');        // change default views directory

app.enable('x-powered-by');          // header from response

// JSON.stringfy({}, fn);

app.get('/user_info', function(req, res){

  res.json(user); // JSON.stringify

});

var names = ['Lin Dong', 'John Doe', 'Jane Doe'];
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(req, res){
  res.render('index.ejs', {names: names});
});


app.listen(3000, function(){
  console.log('listening on port 3000');
});

