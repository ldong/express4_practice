# README

Author: Lin Dong

Date: Sat Mar  7 13:28:07 PST 2015

Lets talk about `express 4`, more api [here](http://expressjs.com/api.html)

## npm packages

1. express
2. nodemon
3. jade
4. ejs

Express expects every view is in `./views` directory

Express uses `render` to partial render html template

## Verb
1. `bodyParser` for parse body parameters
2. next in `expressjs`

```js
function(req, res, next){
  // logics
  next();
}
```

## Application Configuration
1. `app.set()`
2. `app.enable()`
3. `app.disable()`
4. `app.enabled()`
5. `app.disabled()`

Example

```js

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

app.set('views', 'template');        // change default views directory

app.enable('x-powered-by');          // header from response

```

## Middle ware and Request flow
1. app.use('MIDDLEWARE_NAME'), i.e. `connect`
2. middleware function will be called on every req/res
3. route will be called upon specific **routes** and **methods**

## Router Parameters

1. body parser vs params
  * body parser get the data from form, i.e. via a submit button
  * params get value from the url, i.e. `/name/:name`
2. route parameters are useful to retrieve data from DB.

## Grouping Routes with app.route

App route chaining example:

```js
app.route('/')
    .all()
    .get()
    .post()
    .put()
    .delete()
```

## Router Object
Router object has the following methods:
1. `use`
2. `param`
3. `verb`, all
4. `route`

```js
var APIv1 = express.Router(),
    APIv2 = express.Router();

APIv1.get('/name', function(req, req){  });
APIv2.get('/name', function(req, req){  });

app.use('api/v1', APIv1);
app.use('api/v2', APIv2);
```
## Request Object

1. `req.params.ATTR`
i.e.
```js
app.get('/:breedOfDog', function(){})
req.params.breedOfDog;
```
2. req.body.ATTR
3. req.query.ATTR
4. req.param('ATTR'), will check all three `params`, `body`, `query`
5. req,route
6. req.originalUrl, the actual used url
7. req.get();  get any header name
8. req.accepts('text/html');  // return true or false

## Response Object
1. `res.status(200);`
2. `res.set(header, value);`
3. `res.get(header);`
4. `res.cookie(name, value);`
5. `res.clearCookie(name);`
6. `res.redirect(status, path);`
7. `res.send(status, text);`
8. `res.json(status, object);  // will convert json object to json string`
9. `res.jsonp(status, object);`
10. `res.download(file);  // download pdf or something`
11. `res.render(file, props, function(err, html){ //do something with the response })`

## Response Formating Object
i.e.

```js
app.get('/', function(req, res){
  res.format({
    'text/plain': function(){
      res.send('text response');
    },
    'text/html': function(){
      res.render('index.ejs');
    },
    'application/json': function(){
    res.json({topic: 'Express'});
    }
  });
});
```

Use:

1. browser for `html`
2. curl for `text/plain`
3. Postman for `json`

