var express = require('express');
var router = express.Router();
var fs = require('fs');
router.POST('/', function(req, res, next) {
	fs.readFile('public/index.txt','utf-8',function(err,data){
       fs.writeFile('public/index.txt',function(err){
      
       })
	
	})
});
 
module.exports = router;
