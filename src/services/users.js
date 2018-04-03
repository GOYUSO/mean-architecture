module.exports = function (app, mongo) {
    app.all('/users/', users);
    app.all('/users/:id', userID);
}


function users(req, res) {
    console.log('Make a %s Request', req.method);
}

function userID(req, res) {
    console.log('Make a %s Request managing the parameter %s', req.method, req.params['id']);
}

