import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";
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

}).plugin(mongoosePaginate));
export {users};