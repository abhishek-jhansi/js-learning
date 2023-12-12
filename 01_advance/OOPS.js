        // object literal    
        const user = {
            username: "abhishek",
            logInCount: 8,
            signedIn: true,
            getUserDetails: function(){
                console.log("got user details from DB");
                console.log(`username: ${this.username}`);
               // console.log(this); //give whole object which we declare
            }
        }
      //  console.log(user.username);
      //  console.log(user.getUserDetails());
      ///  console.log(this); // here this give all browser window property


//===============Constructor Function====================
//const promiseOne = new Promise;
//const Date = new Date;
// here new keyword is a consturctor function allow us to create multiple instance of a object
function User (username, logInCount, isLoggedIn){
    this.username = username;  // left username is variable and right side username is function parameter
    this.logInCount  = logInCount;
    this.isLoggedIn = isLoggedIn;
    this.greetings = function (){
        console.log(`welcome ${this.username}`);
    }
    return this;

}
// const userOne = User("abhishek", 12, true);
// const userTwo = User("abhi", 10, false)  // here override userOne 
// console.log(userOne);
// we got overiding by userTwo
// prevent overiding using new keyword

const userOne = new User("abhishek", 12, true);
const userTwo = new User("abhi", 10, false)  
console.log(userOne);
console.log(userTwo);

// read about instance of method


