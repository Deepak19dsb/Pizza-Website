const express = require('express');
const mongoose = require('mongoose');
const Ingredient = require('./models/Ingredient')
const Pizza = require('./models/Pizza')
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/pizzeria').then(
    () => {
        console.log("Mongodb Connected");
    }
).catch(
    (error) => {
        console.log(error);
    }
)

app.get('/ingredients', async (req, res) => {
    try {
        const data = await Ingredient.find();
        res.json(data);
    }
    catch (err) {
        console.log(err);
    }
})

app.get('/pizza', async (req, res) => {
    try {
        const data = await Pizza.find();
        res.json(data);
    }
    catch (err) {
        console.log(err);
    }
})





app.listen(8000, (req, res) => {
    console.log("Server working");
})
