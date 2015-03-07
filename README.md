# README

Author: Lin Dong

Date: Sat Mar  7 13:28:07 PST 2015

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
