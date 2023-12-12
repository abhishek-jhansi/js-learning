
class User {
constructor(username){
    this.username = username;
}
logMe(){
    console.log(`USername is ${this.username}`);
}

}

class Teacher extends User{
    constructor(username, email, password){
         super(username) 
        this.email = email;
        this.password = password;
    }

    addCourse (){
        console.log(`A new course was added by ${this.username}`);
    }
}

const wangdu = new Teacher("wangdu", "wangdu@google.com", "123")
wangdu.addCourse();
wangdu.logMe()
const mashala = new User("mashala");
//mashala.addCourse() // here mashala have not access of addCourse so this will give error
// here we create mashala object from User class we can use only User class functionality

mashala.logMe()

console.log(wangdu === mashala);
console.log(wangdu instanceof User);
console.log(wangdu instanceof Teacher);

