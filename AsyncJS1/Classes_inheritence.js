class User{
    constructor(username,mail,pwd){
        this.username= username
        this.mail= mail
        this.pwd= pwd
    }
    display(){
        console.log(`The Mail id is: ${this.mail}`)
    }
}

const user1 =  new User("Shibu","abc@g.com",124)
//const user1 =  User("Shibu","abc@g.com",124)
user1.display()

//behind the scene 
function User2(username,mail,pwd){
        this.username= username
        this.mail= mail
        this.pwd= pwd
}

User2.prototype.display= function(){
    console.log(`The Mail id is: ${this.mail}`)
}

const user2 =  new User2("Shibu","abc@g.com",124)
//const user2 =   User2("Shibu","abc@g.com",124)
user2.display()


//Inheritence in Classes 
class User3{
    constructor(username){
        this.username= username
    }
    logMe(){
        console.log(`The username is ${this.username.toUpperCase()}`)
    }
}
class Teacher extends User3{
    constructor(username,mail,pwd){
        super(username)
        this.mail= mail
        this.pwd= pwd
    }
    MyView(){
        console.log(`New course added by ${this.username}`)
    }
}

const u3= new User3("Shibu")
u3.logMe()
//u3.MyView()

const u4= new Teacher("Hibu","g@mail.com", 576)
u4.logMe()
u4.MyView() 

console.log(Teacher instanceof User3)
console.log(u4 instanceof User3)
console.log(u3 instanceof User3)


//Static Properties of Classes 

class User4{
    constructor(username){
        this.username= username
    }
    logMe(){
        console.log(`The username is ${this.username.toLowerCase()}`)
    }
    static createId(){
        return `1001`
    }
}

const u5= new User4("Mikey")
u5.logMe()
//console.log(u5.createId()) 
//Error, Since the static method cannot be accessed by the Object and as well as Child classes also.


//Object related question 

console.log(Math.PI)
Math.PI=5 
console.log(Math.PI)

const descriptor= Object.getOwnPropertyDescriptor(Math,"PI")
console.log(descriptor)

//********* 

const person={
    name : "Sandy",
    Age: 35,
    Nature: "kind",
    behaviour: function(){
        console.log("Good Behaviour")
    }
}


//Object cannot be iterable this way. 

// for (let [key,value] of person){
//     console.log(`${key} : ${value}`)
// } 

for (let [key,value] of Object.entries(person)){
    // console.log(`${key} : ${value}`)

    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`)
    }
}

//getPropertyOwnDescriptor, defineProperty
console.log(Object.getOwnPropertyDescriptor(person,"name"))

Object.defineProperty(person,'name',{
    enumerable:false
})

console.log(Object.getOwnPropertyDescriptor(person,"name"))

//Now, name is not displayed because enumerable is false.
for (let [key,value] of Object.entries(person)){
    // console.log(`${key} : ${value}`)

    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`)
    }
}
