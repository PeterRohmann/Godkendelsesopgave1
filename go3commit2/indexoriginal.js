/*class User {constructor(name, age, gender, interest, location){

    this.name = name;
    this.age = age;
    this.location = location;
    this.gender = gender;
    this.interest = interest;
    


    }}

    class PaymentUser extends User {constructor(name, age, gender, interest, location, creditcard){
        super(name, age, gender, interest, location)
        this.creditcard = creditcard;
    }}
    class FreeUser extends User {constructor(name, age, gender, interest, location){
        super(name, age, gender, interest, location)
        
        
    }}

    function calculate_age(dob) { 
        var diff_ms = Date.now() - dob.getTime();
        var age_dt = new Date(diff_ms); 
        return Math.abs(age_dt.getUTCFullYear() - 1970);
    }
/*
var user1 = new PaymentUser("Flemming Flemmingsen", 60, "flemming@gmail.com", "Male", "Forhold", false, "Upload image", "Visa")
var user2 = new FreeUser("Ursula Jensen", 20, "ursula@gmail.com", "Female", "Forhold", false, "Upload image")

var array = [user1.interest, user2.interest];
console.log(user1);

const express = require('express')
const app = express()
const port = 5507

app.get('/', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    console.log("hej")
  res.send(array)
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)})
  */
/*
var User1 = new PaymentUser("Anders", calculate_age(new Date(1990, 10, 01)), "Male", "Søger et fast forhold", "Copenhagen", true);
var User2 = new FreeUser("Sofie", calculate_age(new Date(1990, 06, 04)), "Female", "Søger et fast forhold", "Copenhagen", true); 
var arrayUser1 = [User1.name, User1.age, User1.gender, User1.interest, User1.location, User1.creditcard]; 
var arrayUser2 = [User2.name, User2.age, User2.gender, User2.interest, User2.location]; 

function forhold(){if (arrayUser1[3] && arrayUser2[3] != "Søger et fast forhold" ){
    return("Du har endnu ikke et match");}
    else{
        return("");
    }}

    
    function match(){if (arrayUser1[3] && arrayUser2[3] == "Søger et fast forhold" ){
    const newItem1 = "Du har et nyt match" 
    arrayUser1.push(newItem1)
    const newItem2 = "Du har et nyt match" 
    arrayUser2.push(newItem2)
    return(User1.name + " og " + User2.name + " er et match! ");
}};

var array1 = [forhold(arrayUser1, arrayUser2), match(arrayUser1, arrayUser2)];
var array = [arrayUser1, arrayUser2];
var interest = [User1.interest, User2.interest];
// if-statement - hvis person 1 og 2 begge søger forhold bliver de et match. 

// I ovenstående bliver der tilføjet en plads i array'et, der fortæller at de har et nyt match. 

// if-statement - hvis ikke begge personer søger forhold bliver de ikke et match. 


/*
Nedenstående: Her bliver der refereret til den nye plads i arrayet, og hvis der står at personen har match, så bliver 
 interesse ændret til "On standby". 
 
if (arrayUser1[6] && arrayUser2[6] == "Du har et nyt match" ) {
    //Jeg sætter itemindex til 3, da det er den 4. plads i array'et. 
    const itemIndex = 3
    const newItem3 = "On Standby"
    arrayUser1[itemIndex] = newItem3
    arrayUser2[itemIndex] = newItem3
}
console.log(arrayUser1);
console.log(arrayUser2);



const express = require('express')
const app = express()
const jwt = require('jsonwebtoken');
const fs = require('fs')
const port = 5500



app.get('/', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
  res.send("Welcome to this server")
})

app.get('/interest', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
  res.send(interest)
})

app.get('/user', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
  res.send(array)
})

app.get('/match', isAuthorized, (req, res) => {
    res.send(array1)
})

app.get('/jwt', (req, res) => {
    let privateKey = fs.readFileSync('./private.pem', 'utf8');
    let token = jwt.sign({ "body": "stuff" }, privateKey, { algorithm: 'HS256'});
    res.send(token);
})

//jwt function:
function isAuthorized(req, res, next) {
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
    }
}

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)})
  //skriv i terminal:curl.exe -H "Authorization: jwt INDSÆT JWT FRA LOCALHOST:5500/JWT"
  //Token er dermed blevet authorized, og vi kan komme ind på siden localhost:5500/match

  */