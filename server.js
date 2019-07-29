'use strict';

var express = require('express');
var cors = require('cors');
const multer = require('multer');
// require and use "multer"...
var upload = multer({dest:'views/'});
var app = express();
var bodyparser = require('body-parser');
app.use(bodyparser.json());
app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
     res.sendFile(process.cwd() + '/views/index.html');
  });

app.get('/hello', function(req, res){
  res.json({greetings: "Hello, API"});
});
app.post('/api/fileanalyse',upload.single('upfile'),(req,res)=>{
  return res.json(req.file)
})
app.listen(process.env.PORT || 3000, function () {
  console.log('Node.js listening ...');
});
