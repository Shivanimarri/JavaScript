function setUsername(username){
    this.username= username
    console.log('Called , But did the reference got added?')
}

function createUser(username, mail,pwd){
    //setUsername(username)
    //setUsername.call(username)
    setUsername.call(this,username)
    this.mail= mail
    this.pwd=pwd
}

const u1= new createUser("marri","shivani@gmail.com","1234")
console.log(u1)
