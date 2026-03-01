let express = require("express");
let app = express();
let mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/contactsApp");
let users=require("./models/users.models");
app.listen(3000,()=>{
    console.log("Server has started");
});
app.use(express.static("public"));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.set("view engine","ejs");
app.get("/",async(req,res)=>{
    let user =  await users.find(); 
    res.render("home.ejs",{user});
});
app.get("/addContact",(req,res)=>{
    res.render("addContact.ejs");
});
app.get("/viewContact/:id",async(req,res)=>{
    let myUser = await users.find({_id : req.params.id});
    res.render("viewContact.ejs",{myUser});
});
app.get("/updateContact/:id",async(req,res)=>{
    let myUser = await users.find({_id : req.params.id});
    res.render("updateContact.ejs",{myUser});
});
app.post("/addContacts",async(req,res)=>{
    await users.insertOne({
        firstName:req.body.first_name,
        lastName:req.body.last_name,
        email:req.body.email,
        phone:req.body.phone,
        address:req.body.address
    });
    res.redirect("/");

});
