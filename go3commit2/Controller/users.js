
import { v4 as uuidv4 } from "uuid"; 
import {User1, User2} from "../Model/model.js"
import jwt from "jsonwebtoken";
import fs from "fs";
   
        
export let users = [
    {
        User1,
        User2 
    }
    
]; 
//add user
export const createUser = (req, res) => {
    const user = req.body;  
    users.push({ ... user, id: uuidv4() }); 
    res.send(`User with the name ${user.firstName} added to the database!`); 
};
//get users
export const getUsers = (req,res) => {
    res.send(users); 
};
//get user
export const getUser = (req,res) => {
    const {id} = req.params; 
    const foundUser = users.find((user) => user.id == id);
    res.send(foundUser);
};
//delete User
export const deleteUser = (req,res) => {
    const {id} = req.params; 
    users = users.filter((user) => user.id !== id);
    res.send(`User with the id ${id} deleted from the database.`);
};
//Update User 
export const updateUser = (req,res) => {
    const {id} = req.params;
    const {firstName, lastName, age} = req.body;
    const user = users.find((user) => user.id == id); 
    if(firstName) user.firstName = firstName; 
    if(lastName)  user.lastName = lastName; 
    if(age) user.age = age; 
    res.send(`User with the id ${id} has been updated`);
};

//jwt function:
export function isAuthorized(req, res, next) {
    if (typeof req.headers.authorization !== "undefined") {
        // retrieve the authorization header and parse out the
        // JWT using the split function
        let token = req.headers.authorization.split(" ")[1];
        let privateKey = fs.readFileSync('./private.pem', 'utf8');
        // Here we validate that the JSON Web Token is valid and has been 
        // created using the same private pass phrase
        jwt.verify(token, privateKey, { algorithm: "HS256" }, (err, decoded) => {
            
            // if there has been an error...
            if (err) {  
                // shut them out!
                res.status(500).json({ error: "Not Authorized" });
                throw new Error("Not Authorized");
            }
            console.log(decoded);
            // if the JWT is valid, allow them to hit
            // the intended endpoint
            return next();
        });
    } else {
        // No authorization header exists on the incoming
        // request, return not authorized and throw a new error 
        res.status(500).json({ error: "Not Authorized" });
        throw new Error("Not Authorized");
}}