import express from "express";
import dotenv from "dotenv";
dotenv.config();
import {users} from "./models/users.models.js";
import {connectDB} from "./config/contacts.database.js";
import contactRouter from "./routers/contacts.routes.js";
let app = express();

connectDB();
app.listen(process.env.PORT,()=>{
    console.log("Server has started");
});
app.use(express.static("public"));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.set("view engine","ejs");
app.use("/" , contactRouter);
