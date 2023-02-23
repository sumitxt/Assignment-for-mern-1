const express = require('express');
const router = express.Router();
const AuthVerifyMiddleware = require("../middleware/AuthVerifyMiddleware");

const UserController = require("../controllers/UserController");
const BlogController = require("../controllers/BlogController");



//users related routes
router.post("/registration", UserController.registration);
router.post("/login", UserController.login);
router.post("/profile/Update", AuthVerifyMiddleware, UserController.profileUpdate);
router.get("/profile/Details", AuthVerifyMiddleware, UserController.profileDetails);

//blog related routes
router.post("/blog/create", AuthVerifyMiddleware, BlogController.createBlog );
router.get("/blog/delete/:id", AuthVerifyMiddleware, BlogController.deleteBlog );
router.post("/blog/update/:id", AuthVerifyMiddleware, BlogController.updateBlog);
router.get("/blog/details/:id", BlogController.blogDetails);

module.exports = router;