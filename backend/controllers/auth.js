const User = require("../models/user");
const { validationResult } = require("express-validator");
var jwt = require("jsonwebtoken");
var expressJwt = require("express-jwt");
const SECRET = "Shhhhhared"

//signUp
exports.signUp = (req, res) => {
  let errors = validationResult(req);
  if (!errors.isEmpty()) {
    
    return res.status(422).json({
      error: errors.array()[0].msg,
      
    });
    
  }

  const user = new User(req.body);
  user.save((err, user) => {
    if (err) {
      return res.status(400).json({
        error : "Fill all the fields"
      });
    }
    res.send({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      userinfo : user.userinfo,
      _id: user._id,
    });
  });
};

//signIn
exports.signin = (req, res) => {
  let errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({
      error: errors.array()[0].msg,
    });
  }

  const { email, password } = req.body;
  User.findOne({ email }, (err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: "User does not exists!",
      });
    }

    if (!user.authenticate(password)) {
    return res.status(400).json({
        error: "wrong password!",
      });
    }

    //set a token
    const token = jwt.sign({ _id: user._id }, SECRET);
    //putting token into a cookie
    res.cookie("token", token, { expire: new Date() + 9999 });

    //send cookie to front end
    const { _id, firstName, lastName, email, role ,userinfo } = user;
    return res.json({ token, user: { _id, firstName, lastName, email, role ,userinfo} });
  });
};

//signout
exports.signout = (req, res) => {
  res.clearCookie("token");
  res.json({
    message: "sign out successfully",
  });
};

// protected routes
// exports.isSignin = expressJwt({
//     secret : SECRET,
//     userProperty : "auth"
// });

//custom middleware
exports.isAuthenticated = (req,res,next) => {
    let checker = req.profile && req.auth && req.profile._id == req.auth._id;
    if (!checker) {
      return res.status(403).json({
        error: "ACCESS DENIED"
      });
    }
    next();
  };
  
  exports.isAdmin = (req, res, next) => {
    if (req.profile.role === 0) {
      return res.status(403).json({
        error: "You are not ADMIN, Access denied"
      });
    }
    next();
  };