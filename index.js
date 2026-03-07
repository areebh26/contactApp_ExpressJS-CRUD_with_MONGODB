import express from "express";
import dotenv from "dotenv";
import {users} from "./models/users.models.js";
import {connectDB} from "./config/contacts.database.js";
import contactRouter from "./routers/contacts.routes.js";
let app = express();
dotenv.config();
connectDB();
app.listen(process.env.PORT,()=>{
    console.log("Server has started");
});
app.use(express.static("public"));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.set("view engine","ejs");
app.use(contactRouter);
