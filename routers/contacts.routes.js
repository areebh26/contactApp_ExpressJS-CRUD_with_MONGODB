import express from "express";
import {getContacts,deleteContacts,updateContactPage,updateContacts,addContacts,addContactPage,viewContactPage} from "../controllers/contacts.controller.js";



let router = express.Router();



router.get("/",getContacts);
router.get("/addContact",addContactPage);
router.get("/viewContact/:id",viewContactPage);
router.get("/updateContact/:id",updateContactPage);
router.post("/addContacts",addContacts);
router.post("/updateContact/:id",updateContacts);
router.get("/deleteContact/:id" , deleteContacts);

export default router;
