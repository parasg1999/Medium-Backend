const mongoose = require('mongoose');

let blogSchema = new mongoose.Schema({
    title: String,
    description: String,
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    content: String,
    image: String,
    claps: Number,
    comments: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User',
            },
            content: String,
        }
    ],
    clappers: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        }
    ],
});

// blogSchema.methods.

module.exports = mongoose.model('Blog', blogSchema)