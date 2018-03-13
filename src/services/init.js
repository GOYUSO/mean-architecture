// App 

var app = require('express')();

// DATABASE



// Services

require('./get-users')(app, mongo);

// Export

module.exports = {
    listen: function (port = 3000) {
        app.listen(port, function () {
            console.log('Server already listening on port %s', port);
        });
    }
}