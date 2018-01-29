var http = require("http");
var finalhandler = require('finalhandler')
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Router = require('router');

//connect to MongoDB
mongoose.connect('mongodb://localhost/pmo');
var db = mongoose.connection;

//handle mongo error
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log("Connected to DB..!");
});

var router = Router();

router.get('/status', function (req, res) {
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end('All Systems Green!');
});

// listen on port 3000
var server = http.createServer(function(req, res) {
    router(req, res, finalhandler(req, res));
});
server.listen(3000);