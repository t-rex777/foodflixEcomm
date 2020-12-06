const mongoose = require("mongoose");
const uuidv1 = require("uuidv1");
const crypto = require("crypto");

var userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
      maxlength: 32,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
      maxlength: 32,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      maxlength: 32,
      unique: true,
    },
    userinfo: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
    },
    encry_password: {
      type: String,
      required: true,
    },
    salt: String,
    role: {
      type: Number,
      default: 0,
    },
    purchases: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

userSchema
  .virtual("password")
  .set(function (password) {
    this._password = password;
    this.salt = uuidv1();
    this.encry_password = this.securePassword(password);
  })
  .get(function () {
    return _password;
  });

userSchema.methods = {
  authenticate: function (plainPassword) {
    return this.encry_password === this.securePassword(plainPassword);
  },
  securePassword: function (plainPassword) {
    if (!plainPassword) return "";
    try {
      return crypto
        .createHmac("sha256", this.salt)
        .update(plainPassword)
        .digest("hex");
    } catch {
      return "";
    }
  },
 
};

module.exports = mongoose.model("User", userSchema);
