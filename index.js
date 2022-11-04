const express = require('express');
const cors = require('cors');
const app = express();
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config()
const port = process.env.PORT || 5000;

// middleware
app.use(cors())
app.use(express.json())
app.listen()



const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.arzsqj4.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
   const collection = client.db("test").collection("devices");
   // perform actions on the collection object
   client.close();
});





app.get('/', (req, res) => {
   res.send('Genius car server is running')
})

app.listen(port, () => {
   console.log(`genius car server is running on ${port}`);
})