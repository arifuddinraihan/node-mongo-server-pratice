const express = require(`express`);
const cors = require(`cors`);
const { MongoClient, ServerApiVersion } = require('mongodb');

const app = express();
app.use(cors())
const port = process.env.PORT || 5000;

const data = require(`./data.json`)

// user : user0
// pass : o1UAjs37Jiuz5VZG

// mongoDB Links
const uri = "mongodb+srv://user0:o1UAjs37Jiuz5VZG@cluster0.tsvgbta.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
});


app.get( '/' , (req , res) => {
        res.send( "Hello World")
});

app.get('/users', (req, res) => {
    res.send(data)
});

app.post('/users', (req, res) => {
    
});

app.listen( port, () =>{
    console.log(`Example app listen on port ${port}`)
});