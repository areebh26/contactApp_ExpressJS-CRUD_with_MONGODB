import {users} from "../models/users.models.js";
import { validationResult } from "express-validator";


let getContacts =  async(req,res)=>{
    let user =  await users.paginate({},{
        page: parseInt(req.query.page) || 1,
        limit : 3
    }); 
    
    
    
    
    
    res.render("home.ejs",{user});
};

let addContactPage = (req,res)=>{
    res.render("addContact.ejs",{error : []});
};

let viewContactPage = async(req,res)=>{
    let myUser = await users.find({_id : req.params.id});
    res.render("viewContact.ejs",{myUser});
};

let updateContactPage = async(req,res)=>{
    let myUser = await users.find({_id : req.params.id});
    res.render("updateContact.ejs",{myUser,error:[]});
};

let addContacts = async(req,res)=>{
    let errors = validationResult(req);
    if(errors.isEmpty()){
        await users.insertOne({
        firstName:req.body.first_name,
        lastName:req.body.last_name,
        email:req.body.email,
        phone:req.body.phone,
        address:req.body.address
    });
    res.redirect("/");
    }else{
        res.render("addContact.ejs",{error:errors.array()});
    }
   

};

let updateContacts = async(req,res)=>{
    let errors = validationResult(req);
    if(errors.isEmpty()){
             await users.updateOne(
                {_id : req.params.id},
                {$set : {
            firstName:req.body.first_name,
            lastName:req.body.last_name,
            email:req.body.email,
            phone:req.body.phone,
            address:req.body.address
        }}
    );
    res.redirect("/");
    }else{
         let myUser = await users.find({_id : req.params.id});
         res.render("updateContact.ejs",{error:errors.array(),myUser});
    }
   
};

let deleteContacts = async (req,res)=>{
    await users.deleteOne({_id : req.params.id});
    res.redirect("/");
};

export {getContacts,deleteContacts,updateContactPage,updateContacts,addContacts,addContactPage,viewContactPage} ; 

