module.exports.renderSignupForm=(req,res)=>{
    res.render("users/signup.ejs");
};

module.exports.renderLoginForm=(req,res)=>{
    res.render("users/login.ejs");
};