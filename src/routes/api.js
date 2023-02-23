const express = require('express');
const router = express.Router();
const {requireSignin,isAdmin} = require("../middleware/AuthVerifyMiddleware");

const {registration,login,profileUpdate,profileDetails} = require("../controllers/UserController");
const {createBlog,deleteBlog,updateBlog,blogDetails} = require("../controllers/BlogController");



//users related routes
router.post("/registration", registration);
router.post("/login", login);
router.post("/profile/Update", requireSignin, profileUpdate);
router.get("/profile/Details", requireSignin, profileDetails);

//blog related routes
router.post("/blog/create", requireSignin, isAdmin, createBlog );
router.get("/blog/delete/:id", requireSignin, deleteBlog );
router.post("/blog/update/:id", requireSignin, updateBlog);
router.get("/blog/details/:id", blogDetails);

module.exports = router;