var express = require('express');
var router = express.Router();
const dbConn = require('../lib/db');

const copyright = 'Blog do Paulo - 2021';

router.get('/bdpost', function(req, res, next) {
  dbConn.query('SELECT * FROM POSTS', function(err, rows) {
    if(err) {
      console.log('error', err);
      res.json({data: ''});
    } else {
      res.json({data:rows});
    }
  })
})

router.get('/', function(req, res, next) { //meudominio.com
  dbConn.query('SELECT * FROM POSTS', function(err, rows) {
    if(err) {
      req.flash('error', err);
      res.render('index', {data: ''});
    } else {
      res.render('index', 
      { 
        title: 'Blog do Paulo', 
        copyright,
        data:rows,
      });
    }
  })
});

router.get('/about', function (req, res, next) {
  res.render('about', {title: 'Sobre o autor', copyright })
})

router.get('/posts', function (req, res, next) {
  res.render('posts', {title: 'Meus posts', copyright})
})

router.get('/categories', function (req, res, next) {
  res.render('categories', {title: 'Categorias', copyright})
})

router.get('/contact', function(req, res, next) { //meudominio.com/contact
  res.render('contact', { title: 'Contato', copyright})
})

module.exports = router;
