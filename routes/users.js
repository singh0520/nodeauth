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
router.post('/register', function(req, res){
  var name = req.body.name;
  var email = req.body.email;
  var username = req.body.username;
  var password = req.body.password;
  var password2 = req.body.password2;


// if(req.files.profileimage){
//   console.log('uploading file...');
//
//   var profileo = req.files.profileimage.originalname;
//   var profileimagen = req.files. profileimage.name;
//   var profileimagemime = req.files. profileimage.mimetype;
//   var profileimagepath = req.files. profileimage.path;
//   var profileimagesize = req.files. profileimage.size;
//   var profileimageExt = req.files. profileimage.extension;
// } else{
//   var profileimagen = "noimage.png";
// }

req.checkBody('name', 'Name field is required.').notEmpty();
req.checkBody('email', 'Email field is required.').notEmpty();
req.checkBody('email', 'Email not valid.').isEmail();
req.checkBody('username', 'username field is required.').notEmpty();
req.checkBody('password', 'password field is required.').notEmpty();
req.checkBody('password2', 'password does not match').equals(req.body.password);

var errors  =req.validationErrors();

if(errors){
  res.render('register', {
    errors: errors,
    name: name,
    email: email,
    username: username,
    password: password,
    password2: password2
  });
}else{
  var newUser = new user({
    name: name,
    email: email,
    username: username,
    password: password,
    profileimage: profileimagen
  });

  user.createUser(newUser, function(err, user){
    if(err) throw err;
    console.log(user);
  });

  req.flash('success', 'you are now register and may log in');
  res.location('/');
  res.redirect('/');
}

});

module.exports = router;
