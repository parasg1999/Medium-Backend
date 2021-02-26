const mongoose = require('mongoose');

let blogSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: [true, 'Title is required'],
    },
    description: {
        type: String,
        trim: true,
        required: [true, 'Small description is needed'],
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    tags: [{ type: String }],
    content: {
        type: String,
        required: [true, 'The content can\'t be empty'],
    },
    bannerImage: String,
    claps: {
        type: Number,
        default: 0,
    },
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

module.exports = mongoose.model('Blog', blogSchema)