var db = require('./db.js');

module.exports.handleSignup = (email , password) =>{
    // Check email exists
    db.saveUser({
        email: email,
        password: password
    })
    // send welcome email
      
    
};


// In etwas version 6 - when the value are same ass what comes inside , I can create the object as- 
//     {
//     email,
//     password
//     }