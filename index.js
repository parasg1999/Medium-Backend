const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const userRoute = require('./routes/user');
const blogRoute = require('./routes/blog');

const app = express();

app.use(express.static('static'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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