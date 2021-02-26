const mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        unique: true,
    },
    password: String,
    authToken: String,
    followers: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        }
    ],
    following: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        }
    ],
    profileImage: String,
})

// userSchema.methods.follow = (userID) => {
//     if (this.following.indexOf(userID) === -1) {
//         this.following.push(userID);
//     }
// }

// userSchema.methods.unfollow = (userID) => {
//     if (this.following.indexOf(userID) === -1) {
//         this.following.push(userID);
//     }
// }

userSchema.methods.addFollower = (userID) => {
    if (this.followers.indexOf(userID) === -1) {
        this.following.push(userID);
    }

    // return this.save
}

userSchema.methods.addFollower = (userID) => {
    if (this.followers.indexOf(userID) === -1) {
        this.following.push(userID);
    }

    // return this.save
}

module.exports = mongoose.model('User', userSchema)
