var router = require('express').Router();
var jwt = require('jsonwebtoken');
var usersController = require('../../controllers/users');
var carsController = require('../../controllers/cars');
var authenticationController = require('../../controllers/authentication');
var secret = require('../../config/tokens').secret;

// custom JWT middleware
function secureRoute(req, res, next) {
  if(!req.headers.authorization) return res.status(401).json({ message: 'Unauthorized' });

  var token = req.headers.authorization.replace('Bearer ', '');

  jwt.verify(token, secret, function(err, user) {
    if(!user) return res.status(401).json({ message: 'Invalid token' });
    req.user = user;
    next();
  });
}

router.get('/', function(req, res) {
  res.render('index')
})

router.route('/users')
  .get(secureRoute, usersController.index);

router.route('/users/:id')
  .all(secureRoute)
  .get(usersController.show)
  .put(usersController.update)
  .delete(usersController.delete);

router.post('/register', authenticationController.register);
router.post('/login', authenticationController.login);

router.route('/cars')
  .get(carsController.index);

module.exports = router;