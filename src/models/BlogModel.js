const mongoose = require('mongoose');
const BlogSchema = mongoose.Schema({
    title: {type: String},
    author: {type: String},
    content: {type: String},
    createdDate: {type: Date, default: Date.now()}
}, {versionKey: false});
const Blogs = mongoose.model('tasks', BlogSchema);
module.exports = Blogs