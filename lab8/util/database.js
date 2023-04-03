const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;

let _db;
MongoClient.connect("mongodb://127.0.0.1:27017/blogDb")
    .then(client => {
        console.log("Connected to database");
        _db = client.db();
    })
    .catch(err => {
        console.log(err);
        throw err;
    });

const getDb = () => {
    if (_db) {
        return _db;
    }

    throw "No database found";
}

module.exports = {
    getDb,
}
