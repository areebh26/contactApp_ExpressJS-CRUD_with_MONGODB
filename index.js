let express = require("express");
let app = express();
app.listen(3000,()=>{
    console.log("Server has started");
});
app.use(express.static("public"));
app.use(express.urlencoded({extended:false}));
app.set("view engine","ejs");
app.get("/",(req,res)=>{
    res.render("home.ejs");
});
app.get("/addContact",(req,res)=>{
    res.render("addContact.ejs");
});
app.get("/viewContact",(req,res)=>{
    res.render("viewContact.ejs");
});