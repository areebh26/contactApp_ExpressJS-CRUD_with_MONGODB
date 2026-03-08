import {body} from "express-validator";
let validations = [
    body("first_name").notEmpty().withMessage(" name field cannot be empty").isLength({max:50}).withMessage("first name cannot excreed 50 characters").isAlpha().withMessage("first name cannot contain digits"),
    body("last_name").notEmpty().withMessage(" name field cannot be empty").isLength({max:50}).withMessage("last name cannot excreed 50 characters").isAlpha().withMessage("last name cannot contain digits"),
    body("email").notEmpty().withMessage(" email field cannot be empty").isEmail().withMessage("email is not valid"),
    body("phone").notEmpty().withMessage(" phone field cannot be empty").isLength({max:11,min:11}).withMessage("number must be of 11 characters").isNumeric().withMessage("only digits are allowed in number field"),
    body("address").notEmpty().withMessage(" address field cannot be empty").isLength({max:150}).withMessage(" address cannot excreed 150 characters"),
];
export {validations};