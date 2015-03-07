var express = require('express'),
    app = express();

app.get('/', function(req, res){
  res.send('<h1>hello world</h1>');
}).listen(3000, function(){
  console.log('listening on port 3000');

});
