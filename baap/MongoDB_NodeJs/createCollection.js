const client = require('mongodb').MongoClient
const db_url = "mongodb://localhost:27017/"
const assert = require('assert')

client.connect(db_url,(error,database) =>{
    assert.equal(error,null);
    console.log("The server is connected successfully")

    const DB = database.db("conFusionServer")
    DB.createCollection('dishes',(error,response) =>{
        assert.equal(error,null);
        console.log("The collection is created successfully" + response)
        DB.collection('dishes').insertOne({"name":"Balavignesh","description":"description"},(error,result) =>{
            assert.equal(error,null);
            console.log("It successfully inserted")
            DB.collection('dishes').find({}).toArray((error,result) =>{
                assert.equal(error,null)
                console.log(result)
            })
        })
        database.close()
})

})