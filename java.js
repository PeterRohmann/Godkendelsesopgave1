class User {constructor(name, age, email, gender, interest, match, image){

    this.name = name;
    this.age = age;
    this.email = email;
    this.gender = gender;
    this.interest = interest;
    this.match = match;
    this.image = image;


    }}

    class paymentUser extends User {constructor(name, age, email, gender, interest, match, image, creditcardInfo){
        super(name, age, email, gender, interest, match, image)
        this.creditcardInfo = creditcardInfo;
    }}
    class freeUser extends User {constructor(name, age, email, gender, interest, match, image,){
        super(name, age, email, gender, interest, match, image)
        
    }}

var user1 = new paymentUser("Flemming Flemmingsen", 60, "flemming@gmail.com", "Male", "Females", false, "Upload image", "Visa 1111 2222 3333 4444")

console.log(user1);

const express = require('express')
const app = express()
const port = 5504
var i = 0; //vi laver en variabel så vi kan tælle med 1 hver gang vi åbner serveren (i++)
app.get('/', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    console.log("hej")
  res.send(user1)
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)})