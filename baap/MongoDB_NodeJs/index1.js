const client = require('mongodb').MongoClient
const db_url = "mongodb://localhost:27017/conFusionServer"
const assert = require('assert')
const dboper = require('./operation1');

client.connect(db_url).then((database) => {

    console.log('Connected correctly to server');
    const DB = database.db("conFusionServer")
    dboper.insertDocument(DB, { name: "Vadonut", description: "Test"},
        "dishes")
        .then((result) => {
            console.log("Insert Document:\n", result.ops);

            return dboper.findDocuments(DB, "dishes");
        })
        .then((docs) => {
            console.log("Found Documents:\n", docs);

            return dboper.updateDocument(DB, { name: "Vadonut" },
                    { description: "Updated Test" }, "dishes");

        })
        .then((result) => {
            console.log("Updated Document:\n", result.result);

            return dboper.findDocuments(DB, "dishes");
        })
        .then((docs) => {
            console.log("Found Updated Documents:\n", docs);
                            
            return DB.dropCollection("dishes");
        })
        .then((result) => {
            console.log("Dropped Collection: ", result);

            return database.close();
        })
        .catch((err) => console.log(err));

})
.catch((err) => console.log(err));