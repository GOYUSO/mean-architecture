// CONFIG

var CFG = require('./config');

// APP 

var app = require('express')();

// DATABASE
// TODO: connection of mongoDB 

var mongo = {};

// SERVICES

require(CFG.PATH.SERVICES + '/Users')(app, mongo);

// BOOTING SERVER UP

app.listen(CFG.APP.PORT || 3000, 
    () => console.log('Listening on port %s', CFG.APP.PORT));