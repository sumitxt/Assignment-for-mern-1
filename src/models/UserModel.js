const mongoose = require('mongoose');
const UserSchema = mongoose.Schema({
        email: {type: String, unique: true},
        firstName: {type: String},
        lastName: {type: String},
        mobile: {type: Number},
        password: {type: String},
        photo: {type: String},
        createdDate: {type: Date, default: Date.now()}
}, {versionKey: false});
const Users = mongoose.model('users', UserSchema);
module.exports = Users