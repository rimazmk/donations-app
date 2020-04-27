const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

const mongoose = require('mongoose');
const Donee = require('./models/donee.model');
// require('dotenv').config();

//connect to MongoDB
mongoose.connect("mongodb+srv://rimazk:Gacbad786!@cluster0-gavmd.mongodb.net/test?retryWrites=true&w=majority", { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});


const path = require('path')
// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, 'client/build')))
// Anything that doesn't match the above, send back index.html
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname + '/client/build/index.html'))
// })

// Endpoint to fetch Donees
app.get('/api/donees', (req, res) => {
    Donee.find({}, (err, donees) => {
        res.send(donees);
    })
})

// Insert new Donee into DB
app.post('/api/insert', (req, res) => {
    let name = req.body.name;
    let donations = 0;
    let needed = req.body.needed;
    let img_url = req.body.img_url;
    let description = req.body.description;

    // console.log(desc)

    const newUser = new Donee({
        name,
        donations,
        needed,
        img_url,
        description
    });
    console.log(newUser);
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
