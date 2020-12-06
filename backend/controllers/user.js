const User = require("../models/user");

//getuserId
exports.getUserById = (req, res, next, id) => {
  User.findById(id).exec((err, user) => {
    if (err) {
      return res.status(400).json({
        error: "Unable to find User",
      });
    }
    //console.log(req.user)
    req.user = user;
    next();
  });
  
};

//read
exports.getAllUsers = (req, res) => {
  User.find({})
  .exec((err, users) => {
    if (err) {
      return res.status(400).json({
        error: "Unable to find Users",
      });
    }
    res.json(users)
  });
};

//getsingleuser
exports.getUser = (req,res) => {
     return res.send(req.user);
    
}