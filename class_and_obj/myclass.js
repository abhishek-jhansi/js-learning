/*
class User {
    constructor(username, email, password){
             this.username = username;
             this.email = email;
             this.password = password;
    }

    encryptPassword(){
        return `${this.password}abc`
    }

    changeUserName(){
        return `${this.username.toUpperCase()}`
    }
}

const chai = new User("chai", "chai@gmail.com", "1234");
console.log(chai);
console.log("ur encrypted password is =>> " + chai.encryptPassword());
console.log(chai.changeUserName());
 */
// Behind the scene

function User (username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUserName = function(){
    return `${this.username.toUpperCase()}`
}
const coffee = new User ("coffee", "coffee@google.com", "123456");
console.log(coffee.encryptPassword());
console.log(coffee.changeUserName());




















