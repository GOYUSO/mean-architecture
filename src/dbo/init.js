var data = require('./mdbs');

function process(err, cb) {
    if (err) throw err;
    var dbo = db.db("mean-example");
    var users = [{
            name: 'Antonio',
            surname: 'Segura',
            age: 26,
            skills: ['html5, css3, js']
        },
        {
            name: 'John',
            surname: 'Doe',
            age: 22,
            skills: ['html5, js']

        }
    ];

    dbo.collection('users').insertMany(users, function (err, res) {
        if (err) throw err;
        db.close();
    });
}


data.connect(process);