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
1. next in `expressjs`

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
