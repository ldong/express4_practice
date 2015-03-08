var express = require('express'),
    bodyParser = require('body-parser'),
    app = express();

/*
var router = express.Router({
  caseSensitive: false,
  strict: false
});
*/

var router = express.Router();

router.use(function(req, res, next){
  console.log('router specific middleware');
  next();

});

router.get('/', function(req, res){
  res.send('from home route');
});

router.route('/test')
  .get(function(req, res){
    res.send('router test route');
  });

// start use our customized router
app.use('/', router);

// start use pre-append root route
app.use('/api', router);

app.listen(3000);

