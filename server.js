'use strict';

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var routes = require('./app/routes/index.js');
    
var port = process.env.PORT || 8080;        // set our port
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
    
routes(app);

app.listen(port, function() {
    console.log('Node.js listening on port ' + port);
});
