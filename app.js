var express       = require('express');
var app           = express();
var morgan        = require('morgan');
var port          = process.env.PORT || 3000;
var mongoose      = require('mongoose');
var bodyParser    = require('body-parser');
var cors          = require('cors');
var router        = require('./config/routes/routes');
var db            = require('./config/database');

mongoose.connect(db.uri);

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// Set default view engine and views directory
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use(express.static(__dirname + '/public'));

app.use('/', router);

app.listen(port, function() {
  console.log("Express is listening on port " + port);
});