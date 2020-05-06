var express = require('express');
var router = express.Router();

/* GET home page. */
//router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
//});



router.get('/',function(req,res){
  res.send('Hello World')
})

router.post('/',function(req,res){
  res.send('Got a post request')
})

router.put('/user',function(req,res){
  res.send('Got a Put request from the /user')
})

router.delete('/user',function(req,res){
  res.send('Got a delete request at the /user')
})

module.exports = router;
