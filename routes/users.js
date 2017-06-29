var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/register', function(req, res, next) {
  res.render('register', {
    'title': 'register'
  });
});

router.get('/login', function(req, res, next) {
  res.render('login', {
    'title': 'login'
  });
});
router.post('/users/register' function(req, res){
  var name = req.body.name;
  var email = req.body.email;
  var username = req.body.username;
  var password = req.body.password;
  var password2 = req.body.password2;
});

if(req.file.profileimage){
  console.log('uploading file...');

  var profileo = req.files.profileimage.originalname;
  var profileimagen = req.files. profileimage.name;
  var profileimagemime = req.files. profileimage.mimetype;
  var profileimagepath = req.files. profileimage.path;
  var profileimagesize = req.files. profileimage.size;
  var profileimageExt = req.files. profileimage.extension;
} else{
  var profileimagen = "noimage.png"
}

module.exports = router;
