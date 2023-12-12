// let myName = "abhishek     "
// let mychannel = "abhitoday     "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.abhishek = function(){
    console.log(`abhishek is present in all objects`);
}

Array.prototype.heyabhishek = function(){
    console.log(`abhishek says hello`);
}

// heroPower.abhishek()
// myHeros.abhishek()
// myHeros.heyabhishek()
// heroPower.heyabhishek()

// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"abhishek".trueLength()
"iceTea".trueLength()