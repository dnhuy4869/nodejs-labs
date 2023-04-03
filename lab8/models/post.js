const mongodb = require("mongodb");
const getDb = require("../util/database").getDb;

module.exports = class Post {
    constructor(title, content, create_date) {
        this.title = title;
        this.content = content;
        this.create_date = create_date;
    }

    save() {
        const db = getDb();

        return db.collection("posts")
            .insertOne(this)
            .then(result => {
                console.log(result);
            })
            .catch(err => {
                console.log(err);
            })
    }

    findById(id) {
        const db = getDb();

        return db.collection("posts")
            .findOne({
                _id: new mongodb.ObjectId(id)
            })
            .then(res => res)
    }

    editOne(id, post) {
        const db = getDb();

        return db.collection("posts")
            .updateOne(
                { _id: new mongodb.ObjectId(id) }, 
                { $set: post}
            )
            .then(res => res)
    }

    deleteOne(id) {
        const db = getDb();

        return db.collection("posts")
            .deleteOne(
                { _id: new mongodb.ObjectId(id) }, 
            )
            .then(res => res)
    }
}