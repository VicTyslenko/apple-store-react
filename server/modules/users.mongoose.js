const {Schema, model} = require('mongoose');

const user = new Schema({
    fullName: {
        type: String,
        require: true
    },
    email: {
        type: String,
        unique: true,
        require: true
    },
    username: {
        type: String,
    },
    password: {
        type: String,
        minlength: 6,
        require: true
    },
    tokenUser: {
        type: String,
        require: true
    },

    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user',
    },
})

module.exports = model('User',user)