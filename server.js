const express = require('express');
const app = express();
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/subscribers', { useNewUrlParser: true, useUnifiedTopology: true }).catch(function (reason) {
    console.log('Unable to connect to the mongodb instance. Error: ', reason);
});
const db = mongoose.connection;
db.on('error', (error) => console.error('error'));
db.once('open', () => console.log('Connected to Database'));

app.listen(3000, () => {
    console.log('Server Started')
})

