'use strict';

require('babel/register');

var koa = require('koa'),
    views = require('koa-views'),
    serve = require('koa-static'),
    React = require('react'),
    BlogApp = React.createFactory(require('./app/components/BlogApp'));

var app = koa();
app.use(views('views', {
  map: {
    html: 'ejs'
  }
}));
app.use(serve(__dirname + '/public'));

app.use(function *(){
    var reactHtml = React.renderToString(BlogApp({}));
    yield this.render('index', {reactOutput: reactHtml});
});

app.listen(3000);
