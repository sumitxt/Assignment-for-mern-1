const express = require('express');
const router = express.Router();
const {requireSignIn,isAdmin} = require("../middleware/AuthVerifyMiddleware");

const {registration,login,profileUpdate,profileDetails} = require("../controllers/UserController");
const {createBlog,deleteBlog,updateBlog,blogDetails, blogByAuthor, blogSearch} = require("../controllers/BlogController");



//users related routes
router.post("/registration", registration);
router.post("/login", login);
router.post("/profile/Update", requireSignIn, profileUpdate);
router.get("/profile/Details", requireSignIn, profileDetails);

//blog related routes
router.post("/blog/create", requireSignIn, isAdmin, createBlog );
router.get("/blog/delete/:id", requireSignIn,isAdmin, deleteBlog );
router.post("/blog/update/:id", requireSignIn,isAdmin, updateBlog);

//single blog posts
router.get("/blog/details/:id", blogDetails);
//filter by author
router.get("/blog/details", blogByAuthor);
//keyword searching. Multiple keyword allowed
router.get("/blog/search", blogSearch);

module.exports = router;