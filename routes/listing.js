const express=require("express");
const router=express.Router();
const wrapAsync=require("../utils/wrapAsync.js");
const listingController=require("../controllers/listing.js");

router.route("/")
.get(wrapAsync(listingController.index));

module.exports=router;