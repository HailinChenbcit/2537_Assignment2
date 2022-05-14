const express = require('express')
const app = express()
app.set('view engine', 'ejs')
// const mongoose = require('mongoose');
var cors = require('cors')
app.use(cors())

app.listen(process.env.PORT || 8000, function (err) {
    if (err) console.log(err);
})

// mongoose.connect("mongodb+srv://hchen256:comp1537@cluster0.74n5t.mongodb.net/PokeAPI?retryWrites=true&w=majority",
//     { useNewUrlParser: true, useUnifiedTopology: true });

const jsondata = require('./data.json')
const jsontype = require('./type.json')

app.get('/:id', function (req, res) {
    res.json(jsondata[req.params.id])
})

app.get('/profile/:id', function (req, res) {
    res.json(jsondata[req.params.id])
})

app.get('/type/:name', function (req, res) {
    res.json(jsontype[req.params.name])
})