// MongoDB settings

var mongo = require('mongodb');
var MongoClient = require('mongodb').MongoClient;

// mongod --dbpath <path to data directory>
// TODO - Pending to config url variable
var url = "mongodb://localhost:27017/";

function connect(f) {
    MongoClient.connect(url, f);
}

module.exports = {
    connect
}