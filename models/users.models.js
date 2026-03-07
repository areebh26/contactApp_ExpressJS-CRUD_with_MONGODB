import mongoose from "mongoose";
let users = mongoose.model("User", mongoose.Schema({
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
    },
    address:{
        type:String
    }

}));
export {users};