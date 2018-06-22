const client = require('mongodb').MongoClient
const db_url = "mongodb://localhost:27017/conFusionServer"
const assert = require('assert')
const dboper = require('./operation');

client.connect(db_url,(error,database) => {
    assert.equal(error,null)
    console.log("The Server and database is established successfully")
 

    const DB = database.db("conFusionServer")
    dboper.insertDocument(DB, { name: "Biscut", description: "master"},
        "dishes", (result) => {
            console.log("Insert Document:\n", result.ops);

            dboper.findDocuments(DB, "dishes", (docs) => {
                console.log("Found Documents:\n", docs);

                dboper.updateDocument(DB, { name: "Biscut" },
                    { description: "Updated Test" }, "dishes",
                    (result) => {
                        console.log("Updated Document:\n", result.result);

                        dboper.findDocuments(DB, "dishes", (docs) => {
                            console.log("Found Updated Documents:\n", docs);
                            
                            DB.dropCollection("dishes", (result) => {
                                console.log("Dropped Collection: ", result);

                                database.close();
                            });
                        });
                    });
            });
    });
    
})