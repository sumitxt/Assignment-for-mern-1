const BlogModel = require("../models/BlogModel");
const { ObjectId } = require('mongodb');

exports.createBlog = (req, res) => {
    let reqBody = req.body
    reqBody.author = req.headers['fullName'];
    BlogModel.create(reqBody, (err, data) => {
        if (err) {
            res.status(200).json({status: "fail", data: err})
        } else {
            res.status(200).json({status: "success", data: data})
        }
    })
}

exports.deleteBlog = (req, res) => {
    let id = req.params.id;
    let Query = {_id: id};
    BlogModel.deleteOne(Query, (err, data) => {
        if (err) {
            res.status(400).json({status: "fail", data: err})
        } else {
            res.status(200).json({status: "success", data: data})
        }
    })
}

exports.updateBlog = (req, res) => {
    let reqBody = req.body;
    let id = req.params.id;
    BlogModel.updateOne({_id: id}, reqBody, (err, data) => {
        if (err) {
            res.status(400).json({status: "fail", data: err})
        } else {
            res.status(200).json({status: "success", data: data})
        }
    })

}

exports.blogDetails = (req, res) => {
    let id = req.params.id;
    console.log(id)
    BlogModel.aggregate([
        {$match: {_id: ObjectId(id)}},
        {$project: {_id: 1, title: 1, author: 1, content: 1, createdDate: 1}}
    ], (err, data) => {
        if (err) {
            res.status(400).json({status: "fail", data: err})
        } else {
            res.status(200).json({status: "success", data: data})
        }
    })
}