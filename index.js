const express = require(`express`);
const cors = require(`cors`);
const { MongoClient, ServerApiVersion } = require('mongodb');

const app = express();
const port = process.env.PORT || 5000;

// middle Ware
app.use(cors());
app.use(express.json());

const data = require(`./data.json`)

// user : user0
// pass : o1UAjs37Jiuz5VZG

// mongoDB Links
const uri = "mongodb+srv://user0:o1UAjs37Jiuz5VZG@cluster0.tsvgbta.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
    const collection = client.db("NodePractice").collection("users");
    // perform actions on the collection object
    console.log('database connected')
    client.close();
});

const users = [
    {
        id: 1,
        name: "arif",
        email: "arif@khan.com"
    },
    {
        id: 2,
        name: "modhu",
        email: "modhu@khan.com"
    },
    {
        id: 3,
        name: "sultan",
        email: "sultan@khan.com"
    }
]


app.get('/', (req, res) => {
    res.send("Hello World")
});

app.get('/users', (req, res) => {
    if (req.query.name) {
        const search = req.query.name; 
        const filtered = users.filter(usr => usr.name.toLowerCase().indexOf(search) >= 0)
        res.send(filtered)
    }
    else {
        res.send(users)
    }
});

app.post('/users', (req, res) => {
    console.log("Post API called")
    const user = req.body;
    user.id = users.length + 1;
    users.push(user)
    console.log(req.body)
    res.send(user)
});


app.listen(port, () => {
    console.log(`Example app listen on port ${port}`)
});