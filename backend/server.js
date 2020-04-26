const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 4000;

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

const mongoose = require('mongoose');
const Donee = require('./models/donee.model');
require('dotenv').config();

//connect to MongoDB
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});


app.get('/', (req, res) => {
    res.send('heyo');
})

app.get('/donees', (req, res) => {

})

// Insert new Donee into DB
app.post('/insert', (req, res) => {
    let name = req.body.name;
    let donations = 0;
    let needed = req.body.needed;
    let img_url = req.body.img_url;
    let desc = req.body.description;

    const newUser = new Donee({
        name,
        donations,
        needed,
        img_url,
        desc
    });

    newUser.save()
        .then(() => res.send("New user saved!"))
        .catch((err) => res.send(err))
})

// Handle Payments
app.post('/payments/:id', (req, res) => {
    // TODO: payments
})

app.listen(PORT, () => {
    console.log("Server is running on Port: " + PORT);
});
