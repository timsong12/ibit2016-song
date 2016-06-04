var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) { 'use strict';
  res.render('index', { title: 'iBIT(Institute for Business & Information Technology) Day', author: 'Tim Song' });
});

router.get('/:id', function(req, res, next) { 'use strict';
  res.render(req.params.id, { title: 'ibitday' }); //render: take the jade and convert to html and sent back
});

module.exports = router;
