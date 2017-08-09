var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userSchema = new Schema({
    idFb: Number,
    avaFb: String,
    nameFb: String,
    emailFb: String,
    ratePoint: Number,
    rateNum: Number
  }
);
var userModel = mongoose.model("User", userSchema);

module.exports = userModel;
