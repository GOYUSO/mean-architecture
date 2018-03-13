function getUsers(app){
    app.get('/', function(req, res){
        res.send('The users are...');
    });
}


module.exports = getUsers;