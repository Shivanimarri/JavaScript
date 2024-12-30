//Class Based (Most Used)
class User{
    constructor(username,mail,pwd){
        this.username= username
        this.mail= mail
        this.pwd= pwd
    }
    display(){
        console.log(`The Mail id is: ${this.mail}`)
    }
    get mail(){
        return this._mail.toUpperCase()
    }
    set mail(value){
        this._mail= value
    }
    get pwd(){
        return `${this._pwd}abc`
    }
    set pwd(value){
        this._pwd= value
    }
}
const user1 =  new User("Shibu","abc@g.com",124)
console.log(user1.mail)
console.log(user1.pwd)


//function based (Modern Syntax)
function User2(username, mail, pwd) {
    this.username = username;
    this._mail = mail; // Initialize _mail
    this._pwd = pwd;   // Initialize _pwd

    Object.defineProperty(this, "mail", {
        get: function () {
            return this._mail.toUpperCase();
        },
        set: function (value) {
            this._mail = value;
        }
    });

    Object.defineProperty(this, "pwd", {
        get: function () {
            return this._pwd.toUpperCase();
        },
        set: function (value) {
            this._pwd = value;
        }
    });
}

const user2 = new User2("Malibu", "ghijk@g.com", "987");
console.log(user2.mail); // Outputs: GHIJK@G.COM
console.log(user2.pwd);  // Outputs: 987


//Object based 
const User3={
    _mail: "ghijk@g.com",
    _password: "qwerty",  // '_' defines that it is a private property

    get email(){
        return this._mail.toUpperCase()
    },
    set email(value){
        this._mail= value
    }

}

const user3= Object.create(User3)
console.log(user3.email)

