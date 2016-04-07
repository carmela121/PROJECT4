var router = require('express').Router();
var stripe = require('stripe')("sk_test_W5ONdwCB8p2Q8wRpw01JG5mT");
var jwt = require('jsonwebtoken');
var usersController = require('../controllers/users');
var carsController = require('../controllers/cars');
var bookingsController = require('../controllers/bookings');
var authenticationController = require('../controllers/authentication');
var secret = require('../config/tokens').secret;

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
  .get(carsController.index)
  .post(carsController.create);

router.route('/cars/available')
  .get(secureRoute, carsController.available);

router.route('/cars/:id')
  .get(carsController.show)
  .put(carsController.update)
  .delete(carsController.delete);

router.route('/bookings')
  .get(bookingsController.index)
  .post(bookingsController.create);

router.route('/bookings/:id')
  .get(bookingsController.show)
  .put(bookingsController.update)
  .delete(bookingsController.delete);

router.post('/payment', function(req, res) {
    var token = req.body.token;

    var charge = stripe.charges.create({
      amount: parseInt(parseFloat(req.body.amount * 100), 10),
      currency: req.body.currency,
      source: token,
      description: 'TEST'
    }, function(err, charge) {
      if(err) {
        return res.status(500).json({ message: err})
      }
      res.status(200).json({ message: "payment successful" });

    });
  });
  

module.exports = router;