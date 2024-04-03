const express=require("express");
const app=express();
const path=require("path");
const methodOverride = require("method-override");
const ejsMate=require("ejs-mate");

const listingRouter=require("./routes/listing.js");
const userRouter=require("./routes/user.js");

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({express:true}));
app.use(methodOverride("_method"));
app.engine("ejs",ejsMate);
app.use(express.static(path.join(__dirname,"/public")));

app.use("/listing",listingRouter);
app.use("/",userRouter);


app.listen(8000,()=>{
    console.log("Port is listening 8000..");
});
