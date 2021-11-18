// noinspection JSUnresolvedFunction

const express = require('express');
const app = express();
const router = express.Router();

const mongoose = require('mongoose');
mongoose.connect('mongodb://db:27017/users')
const db = mongoose.connection;

const AuthController = require('./app/controllers/auth');

db.on('error', console.error.bind(console, 'Database connection error:'));

db.once('open', function() {
    console.log('Connected to the database!');
});

app.use(AuthController(router));
app.listen(3000, () => console.log('Users service listening on port 3000...'))
