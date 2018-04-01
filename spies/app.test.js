const expect = require("expect");
const rewire = require("rewire");

var app = rewire('./app'); // Inorder to test in gives us a copy of the file
// gets two funcitons with it -
// app.__get__
// app.__set__
// It's to make a simulation of the db object

describe("App", ()=>{

    
    it('Should call the spy correctly', ()=>{
        var spy = expect.createSpy(); // return a function that we wil swap with
        spy();
        expect(spy).toHaveBeenCalled(); // Can check for more functions in the expect web page
        spy('Niz', 20);
        expect(spy).toHaveBeenCalledWith('Niz', 20); // Checks that it was called with the right variables.
    })
    
     var db ={
        saveUser: expect.createSpy()
    };
    app.__set__('db', db);
    // It acually test a function that call another function!
    it('should call saveUser with user object' , ()=>{
      var email = 'niz@gmail.com';
      var password = '123a';
      app.handleSignup(email, password); // Uses a spy , and not the original funciton it self, so we can test it
      expect(db.saveUser).toHaveBeenCalledWith({
          email,
          password
      })
      
    })
        
})

