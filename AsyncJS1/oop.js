//JAVASCRIPT AND CLASSES.

//OOPS : DEFINES STRUCTURE.
//Inheritance, Polymorphism, Abstraction, Encapsulation.

// OBJECTS: COLLECTION OF PROPERTIES AND METHODS.

//Object literal
const user ={
    name: "shivv",
    cnt: 15,
    details: function(){
        //console.log(`Username : ${this.name}`)
        console.log(this)
    }
}
console.log(user.name)
console.log(user.details())
console.log(this)

// ** Constructor function , Prototypes , Classes , Instances(new,this)

//general function
function func1(username, rollno){
    this.username= username
    this.rollno= rollno 
    //The values are added to the global "this" of node env. {}

    return this
}
const stu1= func1('shivani',12)
console.log(stu1) 
const stu2= func1('mini',36)
console.log(stu1) //we observe that stu2 values are override the previous stu1 values. Hence the output is changed.


//Constructor function : "new" keyword
function func2(name,id, roll){
    this.id= id         //Property
    this.roll= roll 
    this.name= name

    this.greeting= function(){    //Method
        console.log(`Welcome! ${this.name}`)
    }
    return this // Even if we do not return, the output will be same.
}
const var1=  new func2('shibu',36,55)
console.log(var1) 
const var2=  new func2('hibu',101,102)
console.log(var1) // Hence, var2 values do not override the var1 values. Instead a new instance created.

console.log(var2.greeting())
console.log(var2.constructor) //returns the function name.
console.log(var2 instanceof func1) //returns boolean value.


// Steps:-
// 1. When a "new" keyword is used, an empty object is created. 
// 2. A constructor Function is called and it packs/wraps all the arguments that has to be returned. 
// 3. The content is injected into the "this" context of node env 
// 4. When the function is called, The output is shown.






