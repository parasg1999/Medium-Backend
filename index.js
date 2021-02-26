const express = require('express');
const mongoose = require('mongoose');
const fs = require('fs');
require('dotenv').config();

const userRoute = require('./routes/user');
const blogRoute = require('./routes/blog');

const app = express();

let dir = __dirname + '/static';
if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
}

dir = __dirname + '/static/uploads';
if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
}

app.use(express.static('static'));
app.use(express.json());

mongoose
    .connect(
        process.env.MONGO_URI || 'mongodb://localhost:27017/medium',
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        }
    )
    .then(() => console.log("MongoDB successfully connected"))
    .catch(err => console.log(err));

app.use('/user', userRoute);
app.use('/blog', blogRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server started at port: ${PORT}`);
});