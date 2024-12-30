let arr1=['go','so','bo']

let obj1={
    real:"true",
    fake : "false"
}

Object.prototype.func1 = function(){
    console.log(`Added to Object Prototype, Hierarchial Surface`)
}

Array.prototype.func2= function(){
    console.log(`Added to Array Prototype`)
}

arr1.func1()
obj1.func1() 

arr1.func2()
//obj1.func2()  //Error, Since Object cannot access the prototypes from Array Prototypes.


//Prototype Inheritence: __proto__

let myname="Marri Shivani     "

String.prototype.truelength= function(){
    console.log(this)
    console.log(`True length is: ${this.trim().length}`)
}

myname.truelength()
"Skibidi".truelength()