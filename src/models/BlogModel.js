const mongoose = require('mongoose');
const BlogSchema = mongoose.Schema({
    title: {type: String},
    description: {type: String},
    status: {type: String},
    email: {type: String},
    createdDate: {type: Date, default: Date.now()}
}, {versionKey: false});
const Blogs = mongoose.model('tasks', BlogSchema);
module.exports = Blogs