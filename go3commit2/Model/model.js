
import { v4 as uuidv4 } from "uuid"; 
export class User {constructor(name, age, gender, interest, location, id){
    this.name = name;
    this.age = age;
    this.location = location;
    this.gender = gender;
    this.interest = interest;
    this.id =id;
    }}
    export class PaymentUser extends User {constructor(name, age, gender, interest, location, id, creditcard){
        super(name, age, gender, interest, location, id)
        this.creditcard = creditcard;
    }}
    export class FreeUser extends User {constructor(name, age, gender, interest, location, id){
        super(name, age, gender, interest, location, id)

    

    }}
    export function calculate_age(dob) { 
        var diff_ms = Date.now() - dob.getTime();
        var age_dt = new Date(diff_ms); 
        return Math.abs(age_dt.getUTCFullYear() - 1970);
    }
    export var User1 = new PaymentUser("Jens", calculate_age(new Date(1990, 10, 1)), "Male", "Søger et fast forhold", "Copenhagen", uuidv4(), true);
    export var User2 = new FreeUser("Julie", calculate_age(new Date(1990, 6, 4)), "Female", "Søger et fast forhold", "Copenhagen", uuidv4()); 
    export var arrayUser1 = [User1.name, User1.age, User1.gender, User1.interest, User1.location, User1.creditcard]; 
    export var arrayUser2 = [User2.name, User2.age, User2.gender, User2.interest, User2.location]; 

    export function forhold(){if (arrayUser1[3] && arrayUser2[3] != "Søger et fast forhold" ){
        return("Du har endnu ikke et match");}
        else{
            return("");
        }}
    
        
        export function match(){if (arrayUser1[3] && arrayUser2[3] == "Søger et fast forhold" ){
        
        return(User1.name + " og " + User2.name + " er et match! ");
    }};
    
   export var array = [forhold(arrayUser1, arrayUser2), match(arrayUser1, arrayUser2)];