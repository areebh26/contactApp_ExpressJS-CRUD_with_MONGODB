let mongoose = require("mongoose");
let user = mongoose.model("User", mongoose.Schema({
    firstName:{
        type:String
    },
    lastName:{
        type:String
    },
    email:{
        type:String
    },
    phone:{
        type:String
    }

}));
module.exports = user;