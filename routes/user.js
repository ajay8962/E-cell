const express=require("express");
const router=express.Router();
const userController=require("../controllers/user.js");

router.route("/signup").get(userController.renderSignupForm)

router.route("/login").get(userController.renderLoginForm)

module.exports=router;