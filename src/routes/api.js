const express = require('express');
const router = express.Router();
const AuthVerifyMiddleware = require("../middleware/AuthVerifyMiddleware");

const UserController = require("../controllers/UserController");


//users related routes
router.post("/registration", UserController.registration);
router.post("/login", UserController.login);
router.post("/profile/Update", AuthVerifyMiddleware, UserController.profileUpdate);
router.get("/profile/Details", AuthVerifyMiddleware, UserController.profileDetails);

module.exports = router;