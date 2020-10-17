//vi kan starte serveren på denne måde ved at tilføje   "type": "module", i min package-json. 
import express from "express"; 
import bodyParser from "body-parser"; 
import usersRoutes from "./Routes/routes.js"; 
import jwt from "jsonwebtoken";
import fs from "fs";
import { isAuthorized, users } from "../Godkendelsesopgave 3/Controller/users.js";
import {User1, User2, arrayUser1, arrayUser2, array} from "../Godkendelsesopgave 3/Model/model.js"
import {createUser, getUsers, getUser, deleteUser, updateUser} from "../Godkendelsesopgave 3/Controller/users.js";


const app = express(); 
const PORT = 5500; 
app.use(bodyParser.json()); 
app.use(express.json())


const router = express.Router(); 


//get information on all users. 
// all routes in here are starting with /users
router.get("/", getUsers); 
//create/add user
//vi skal nu også bruge en software = postman, fordi browseren kun kan lave get requests.. 
router.post("/", createUser, isAuthorized);
// Body - Raw - JSON
// dette er /users/ ...
//find details on specific id. 
router.get("/:id", getUser);
 
router.delete("/:id", deleteUser);
 
router.patch("/:id", updateUser);

export default router;

app.use("/users", isAuthorized, usersRoutes); 

const loginarray = []

app.get("/", (req,res) => res.send("Homepage"));
app.get("/interest", isAuthorized, (req,res) => res.send(User1.interest, User2.interest, arrayUser1, arrayUser2));
app.get("/match", isAuthorized, (req,res) => res.send(array));
app.get('/jwt', (req, res) => {
    let privateKey = fs.readFileSync('./private.pem', 'utf8');
    let token = jwt.sign({ "body": "stuff" }, privateKey, { algorithm: 'HS256'});
    res.send(token);
})

app.post("/login", (req,res) => {
    const login = { name: req.body.name, password: req.body.password }
    
    loginarray.push(login)
    res.status(201).send()
})
app.get("/login", (req,res) => res.send(loginarray));
//gå til jwt (i postman) for at få token
//kopier token i authorization bearer token
// tryk send på get request - nu har vi adgang til /users


app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));


